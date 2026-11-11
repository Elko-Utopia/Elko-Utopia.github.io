/*
  文件说明（中文）
  作用：从 `src/content/tag-colors.md` 或 `src/data/tag-colors.json` 生成/同步标签颜色数据，
        并写入到 `src/data/tag-colors.json`（可被项目引用）。
  备注：该脚本用于构建前/本地工具链，仅供开发者运行，请勿在此处写入敏感信息。
*/
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
const SRC = join(process.cwd(), 'src', 'content', 'tag-colors.md');
const JSON_SRC = join(process.cwd(), 'src', 'data', 'tag-colors.json');
const OUT_SRC = join(process.cwd(), 'src', 'data');
const OUT_PUBLIC = join(process.cwd(), 'public');

function parseFrontmatter(content) {
  const m = /^---\s*\n([\s\S]*?)\n---/m.exec(content);
  if (!m) return {};
  const fm = m[1];
  const lines = fm.split(/\r?\n/);
  const obj = {};
  // very small YAML-ish parser for 'tags:' mapping
  let currentKey = null;
  for (let line of lines) {
    if (!line.trim()) continue;
    if (/^[^\s].*:$/.test(line)) {
      currentKey = line.replace(/:$/, '').trim();
      obj[currentKey] = {};
      continue;
    }
    const m2 = /^\s+([^:]+):\s*(.+)$/.exec(line);
    if (m2 && currentKey) {
      let k = m2[1].trim();
      let v = m2[2].trim();
      // strip surrounding quotes if present on key or value
      if ((k.startsWith("'") && k.endsWith("'")) || (k.startsWith('"') && k.endsWith('"'))) {
        k = k.slice(1, -1);
      }
      if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) {
        v = v.slice(1, -1);
      }
      obj[currentKey][k] = v;
    }
  }
  return obj;
}

async function main() {
  try {
    // 优先使用 src/data/tag-colors.json（可直接编辑 JSON 管理 tag colors）
    let tags = {};
    try {
      const raw = await readFile(JSON_SRC, 'utf8');
      tags = JSON.parse(raw);
      console.log('Loaded tag colors from', JSON_SRC);
    } catch (e) {
      // JSON 不存在或无法解析时回退到解析 markdown
      try {
        const txt = await readFile(SRC, 'utf8');
        const fm = parseFrontmatter(txt);
        tags = fm.tags || {};
        console.log('Parsed tag colors from', SRC);
      } catch (mdErr) {
        console.warn('No tag colors source found in JSON or MD; writing empty object');
        tags = {};
      }
    }
    // ensure output dirs
    await mkdir(OUT_SRC, { recursive: true });
    // write src/data/tag-colors.json
    const outPathSrc = join(OUT_SRC, 'tag-colors.json');
    await writeFile(outPathSrc, JSON.stringify(tags, null, 2), 'utf8');
    // also write to public for client-side access
    const outPathPub = join(OUT_PUBLIC, 'tag-colors.json');
    await writeFile(outPathPub, JSON.stringify(tags, null, 2), 'utf8');
    console.log('Wrote', outPathSrc, 'and', outPathPub);
  } catch (err) {
    console.error('Error generating tag colors:', err);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1].endsWith('generate-tag-colors.mjs')) {
  main();
}
