// ambient-field.js — 轻量宇宙流光星尘背景（~30fps 低功耗流动，切后台自动休眠）+ 全站近场边缘亮线引擎
(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (window.__AMBIENT_FIELD_INIT__) {
    if (typeof window.__AMBIENT_FIELD_MOUNT__ === 'function') window.__AMBIENT_FIELD_MOUNT__();
    return;
  }
  window.__AMBIENT_FIELD_INIT__ = true;

  var canvas = null;
  var ctx = null;
  var stars = [];
  var rafId = 0;
  var lastFrameTs = 0;
  var viewW = 0;
  var viewH = 0;
  var mouse = { x: -9999, y: -9999, active: false };
  var LINK_RADIUS = 148;
  var PROXIMITY_RADIUS = 165;
  var FRAME_INTERVAL = 33; // ~30fps 平滑低功耗宇宙慢流

  function reducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function finePointer() {
    return !window.matchMedia || window.matchMedia('(pointer: fine)').matches;
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
      rebuildStars(true);
    }
    return !!ctx;
  }

  // 生成多景深随机宇宙星尘：大小、亮度、漂移速度与微闪烁相位各不相同
  function rebuildStars(immediate) {
    if (!canvas || !ctx) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    viewW = window.innerWidth || 1;
    viewH = window.innerHeight || 1;
    canvas.width = Math.max(1, Math.floor(viewW * dpr));
    canvas.height = Math.max(1, Math.floor(viewH * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var area = viewW * viewH;
    var count = Math.max(48, Math.min(135, Math.round(area / 13500)));
    stars = [];
    for (var i = 0; i < count; i++) {
      var depth = 0.3 + Math.random() * 0.7; // 0.3 远景微星 .. 1.0 近景亮星
      var angle = -0.35 + (Math.random() - 0.5) * 0.45; // 统一柔和斜向星流 + 轻微随机散布
      var speed = (3.5 + depth * 9.5) * (0.75 + Math.random() * 0.5); // px/s
      stars.push({
        x: Math.random() * viewW,
        y: Math.random() * viewH,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        depth: depth,
        r: 0.65 + depth * 1.15,
        alpha: 0.25 + depth * 0.75,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.45 + Math.random() * 1.1,
        tint: Math.random() < 0.24 ? 1 : 0, // 约 1/4 星点带微淡冷蓝星光
      });
    }
    lastFrameTs = performance.now();
    if (immediate) draw(lastFrameTs);
    scheduleLoop();
  }

  function scheduleLoop() {
    if (document.hidden || reducedMotion()) return;
    if (!rafId) rafId = requestAnimationFrame(tick);
  }

  function tick(now) {
    rafId = 0;
    if (!canvas || !canvas.isConnected || !ctx || document.hidden) return;
    if (now - lastFrameTs < FRAME_INTERVAL) {
      rafId = requestAnimationFrame(tick);
      return;
    }
    draw(now);
    if (!reducedMotion()) rafId = requestAnimationFrame(tick);
  }

  function draw(now) {
    if (!canvas || !canvas.isConnected || !ctx) return;
    var dt = Math.min(0.08, Math.max(0.001, (now - lastFrameTs) / 1000));
    lastFrameTs = now;

    ctx.clearRect(0, 0, viewW, viewH);

    var isDark = document.documentElement.dataset.theme !== 'light';
    var baseRgb = isDark ? '216, 230, 255' : '30, 42, 68';
    var accentRgb = isDark ? '132, 162, 255' : '45, 72, 210';
    var baseOpacity = isDark ? 0.22 : 0.16;
    var allowMotion = !reducedMotion();
    var tSec = now * 0.001;

    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      if (allowMotion) {
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        if (s.x > viewW + 12) s.x = -12;
        else if (s.x < -12) s.x = viewW + 12;
        if (s.y > viewH + 12) s.y = -12;
        else if (s.y < -12) s.y = viewH + 12;
      }

      var px = s.x;
      var py = s.y;

      if (allowMotion && mouse.active) {
        var dx = s.x - mouse.x;
        var dy = s.y - mouse.y;
        var dist = Math.hypot(dx, dy);
        if (dist < LINK_RADIUS && dist > 1) {
          var ratio = 1 - dist / LINK_RADIUS;
          var push = ratio * 9 * s.depth;
          px += (dx / dist) * push;
          py += (dy / dist) * push;

          ctx.strokeStyle = 'rgba(' + (s.tint ? accentRgb : baseRgb) + ', ' + (ratio * ratio * baseOpacity * 0.72).toFixed(4) + ')';
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      var twinkle = allowMotion ? (0.72 + 0.28 * Math.sin(tSec * s.twinkleSpeed + s.phase)) : 0.9;
      var a = baseOpacity * s.alpha * twinkle;
      ctx.fillStyle = 'rgba(' + (s.tint ? accentRgb : baseRgb) + ', ' + a.toFixed(4) + ')';
      ctx.beginPath();
      ctx.arc(px, py, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // ── 全站近场亮线检测：Header 底边 + Footer 顶边（通栏单线） + 联系页卡片（整圈 1px 径向光晕边框） ──
  var edgeGlowRaf = 0;
  var lineGlowEls = [];
  var boxGlowEls = [];

  function refreshGlowTargets() {
    var lines = [];
    var hdr = document.querySelector('body > header');
    if (hdr) lines.push({ el: hdr, edge: 'bottom', xVar: '--hdr-glow-x', oVar: '--hdr-glow-o', radius: PROXIMITY_RADIUS });
    var ftr = document.querySelector('body > footer');
    if (ftr) lines.push({ el: ftr, edge: 'top', xVar: '--ftr-glow-x', oVar: '--ftr-glow-o', radius: PROXIMITY_RADIUS });
    lineGlowEls = lines;
    boxGlowEls = Array.from(document.querySelectorAll('.contact-link'));
  }

  function updateProximityGlow() {
    edgeGlowRaf = 0;
    if (!finePointer() || reducedMotion()) return;
    if (!mouse.active) {
      for (var k = 0; k < lineGlowEls.length; k++) lineGlowEls[k].el.style.setProperty(lineGlowEls[k].oVar, '0');
      for (var j = 0; j < boxGlowEls.length; j++) boxGlowEls[j].style.setProperty('--card-glow-o', '0');
      return;
    }

    var mx = mouse.x;
    var my = mouse.y;
    for (var i = 0; i < lineGlowEls.length; i++) {
      var item = lineGlowEls[i];
      var rect = item.el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue;

      var edgeY = item.edge === 'bottom' ? rect.bottom : rect.top;
      var dy = Math.abs(my - edgeY);
      var dx = mx < rect.left ? rect.left - mx : (mx > rect.right ? mx - rect.right : 0);
      var dist = Math.hypot(dx, dy);

      if (dist < item.radius) {
        var strength = Math.pow(1 - dist / item.radius, 1.35);
        var localX = Math.max(0, Math.min(rect.width, mx - rect.left));
        item.el.style.setProperty(item.xVar, localX.toFixed(1) + 'px');
        item.el.style.setProperty(item.oVar, strength.toFixed(3));
      } else {
        item.el.style.setProperty(item.oVar, '0');
      }
    }

    var boxRadius = 150;
    for (var b = 0; b < boxGlowEls.length; b++) {
      var card = boxGlowEls[b];
      var r = card.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      var cx = Math.max(r.left, Math.min(r.right, mx));
      var cy = Math.max(r.top, Math.min(r.bottom, my));
      var dBox = Math.hypot(mx - cx, my - cy);
      if (dBox < boxRadius) {
        var s = dBox === 0 ? 1 : Math.pow(1 - dBox / boxRadius, 1.25);
        card.style.setProperty('--card-glow-x', (mx - r.left).toFixed(1) + 'px');
        card.style.setProperty('--card-glow-y', (my - r.top).toFixed(1) + 'px');
        card.style.setProperty('--card-glow-o', s.toFixed(3));
      } else {
        card.style.setProperty('--card-glow-o', '0');
      }
    }
  }

  function scheduleGlow() {
    if (!edgeGlowRaf) edgeGlowRaf = requestAnimationFrame(updateProximityGlow);
  }

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (ensureCanvas()) rebuildStars(true);
    }, 120);
  }, { passive: true });

  var lastTouchTs = 0;

  function enterTouchMode() {
    lastTouchTs = performance.now();
    if (document.documentElement.dataset.input !== 'touch') {
      document.documentElement.dataset.input = 'touch';
    }
    if (mouse.active) {
      mouse.active = false;
      scheduleGlow();
    }
  }

  window.addEventListener('touchstart', enterTouchMode, { passive: true, capture: true });

  window.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'touch') enterTouchMode();
  }, { passive: true, capture: true });

  window.addEventListener('pointermove', function (e) {
    if (e.pointerType === 'touch') {
      enterTouchMode();
      return;
    }
    if (e.pointerType === 'mouse' && performance.now() - lastTouchTs < 600) return;
    if (document.documentElement.dataset.input === 'touch') {
      document.documentElement.dataset.input = 'mouse';
    }
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
    scheduleGlow();
  }, { passive: true });

  window.addEventListener('pointerleave', function () {
    mouse.active = false;
    scheduleGlow();
  }, { passive: true });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
    } else if (ensureCanvas()) {
      lastFrameTs = performance.now();
      scheduleLoop();
    }
  });

  window.addEventListener('themechange', function () {
    if (ensureCanvas()) draw(performance.now());
  });

  function mount() {
    if (ensureCanvas()) {
      draw(performance.now());
      scheduleLoop();
    }
    refreshGlowTargets();
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
