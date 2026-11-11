import fs from 'fs/promises';
import path from 'path';

/*
  文件说明（中文）
  作用：生成站点的静态搜索索引（例如 public/search-index.json 与 wiki-hydrate-index.json），
       在构建/预处理阶段运行以便生成供前端使用的索引数据。
  备注：实现中会解析 frontmatter 并清理文本，注释不包含运行命令或敏感信息。
*/

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src', 'content');
const OUT = path.join(ROOT, 'public', 'search-index.json');
const OUT_HYDRATE = path.join(ROOT, 'public', 'wiki-hydrate-index.json');
// base 固定为 '/'，本地与线上行为一致（站点已迁移至用户主页仓库）
const BASE = '/';

function walk(dir) {
  return fs.readdir(dir, { withFileTypes: true }).then(async (entries) => {
    const results = [];
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        results.push(...await walk(p));
      } else if (e.isFile() && /\.mdx?$/.test(p)) {
        results.push(p);
      }
    }
    return results;
  });
}

function parseFrontmatter(text) {
  const m = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!m) return { attrs: {}, body: text };
  const raw = m[1];
  const lines = raw.split(/\r?\n/);
  const attrs = {};
  for (const line of lines) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val === '') val = true;
    // remove surrounding quotes if present (only when string)
    if (typeof val === 'string') {
      // normalize smart/curly quotes to straight quotes before trimming
      val = val.replace(/[\u2018\u2019\u201A\u201B\uFF07]/g, "'").replace(/[\u201C\u201D\u201E\u201F]/g, '"');
      if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
        val = val.slice(1, -1);
      }
      // try to coerce booleans
      if (val === 'true') val = true;
      if (val === 'false') val = false;
    }
    attrs[key] = val;
  }
  // 确保所有字符串属性使用直引号 ASCII（以防有些 frontmatter 使用了智能引号）
  for (const k of Object.keys(attrs)) {
    if (typeof attrs[k] === 'string') {
      attrs[k] = attrs[k].replace(/[\u2018\u2019\u201A\u201B\uFF07]/g, "'").replace(/[\u201C\u201D\u201E\u201F]/g, '"');
    }
  }
  // 尝试提取 tags（支持行内数组、逗号分隔、YAML 列表或单值）
  const tags = [];
  // 将 frontmatter 原文按行分割并定位 tags 行
  const rawLines = raw.split(/\r?\n/);
  let tagsLineIndex = -1;
  for (let i = 0; i < rawLines.length; i++) {
    if (/^\s*tags\s*:\s*(.*)$/i.test(rawLines[i])) {
      tagsLineIndex = i;
      break;
    }
  }
  if (tagsLineIndex !== -1) {
    const match = rawLines[tagsLineIndex].match(/^\s*tags\s*:\s*(.*)$/i);
    const inline = (match && match[1] !== undefined) ? match[1].trim() : '';
    if (inline.startsWith('[') && inline.endsWith(']')) {
  // 行内数组形式 [a, b]
      const inside = inline.slice(1, -1);
      inside.split(',').forEach(s => {
        const t = s.trim().replace(/^['\"]|['\"]$/g, '').trim();
        if (t) tags.push(t);
      });
    } else if (inline) {
  // 逗号分隔的单行或单值形式
      if (inline.includes(',')) {
        inline.split(',').forEach(s => {
          const t = s.trim().replace(/^['\"]|['\"]$/g, '');
          if (t) tags.push(t);
        });
      } else {
        const t = inline.replace(/^['\"]|['\"]$/g, '').trim();
        if (t) tags.push(t);
      }
    } else {
  // YAML 列表样式：收集后续以 '-' 开头的行，直到遇到非列表行
      for (let j = tagsLineIndex + 1; j < rawLines.length; j++) {
        const line = rawLines[j];
        const m = line.match(/^\s*-\s*(.+)$/);
        if (m) {
          const t = m[1].trim().replace(/^['\"]|['\"]$/g, '');
          if (t) tags.push(t);
        } else {
          // 在第一个非列表行停止
          break;
        }
      }
    }
  }
  if (tags.length) attrs.tags = tags;
  const body = text.slice(m[0].length);
  return { attrs, body };
}

function excerptFromMarkdown(md, max = 240) {
  let s = md.replace(/```[\s\S]*?```/g, ''); // remove code fences
  s = s.replace(/!\[[^\]]*\]\([^\)]+\)/g, ''); // remove images
  s = s.replace(/\[[^\]]+\]\([^\)]+\)/g, ''); // remove links
  s = s.replace(/^[ \t]*:{2,}[^\n]*/gm, ''); // remove :::directive{...} lines (remark-directive / custom shortcodes)
  s = s.replace(/:{2,}[a-zA-Z]*(?:\{[^}]*\})?/g, ''); // remove any remaining inline ::: fragments
  s = s.replace(/[#>*`~\-]{1,}/g, '');
  s = s.replace(/<[^>]+>/g, '');
  s = s.replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  return s.slice(0, max).trim() + '…';
}

(async function main() {
  console.log('Scanning content:', CONTENT_DIR);
  const files = await walk(CONTENT_DIR);
  const items = [];
  // 运行时用于 hydration 的最小化索引（用于 wiki/obsidian 占位符的运行时替换）。
  // 这里特意包含了带有 'system' 标签的页面，以便运行时能为那些你故意从公共搜索索引中隐藏的页面渲染卡片。
  const hydrateItems = [];
  for (const f of files) {
    try {
    const rel = path.relative(CONTENT_DIR, f).replace(/\\/g, '/');
  // 把带有 zh 风格的文件夹和文件名归一化为标准的 "zh/..." 源路径，
  // 这样搜索索引会暴露形如 /zh/portfolio/slug/ 的 URL，而不是 /portfolio_zh/slug/，
  // 保持运行时查找与站点路由一致。
    let relNormalized = rel;
    // folder style: portfolio_zh/slug.md -> zh/portfolio/slug.md
    relNormalized = relNormalized.replace(/^([a-zA-Z0-9_-]+)_zh\//, (m, p1) => `zh/${p1}/`);
    // filename style: about_zh.md -> zh/about.md
    relNormalized = relNormalized.replace(/^([a-zA-Z0-9_-]+)_zh\.md$/, (m, p1) => `zh/${p1}.md`);
  // 之前这里跳过了中文（_zh / /zh/）文件，导致 public 的 `search-index.json` 缺少中文条目，
  // 运行时 wiki-link 的 hydration 会回退到具有相同 slug 的英文帖子。
  // 现改为包含所有文件（en 与 zh），以便 hydration 能正确解析本地化目标。
  // 如果需要过滤请在 frontmatter 加上 system 标签或在此处添加明确过滤规则。
      const txt = await fs.readFile(f, 'utf8');
      const { attrs, body } = parseFrontmatter(txt);
  const title = attrs.title || path.basename(f).replace(/\.mdx?$/, '');
      const description = attrs.description || '';
  // 语言判定：优先使用 frontmatter 的 lang；其次根据归一化后的路径判断（处理 folder_style 和 filename_style 两种 _zh 写法）
  const lang = attrs.lang || ((relNormalized && relNormalized.startsWith('zh/')) || rel.includes('/zh/') || rel.endsWith('_zh.md') ? 'zh' : 'en');
      // Normalize pubDate: prefer attrs.pubDate or attrs.date, and try to coerce to an ISO timestamp
      const _rawPub = attrs.pubDate || attrs.date || null;
      let pubDate = null;
      if (_rawPub) {
        try {
          const d = new Date(_rawPub);
          if (!isNaN(d.valueOf())) {
            // store ISO string so consumers can reliably sort/parse
            pubDate = d.toISOString();
          } else {
            // keep the raw string as a last resort
            pubDate = String(_rawPub);
          }
        } catch (e) {
          pubDate = String(_rawPub);
        }
      }
      const pinned = attrs.pinned || false;
  // 规范化 heroImage 路径，避免索引中出现像 '../../assets/...' 的文件系统相对前缀。
  // 客户端代码会根据运行时的 base/origin 去解析这里清理后的路径。
  // 支持 heroImage 和 image 两个字段（image 用于 portfolio 页面）
  let heroImage = attrs.heroImage || attrs.image || null;
      if (typeof heroImage === 'string') {
    try {
      let h = heroImage.trim();
      // preserve absolute URLs
      if (!/^https?:\/\//i.test(h)) {
        // remove leading ./ segments
        h = h.replace(/^\.\//, '');
        // remove leading ../ segments (common when frontmatter references ../.. to reach public assets)
        h = h.replace(/^(?:\.\.\/)+/, '');
            // 注意：保留前导 '/'，以便索引中保留 /assets/... 的绝对站点路径
      }
      heroImage = h || null;
    } catch (e) {
      // fallback to original value on error
      heroImage = attrs.heroImage || null;
    }
  }
  const heroImagePosition = attrs.heroImagePosition || attrs.heroPosition || null;
  const heroImageWidth = attrs.heroImageWidth || attrs.heroWidth || null;
      // build url from relative path: blog/welcome.md -> /blog/welcome/
      // 特殊处理：portfolio/collections/slug.md -> /portfolio/slug/
      // （Astro 动态路由 [slug].astro 不包含 collections 目录层级）
      const urlPath = '/' + relNormalized
        .replace(/\.mdx?$/, '/')
        .replace(/^((?:zh\/)?portfolio\/)(?:collections|individual)\//, '$1');
      // prepend base so that indexes produced for production include the repository subpath
      // e.g. '/' + '/blog/welcome/' -> '/blog/welcome/'
      const normalizeJoin = (base, p) => {
        // ensure single leading slash
        const b = String(base || '/') || '/';
        const bb = b.endsWith('/') ? b.slice(0, -1) : b;
        const pp = p.startsWith('/') ? p : '/' + p;
        return (bb + pp).replace(/\/+/g, '/');
      };
      const fullUrl = normalizeJoin(BASE, urlPath);
  // MDX 的组件导入不是正文，不能出现在搜索摘要中。
  const indexBody = f.endsWith('.mdx') ? body.replace(/^import\s+[^\n]+\n?/gm, '') : body;
  const excerpt = excerptFromMarkdown(indexBody, 240) || description;
  // 提取正文段落：先移除代码块、图片、链接与简单的 markdown 标记，然后按空行分段
  function paragraphsFromMarkdown(md, maxPara = 10, maxLen = 600) {
    if (!md) return [];
    let s = md.replace(/```[\s\S]*?```/g, ''); // remove code fences
    s = s.replace(/!\[[^\]]*\]\([^\)]+\)/g, ''); // remove images
    s = s.replace(/\[[^\]]+\]\([^\)]+\)/g, ''); // remove links
    s = s.replace(/^[ \t]*:{2,}[^\n]*/gm, ''); // remove :::directive{...} lines (remark-directive / custom shortcodes)
    s = s.replace(/:{2,}[a-zA-Z]*(?:\{[^}]*\})?/g, ''); // remove any remaining inline ::: fragments
    s = s.replace(/<[^>]+>/g, '');
    // remove heading markers and markdown decorations
    s = s.replace(/^[ \t]*#+\s*/gm, '');
    s = s.replace(/[*_]{1,3}/g, '');
    // split by blank lines into paragraphs
    const parts = s.split(/\n\s*\n/).map(p => p.replace(/\s+/g, ' ').trim()).filter(p => p && p.length > 20);
    const out = parts.slice(0, maxPara).map(p => p.length > maxLen ? p.slice(0, maxLen).trim() + '…' : p);
    return out;
  }
  const paragraphs = paragraphsFromMarkdown(indexBody, 12, 800);
  // 规范化 tags：去掉前导标点（如 '-'）、trim 并移除空字符串
  const rawTags = (attrs.tags && Array.isArray(attrs.tags)) ? attrs.tags : [];
  const tags = rawTags.map(t => String(t || '').replace(/^[^\w\p{L}]+/u, '').trim()).filter(t => t);
  // 过滤 'system' 标签：如果文章包含 system 标记，则不会把该文章加入公共搜索索引
  const hasSystemTag = tags.some(t => String(t || '').trim().toLowerCase() === 'system');
  // Build hydrate item for runtime use (include system-tagged pages)
  hydrateItems.push({ title, url: fullUrl, heroImage, heroImagePosition, heroImageWidth, source: relNormalized, lang, pubDate });

  if (hasSystemTag) {
    // skip adding to the public search index but continue to next file
    continue;
  }
  // Use the normalized source path in the index so consumers can resolve
  // zh-prefixed routes (e.g. zh/portfolio/slug) directly.
  items.push({ title, description, pubDate, pinned, heroImage, heroImagePosition, heroImageWidth, url: fullUrl, excerpt, paragraphs, tags, lang, source: relNormalized });
    } catch (e) {
      console.error('Failed to read', f, e);
    }
  }
  // sort by pubDate desc if available
  items.sort((a, b) => {
    if (a.pubDate && b.pubDate) return String(b.pubDate).localeCompare(String(a.pubDate));
    if (a.pubDate) return -1;
    if (b.pubDate) return 1;
    return 0;
  });

  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(OUT, JSON.stringify(items, null, 2), 'utf8');
  // write hydrate index (minimal) as well
  try {
    await fs.writeFile(OUT_HYDRATE, JSON.stringify(hydrateItems, null, 2), 'utf8');
    console.log('Wrote', OUT_HYDRATE, 'with', hydrateItems.length, 'entries');
  } catch (e) {
    console.warn('Failed to write hydrate index', e);
  }
  console.log('Wrote', OUT, 'with', items.length, 'entries');
})();
