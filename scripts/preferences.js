// preferences.js — 轻量核心入口（~3.5 KB）：仅处理首屏主题/语言角标同步与按钮绑定；
// 偏好设置 / 搜索 / 订阅弹窗（preferences-overlays.js）在首次点击时按需动态加载。

const THEME_KEY = 'theme-preference';
const root = document.documentElement;

let overlaysPromise = null;
let overlaysModule = null;
let lightboxInitialized = false;

function loadOverlays() {
  if (overlaysModule) return Promise.resolve(overlaysModule);
  overlaysPromise ||= import('./preferences-overlays.js').then((mod) => {
    overlaysModule = mod;
    return mod;
  });
  return overlaysPromise;
}

function readStoredTheme() {
  try {
    const v = localStorage.getItem(THEME_KEY);
    if (v === 'light' || v === 'dark') return v;
  } catch (_) {}
  return null;
}

function syncThemeButtons(theme) {
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    btn.dataset.themeState = theme;
  });
}

function applyTheme(theme, { persist = true, animate = true, x, y } = {}) {
  const prev = root.dataset.theme;
  const doApply = () => {
    root.dataset.theme = theme;
    if (persist) {
      try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
    }
    if (typeof window.__syncUrlState === 'function') window.__syncUrlState();
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  };

  if (animate && prev && prev !== theme && typeof window.__runCircularRipple === 'function') {
    window.__runCircularRipple(doApply, { x, y });
    return;
  }
  doApply();
}

function syncLangBadge() {
  const isZh = root.dataset.lang === 'zh' || (root.lang || '').toLowerCase().startsWith('zh');
  const label = isZh ? '中' : 'EN';
  document.querySelectorAll('.lang-badge').forEach((badge) => {
    if (badge.textContent !== label) badge.textContent = label;
  });
  document.querySelectorAll('[data-prefs-toggle]').forEach((btn) => {
    btn.classList.toggle('lang-zh', isZh);
    btn.classList.toggle('lang-en', !isZh);
  });
}

function bindHeaderToggles() {
  if (overlaysModule && typeof overlaysModule.resetOverlaysOnSwap === 'function') {
    overlaysModule.resetOverlaysOnSwap();
  }

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    if (btn.dataset.prefBound) return;
    btn.dataset.prefBound = '1';
    btn.addEventListener('click', (ev) => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next, { x: ev.clientX, y: ev.clientY });
      syncThemeButtons(next);
    });
  });

  document.querySelectorAll('[data-search-toggle]').forEach((btn) => {
    if (btn.dataset.prefBound) return;
    btn.dataset.prefBound = '1';
    btn.addEventListener('click', () => {
      loadOverlays().then((mod) => mod.openSearchOverlay());
    });
  });

  document.querySelectorAll('[data-prefs-toggle]').forEach((btn) => {
    if (btn.dataset.prefBound) return;
    btn.dataset.prefBound = '1';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      loadOverlays().then((mod) => mod.openPrefsOverlay());
    });
  });

  document.querySelectorAll('[data-subscribe-toggle]').forEach((btn) => {
    if (btn.dataset.prefBound) return;
    btn.dataset.prefBound = '1';
    btn.addEventListener('click', () => {
      loadOverlays().then((mod) => mod.openSubscribeOverlay());
    });
  });

  syncLangBadge();
  syncThemeButtons(root.dataset.theme === 'light' ? 'light' : 'dark');

  // 延迟检测正文图片灯箱（与原行为一致）
  lightboxInitialized = false;
  setTimeout(() => {
    if (!lightboxInitialized && typeof window.initLightboxAuto === 'function') {
      const images = document.querySelectorAll('.md-content.pswp-featured img[data-full]');
      if (images.length > 0) {
        lightboxInitialized = true;
        window.initLightboxAuto();
      }
    }
  }, 200);
}

function initPreferences() {
  const urlTheme = (() => {
    try {
      const t = new URLSearchParams(location.search).get('theme');
      return (t === 'dark' || t === 'light') ? t : null;
    } catch (_) { return null; }
  })();
  const stored = readStoredTheme();
  const initialTheme = urlTheme ?? (stored !== null ? stored : (root.dataset.theme === 'light' ? 'light' : 'dark'));
  applyTheme(initialTheme, { persist: urlTheme !== null || stored === null, animate: false });
  syncThemeButtons(initialTheme);

  const media = window.matchMedia?.('(prefers-color-scheme: dark)');
  media?.addEventListener?.('change', (ev) => {
    if (!readStoredTheme()) {
      const next = ev.matches ? 'dark' : 'light';
      applyTheme(next, { persist: false });
      syncThemeButtons(next);
    }
  });

  bindHeaderToggles();
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.openSearchOverlay     = () => loadOverlays().then((m) => m.openSearchOverlay());
  window.closeSearchOverlay    = () => overlaysModule?.closeSearchOverlay();
  window.openPrefsOverlay      = () => loadOverlays().then((m) => m.openPrefsOverlay());
  window.closePrefsOverlay     = () => overlaysModule?.closePrefsOverlay();
  window.openSubscribeOverlay  = () => loadOverlays().then((m) => m.openSubscribeOverlay());
  window.closeSubscribeOverlay = () => overlaysModule?.closeSubscribeOverlay();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPreferences, { once: true });
  } else {
    initPreferences();
  }

  document.addEventListener('astro:page-load', bindHeaderToggles);
  window.addEventListener('langchange', () => {
    syncLangBadge();
    overlaysModule?.refreshOverlaysForLang?.();
  });
}
