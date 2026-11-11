#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';

const root = process.cwd();
const pagesDir = path.join(root, 'src', 'pages');
const outJson = path.join(root, 'scripts', 'page-styles-report.json');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...await walk(full));
    } else if (e.isFile() && full.endsWith('.astro')) files.push(full);
  }
  return files;
}

function hasPageCssImport(text) {
  return /import\s+['"].*page-[a-zA-Z0-9_-]+\.css['"]/m.test(text);
}

function findLayoutImports(text) {
  const re = /import\s+([A-Za-z0-9_,$\s{}]+)\s+from\s+['"](\.\.?\/[^'\"]*layouts\/[\w\-]+\.astro)['"]/gm;
  const out = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    out.push({ specifier: m[1].trim(), path: m[2] });
  }
  return out;
}

function hasLayoutClass(text) {
  return /<body[^>]*class=["'][^"']*\b(layout-(prose|wide|full))\b[^"']*["']/m.test(text);
}

async function analyze() {
  const files = await walk(pagesDir);
  const report = [];
  for (const f of files) {
    const rel = path.relative(root, f).replace(/\\/g, '/');
    let text = '';
    try { text = await fs.readFile(f, 'utf8'); } catch (e) { continue; }
    const direct = hasPageCssImport(text);
    const layoutImports = findLayoutImports(text);
    const layoutResults = [];
    let layoutProvides = false;
    for (const li of layoutImports) {
      const layoutPath = path.resolve(path.dirname(f), li.path);
      let layoutText = '';
      try { layoutText = await fs.readFile(layoutPath, 'utf8'); } catch (e) { layoutText = ''; }
      const layoutHas = hasPageCssImport(layoutText);
      if (layoutHas) layoutProvides = true;
      layoutResults.push({ importPath: li.path, resolved: path.relative(root, layoutPath).replace(/\\/g,'/'), layoutHas });
    }
    const bodyHas = hasLayoutClass(text);
    report.push({ file: rel, hasPageImport: direct, viaLayout: layoutProvides, layoutImports: layoutResults, hasLayoutClass: bodyHas });
  }
  await fs.writeFile(outJson, JSON.stringify({ generatedAt: new Date().toISOString(), summary: report }, null, 2), 'utf8');
  // Print summary
  const missing = report.filter(r => !(r.hasPageImport || r.viaLayout));
  const noLayoutClass = report.filter(r => !r.hasLayoutClass);
  console.log('Scanned pages:', report.length);
  console.log('Pages without page-*.css (direct or via layout):', missing.length);
  missing.forEach(m => console.log(' -', m.file));
  console.log('\nPages missing explicit layout class (layout-prose/layout-wide/layout-full):', noLayoutClass.length);
  noLayoutClass.forEach(m => console.log(' -', m.file));
  console.log('\nFull JSON report written to', outJson);
}

analyze().catch(err => { console.error(err); process.exit(2); });
