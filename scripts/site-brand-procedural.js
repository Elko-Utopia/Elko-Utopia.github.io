// site-brand-procedural.js
// Dedicated procedural 60-120fps HiDPI Canvas renderer for SiteLogo and SiteTitle.
// Served as a standalone module to stay immune to dev-server virtual module caching.

(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  if (typeof window.__SITE_BRAND_PROC_TEARDOWN__ === 'function') {
    try { window.__SITE_BRAND_PROC_TEARDOWN__(); } catch {}
  }

  const cleanups = [];

  function isReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function readInkTuple() {
    const isDark = document.documentElement.dataset.theme === 'dark';
    const raw = getComputedStyle(document.documentElement).getPropertyValue('--black').trim();
    const m = raw.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
    if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
    return isDark ? [245, 248, 255] : [15, 18, 25];
  }

  function createInkAnimator(durationMs = 360) {
    const init = readInkTuple();
    let from = init.slice();
    let cur = init.slice();
    let to = init.slice();
    let startTs = 0;
    let animating = false;

    function updateTarget(now) {
      const next = readInkTuple();
      if (next[0] === to[0] && next[1] === to[1] && next[2] === to[2]) return false;
      sample(now);
      from = cur.slice();
      to = next;
      startTs = now;
      animating = true;
      return true;
    }

    function sample(now) {
      if (!animating) return cur;
      const rawT = Math.min(1, Math.max(0, (now - startTs) / durationMs));
      const t = 1 - Math.pow(1 - rawT, 3);
      cur[0] = Math.round(from[0] + (to[0] - from[0]) * t);
      cur[1] = Math.round(from[1] + (to[1] - from[1]) * t);
      cur[2] = Math.round(from[2] + (to[2] - from[2]) * t);
      if (rawT >= 1) {
        cur[0] = to[0];
        cur[1] = to[1];
        cur[2] = to[2];
        animating = false;
      }
      return cur;
    }

    return {
      updateTarget,
      sample,
      isAnimating: () => animating,
      css: (now) => {
        const c = sample(now);
        return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
      },
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PART 1: PROCEDURAL VORTEX LOGO
  // ═══════════════════════════════════════════════════════════════════════════
  function evalCubic(p0, p1, p2, p3, t) {
    const mt = 1 - t;
    const mt2 = mt * mt;
    const t2 = t * t;
    return [
      mt2 * mt * p0[0] + 3 * mt2 * t * p1[0] + 3 * mt * t2 * p2[0] + t2 * t * p3[0],
      mt2 * mt * p0[1] + 3 * mt2 * t * p1[1] + 3 * mt * t2 * p2[1] + t2 * t * p3[1],
    ];
  }

  function buildArmPolyline(segments) {
    const raw = [];
    for (const seg of segments) {
      if (seg.type === 'L') {
        const steps = seg.steps || 28;
        for (let i = 0; i <= steps; i++) {
          if (raw.length && i === 0) continue;
          const t = i / steps;
          raw.push([
            seg.p0[0] + (seg.p1[0] - seg.p0[0]) * t,
            seg.p0[1] + (seg.p1[1] - seg.p0[1]) * t,
          ]);
        }
      } else if (seg.type === 'C') {
        const steps = seg.steps || 48;
        for (let i = 0; i <= steps; i++) {
          if (raw.length && i === 0) continue;
          raw.push(evalCubic(seg.p0, seg.p1, seg.p2, seg.p3, i / steps));
        }
      }
    }

    const cum = new Float32Array(raw.length);
    let total = 0;
    for (let i = 1; i < raw.length; i++) {
      total += Math.hypot(raw[i][0] - raw[i - 1][0], raw[i][1] - raw[i - 1][1]);
      cum[i] = total;
    }

    const N = 280;
    const xs = new Float32Array(N);
    const ys = new Float32Array(N);
    let cursor = 0;
    for (let i = 0; i < N; i++) {
      const targetS = (i / (N - 1)) * total;
      while (cursor < raw.length - 2 && cum[cursor + 1] < targetS) cursor++;
      const segLen = cum[cursor + 1] - cum[cursor] || 1;
      const frac = Math.max(0, Math.min(1, (targetS - cum[cursor]) / segLen));
      xs[i] = raw[cursor][0] + (raw[cursor + 1][0] - raw[cursor][0]) * frac;
      ys[i] = raw[cursor][1] + (raw[cursor + 1][1] - raw[cursor][1]) * frac;
    }

    return { xs, ys, count: N, totalLen: total };
  }

  // Extend each arm slightly past the exact midpoint (519.81, 512.66) so both inward comets
  // fuse seamlessly across the center bar with ZERO blank gap in the middle.
  const ARM_A = buildArmPolyline([
    { type: 'L', p0: [-340.00, 362.51], p1: [110.00, 204.94], steps: 26 },
    { type: 'L', p0: [110.00, 204.94], p1: [487.53, 72.75], steps: 22 },
    { type: 'C', p0: [487.53, 72.75], p1: [666.47, 10.11], p2: [858.77, 94.09], p3: [917.03, 260.34], steps: 42 },
    { type: 'C', p0: [917.03, 260.34], p1: [975.29, 426.59], p2: [877.46, 612.16], p3: [698.52, 674.81], steps: 42 },
    { type: 'L', p0: [698.52, 674.81], p1: [481.38, 750.83], steps: 16 },
    { type: 'C', p0: [481.38, 750.83], p1: [422.36, 771.50], p2: [358.93, 743.80], p3: [339.71, 688.96], steps: 26 },
    { type: 'C', p0: [339.71, 688.96], p1: [320.49, 634.12], p2: [352.76, 572.91], p3: [411.79, 552.24], steps: 26 },
    { type: 'L', p0: [411.79, 552.24], p1: [534.00, 507.46], steps: 14 },
  ]);

  const ARM_B = buildArmPolyline([
    { type: 'L', p0: [1380.44, 661.67], p1: [930.42, 819.06], steps: 26 },
    { type: 'L', p0: [930.42, 819.06], p1: [552.85, 951.12], steps: 22 },
    { type: 'C', p0: [552.85, 951.12], p1: [373.91, 1013.77], p2: [181.61, 929.79], p3: [123.35, 763.54], steps: 42 },
    { type: 'C', p0: [123.35, 763.54], p1: [65.09, 597.29], p2: [162.92, 411.72], p3: [341.86, 349.07], steps: 42 },
    { type: 'L', p0: [341.86, 349.07], p1: [561.89, 274.49], steps: 16 },
    { type: 'C', p0: [561.89, 274.49], p1: [617.25, 253.82], p2: [680.68, 281.52], p3: [699.90, 336.36], steps: 26 },
    { type: 'C', p0: [699.90, 336.36], p1: [719.12, 391.20], p2: [686.85, 452.41], p3: [627.82, 473.08], steps: 26 },
    { type: 'L', p0: [627.82, 473.08], p1: [505.60, 517.86], steps: 14 },
  ]);

  const ARMS = [ARM_A, ARM_B];
  const EXT_LEN = 476.8;
  const CENTER_X = 520;
  const CENTER_Y = 512;

  function sampleArm(arm, s) {
    const u = Math.max(0, Math.min(1, s / arm.totalLen));
    const f = u * (arm.count - 1);
    const i0 = Math.floor(f);
    const i1 = Math.min(arm.count - 1, i0 + 1);
    const frac = f - i0;
    return [
      arm.xs[i0] + (arm.xs[i1] - arm.xs[i0]) * frac,
      arm.ys[i0] + (arm.ys[i1] - arm.ys[i0]) * frac,
    ];
  }

  function mountProceduralLogo(root) {
    const canvas = root.querySelector('[data-site-logo-canvas]');
    const fallbackSvg = root.querySelector('.site-logo-fallback');
    if (!canvas || isReducedMotion()) return () => {};

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return () => {};

    const variant = root.dataset.logoVariant || 'inline';
    const isHero = variant === 'hero';
    // Independent logo interaction: only responds when hovering the Logo itself (never triggered by hovering title text)
    const hoverTarget = root;

    let destroyed = false;
    let visible = true;
    let rafId = 0;
    const ink = createInkAnimator(360);

    let hoverTargetVal = 0;
    let hoverProgress = 0;
    let hoverVel = 0;

    let boxSize = 48;
    let canvasSize = 112;
    let dpr = 1;
    let scaleUnit = 1;

    canvas.style.position = 'absolute';
    canvas.style.left = '50%';
    canvas.style.top = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    canvas.style.pointerEvents = 'none';
    canvas.style.display = 'block';
    canvas.style.maxWidth = 'none';

    function resize() {
      if (destroyed) return;
      const rect = root.getBoundingClientRect();
      const nextBox = Math.max(20, Math.round(rect.width || 32));
      const nextCanvas = Math.ceil(nextBox * (isHero ? 2.35 : 1.75));
      const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
      if (nextBox === boxSize && nextCanvas === canvasSize && nextDpr === dpr && canvas.width > 0) return;
      boxSize = nextBox;
      canvasSize = nextCanvas;
      dpr = nextDpr;
      canvas.width = Math.round(canvasSize * dpr);
      canvas.height = Math.round(canvasSize * dpr);
      canvas.style.width = `${canvasSize}px`;
      canvas.style.height = `${canvasSize}px`;
      scaleUnit = boxSize / 1120;
    }

    function drawComet(arm, headS, cometLen, sMin, baseStroke, inkCss) {
      const tailS = headS - cometLen;
      const visStart = Math.max(sMin, tailS);
      const visEnd = Math.min(arm.totalLen, headS);
      if (visEnd <= visStart + 1) return;

      const steps = isHero ? 44 : 26;
      const stepS = (visEnd - visStart) / steps;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = inkCss;

      for (let i = 0; i < steps; i++) {
        const s0 = visStart + i * stepS;
        const s1 = s0 + stepS;
        const sMid = (s0 + s1) * 0.5;
        const u = Math.max(0, Math.min(1, (sMid - tailS) / cometLen));
        const alpha = Math.pow(u, 2.05);
        if (alpha < 0.012) continue;

        const p0 = sampleArm(arm, s0);
        const p1 = sampleArm(arm, s1);
        const w = baseStroke * (0.70 + 0.30 * u);

        ctx.globalAlpha = alpha;
        ctx.lineWidth = w;
        ctx.beginPath();
        ctx.moveTo(p0[0], p0[1]);
        ctx.lineTo(p1[0], p1[1]);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    // Organic non-periodic comet emitters (per arm, natural varied intervals, allows organic overlap)
    const speed = 780;
    const cometLen = 920;
    const nextInterval = () => 0.35 + Math.random() * 0.85; // organic 0.35s .. 1.20s spacing (non-metronomic)
    const armComets = ARMS.map((arm) => {
      const list = [];
      let s = EXT_LEN + Math.random() * 280;
      while (s < arm.totalLen + cometLen * 0.6) {
        list.push({ headS: s });
        s += speed * nextInterval();
      }
      return list;
    });
    const spawnCountdown = ARMS.map(() => nextInterval() * 0.6);

    let lastTs = performance.now();

    function frame(now) {
      if (destroyed) return;
      if (!visible || document.hidden) {
        rafId = 0;
        return;
      }

      const elapsedMs = now - lastTs;
      // 顶栏小徽标在静止非悬停、非主题过渡时降频至 ~30fps，显著降低全站常驻 Canvas 功耗；悬停与主舞台保持全帧率
      const isIdleHeader = !isHero && hoverProgress < 0.005 && hoverTargetVal < 0.005 && Math.abs(hoverVel) < 0.01 && !ink.isAnimating();
      if (isIdleHeader && elapsedMs < 32) {
        rafId = requestAnimationFrame(frame);
        return;
      }

      const dt = Math.min(0.05, Math.max(0.001, elapsedMs * 0.001));
      lastTs = now;

      const stiffness = 120;
      const damping = 18;
      const force = (hoverTargetVal - hoverProgress) * stiffness;
      hoverVel += (force - hoverVel * damping) * dt;
      hoverProgress = Math.max(-0.02, Math.min(1.06, hoverProgress + hoverVel * dt));
      const h = Math.max(0, Math.min(1, hoverProgress));

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvasSize, canvasSize);

      const angleRad = -(isHero ? 30 : 20) * (Math.PI / 180) * h; // Counter-clockwise
      const scale = scaleUnit * (1 + (isHero ? 0.11 : 0.08) * h);

      ctx.save();
      ctx.translate(canvasSize * 0.5, canvasSize * 0.5);
      ctx.rotate(angleRad);
      ctx.scale(scale, scale);
      ctx.translate(-CENTER_X, -CENTER_Y);

      const extendFactor = isHero ? 1.0 : 0.52;
      const sMin = EXT_LEN * (1 - h * extendFactor);
      const baseStroke = 82;
      const inkCss = ink.css(now);

      for (let a = 0; a < ARMS.length; a++) {
        const arm = ARMS[a];
        const list = armComets[a];

        spawnCountdown[a] -= dt;
        if (spawnCountdown[a] <= 0) {
          list.push({ headS: sMin });
          spawnCountdown[a] = nextInterval();
        }

        for (let i = list.length - 1; i >= 0; i--) {
          const comet = list[i];
          comet.headS += speed * dt;
          if (comet.headS - cometLen > arm.totalLen) {
            list.splice(i, 1);
            continue;
          }
          drawComet(arm, comet.headS, cometLen, sMin, baseStroke, inkCss);
        }
      }

      ctx.restore();
      rafId = requestAnimationFrame(frame);
    }

    function ensureRunning() {
      if (destroyed || !visible || document.hidden) return;
      if (!rafId) {
        lastTs = performance.now();
        rafId = requestAnimationFrame(frame);
      }
    }

    const onEnter = () => { hoverTargetVal = 1; };
    const onLeave = () => { hoverTargetVal = 0; };
    const onResize = () => { requestAnimationFrame(resize); };
    hoverTarget.addEventListener('pointerenter', onEnter, { passive: true });
    hoverTarget.addEventListener('pointerleave', onLeave, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('site-brand-resized', onResize, { passive: true });

    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onResize) : null;
    if (ro) ro.observe(root);

    const io = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver((entries) => {
          visible = !!(entries[0] && entries[0].isIntersecting);
          if (visible) ensureRunning();
          else if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = 0;
          }
        }, { threshold: 0 })
      : null;
    if (io) io.observe(root);

    const themeMo = new MutationObserver(() => {
      ink.updateTarget(performance.now());
      ensureRunning();
    });
    themeMo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const onVis = () => {
      if (!document.hidden) ensureRunning();
      else if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };
    document.addEventListener('visibilitychange', onVis);

    resize();
    root.classList.add('is-procedural-ready');
    if (fallbackSvg) {
      fallbackSvg.style.opacity = '0';
      fallbackSvg.style.visibility = 'hidden';
    }
    ensureRunning();

    return () => {
      destroyed = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
      if (io) io.disconnect();
      themeMo.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('site-brand-resized', onResize);
      hoverTarget.removeEventListener('pointerenter', onEnter);
      hoverTarget.removeEventListener('pointerleave', onLeave);
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PART 2: PROCEDURAL TITLE — INTEGRATED SOLID INK + RADIAL CURSOR FLOW REVEAL
  // ═══════════════════════════════════════════════════════════════════════════
  function extractGlyphContours(alphaGrid, w, h, threshold = 128) {
    const TABLE = [
      [],
      [[3, 2]],
      [[2, 1]],
      [[3, 1]],
      [[1, 0]],
      [[3, 0], [1, 2]],
      [[2, 0]],
      [[3, 0]],
      [[0, 3]],
      [[0, 2]],
      [[0, 1], [2, 3]],
      [[0, 1]],
      [[1, 3]],
      [[1, 2]],
      [[2, 3]],
      [],
    ];

    function interp(v0, v1) {
      const d = v1 - v0;
      if (Math.abs(d) < 1e-4) return 0.5;
      return Math.max(0.05, Math.min(0.95, (threshold - v0) / d));
    }

    function edgePoint(edge, x, y, tl, tr, br, bl) {
      if (edge === 0) return [x + interp(tl, tr), y];
      if (edge === 1) return [x + 1, y + interp(tr, br)];
      if (edge === 2) return [x + interp(bl, br), y + 1];
      return [x, y + interp(tl, bl)];
    }

    const keyOf = (pt) => `${Math.round(pt[0] * 16)},${Math.round(pt[1] * 16)}`;
    const adj = new Map();

    for (let y = 0; y < h - 1; y++) {
      const row0 = y * w;
      const row1 = row0 + w;
      for (let x = 0; x < w - 1; x++) {
        const tl = alphaGrid[row0 + x];
        const tr = alphaGrid[row0 + x + 1];
        const br = alphaGrid[row1 + x + 1];
        const bl = alphaGrid[row1 + x];
        const code =
          (tl >= threshold ? 8 : 0) |
          (tr >= threshold ? 4 : 0) |
          (br >= threshold ? 2 : 0) |
          (bl >= threshold ? 1 : 0);
        const pairs = TABLE[code];
        if (!pairs.length) continue;

        for (let p = 0; p < pairs.length; p++) {
          const p0 = edgePoint(pairs[p][0], x, y, tl, tr, br, bl);
          const p1 = edgePoint(pairs[p][1], x, y, tl, tr, br, bl);
          const k0 = keyOf(p0);
          const k1 = keyOf(p1);
          if (k0 === k1) continue;
          let list = adj.get(k0);
          if (!list) {
            list = [];
            adj.set(k0, list);
          }
          list.push({ p0, p1, k1, used: false });
        }
      }
    }

    const loops = [];
    for (const [, edges] of adj) {
      for (let eIdx = 0; eIdx < edges.length; eIdx++) {
        const startEdge = edges[eIdx];
        if (startEdge.used) continue;
        startEdge.used = true;
        const pts = [startEdge.p0, startEdge.p1];
        let curKey = startEdge.k1;
        let guard = 0;
        while (guard++ < 12000) {
          const nextList = adj.get(curKey);
          if (!nextList) break;
          let picked = null;
          for (let k = 0; k < nextList.length; k++) {
            if (!nextList[k].used) {
              picked = nextList[k];
              break;
            }
          }
          if (!picked) break;
          picked.used = true;
          pts.push(picked.p1);
          curKey = picked.k1;
        }
        if (pts.length >= 10) loops.push(pts);
      }
    }

    const contours = [];
    for (const raw of loops) {
      const smooth = [];
      const n = raw.length;
      for (let i = 0; i < n; i++) {
        const a = raw[i];
        const b = raw[(i + 1) % n];
        smooth.push([a[0] * 0.75 + b[0] * 0.25, a[1] * 0.75 + b[1] * 0.25]);
        smooth.push([a[0] * 0.25 + b[0] * 0.75, a[1] * 0.25 + b[1] * 0.75]);
      }

      let bestIdx = 0;
      let bestScore = Infinity;
      for (let i = 0; i < smooth.length; i++) {
        const sc = smooth[i][0] * 0.35 + smooth[i][1];
        if (sc < bestScore) {
          bestScore = sc;
          bestIdx = i;
        }
      }
      const ordered = smooth.slice(bestIdx).concat(smooth.slice(0, bestIdx));

      const m = ordered.length;
      const cum = new Float32Array(m + 1);
      let sumX = 0;
      let minX = Infinity;
      let maxX = -Infinity;
      let total = 0;
      for (let i = 0; i < m; i++) {
        const ox = ordered[i][0];
        sumX += ox;
        if (ox < minX) minX = ox;
        if (ox > maxX) maxX = ox;
        const nx = ordered[(i + 1) % m];
        total += Math.hypot(nx[0] - ox, nx[1] - ordered[i][1]);
        cum[i + 1] = total;
      }
      if (total < 26) continue;

      const samples = Math.max(24, Math.min(240, Math.round(total * 0.55)));
      const xs = new Float32Array(samples);
      const ys = new Float32Array(samples);
      let cur = 0;
      for (let i = 0; i < samples; i++) {
        const targetS = (i / samples) * total;
        while (cur < m - 1 && cum[cur + 1] < targetS) cur++;
        const seg = cum[cur + 1] - cum[cur] || 1;
        const frac = Math.max(0, Math.min(1, (targetS - cum[cur]) / seg));
        const a = ordered[cur];
        const b = ordered[(cur + 1) % m];
        xs[i] = a[0] + (b[0] - a[0]) * frac;
        ys[i] = a[1] + (b[1] - a[1]) * frac;
      }

      contours.push({
        xs,
        ys,
        count: samples,
        totalLen: total,
        centerX: sumX / m,
        minX,
        maxX,
      });
    }

    return contours;
  }

  function sampleLoop(loop, s) {
    const wrapped = ((s % loop.totalLen) + loop.totalLen) % loop.totalLen;
    const f = (wrapped / loop.totalLen) * loop.count;
    const i0 = Math.floor(f) % loop.count;
    const i1 = (i0 + 1) % loop.count;
    const frac = f - Math.floor(f);
    return [
      loop.xs[i0] + (loop.xs[i1] - loop.xs[i0]) * frac,
      loop.ys[i0] + (loop.ys[i1] - loop.ys[i0]) * frac,
    ];
  }

  function mountProceduralTitle(root) {
    const canvas = root.querySelector('[data-site-title-canvas]');
    const fallback = root.querySelector('[data-site-title-fallback]');
    const readActiveLabel = () => {
      const isZh = document.documentElement.dataset.lang === 'zh';
      return (
        (isZh ? root.dataset.titleLabelZh : root.dataset.titleLabelEn) ||
        root.dataset.titleLabel ||
        ''
      ).trim();
    };
    let label = readActiveLabel();
    if (!canvas || !label || isReducedMotion()) return () => {};

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return () => {};

    let destroyed = false;
    let visible = true;
    let rafId = 0;
    const ink = createInkAnimator(360);
    let cachedRect = null;

    let w = 640;
    let h = 130;
    let dpr = 1;
    let contours = [];

    // Smooth radial mouse spotlight state (ONLY appears when cursor is near the title!)
    const pointer = {
      near: false,
      targetX: -9999,
      targetY: -9999,
      x: -9999,
      y: -9999,
      alpha: 0,
    };

    const glyphMaskCanvas = document.createElement('canvas');
    const glyphMaskCtx = glyphMaskCanvas.getContext('2d', { alpha: true });
    const bodyCanvas = document.createElement('canvas');
    const bodyCtx = bodyCanvas.getContext('2d', { alpha: true });
    const flowCanvas = document.createElement('canvas');
    const flowCtx = flowCanvas.getContext('2d', { alpha: true });

    function drawRestingSolid(now = performance.now()) {
      if (!ctx || !bodyCtx || !w || !h) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      bodyCtx.globalCompositeOperation = 'source-over';
      bodyCtx.clearRect(0, 0, w, h);
      bodyCtx.fillStyle = ink.css(now);
      bodyCtx.fillRect(0, 0, w, h);
      bodyCtx.globalCompositeOperation = 'destination-in';
      bodyCtx.drawImage(glyphMaskCanvas, 0, 0);
      bodyCtx.globalCompositeOperation = 'source-over';

      ctx.drawImage(bodyCanvas, 0, 0);
    }

    function buildGeometry() {
      if (destroyed) return;
      const cs = getComputedStyle(fallback || root);
      const fontFamily = cs.fontFamily || 'sans-serif';
      const fontWeight = cs.fontWeight || '900';
      const fontStyle = cs.fontStyle || 'normal';
      const canonicalSize = 112;
      const fontStr = `${fontStyle} ${fontWeight} ${canonicalSize}px ${fontFamily}`;

      const probe = document.createElement('canvas');
      const pctx = probe.getContext('2d');
      if (!pctx) return;
      pctx.font = fontStr;
      const m = pctx.measureText(label);
      const left = Math.ceil(Math.max(0, m.actualBoundingBoxLeft || 0)) + 16;
      const right = Math.ceil(m.actualBoundingBoxRight || m.width) + 20;
      const ascent = Math.ceil(m.actualBoundingBoxAscent || canonicalSize * 0.82) + 14;
      const descent = Math.ceil(m.actualBoundingBoxDescent || canonicalSize * 0.22) + 14;

      w = Math.max(80, left + right);
      h = Math.max(40, ascent + descent);

      glyphMaskCanvas.width = w;
      glyphMaskCanvas.height = h;
      if (!glyphMaskCtx) return;
      glyphMaskCtx.clearRect(0, 0, w, h);
      glyphMaskCtx.fillStyle = '#ffffff';
      glyphMaskCtx.font = fontStr;
      glyphMaskCtx.textBaseline = 'alphabetic';
      glyphMaskCtx.textAlign = 'left';
      glyphMaskCtx.fillText(label, left, ascent);

      const imgData = glyphMaskCtx.getImageData(0, 0, w, h).data;
      const alphaGrid = new Uint8Array(w * h);
      for (let i = 0; i < w * h; i++) alphaGrid[i] = imgData[i * 4 + 3];

      contours = extractGlyphContours(alphaGrid, w, h, 128);
      bodyCanvas.width = w;
      bodyCanvas.height = h;
      flowCanvas.width = w;
      flowCanvas.height = h;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.display = 'block';
      canvas.style.height = '1.1em';
      canvas.style.width = 'auto';
      canvas.style.maxWidth = 'none';
      canvas.style.aspectRatio = `${w} / ${h}`;

      root.classList.add('is-canvas-ready');
      if (fallback) {
        fallback.style.position = 'absolute';
        fallback.style.width = '1px';
        fallback.style.height = '1px';
        fallback.style.overflow = 'hidden';
        fallback.style.clip = 'rect(0, 0, 0, 0)';
        fallback.style.clipPath = 'inset(50%)';
      }

      cachedRect = null;
      drawRestingSolid();

      requestAnimationFrame(() => {
        cachedRect = null;
        window.dispatchEvent(new CustomEvent('site-brand-resized'));
      });
    }

    function drawLoopComet(targetCtx, loop, headS, cometLen, baseStroke, inkCss) {
      const tailS = headS - cometLen;
      const steps = Math.max(14, Math.min(30, Math.round(cometLen / 6)));
      const stepS = cometLen / steps;
      targetCtx.strokeStyle = inkCss;

      for (let i = 0; i < steps; i++) {
        const s0 = tailS + i * stepS;
        const s1 = s0 + stepS;
        const u = (i + 0.5) / steps; // 0 = tail -> 1 = leading head (brightest!)
        const alpha = Math.pow(u, 2.05);
        if (alpha < 0.015) continue;

        const p0 = sampleLoop(loop, s0);
        const p1 = sampleLoop(loop, s1);
        targetCtx.globalAlpha = alpha;
        targetCtx.lineWidth = baseStroke * (0.65 + 0.35 * u);
        targetCtx.beginPath();
        targetCtx.moveTo(p0[0], p0[1]);
        targetCtx.lineTo(p1[0], p1[1]);
        targetCtx.stroke();
      }
      targetCtx.globalAlpha = 1;
    }

    let lastTs = performance.now();
    let flowTime = 0;

    function frame(now) {
      if (destroyed) return;
      if (!visible || document.hidden || !contours.length) {
        rafId = 0;
        return;
      }

      const dt = Math.min(0.05, Math.max(0.001, (now - lastTs) * 0.001));
      lastTs = now;
      flowTime += dt; // Constant speed — never accelerates on hover!

      // Smoothly ease spotlight visibility and position
      const targetAlpha = pointer.near ? 1 : 0;
      pointer.alpha += (targetAlpha - pointer.alpha) * Math.min(1, dt * (pointer.near ? 9 : 6));
      if (pointer.near) {
        if (pointer.x < -5000) {
          pointer.x = pointer.targetX;
          pointer.y = pointer.targetY;
        } else {
          const follow = Math.min(1, dt * 18);
          pointer.x += (pointer.targetX - pointer.x) * follow;
          pointer.y += (pointer.targetY - pointer.y) * follow;
        }
      }

      const inkCss = ink.css(now);

      // Fully settled & pointer away -> draw crisp resting typography; keep animating only while theme color interpolates
      if (!pointer.near && pointer.alpha < 0.004) {
        pointer.alpha = 0;
        pointer.x = -9999;
        pointer.y = -9999;
        drawRestingSolid(now);
        if (ink.isAnimating()) {
          rafId = requestAnimationFrame(frame);
        } else {
          rafId = 0;
        }
        return;
      }

      const spotR = Math.max(125, h * 1.48); // Smooth local radial reveal around cursor
      const sx = pointer.x;
      const sy = pointer.y;
      const sa = pointer.alpha;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // 1) Solid typography layer: stays crisp solid ink outside cursor range,
      //    smoothly softens/hollows locally right inside the cursor spotlight so the flowing lines fuse into the letters!
      if (bodyCtx) {
        bodyCtx.globalCompositeOperation = 'source-over';
        bodyCtx.clearRect(0, 0, w, h);
        bodyCtx.fillStyle = inkCss;
        bodyCtx.fillRect(0, 0, w, h);

        // Soften solid fill locally with a smooth radial gradient centered on cursor (down to ~22% core fill)
        const carve = bodyCtx.createRadialGradient(sx, sy, 0, sx, sy, spotR);
        carve.addColorStop(0, `rgba(0, 0, 0, ${(0.78 * sa).toFixed(3)})`);
        carve.addColorStop(0.45, `rgba(0, 0, 0, ${(0.48 * sa).toFixed(3)})`);
        carve.addColorStop(0.82, `rgba(0, 0, 0, ${(0.12 * sa).toFixed(3)})`);
        carve.addColorStop(1, 'rgba(0, 0, 0, 0)');
        bodyCtx.globalCompositeOperation = 'destination-out';
        bodyCtx.fillStyle = carve;
        bodyCtx.fillRect(0, 0, w, h);

        // Clip cleanly to glyph mask
        bodyCtx.globalCompositeOperation = 'destination-in';
        bodyCtx.drawImage(glyphMaskCanvas, 0, 0);
        bodyCtx.globalCompositeOperation = 'source-over';

        ctx.drawImage(bodyCanvas, 0, 0);
      }

      // 2) Flowing tapered contour comets — rendered ONLY for contours near the cursor and radially feathered!
      if (flowCtx) {
        flowCtx.globalCompositeOperation = 'source-over';
        flowCtx.clearRect(0, 0, w, h);
        flowCtx.lineCap = 'round';
        flowCtx.lineJoin = 'round';

        const speed = 155; // Smooth constant flow speed
        const baseStroke = 2.65; // Clean, refined, non-glaring stroke width integrated with typography

        for (let c = 0; c < contours.length; c++) {
          const loop = contours[c];
          // Quick horizontal culling: skip glyphs completely outside cursor spotlight radius
          if (loop.maxX < sx - spotR || loop.minX > sx + spotR) continue;

          const L = loop.totalLen;
          // Clean, uncrowded comet count per glyph contour (calm & cohesive, never messy!)
          const cometCount = L < 240 ? 1 : 2;
          const spacing = L / cometCount;
          const cometLen = Math.min(spacing * 0.72, 118);
          const phaseOffset = (loop.centerX / Math.max(1, w)) * spacing * 0.65;

          for (let k = 0; k < cometCount; k++) {
            const headS = flowTime * speed + phaseOffset + k * spacing;
            drawLoopComet(flowCtx, loop, headS, cometLen, baseStroke, inkCss);
          }
        }

        // Smooth radial alpha spotlight mask: 100% right at cursor, gently fading to 0% at edge of radius!
        const reveal = flowCtx.createRadialGradient(sx, sy, 0, sx, sy, spotR);
        reveal.addColorStop(0, `rgba(0, 0, 0, ${(1.0 * sa).toFixed(3)})`);
        reveal.addColorStop(0.42, `rgba(0, 0, 0, ${(0.72 * sa).toFixed(3)})`);
        reveal.addColorStop(0.75, `rgba(0, 0, 0, ${(0.24 * sa).toFixed(3)})`);
        reveal.addColorStop(1, 'rgba(0, 0, 0, 0)');
        flowCtx.globalCompositeOperation = 'destination-in';
        flowCtx.fillStyle = reveal;
        flowCtx.fillRect(0, 0, w, h);
        flowCtx.globalCompositeOperation = 'source-over';

        ctx.drawImage(flowCanvas, 0, 0);
      }

      rafId = requestAnimationFrame(frame);
    }

    function wake() {
      if (destroyed || !visible || document.hidden || !contours.length) return;
      if (!rafId) {
        lastTs = performance.now();
        rafId = requestAnimationFrame(frame);
      }
    }

    const invalidateRect = () => { cachedRect = null; };

    // Track pointer smoothly when near the title (within 95px of its screen box)
    function onWindowPointerMove(e) {
      if (destroyed || !visible || !contours.length) return;
      if (!cachedRect) cachedRect = canvas.getBoundingClientRect();
      const rect = cachedRect;
      if (!rect.width || !rect.height) return;

      const margin = 95;
      const insideProximity =
        e.clientX >= rect.left - margin &&
        e.clientX <= rect.right + margin &&
        e.clientY >= rect.top - margin &&
        e.clientY <= rect.bottom + margin;

      if (insideProximity) {
        pointer.targetX = ((e.clientX - rect.left) / rect.width) * w;
        pointer.targetY = ((e.clientY - rect.top) / rect.height) * h;
        pointer.near = true;
        wake();
      } else if (pointer.near) {
        pointer.near = false;
        wake();
      }
    }

    function onWindowPointerLeave() {
      if (pointer.near) {
        pointer.near = false;
        wake();
      }
    }

    window.addEventListener('pointermove', onWindowPointerMove, { passive: true });
    window.addEventListener('scroll', invalidateRect, { passive: true });
    window.addEventListener('resize', invalidateRect, { passive: true });
    window.addEventListener('site-brand-resized', invalidateRect, { passive: true });
    document.addEventListener('pointerleave', onWindowPointerLeave, { passive: true });

    const io = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver((entries) => {
          visible = !!(entries[0] && entries[0].isIntersecting);
          if (visible) cachedRect = null;
          if (!visible && rafId) {
            cancelAnimationFrame(rafId);
            rafId = 0;
          }
        }, { threshold: 0 })
      : null;
    if (io) io.observe(root);

    const themeMo = new MutationObserver(() => {
      if (ink.updateTarget(performance.now()) && contours.length) {
        wake();
      }
    });
    themeMo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const onLangChange = () => {
      const next = readActiveLabel();
      if (!next || next === label) return;
      label = next;
      const rebuild = () => {
        if (!destroyed) buildGeometry();
      };
      if (document.fonts && typeof document.fonts.load === 'function') {
        Promise.allSettled([
          document.fonts.load('700 48px "Instrument Serif"', label),
          document.fonts.load('700 48px "Noto Serif SC"', label),
        ]).then(rebuild, rebuild);
      } else {
        rebuild();
      }
    };
    window.addEventListener('langchange', onLangChange);

    const onVis = () => {
      if (document.hidden && rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };
    document.addEventListener('visibilitychange', onVis);

    const boot = () => {
      if (destroyed) return;
      label = readActiveLabel() || label;
      buildGeometry();
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(boot).catch(boot);
    } else {
      boot();
    }
    const delayed = setTimeout(() => {
      if (!destroyed && !contours.length) boot();
    }, 260);

    return () => {
      destroyed = true;
      clearTimeout(delayed);
      if (rafId) cancelAnimationFrame(rafId);
      if (io) io.disconnect();
      themeMo.disconnect();
      window.removeEventListener('langchange', onLangChange);
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('pointermove', onWindowPointerMove);
      window.removeEventListener('scroll', invalidateRect);
      window.removeEventListener('resize', invalidateRect);
      window.removeEventListener('site-brand-resized', invalidateRect);
      document.removeEventListener('pointerleave', onWindowPointerLeave);
    };
  }

  function teardown() {
    while (cleanups.length) {
      const fn = cleanups.pop();
      try { fn(); } catch {}
    }
  }

  function initAll() {
    teardown();
    document.querySelectorAll('[data-site-logo]').forEach((el) => {
      cleanups.push(mountProceduralLogo(el));
    });
    document.querySelectorAll('[data-site-title][data-title-procedural="true"]').forEach((el) => {
      cleanups.push(mountProceduralTitle(el));
    });
  }

  const onPageLoad = () => initAll();
  const onBeforeSwap = () => teardown();
  document.addEventListener('astro:page-load', onPageLoad);
  document.addEventListener('astro:before-swap', onBeforeSwap);

  window.__SITE_BRAND_PROC_TEARDOWN__ = () => {
    teardown();
    document.removeEventListener('astro:page-load', onPageLoad);
    document.removeEventListener('astro:before-swap', onBeforeSwap);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll, { once: true });
  } else {
    initAll();
  }
})();
