// Client-side fallback to swap inline markdown images to generated webp variants
// Runs in the browser; safe no-op if network/HEAD fails.
(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  function candidateUrls(origUrl) {
    try {
      const m = origUrl.match(/^(.*?)(\.[^./?#]+)(\?|#|$)/);
      if (!m) return [];
      const base = m[1];
      const tail = m[3] || '';
      // sizes order to prefer
      const sizes = [320, 640, 1024];
      return sizes.map(s => `${base}-${s}.webp${tail}`);
    } catch (e) {
      return [];
    }
  }

  // Check if a resource exists with a short timeout to avoid long hangs.
  async function exists(url, timeout = 1200) {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      const res = await fetch(url, { method: 'HEAD', signal: controller.signal, cache: 'force-cache' });
      clearTimeout(id);
      return res.ok;
    } catch (e) {
      return false;
    }
  }

  function swapImg(img, best, srcset) {
    try {
      if (!img.dataset.full) img.dataset.full = img.src || '';
      if (srcset) img.setAttribute('srcset', srcset);
      img.src = best;
      // keep loading=lazy and decoding=async if present
      try { if (!img.loading) img.loading = 'lazy'; } catch (e) {}
      try { if (!img.decoding) img.decoding = 'async'; } catch (e) {}
    } catch (e) {
      // ignore
    }
  }

  async function handleImage(img) {
    const orig = img.getAttribute('src') || img.getAttribute('data-src') || '';
    if (!orig) return;
    // don't touch remote images
    if (/^https?:\/\//i.test(orig) || orig.startsWith('data:')) return;
    // don't touch images already in low/ folder
    if (orig.includes('/low/')) return;
    // don't touch GIFs, preserve animation
    if (/\.gif(\?.*)?$/i.test(orig)) return;

    const candidates = candidateUrls(orig);
    if (!candidates.length) return;

    // 检查哪些变体存在
    const sizes = [320, 640, 1024];
    const checks = await Promise.all(
      candidates.map(async (url, idx) => ({ url, width: sizes[idx], ok: await exists(url) }))
    );
    const available = checks.filter(x => x.ok);
    if (!available.length) return;

    // 用 srcset 列出所有可用变体，让浏览器根据显示尺寸自动选
    // sizes 属性：告诉浏览器图片实际显示宽度的估算
    const srcset = available.map(x => `${x.url} ${x.width}w`).join(', ');
    const sizesAttr = '(max-width: 480px) 320px, (max-width: 1024px) 640px, 1024px';

    try {
      if (!img.dataset.full) img.dataset.full = img.src || '';
      img.setAttribute('srcset', srcset);
      img.setAttribute('sizes', sizesAttr);
      // src 设为最小可用变体作为 fallback
      img.src = available[0].url;
      try { if (!img.loading) img.loading = 'lazy'; } catch(e) {}
      try { if (!img.decoding) img.decoding = 'async'; } catch(e) {}
    } catch(e) {}
  }

  function scan() {
    // target featured images in md content; include generic md-content imgs as fallback
    const imgs = Array.from(document.querySelectorAll('.md-content.pswp-featured img, .md-content img'));
    if (!imgs.length) return;

    // Limit concurrent probes to avoid flooding the network. Process in small concurrency.
    const MAX_CONCURRENT = 4;
    (async function processBatch() {
      let idx = 0;
      const running = [];
      function runNext() {
        if (idx >= imgs.length) return null;
        const img = imgs[idx++];
        const p = handleImage(img).catch(() => {}).then(() => {
          // remove from running when done
          const i = running.indexOf(p);
          if (i !== -1) running.splice(i, 1);
        });
        running.push(p);
        return p;
      }

      // Kick off initial set
      while (running.length < MAX_CONCURRENT && idx < imgs.length) runNext();

      // As promises finish, start new ones
      while (running.length) {
        await Promise.race(running);
        while (running.length < MAX_CONCURRENT && idx < imgs.length) runNext();
      }
    })();
  }

  // schedule scanning with small debounce
  let scanTimer = null;
  function scheduleScan(delay = 60) {
    if (scanTimer) clearTimeout(scanTimer);
    scanTimer = setTimeout(() => { try { scan(); } catch (e) {} }, delay);
  }

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => scheduleScan(20));
  } else {
    scheduleScan(20);
  }

  // Re-scan when history navigation occurs (single-page navigation)
  try {
    const _push = history.pushState;
    history.pushState = function () {
      const ret = _push.apply(this, arguments);
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
    const _replace = history.replaceState;
    history.replaceState = function () {
      const ret = _replace.apply(this, arguments);
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
    window.addEventListener('popstate', () => window.dispatchEvent(new Event('locationchange')));
    window.addEventListener('locationchange', () => scheduleScan(40));
  } catch (e) {
    // ignore
  }

  // MutationObserver: detect when new md-content is added to the DOM
  try {
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.addedNodes && m.addedNodes.length) {
          for (const n of m.addedNodes) {
            try {
              if (n && n.querySelector && (n.matches && n.matches('.md-content') || n.querySelector('.md-content'))) {
                scheduleScan(30);
                return;
              }
            } catch (e) {}
          }
        }
      }
    });
    mo.observe(document.documentElement || document.body, { childList: true, subtree: true });
  } catch (e) {}

})();
