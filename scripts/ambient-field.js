// ambient-field.js — 轻量交互式微星尘点阵背景（静止自动休眠 0% CPU）
(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (window.__AMBIENT_FIELD_INIT__) {
    if (typeof window.__AMBIENT_FIELD_MOUNT__ === 'function') window.__AMBIENT_FIELD_MOUNT__();
    return;
  }
  window.__AMBIENT_FIELD_INIT__ = true;

  var canvas = null;
  var ctx = null;
  var dots = [];
  var rafId = 0;
  var mouse = { x: -9999, y: -9999, active: false };
  var SPACING = 74;
  var RADIUS = 175;

  function reducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function ensureCanvas() {
    if (!document.body) return false;
    var el = document.getElementById('site-ambient-field');
    if (!el) {
      el = document.createElement('canvas');
      el.id = 'site-ambient-field';
      el.setAttribute('aria-hidden', 'true');
      el.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:0;';
      document.body.insertBefore(el, document.body.firstChild);
    }
    if (el !== canvas) {
      canvas = el;
      ctx = canvas.getContext('2d');
      rebuildGrid(true);
    }
    return !!ctx;
  }

  function rebuildGrid(immediate) {
    if (!canvas || !ctx) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dots = [];
    for (var y = SPACING / 2; y < h; y += SPACING) {
      for (var x = SPACING / 2; x < w; x += SPACING) {
        dots.push({ bx: x, by: y, x: x, y: y });
      }
    }
    if (immediate) draw();
    else scheduleDraw();
  }

  function scheduleDraw() {
    if (!rafId) rafId = requestAnimationFrame(draw);
  }

  function draw() {
    rafId = 0;
    if (!canvas || !canvas.isConnected || !ctx) return;
    var w = window.innerWidth;
    var h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    var isDark = document.documentElement.dataset.theme === 'dark';
    var rgb = isDark ? '218, 232, 255' : '24, 32, 48';
    var baseAlpha = isDark ? 0.13 : 0.11;
    var allowMotion = !reducedMotion();
    var moving = false;

    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];
      var tx = d.bx;
      var ty = d.by;

      if (allowMotion && mouse.active) {
        var dx = d.bx - mouse.x;
        var dy = d.by - mouse.y;
        var dist = Math.hypot(dx, dy);
        if (dist < RADIUS && dist > 1) {
          var ratio = 1 - dist / RADIUS;
          var pull = ratio * 13;
          tx += (dx / dist) * pull;
          ty += (dy / dist) * pull;

          ctx.strokeStyle = 'rgba(' + rgb + ', ' + (ratio * baseAlpha * 0.95).toFixed(4) + ')';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      if (allowMotion) {
        d.x += (tx - d.x) * 0.14;
        d.y += (ty - d.y) * 0.14;
        if (Math.abs(tx - d.x) > 0.15 || Math.abs(ty - d.y) > 0.15) moving = true;
      } else {
        d.x = d.bx;
        d.y = d.by;
      }

      ctx.fillStyle = 'rgba(' + rgb + ', ' + baseAlpha + ')';
      ctx.beginPath();
      ctx.arc(d.x, d.y, 1.35, 0, Math.PI * 2);
      ctx.fill();
    }

    if (moving) rafId = requestAnimationFrame(draw);
  }

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (ensureCanvas()) rebuildGrid(false);
    }, 120);
  }, { passive: true });

  window.addEventListener('pointermove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
    if (ensureCanvas()) scheduleDraw();
  }, { passive: true });

  window.addEventListener('pointerleave', function () {
    mouse.active = false;
    if (canvas && canvas.isConnected) scheduleDraw();
  }, { passive: true });

  window.addEventListener('themechange', function () {
    if (ensureCanvas()) draw();
  });

  function mount() {
    if (ensureCanvas()) draw();
  }
  window.__AMBIENT_FIELD_MOUNT__ = mount;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }
  document.addEventListener('astro:after-swap', mount);
  document.addEventListener('astro:page-load', mount);
})();
