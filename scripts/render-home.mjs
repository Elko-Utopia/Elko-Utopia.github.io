import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkBlockHighlight from '../src/utils/remark-block-highlight.mjs';

const src = path.resolve('src/content/home.md');
const md = fs.readFileSync(src, 'utf8');

// Parse to mdast
const parsed = unified().use(remarkParse).parse(md);
console.log('--- BEFORE plugin: top-level children types ---');
for (const c of parsed.children.slice(0, 12)) {
  console.log(c.type, (c.type === 'paragraph' && c.children && c.children[0] ? String(c.children[0].value).slice(0,40) : ''));
}

// run plugin
const plugin = remarkBlockHighlight();
plugin(parsed);

console.log('--- AFTER plugin: top-level children types ---');
for (let idx = 0; idx < parsed.children.length; idx++) {
  const c = parsed.children[idx];
  if (c.type === 'paragraph') {
    const preview = c.children ? c.children.map(ch => ch.type + ':' + (ch.type === 'text' ? (ch.value||'') : (ch.type==='html' ? ch.value.slice(0,40) : ch.type))).join('|') : '';
    console.log(idx, c.type, preview);
  } else if (c.type === 'html') {
    console.log(idx, 'html', String(c.value).slice(0,120));
  } else {
    console.log(idx, c.type);
  }
}

// convert the modified mdast (parsed) to HTML using remarkRehype -> rehypeStringify
const hast = unified().use(remarkRehype).runSync(parsed);
const result = unified().use(rehypeStringify).stringify(hast);

console.log('\n--- RENDERED HTML (excerpt) ---');
console.log(result.slice(0, 4000));
console.log('\nContains .md-center? ', result.indexOf('md-center') !== -1);
const idx = result.indexOf('<div class="md-center"');
if (idx !== -1) console.log('md-center snippet:', result.slice(idx, idx + 400));
