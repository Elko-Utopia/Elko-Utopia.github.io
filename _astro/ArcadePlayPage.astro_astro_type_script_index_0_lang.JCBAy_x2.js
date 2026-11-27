const H=`html[data-portfolio-arcade] {
  --bar: 0px;
  --screen-width: min(100vw, calc(100vh * 4 / 3));
  color-scheme: normal;
  background: transparent !important;
}

html[data-portfolio-arcade] body,
html[data-portfolio-arcade] #wrap {
  background: transparent !important;
}

html[data-arcade-controls] {
  --bar: 46px;
  --screen-width: min(100vw, calc((100vh - var(--bar)) * 4 / 3));
}

html[data-portfolio-arcade] #wrap .game-player {
  display: grid !important;
  grid-template: var(--bar) minmax(0, 1fr) / minmax(0, 1fr);
  grid-template-areas: "top" "screen";
  place-items: center;
  position: relative;
  margin: 0;
  padding: 0;
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  border: 0;
  background: transparent !important;
}

html[data-portfolio-arcade] #wrap .game-embed {
  grid-area: screen;
  position: static !important;
  display: block;
  box-sizing: border-box;
  width: var(--screen-width) !important;
  height: calc(var(--screen-width) * 3 / 4) !important;
  max-width: 100% !important;
  max-height: 100% !important;
  aspect-ratio: 4 / 3;
  clip-path: none !important;
  border-radius: 0 !important;
  overflow: hidden;
  margin: 0 !important;
  padding: 0 !important;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: #000;
}

html[data-portfolio-arcade] #wrap #game-screen {
  position: static !important;
  box-sizing: border-box;
  height: 100% !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0;
  border-radius: 0;
  object-fit: fill;
  object-position: center;
  image-rendering: pixelated;
  background: #000;
}

html[data-portfolio-arcade] #wrap :is(.game-player-background, .game-player-msft, .game-joystick, .game-buttons, .game-sys-button-group) {
  display: none !important;
}

html[data-arcade-controls] #wrap .game-sys-button-group {
  display: flex !important;
  flex-wrap: wrap;
  position: absolute;
  z-index: 21;
  flex-direction: row;
  gap: 6px;
  top: max(10px, env(safe-area-inset-top));
  left: max(10px, env(safe-area-inset-left));
  bottom: auto;
  right: auto;
  width: auto;
  height: auto;
  margin: 0;
}

html[data-portfolio-arcade] #safari-mute-button-outer,
html[data-arcade-controls] #wrap .game-menu-button { display: none !important; }

html[data-arcade-controls] #wrap .game-sys-button {
  box-sizing: border-box;
  min-width: 36px;
  height: 36px;
  margin: 0;
  padding: 0 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  background: rgba(26, 29, 34, 0.9);
  color: #eef2f8;
  opacity: 1;
  font-family: 'Inter', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  line-height: 1;
}

html[data-arcade-controls] #wrap .game-sys-button.arcade-layout-edit {
  display: grid;
  place-items: center;
  padding: 0;
}

html[data-arcade-controls] #wrap .game-sys-button[hidden] {
  display: none !important;
}

html[data-arcade-controls] .arcade-layout-edit::before {
  content: '';
  display: block;
  width: 0.85em;
  height: 0.25em;
  background: currentColor;
  clip-path: polygon(0 50%, 22% 0, 100% 0, 100% 100%, 22% 100%);
  transform: rotate(-45deg);
}

html[data-arcade-controls] #wrap .arcade-editing {
  --edit-accent: #ef4444;
  --sim-button-stroke: var(--edit-accent);
}

html[data-arcade-controls] #wrap .arcade-editing::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid var(--edit-accent);
  pointer-events: none;
  z-index: 20;
}

html[data-arcade-controls] #wrap .arcade-editing .game-sys-button {
  border-color: var(--edit-accent);
}

html[data-arcade-controls] .arcade-editing :is(.button-a, .button-b, .game-joystick) {
  cursor: grab;
}

html[data-arcade-controls] {
  --control-size: clamp(48px, min(28vw, 24vh), 320px);
  --screen-width: min(100vw, calc((100vh - var(--bar) - var(--control-size) - 8px) * 4 / 3));
}

html[data-arcade-controls] #wrap .game-player {
  grid-template: var(--bar) minmax(0, 1fr) calc(var(--control-size) + 8px) / minmax(0, 1fr) minmax(0, 1fr);
  grid-template-areas: "top top" "screen screen" "directions actions";
}

html[data-arcade-controls] #wrap :is(.game-joystick, .game-buttons) {
  display: block !important;
  position: static !important;
  width: var(--control-size) !important;
  height: var(--control-size) !important;
  max-width: none !important;
  max-height: none !important;
  margin: 0;
  opacity: 1;
  touch-action: none;
}

html[data-arcade-controls] .game-joystick {
  grid-area: directions;
  border-radius: 50%;
  -webkit-mask-image: radial-gradient(circle closest-side, #000 99%, transparent);
  mask-image: radial-gradient(circle closest-side, #000 99%, transparent);
}
html[data-arcade-controls] :is(.game-joystick, .game-joystick-svg) {
  background: transparent !important;
  -webkit-tap-highlight-color: transparent;
}
html[data-arcade-controls] .game-joystick * { -webkit-tap-highlight-color: transparent; }
html[data-arcade-controls] .game-buttons { grid-area: actions; overflow: visible; pointer-events: none; z-index: 3; }
html[data-arcade-controls] #wrap .game-button-svg { overflow: visible; pointer-events: none; }
html[data-arcade-controls] #wrap .game-button-svg circle { pointer-events: auto; fill: rgba(24, 27, 32, 0.86) !important; stroke: rgba(255, 255, 255, 0.24) !important; stroke-width: 2px !important; transition: fill 120ms ease, stroke 120ms ease; }
html[data-arcade-controls] #wrap .game-button-svg circle:is(.pressed, :active) { fill: rgba(110, 136, 255, 0.28) !important; stroke: #6e88ff !important; }
html[data-arcade-controls] #wrap .game-button-svg text { pointer-events: none; fill: #f1f5f9 !important; font-family: 'JetBrains Mono', 'Inter', sans-serif !important; font-weight: 600 !important; }
html[data-arcade-controls] #wrap .game-joystick { z-index: 2; pointer-events: auto; }
html[data-arcade-controls] #wrap .game-joystick-svg > circle:first-of-type { fill: rgba(24, 27, 32, 0.78) !important; stroke: rgba(255, 255, 255, 0.2) !important; stroke-width: 2px !important; }
html[data-arcade-controls] #wrap .game-joystick-svg :is(circle:not(:first-of-type), path, rect) { fill: rgba(42, 47, 56, 0.92) !important; stroke: rgba(255, 255, 255, 0.28) !important; stroke-width: 1.75px !important; }
html[data-arcade-controls] #wrap .arcade-editing .game-button-svg circle,
html[data-arcade-controls] #wrap .arcade-editing .game-joystick-svg circle { stroke: #ef4444 !important; }
html[data-arcade-controls] :is(.game-joystick-svg, .game-button-svg) { width: 100%; height: 100%; }

@media (orientation: landscape) {
  html[data-arcade-controls] {
    --control-size: clamp(48px, min(16vw, 34vh), 320px);
    --rail: calc(max(112px, var(--control-size)) + 8px);
    --screen-width: min(calc(100vw - 2 * var(--rail)), calc(100vh * 4 / 3));
  }
  html[data-arcade-controls] #wrap .game-player {
    grid-template: minmax(0, 1fr) / var(--rail) minmax(0, 1fr) var(--rail);
    grid-template-areas: "directions screen actions";
  }
}

/* Right-side page controls live in the host, outside the simulator iframe. */
@media (max-width: 520px) {
  html[data-arcade-controls] { --bar: 86px; }
  html[data-arcade-controls] #wrap .game-sys-button-group { max-width: calc(100% - 176px); }
}
@media (orientation: landscape) {
  html[data-arcade-controls] #wrap .game-player { grid-template-rows: var(--bar) minmax(0, 1fr); grid-template-areas: "top top top" "directions screen actions"; }
  html[data-arcade-controls] { --screen-width: min(calc(100vw - 2 * var(--rail)), calc((100vh - var(--bar)) * 4 / 3)); }
}
`;function D(E){return E?{start:"开始游戏",loading:"正在加载…",error:"游戏加载失败。",retry:"重试",pause:"暂停",resume:"继续",reset:"重置",back:"返回",fullscreen:"全屏",exitFullscreen:"退出全屏",editLayout:"编辑按键位置",resetLayout:"恢复默认位置",mute:"静音",unmute:"取消静音",volume:"音量",soundControls:"声音控制"}:{start:"Start Game",loading:"Loading…",error:"The game could not load.",retry:"Try again",pause:"Pause",resume:"Resume",reset:"Reset",back:"Back",fullscreen:"Fullscreen",exitFullscreen:"Exit fullscreen",editLayout:"Edit button positions",resetLayout:"Reset positions",mute:"Mute",unmute:"Unmute",volume:"Volume",soundControls:"Sound controls"}}function $(E,x,d,C){if(E.querySelector(".arcade-layout-edit"))return;const p=E.closest(".game-player"),M=p.querySelector(".game-button-svg"),m=p.querySelector(".game-joystick"),h=["a","b"].map(n=>{const t=M.querySelector(".button-"+n),e=M.querySelector(".label-"+n);return{name:n,circle:t,label:e,x:t.cx.baseVal.value,y:t.cy.baseVal.value}}),P=h.map((n,t)=>[h[1-t].x,h[1-t].y]);let s=C?.positions??{};const v=n=>parent.postMessage(n,d);function k(n,t){const e=document.createElement("button");return e.type="button",e.className="game-sys-button no-select",e.textContent=n,e.onclick=t,e}const g=k("",()=>{b.hidden=!b.hidden,b.hidden&&l&&(p.hasPointerCapture(l.id)&&p.releasePointerCapture(l.id),l=void 0,r()),g.setAttribute("aria-expanded",String(!b.hidden)),p.classList.toggle("arcade-editing",!b.hidden)});g.classList.add("arcade-layout-edit"),g.title=x.editLayout,g.setAttribute("aria-label",x.editLayout),g.setAttribute("aria-expanded","false");const b=k(x.resetLayout,()=>{s={},w(),r()});b.hidden=!0,E.append(g,b);function r(){v({type:"portfolio-arcade:layout",layout:{positions:s}})}function L(){s={},w(),r()}function w(){const n=p.getBoundingClientRect(),t=M.getScreenCTM()?.inverse();if(!t)return;const e=o=>new DOMPoint(n.left+o[0]*n.width,n.top+o[1]*n.height);if(h.forEach((o,c)=>{const u=s[o.name],S=u&&e(u).matrixTransform(t),[T,q]=S?[S.x,S.y]:P[c],F=`translate(${T-o.x} ${q-o.y})`;o.circle.setAttribute("transform",F),o.label.setAttribute("transform",F)}),m.style.translate="",s.directions){const o=e(s.directions),c=m.getBoundingClientRect();m.style.translate=`${o.x-c.left-c.width/2}px ${o.y-c.top-c.height/2}px`}}let l;p.addEventListener("pointerdown",n=>{if(b.hidden||l||n.button!==0)return;const t=h.find(c=>n.target===c.circle||n.target===c.label),e=t?.circle??(m.contains(n.target)?m:null);if(!e)return;n.preventDefault(),n.stopImmediatePropagation();const o=e.getBoundingClientRect();l={id:n.pointerId,name:t?.name??"directions",x:n.clientX-(o.left+o.width/2),y:n.clientY-(o.top+o.height/2),halfWidth:o.width/2,halfHeight:o.height/2},p.setPointerCapture(l.id)},!0),p.addEventListener("pointermove",n=>{if(b.hidden||n.pointerId!==l?.id)return;n.stopImmediatePropagation();const t=p.getBoundingClientRect(),e=E.getBoundingClientRect().bottom-t.top,o=(S,T,q)=>Math.min(Math.max(S,T),q),c=o(n.clientX-l.x-t.left,l.halfWidth,t.width-l.halfWidth),u=o(n.clientY-l.y-t.top,e+l.halfHeight,t.height-l.halfHeight);s[l.name]=[c/t.width,u/t.height],w()},!0);const A=n=>{n.pointerId===l?.id&&(n.stopImmediatePropagation(),l=void 0,r())};p.addEventListener("pointerup",A,!0),p.addEventListener("pointercancel",A,!0);let y={w:window.innerWidth,h:window.innerHeight},f=!1;screen.orientation?.addEventListener&&screen.orientation.addEventListener("change",()=>{f=!0}),window.addEventListener("resize",()=>{const n=window.innerWidth,t=window.innerHeight,e=y.w<y.h,o=n>t,c=Math.abs(n-y.w)>=120&&Math.abs(t-y.h)>=80||Math.abs(n-y.w)>=240;if(Object.keys(s).length>0&&e&&o&&(f||c)){f=!1,y={w:n,h:t},L();return}f=!1,y={w:n,h:t},w()}),w()}function G(E,x,d,C,p,M){const m=document.documentElement;if(m.dataset.portfolioArcade="",m.dataset.arcadeControls="",!document.getElementById("portfolio-arcade-style")){const r=document.createElement("style");r.id="portfolio-arcade-style",r.textContent=E,document.head.append(r)}if(document.querySelector(".label-a").textContent="Z",document.querySelector(".label-b").textContent="X",!globalThis.__portfolioAudioBridge){let y=function(t){let e=L.get(t);return e||(e=t.createGain(),e.gain.value=A(),l.call(e,t.destination),L.set(t,e),w.add(t)),e},f=function(){if(r.muted||r.volume<=0)return;w.forEach(e=>{e.state==="suspended"&&e.resume?.().catch(()=>{})});const t=globalThis.pxsim?.AudioContextManager?.context?.();t&&t.state==="suspended"&&t.resume?.().catch(()=>{})},n=function(t,e){typeof t=="number"&&Number.isFinite(t)&&(r.volume=Math.max(0,Math.min(1,t))),typeof e=="boolean"&&(r.muted=e);const o=A();w.forEach(c=>{const u=L.get(c);u&&u.gain.setTargetAtTime(o,c.currentTime,.015)}),globalThis.pxsim?.AudioContextManager?.mute?.(r.muted||r.volume<=0),o>0&&f()};var k=y,g=f,b=n;const r={volume:.8,muted:!1},L=new WeakMap,w=new Set,l=globalThis.AudioNode?.prototype?.connect,A=()=>r.muted?0:Math.max(0,Math.min(1,r.volume));l&&(globalThis.AudioNode.prototype.connect=function(e,...o){const c=this?.context;if(c&&e===c.destination){const u=y(c);if(this!==u)return l.call(this,u,...o),e}return l.call(this,e,...o)}),globalThis.addEventListener("message",t=>{t.origin===d&&t.data?.type==="portfolio-arcade:audio"&&n(t.data.volume,t.data.muted)}),globalThis.addEventListener("pointerdown",f,{capture:!0,passive:!0}),globalThis.addEventListener("keydown",f,{capture:!0,passive:!0}),globalThis.__portfolioAudioBridge={applyAudio:n,state:r}}globalThis.__portfolioAudioBridge.applyAudio(p?.volume??.8,!!p?.muted);const h=document.querySelector(".game-sys-button-group");M(h,x,d,C);const P=h.querySelector(".game-reset-button");let s=h.querySelector(".game-pause-button");s||(s=document.createElement("button"),s.type="button",s.className="game-sys-button game-pause-button no-select",h.prepend(s)),P.title=x.reset;const v=r=>{s.textContent=r?x.resume:x.pause,s.setAttribute("aria-pressed",String(r))};v(!1),s.onclick=()=>{const r=globalThis.pxsim.runtime;!r?.running||r.dead||(r.pausedOnBreakpoint?(r.resumeAllPausedScheduled(),r.board.onDebuggerResume()):r.pauseScheduled(),v(r.pausedOnBreakpoint))}}class K extends HTMLElement{connectedCallback(){if(this.lifecycle)return;const x=this.lifecycle=new AbortController,{signal:d}=x,C=this.querySelector("[data-start]"),p=this.querySelector("[data-screen]"),M=this.querySelector("[data-status]"),m=D(document.documentElement.lang.startsWith("zh")),h=this.querySelector("[data-fullscreen]"),P=this.querySelector("[data-back]"),s=this.querySelector("[data-audio]"),v=this.querySelector("[data-audio-toggle]"),k=this.querySelector("[data-audio-popover-mute]"),g=this.querySelector("[data-volume]"),b=this.querySelector("[data-volume-value]"),r=()=>{const a=document.referrer?new URL(document.referrer):null,i=location.pathname.replace(/\/play\/[^/]+\/?$/,this.dataset.game==="boss-rush"?"/portfolio/personal/boss-rush/":"/portfolio/scad/game121/");a?.origin===location.origin&&history.length>1?history.back():location.assign(i)};P.addEventListener("click",r,{signal:d});const L=()=>{const a=document.fullscreenElement===this||document.webkitFullscreenElement===this;h.textContent=a?m.exitFullscreen:m.fullscreen,h.setAttribute("aria-pressed",String(a))},w=this.requestFullscreen||this.webkitRequestFullscreen;h.disabled=!w||document.fullscreenEnabled===!1&&!document.webkitFullscreenEnabled,h.addEventListener("click",async()=>{try{document.fullscreenElement||document.webkitFullscreenElement?await(document.exitFullscreen||document.webkitExitFullscreen).call(document):await w.call(this)}catch(a){console.warn("Fullscreen unavailable",a)}L(),e?.focus()},{signal:d}),document.addEventListener("fullscreenchange",L,{signal:d}),document.addEventListener("webkitfullscreenchange",L,{signal:d});const l="portfolio-arcade:"+this.dataset.game,A="portfolio-arcade-layout",y="portfolio-arcade-audio",f=Object.create(null);let n=null;const t={volume:.8,muted:!1,lastVolume:.8};try{Object.assign(f,JSON.parse(localStorage.getItem(l))),n=JSON.parse(localStorage.getItem(A));const a=JSON.parse(localStorage.getItem(y));if(a&&typeof a.volume=="number"&&Number.isFinite(a.volume)){const i=Math.max(.05,Math.min(1,a.volume));t.volume=i,t.lastVolume=i}}catch{}let e,o,c,u,S,T;const q=a=>e?.contentWindow?.postMessage(a,u.origin),F=a=>{M.textContent=a,M.hidden=!a},I=()=>window.matchMedia("(max-width: 639px)").matches,_=()=>{try{localStorage.setItem(y,JSON.stringify({volume:t.lastVolume}))}catch{}},N=()=>{if(!e||!u)return;const a=t.muted||t.volume<=0;q({type:"mute",mute:a}),q({type:"portfolio-arcade:audio",volume:t.volume,muted:a})},j=()=>{if(!s)return;const a=t.muted||t.volume<=0,i=a?0:Math.round(t.volume*100),z=a?"muted":i<=50?"low":"high",B=a?m.unmute:m.mute;if(s.dataset.audioState=z,g&&(g.value=String(i),g.setAttribute("aria-label",m.volume),g.setAttribute("aria-valuetext",i+"%")),b&&(b.textContent=i+"%"),v){const J=I(),U=J?m.soundControls:B;v.title=U,v.setAttribute("aria-label",U),v.setAttribute("aria-pressed",String(J?s.classList.contains("is-open"):a))}k&&(k.title=B,k.setAttribute("aria-label",B),k.setAttribute("aria-pressed",String(a)))},O=()=>{t.muted||t.volume<=0?(t.muted=!1,t.volume<=0&&(t.volume=t.lastVolume||.8)):t.muted=!0,j(),N()};v&&v.addEventListener("click",()=>{I()?(s.classList.toggle("is-open"),j()):(O(),e?.focus())},{signal:d}),k&&k.addEventListener("click",()=>{O()},{signal:d}),g&&(g.addEventListener("input",()=>{const a=Math.max(0,Math.min(100,Number(g.value)||0));t.volume=a/100,a>0?(t.muted=!1,t.lastVolume=t.volume,_()):t.muted=!0,j(),N()},{signal:d}),g.addEventListener("change",()=>{e?.focus()},{signal:d})),document.addEventListener("pointerdown",a=>{s?.classList.contains("is-open")&&!s.contains(a.target)&&(s.classList.remove("is-open"),j())},{signal:d}),window.addEventListener("resize",()=>{!I()&&s?.classList.contains("is-open")&&s.classList.remove("is-open"),j()},{signal:d}),j();function R(){const a={volume:t.volume,muted:t.muted||t.volume<=0},i=[H,m,location.origin,n,a].map(z=>JSON.stringify(z)).join(",");q({type:"run",mute:a.muted,code:"(function(context) { ("+G.toString()+")("+i+", "+$.toString()+"); const factory = "+c+`
; return factory(context); })`,cdnUrl:o.cdnUrl,version:o.target,options:{theme:"green",player:""},storedState:f,frameCounter:1,parts:[],partDefinitions:{},id:"portfolio-"+l})}function V(){clearTimeout(T),S?.abort(),e?.remove(),e=void 0,C.textContent=m.retry,C.hidden=!1,F(m.error)}const W=async()=>{C.hidden=!0,F(m.loading),S=new AbortController,T=setTimeout(V,25e3);try{const a=await fetch(this.dataset.build,{signal:S.signal});if(!a.ok)throw new Error("Missing compiled game");const i=await a.text(),z=i.match(/^\/\/\s+meta=([^\r\n]+)/m);if(!z)throw new Error("Missing MakeCode metadata");if(o=JSON.parse(z[1]),u=new URL(o.simUrl),u.origin!=="https://trg-arcade.userpxt.io")throw new Error("Unexpected MakeCode origin");u.searchParams.set("noExtraPadding","1"),c=i,e=document.createElement("iframe"),e.title=this.dataset.title,e.allow="autoplay; gamepad; fullscreen 'none'",e.sandbox="allow-scripts allow-same-origin",e.setAttribute("allowtransparency","true"),e.style.colorScheme="normal",e.style.background="transparent",e.style.opacity="0",e.style.transition="opacity 180ms ease",e.src=u.href,p.replaceChildren(e)}catch(a){!d.aborted&&a.name!=="AbortError"&&V()}};C.addEventListener("click",W,{signal:d}),window.addEventListener("message",a=>{if(!e||a.source!==e.contentWindow||a.origin!==u.origin)return;const i=a.data;if(i?.type==="ready")R();else if(i?.type==="status"&&i.state==="running")clearTimeout(T),F(""),e.style.opacity="1",N(),e.focus();else if(i?.type==="simulator"&&i.command==="restart")R();else if(i?.type==="portfolio-arcade:layout"){n=i.layout;try{localStorage.setItem(A,JSON.stringify(n))}catch{}}else if(i?.type==="portfolio-arcade:back")r();else if(i?.type==="simulator"&&i.command==="setstate"){i.stateValue==null?delete f[i.stateKey]:f[i.stateKey]=i.stateValue;try{localStorage.setItem(l,JSON.stringify(f))}catch{}}},{signal:d}),d.addEventListener("abort",()=>{clearTimeout(T),S?.abort(),e?.remove()},{once:!0}),W()}disconnectedCallback(){this.lifecycle?.abort(),this.lifecycle=null}}customElements.get("arcade-player")||customElements.define("arcade-player",K);
