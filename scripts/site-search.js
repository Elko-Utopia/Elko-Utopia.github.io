// 统一双语跨语言站内搜索与可折叠分组标签系统，供 /search 页面使用
// - 默认只展示 1 行高频核心标签 +「全部标签 (N) ▾」折叠抽屉（按 4 维度分组展开）
// - 方案 C：清晰 2px 彩色描边 + 柔光微底（仅展示 颜色 + Tag 名称 + 项目数量）
// - 中英文同源 Tag ID（切语言保留筛选）+ 跨语言关键词搜索

(function () {
  let itemsCache = null;
  let tagRegistry = Object.create(null);
  let aliasToId = Object.create(null);
  let selectedTag = null;
  let drawerOpen = false;

  const TAG_GROUPS = [
    { key: 'series', zh: '系列 / 归属', en: 'Series & Collection' },
    { key: 'discipline', zh: '创作领域', en: 'Disciplines' },
    { key: 'medium', zh: '媒介 / 技法', en: 'Medium & Craft' },
    { key: 'tool', zh: '工具 / 平台', en: 'Tools & Tech' },
  ];

  function getRuntimeBase() {
    const path = window.__ASTRO_BASE_PATH__;
    if (typeof path === 'string' && path) return new URL(path.endsWith('/') ? path : path + '/', location.origin).href;
    if (window.__ASTRO_BASE_URL__) {
      const url = new URL(window.__ASTRO_BASE_URL__, location.origin);
      return new URL(url.pathname.endsWith('/') ? url.pathname : url.pathname + '/', location.origin).href;
    }
    return location.origin + '/';
  }

  function getActiveLang() {
    try {
      if (document.documentElement?.dataset?.lang === 'zh') return 'zh';
      if (document.documentElement?.dataset?.lang === 'en') return 'en';
      if (document.documentElement?.lang?.startsWith('zh')) return 'zh';
    } catch (e) {}
    return 'en';
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
  }

  function normalizeLookup(raw) {
    if (!raw) return '';
    return String(raw).replace(/^[^\w\p{L}]+/u, '').trim().toLowerCase().replace(/\s+/g, ' ');
  }

  function resolveCanonicalTagId(raw) {
    const key = normalizeLookup(raw);
    if (!key || key === 'system') return null;
    if (aliasToId[key]) return aliasToId[key];
    if (tagRegistry[key]) return tagRegistry[key].id;
    return key;
  }

  function getTagMeta(tagId) {
    const id = resolveCanonicalTagId(tagId) || String(tagId || '');
    const meta = tagRegistry[id];
    if (meta) return meta;
    return { id, en: id, zh: id, color: '#555d66', group: 'discipline', aliases: [id] };
  }

  function getTagLabel(tagId, lang) {
    const meta = getTagMeta(tagId);
    return lang === 'zh' ? (meta.zh || meta.en || meta.id) : (meta.en || meta.zh || meta.id);
  }

  function registerTags(rawTagsObj) {
    tagRegistry = Object.create(null);
    aliasToId = Object.create(null);
    if (!rawTagsObj || typeof rawTagsObj !== 'object') return;
    Object.keys(rawTagsObj).forEach(k => {
      const def = rawTagsObj[k];
      if (!def || !def.id) return;
      const id = String(def.id).toLowerCase();
      const rec = {
        id,
        en: String(def.en || def.id),
        zh: String(def.zh || def.en || def.id),
        color: String(def.color || '#555d66'),
        group: String(def.group || 'discipline'),
        aliases: Array.isArray(def.aliases) ? def.aliases.map(normalizeLookup).filter(Boolean) : [],
      };
      tagRegistry[id] = rec;
      aliasToId[id] = id;
      aliasToId[normalizeLookup(rec.en)] = id;
      aliasToId[normalizeLookup(rec.zh)] = id;
      rec.aliases.forEach(a => { aliasToId[a] = id; });
    });
  }

  function normalizeItemUrl(rawUrl, rb) {
    try {
      let bp = '/';
      try { bp = new URL(rb).pathname || '/'; } catch { bp = rb || '/'; }
      if (typeof bp === 'string' && !bp.endsWith('/')) bp += '/';
      if (!rawUrl || typeof rawUrl !== 'string') return '#';
      const u = rawUrl.replace(/^\/zh(?=\/|$)/, '') || '/';
      if (!bp || bp === '/') return u;
      if (u.indexOf(bp) === 0) return u;
      if (u.startsWith('/')) return bp.replace(/\/$/, '') + u;
      return new URL(u, rb).pathname;
    } catch {
      return rawUrl || '#';
    }
  }

  async function loadIndex() {
    if (itemsCache) return itemsCache;
    try {
      const runtimeBase = getRuntimeBase();
      const candidates = [];
      try { candidates.push(new URL('search-index.json', runtimeBase).toString()); } catch {}
      try { candidates.push(new URL('search-index.json', document.baseURI).toString()); } catch {}
      try { candidates.push(new URL('search-index.json', location.origin + '/').toString()); } catch {}
      try { candidates.push(new URL('./search-index.json', location.href).toString()); } catch {}
      const uniq = Array.from(new Set(candidates.filter(Boolean)));

      let data = null;
      for (const url of uniq) {
        try {
          const r = await fetch(url);
          if (r && r.ok) { data = await r.json(); break; }
        } catch {}
      }
      if (!data) throw new Error('all search-index fetch attempts failed');

      if (data && !Array.isArray(data) && Array.isArray(data.items)) {
        registerTags(data.tags);
        itemsCache = data.items
          .filter(it => it && !(Array.isArray(it.tags) && it.tags.some(t => normalizeLookup(t) === 'system')))
          .map(it => ({
            ...it,
            url: normalizeItemUrl(it.url, runtimeBase),
            tags: Array.isArray(it.tags)
              ? Array.from(new Set(it.tags.map(resolveCanonicalTagId).filter(Boolean)))
              : [],
            en: it.en || it.zh || { title: 'Untitled', description: '', excerpt: '', paragraphs: [] },
            zh: it.zh || it.en || { title: '未命名', description: '', excerpt: '', paragraphs: [] },
          }));
      } else {
        itemsCache = [];
      }
      return itemsCache;
    } catch (e) {
      console.error('Failed to load search index', e);
      itemsCache = [];
      return itemsCache;
    }
  }

  function syncSearchUrlParams() {
    try {
      const url = new URL(location.href);
      const input = document.getElementById('site-search-input');
      const q = input ? input.value.trim() : '';
      if (selectedTag) {
        url.searchParams.set('tag', selectedTag);
        url.searchParams.delete('q');
      } else if (q) {
        url.searchParams.set('q', q);
        url.searchParams.delete('tag');
      } else {
        url.searchParams.delete('tag');
        url.searchParams.delete('q');
      }
      const next = url.pathname + url.search + url.hash;
      const cur = location.pathname + location.search + location.hash;
      if (next !== cur) history.replaceState(history.state, '', next);
    } catch {}
  }

  function createTagButton(tid, count, lang) {
    const meta = getTagMeta(tid);
    const label = getTagLabel(tid, lang);
    const isSelected = selectedTag === tid;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'site-search-tag' + (selectedTag && !isSelected ? ' is-dimmed' : '');
    btn.dataset.tag = tid;
    btn.style.setProperty('--tc', meta.color || '#555d66');
    btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    btn.setAttribute('aria-label', `${label} (${count})`);
    btn.innerHTML = `<span class="tag-name">${escapeHtml(label)}</span><span class="tag-count">${count}</span>`;
    btn.addEventListener('click', () => {
      selectedTag = (selectedTag === tid) ? null : tid;
      const inp = document.getElementById('site-search-input');
      if (inp && selectedTag) inp.value = '';
      syncSearchUrlParams();
      doSearch();
    });
    return btn;
  }

  function renderTagCloud(items, container) {
    if (!container) return;
    const lang = getActiveLang();
    const isZh = lang === 'zh';
    const counts = Object.create(null);

    items.forEach(it => {
      (Array.isArray(it.tags) ? it.tags : []).forEach(tid => {
        if (!tid || tid === 'system') return;
        counts[tid] = (counts[tid] || 0) + 1;
      });
    });

    const allIds = Object.keys(counts).sort((a, b) => {
      const diff = counts[b] - counts[a];
      if (diff !== 0) return diff;
      return getTagLabel(a, lang).localeCompare(getTagLabel(b, lang), isZh ? 'zh-CN' : 'en');
    });

    // 默认首行只展示高频核心标签（count >= 2，最多 6 个），若当前选中项不在首行则自动置顶到首行首位
    let topIds = allIds.filter(id => counts[id] >= 2).slice(0, 6);
    if (!topIds.length) topIds = allIds.slice(0, 6);
    if (selectedTag && counts[selectedTag] && !topIds.includes(selectedTag)) {
      topIds = [selectedTag, ...topIds.slice(0, 5)];
    }

    container.innerHTML = '';

    // 顶部控制栏：左侧为高频标签，右侧独立下拉按钮（明确区分于标签胶囊，不被裁切）
    const topBar = document.createElement('div');
    topBar.className = 'site-search-tagbar';

    const quickTags = document.createElement('div');
    quickTags.className = 'site-search-tagbar-quick';
    topIds.forEach(tid => {
      quickTags.appendChild(createTagButton(tid, counts[tid], lang));
    });
    topBar.appendChild(quickTags);

    if (allIds.length > topIds.length) {
      const toggleBtn = document.createElement('button');
      toggleBtn.type = 'button';
      toggleBtn.className = 'site-search-tagdrawer-toggle';
      toggleBtn.setAttribute('aria-expanded', String(drawerOpen));
      const label = isZh
        ? (drawerOpen ? '收起全部标签' : `展开全部标签 (${allIds.length})`)
        : (drawerOpen ? 'Hide all tags' : `All tags (${allIds.length})`);
      toggleBtn.innerHTML = `<span class="tag-drawer-label">${escapeHtml(label)}</span><span class="tag-drawer-chev" aria-hidden="true">▾</span>`;
      toggleBtn.addEventListener('click', () => {
        drawerOpen = !drawerOpen;
        toggleBtn.setAttribute('aria-expanded', String(drawerOpen));
        const nextLabel = isZh
          ? (drawerOpen ? '收起全部标签' : `展开全部标签 (${allIds.length})`)
          : (drawerOpen ? 'Hide all tags' : `All tags (${allIds.length})`);
        const span = toggleBtn.querySelector('.tag-drawer-label');
        if (span) span.textContent = nextLabel;
        drawer.classList.toggle('is-open', drawerOpen);
      });
      topBar.appendChild(toggleBtn);
    }
    container.appendChild(topBar);

    // 可折叠 4 维度分组抽屉
    const drawer = document.createElement('div');
    drawer.className = 'site-search-tagdrawer' + (drawerOpen ? ' is-open' : '');
    const inner = document.createElement('div');
    inner.className = 'site-search-tagdrawer-inner';
    const groupsGrid = document.createElement('div');
    groupsGrid.className = 'site-search-taggroups';

    TAG_GROUPS.forEach(g => {
      const groupIds = allIds.filter(id => getTagMeta(id).group === g.key);
      if (!groupIds.length) return;
      const box = document.createElement('div');
      const heading = document.createElement('div');
      heading.className = 'site-search-taggroup-title';
      heading.textContent = isZh ? g.zh : g.en;
      box.appendChild(heading);

      const list = document.createElement('div');
      list.className = 'site-search-taggroup-list';
      groupIds.forEach(tid => {
        list.appendChild(createTagButton(tid, counts[tid], lang));
      });
      box.appendChild(list);
      groupsGrid.appendChild(box);
    });

    inner.appendChild(groupsGrid);
    drawer.appendChild(inner);
    container.appendChild(drawer);
  }

  function highlightText(text, q) {
    const escaped = escapeHtml(text || '');
    if (!q) return escaped;
    try {
      const safeQ = String(q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`(${safeQ})`, 'ig');
      return escaped.replace(re, '<mark class="search-hit">$1</mark>');
    } catch {
      return escaped;
    }
  }

  function matchesQuery(item, q) {
    if (!q) return true;
    const fields = [item.en, item.zh];
    for (const loc of fields) {
      if (!loc) continue;
      if (loc.title && String(loc.title).toLowerCase().includes(q)) return true;
      if (loc.description && String(loc.description).toLowerCase().includes(q)) return true;
      if (loc.excerpt && String(loc.excerpt).toLowerCase().includes(q)) return true;
      if (Array.isArray(loc.paragraphs) && loc.paragraphs.some(p => String(p).toLowerCase().includes(q))) return true;
    }
    if (Array.isArray(item.tags)) {
      for (const tid of item.tags) {
        const meta = getTagMeta(tid);
        if (
          meta.id.includes(q) ||
          meta.en.toLowerCase().includes(q) ||
          meta.zh.toLowerCase().includes(q) ||
          meta.aliases.some(a => a.includes(q))
        ) {
          return true;
        }
      }
    }
    return false;
  }

  function buildSnippetHtml(item, q, activeLang) {
    const primary = activeLang === 'zh' ? item.zh : item.en;
    const secondary = activeLang === 'zh' ? item.en : item.zh;
    if (!q || selectedTag) {
      return escapeHtml(primary.description || primary.excerpt || '');
    }
    const pHitPrimary = (primary.paragraphs || []).find(p => String(p).toLowerCase().includes(q));
    if (pHitPrimary) return `<span class="search-paragraph">${highlightText(pHitPrimary, q)}</span>`;

    const pHitSecondary = (secondary.paragraphs || []).find(p => String(p).toLowerCase().includes(q));
    if (pHitSecondary) return `<span class="search-paragraph">${highlightText(pHitSecondary, q)}</span>`;

    const basePrimary = primary.description || primary.excerpt || '';
    if (basePrimary.toLowerCase().includes(q)) {
      return `<span class="search-paragraph">${highlightText(basePrimary, q)}</span>`;
    }
    const baseSecondary = secondary.description || secondary.excerpt || '';
    if (baseSecondary.toLowerCase().includes(q)) {
      return `<span class="search-paragraph">${highlightText(baseSecondary, q)}</span>`;
    }
    return `<span class="search-paragraph">${highlightText(basePrimary, q)}</span>`;
  }

  function renderResults(matches) {
    const out = document.getElementById('site-search-results');
    const input = document.getElementById('site-search-input');
    const q = input ? input.value.trim().toLowerCase() : '';
    const lang = getActiveLang();
    const isZh = lang === 'zh';
    const items = matches || [];
    if (!out) return;

    if (!items.length) {
      const tagLabel = selectedTag ? getTagLabel(selectedTag, lang) : '';
      if (isZh) {
        out.innerHTML = `<p class="site-search-empty">没有找到匹配结果${tagLabel ? `（标签“${escapeHtml(tagLabel)}”）` : (q ? `（关键词“${escapeHtml(q)}”）` : '')}。</p>`;
      } else {
        out.innerHTML = `<p class="site-search-empty">No results${tagLabel ? ` for tag "${escapeHtml(tagLabel)}"` : (q ? ` for "${escapeHtml(q)}"` : '')}.</p>`;
      }
      return;
    }

    const runtimeBase = getRuntimeBase();
    const placeholder = new URL('assets/blog-placeholder-2.webp', runtimeBase).toString();

    out.innerHTML = items.map(it => {
      const loc = isZh ? it.zh : it.en;
      const titleHtml = (q && !selectedTag) ? highlightText(loc.title || (isZh ? '未命名' : 'Untitled'), q) : escapeHtml(loc.title || (isZh ? '未命名' : 'Untitled'));
      const descHtml = buildSnippetHtml(it, q, lang);
      const url = it.url || '#';

      let imgUrl = placeholder;
      let imgFallback = null;
      try {
        if (it.heroImage) {
          const cleaned = String(it.heroImage).trim().replace(/^(?:\.\.\/)+/, '').replace(/^\//, '');
          if (location.origin) imgUrl = location.origin.replace(/\/$/, '') + '/' + cleaned;
          imgFallback = new URL(cleaned, runtimeBase).toString();
          if (imgFallback === imgUrl) imgFallback = null;
        }
      } catch { imgUrl = placeholder; imgFallback = null; }

      const heroPos = String(it.heroImagePosition || '').trim() || 'center center';
      const heroWidth = String(it.heroImageWidth || '').trim();

      let dateHTML = '';
      if (it.pubDate) {
        try {
          const d = new Date(it.pubDate);
          if (!isNaN(d.valueOf())) {
            const locale = isZh ? 'zh-CN' : 'en-US';
            const opts = { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' };
            dateHTML = `<time class="post-date" datetime="${escapeHtml(String(it.pubDate))}">${escapeHtml(d.toLocaleDateString(locale, opts))}</time>`;
          }
        } catch {}
      }

      const tagBadges = (it.tags || []).map(tid => {
        const meta = getTagMeta(tid);
        const display = getTagLabel(tid, lang);
        const isSelected = selectedTag && selectedTag === tid;
        const cls = isSelected ? 'post-tag is-selected' : (selectedTag ? 'post-tag post-tag--dim' : 'post-tag');
        return `<span class="${cls}" data-tag="${escapeHtml(tid)}" style="--tc:${escapeHtml(meta.color || '#555d66')}">${escapeHtml(display)}</span>`;
      }).join(' ');

      return `
        <article class="site-search-item">
          <a class="inline-portfolio-card" href="${url}">
            <span class="hero-frame" style="background-image:url('${imgUrl}');background-size:cover;background-position:${escapeHtml(heroPos)};${heroWidth ? `--hero-width:${escapeHtml(heroWidth)};` : ''}--hero-position:${escapeHtml(heroPos)};">
              <img class="hero-img" src="${imgUrl}" onerror="(function(img){try{var f='${imgFallback || ''}'; if(f && img.src!==f){ img.src=f; var hf=img.closest('.hero-frame'); if(hf) hf.style.backgroundImage='url('+f+')'; } }catch(e){} })(this)" alt="" loading="lazy" decoding="async" style="${heroWidth ? `width: var(--hero-width, 100%);` : `width: 100%;`}height: 100%; object-fit: cover; object-position: ${escapeHtml(heroPos)};" />
            </span>
            <div class="meta">
              <h5 class="title site-heading">${titleHtml}</h5>
              ${dateHTML ? `<h6 class="date">${dateHTML}</h6>` : ''}
            </div>
          </a>
          <div class="site-search-item-below">
            <div class="site-search-item-meta">${tagBadges}</div>
            <p class="site-search-item-desc">${descHtml}</p>
          </div>
        </article>
      `;
    }).join('\n');

    out.querySelectorAll('.post-tag').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tid = e.currentTarget.dataset.tag;
        selectedTag = (selectedTag === tid) ? null : tid;
        const inp = document.getElementById('site-search-input');
        if (inp && selectedTag) inp.value = '';
        syncSearchUrlParams();
        doSearch();
      });
    });
  }

  async function doSearch() {
    const all = await loadIndex();
    const input = document.getElementById('site-search-input');
    const q = input ? input.value.trim().toLowerCase() : '';

    let matched = all.slice();
    if (selectedTag) {
      matched = matched.filter(it => Array.isArray(it.tags) && it.tags.includes(selectedTag));
    }
    if (!selectedTag && q) {
      matched = matched.filter(it => matchesQuery(it, q));
    }

    matched.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (b.pinned && !a.pinned) return 1;
      if (a.pubDate && b.pubDate) return String(b.pubDate).localeCompare(String(a.pubDate));
      return 0;
    });

    renderResults(matched.slice(0, 200));
    const tagView = document.getElementById('site-search-active-tag');
    if (tagView) tagView.textContent = '';
    const tagCloudEl = document.getElementById('site-search-tagcloud');
    if (tagCloudEl) renderTagCloud(all, tagCloudEl);
  }

  function isSearchPage() {
    return !!document.getElementById('site-search-form');
  }

  async function refreshSearchForLang() {
    if (!isSearchPage()) return;
    await loadIndex();
    doSearch();
  }

  async function initSearchPage() {
    if (!isSearchPage()) return;

    selectedTag = null;
    drawerOpen = false;
    await loadIndex();

    try {
      const params = new URLSearchParams(location.search);
      const t = params.get('tag');
      const qParam = params.get('q');
      const input = document.getElementById('site-search-input');
      if (t) {
        selectedTag = resolveCanonicalTagId(t);
        if (input) input.value = '';
      } else if (qParam) {
        if (input) input.value = qParam;
        selectedTag = null;
      }
    } catch {}

    const input = document.getElementById('site-search-input');
    const form = document.getElementById('site-search-form');

    if (form && !form.dataset.searchBound) {
      form.dataset.searchBound = '1';
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        selectedTag = null;
        syncSearchUrlParams();
        doSearch();
      });
    }

    if (input && !input.dataset.searchBound) {
      input.dataset.searchBound = '1';
      input.addEventListener('input', () => {
        selectedTag = null;
        syncSearchUrlParams();
        doSearch();
      });
    }

    doSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearchPage);
  } else {
    initSearchPage();
  }

  document.addEventListener('astro:page-load', initSearchPage);
  window.addEventListener('langchange', refreshSearchForLang);
})();
