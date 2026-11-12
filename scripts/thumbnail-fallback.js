// Only use generated variants listed in the build-time inventory.
// Images below 10 KiB are always left at their original URL.
(() => {
  const base = document.querySelector('base')?.getAttribute('href') || '/';
  const inventoryUrl = new URL('assets/image-variant-manifest.json', new URL(base, location.origin));
  let manifestPromise;
  function manifest() {
    return manifestPromise ||= fetch(inventoryUrl, {cache:'no-cache'})
      .then(r => r.ok ? r.json() : {}).catch(() => ({}));
  }
  const processed = new WeakMap();
  async function apply(img) {
    const original = img.getAttribute('data-full') || img.getAttribute('src');
    if (!original || /^(?:https?:|data:|blob:)/i.test(original)) return;
    if (img.dataset.preserveAnimation === 'true' || img.dataset.preserveResolution === 'true' || img.dataset.imageFormat === 'png') return;
    const u = new URL(original, location.href);
    if (u.origin !== location.origin || !u.pathname.includes('/assets/') || u.pathname.includes('/low/') || /\.gif$/i.test(u.pathname)) return;
    // 已有服务端候选时保持其格式与路径，不在浏览器中再次覆盖。
    if (img.getAttribute('srcset')) return;
    if (processed.get(img) === original) return;
    processed.set(img, original);
    const all = await manifest();
    const key = u.pathname.slice(u.pathname.indexOf('/assets/'));
    const entry = all[key];
    if (!entry || entry.bytes < 10240 || !Array.isArray(entry.widths) || !entry.widths.length) {
      img.removeAttribute('srcset');
      img.removeAttribute('sizes');
      return;
    }
    const dot = key.lastIndexOf('.');
    const slash = key.lastIndexOf('/');
    if (dot <= slash) return;
    const prefix = u.pathname.slice(0,u.pathname.indexOf('/assets/'));
    const dir = key.slice(0,slash+1), name = key.slice(slash+1,dot);
    const srcset = entry.widths.map(w => `${prefix}${dir}low/${name}-${w}.webp ${w}w`).join(', ');
    if (!img.dataset.full) img.dataset.full = original;
    img.setAttribute('srcset',srcset);
    img.setAttribute('sizes','(max-width: 480px) 100vw, (max-width: 1024px) 90vw, 1024px');
    // Original URL remains the src fallback and the lightbox full image.
  }
  function scan() { document.querySelectorAll('.md-content img').forEach(img => { void apply(img); }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',scan);
  else scan();
  new MutationObserver(scan).observe(document.documentElement,{subtree:true,childList:true});
})();
