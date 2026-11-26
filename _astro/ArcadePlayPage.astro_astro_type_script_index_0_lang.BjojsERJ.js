const H=`html[data-portfolio-arcade] {\r
  --bar: 0px;\r
  --screen-width: min(100vw, calc(100vh * 4 / 3));\r
  background: #000;\r
}\r
\r
html[data-arcade-controls] {\r
  --bar: 46px;\r
  --screen-width: min(100vw, calc((100vh - var(--bar)) * 4 / 3));\r
}\r
\r
html[data-portfolio-arcade] #wrap .game-player {\r
  display: grid !important;\r
  grid-template: var(--bar) minmax(0, 1fr) / minmax(0, 1fr);\r
  grid-template-areas: "top" "screen";\r
  place-items: center;\r
  position: relative;\r
  margin: 0;\r
  padding: 0;\r
  width: 100% !important;\r
  height: 100% !important;\r
  max-width: none !important;\r
  border: 0;\r
  background: #000;\r
}\r
\r
html[data-portfolio-arcade] #wrap .game-embed {\r
  grid-area: screen;\r
  position: static !important;\r
  display: block;\r
  box-sizing: border-box;\r
  width: var(--screen-width) !important;\r
  height: auto !important;\r
  max-width: 100% !important;\r
  max-height: none !important;\r
  aspect-ratio: 4 / 3;\r
  clip-path: none !important;\r
  border-radius: 0;\r
  margin: 0 !important;\r
  padding: 0 !important;\r
  border: 0;\r
}\r
\r
html[data-portfolio-arcade] #wrap #game-screen {\r
  position: static !important;\r
  box-sizing: border-box;\r
  height: 100% !important;\r
  width: 100% !important;\r
  margin: 0 !important;\r
  padding: 0 !important;\r
  border: 0;\r
  border-radius: 0;\r
  object-fit: contain;\r
  object-position: center;\r
  image-rendering: pixelated;\r
}\r
\r
html[data-portfolio-arcade] #wrap :is(.game-player-background, .game-player-msft, .game-joystick, .game-buttons, .game-sys-button-group) {\r
  display: none !important;\r
}\r
\r
html[data-arcade-controls] #wrap .game-sys-button-group {\r
  display: flex !important;\r
  flex-wrap: wrap;\r
  position: absolute;\r
  z-index: 21;\r
  flex-direction: row;\r
  gap: 6px;\r
  top: max(10px, env(safe-area-inset-top));\r
  left: max(10px, env(safe-area-inset-left));\r
  bottom: auto;\r
  right: auto;\r
  width: auto;\r
  height: auto;\r
  margin: 0;\r
}\r
\r
html[data-portfolio-arcade] #safari-mute-button-outer,\r
html[data-arcade-controls] #wrap .game-menu-button { display: none !important; }\r
\r
html[data-arcade-controls] #wrap .game-sys-button {\r
  box-sizing: border-box;\r
  min-width: 36px;\r
  height: 36px;\r
  margin: 0;\r
  padding: 0 12px;\r
  border: 1px solid rgba(255, 255, 255, 0.16);\r
  border-radius: 8px;\r
  background: rgba(26, 29, 34, 0.9);\r
  color: #eef2f8;\r
  opacity: 1;\r
  font-family: 'Inter', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r
  font-size: 13.5px;\r
  font-weight: 500;\r
  line-height: 1;\r
}\r
\r
html[data-arcade-controls] #wrap .game-sys-button.arcade-layout-edit {\r
  display: grid;\r
  place-items: center;\r
  padding: 0;\r
}\r
\r
html[data-arcade-controls] #wrap .game-sys-button[hidden] {\r
  display: none !important;\r
}\r
\r
html[data-arcade-controls] .arcade-layout-edit::before {\r
  content: '';\r
  display: block;\r
  width: 0.85em;\r
  height: 0.25em;\r
  background: currentColor;\r
  clip-path: polygon(0 50%, 22% 0, 100% 0, 100% 100%, 22% 100%);\r
  transform: rotate(-45deg);\r
}\r
\r
html[data-arcade-controls] #wrap .arcade-editing {\r
  --edit-accent: #ef4444;\r
  --sim-button-stroke: var(--edit-accent);\r
}\r
\r
html[data-arcade-controls] #wrap .arcade-editing::after {\r
  content: '';\r
  position: absolute;\r
  inset: 0;\r
  border: 2px solid var(--edit-accent);\r
  pointer-events: none;\r
  z-index: 20;\r
}\r
\r
html[data-arcade-controls] #wrap .arcade-editing .game-sys-button {\r
  border-color: var(--edit-accent);\r
}\r
\r
html[data-arcade-controls] .arcade-editing :is(.button-a, .button-b, .game-joystick) {\r
  cursor: grab;\r
}\r
\r
html[data-arcade-controls] {\r
  --control-size: clamp(48px, min(28vw, 24vh), 320px);\r
  --screen-width: min(100vw, calc((100vh - var(--bar) - var(--control-size) - 8px) * 4 / 3));\r
}\r
\r
html[data-arcade-controls] #wrap .game-player {\r
  grid-template: var(--bar) minmax(0, 1fr) calc(var(--control-size) + 8px) / minmax(0, 1fr) minmax(0, 1fr);\r
  grid-template-areas: "top top" "screen screen" "directions actions";\r
}\r
\r
html[data-arcade-controls] #wrap :is(.game-joystick, .game-buttons) {\r
  display: block !important;\r
  position: static !important;\r
  width: var(--control-size) !important;\r
  height: var(--control-size) !important;\r
  max-width: none !important;\r
  max-height: none !important;\r
  margin: 0;\r
  opacity: 1;\r
  touch-action: none;\r
}\r
\r
html[data-arcade-controls] .game-joystick {\r
  grid-area: directions;\r
  border-radius: 50%;\r
  -webkit-mask-image: radial-gradient(circle closest-side, #000 99%, transparent);\r
  mask-image: radial-gradient(circle closest-side, #000 99%, transparent);\r
}\r
html[data-arcade-controls] :is(.game-joystick, .game-joystick-svg) {\r
  background: transparent !important;\r
  -webkit-tap-highlight-color: transparent;\r
}\r
html[data-arcade-controls] .game-joystick * { -webkit-tap-highlight-color: transparent; }\r
html[data-arcade-controls] .game-buttons { grid-area: actions; overflow: visible; pointer-events: none; z-index: 3; }\r
html[data-arcade-controls] #wrap .game-button-svg { overflow: visible; pointer-events: none; }\r
html[data-arcade-controls] #wrap .game-button-svg circle { pointer-events: auto; fill: rgba(24, 27, 32, 0.86) !important; stroke: rgba(255, 255, 255, 0.24) !important; stroke-width: 2px !important; transition: fill 120ms ease, stroke 120ms ease; }\r
html[data-arcade-controls] #wrap .game-button-svg circle:is(.pressed, :active) { fill: rgba(110, 136, 255, 0.28) !important; stroke: #6e88ff !important; }\r
html[data-arcade-controls] #wrap .game-button-svg text { pointer-events: none; fill: #f1f5f9 !important; font-family: 'JetBrains Mono', 'Inter', sans-serif !important; font-weight: 600 !important; }\r
html[data-arcade-controls] #wrap .game-joystick { z-index: 2; pointer-events: auto; }\r
html[data-arcade-controls] #wrap .game-joystick-svg > circle:first-of-type { fill: rgba(24, 27, 32, 0.78) !important; stroke: rgba(255, 255, 255, 0.2) !important; stroke-width: 2px !important; }\r
html[data-arcade-controls] #wrap .game-joystick-svg :is(circle:not(:first-of-type), path, rect) { fill: rgba(42, 47, 56, 0.92) !important; stroke: rgba(255, 255, 255, 0.28) !important; stroke-width: 1.75px !important; }\r
html[data-arcade-controls] #wrap .arcade-editing .game-button-svg circle,\r
html[data-arcade-controls] #wrap .arcade-editing .game-joystick-svg circle { stroke: #ef4444 !important; }\r
html[data-arcade-controls] :is(.game-joystick-svg, .game-button-svg) { width: 100%; height: 100%; }\r
\r
@media (orientation: landscape) {\r
  html[data-arcade-controls] {\r
    --control-size: clamp(48px, min(16vw, 34vh), 320px);\r
    --rail: calc(max(112px, var(--control-size)) + 8px);\r
    --screen-width: min(calc(100vw - 2 * var(--rail)), calc(100vh * 4 / 3));\r
  }\r
  html[data-arcade-controls] #wrap .game-player {\r
    grid-template: minmax(0, 1fr) / var(--rail) minmax(0, 1fr) var(--rail);\r
    grid-template-areas: "directions screen actions";\r
  }\r
}\r

/* Right-side page controls live in the host, outside the simulator iframe. */
@media (max-width: 520px) {
  html[data-arcade-controls] { --bar: 86px; }
  html[data-arcade-controls] #wrap .game-sys-button-group { max-width: calc(100% - 176px); }
}
@media (orientation: landscape) {
  html[data-arcade-controls] #wrap .game-player { grid-template-rows: var(--bar) minmax(0, 1fr); grid-template-areas: "top top top" "directions screen actions"; }
  html[data-arcade-controls] { --screen-width: min(calc(100vw - 2 * var(--rail)), calc((100vh - var(--bar)) * 4 / 3)); }
}
`;function D(E){return E?{start:"开始游戏",loading:"正在加载…",error:"游戏加载失败。",retry:"重试",pause:"暂停",resume:"继续",reset:"重置",back:"返回",fullscreen:"全屏",exitFullscreen:"退出全屏",editLayout:"编辑按键位置",resetLayout:"恢复默认位置",mute:"静音",unmute:"取消静音",volume:"音量",soundControls:"声音控制"}:{start:"Start Game",loading:"Loading…",error:"The game could not load.",retry:"Try again",pause:"Pause",resume:"Resume",reset:"Reset",back:"Back",fullscreen:"Fullscreen",exitFullscreen:"Exit fullscreen",editLayout:"Edit button positions",resetLayout:"Reset positions",mute:"Mute",unmute:"Unmute",volume:"Volume",soundControls:"Sound controls"}}function $(E,x,d,C){if(E.querySelector(".arcade-layout-edit"))return;const p=E.closest(".game-player"),M=p.querySelector(".game-button-svg"),u=p.querySelector(".game-joystick"),h=["a","b"].map(r=>{const t=M.querySelector(".button-"+r),e=M.querySelector(".label-"+r);return{name:r,circle:t,label:e,x:t.cx.baseVal.value,y:t.cy.baseVal.value}}),P=h.map((r,t)=>[h[1-t].x,h[1-t].y]);let s=C?.positions??{};const w=r=>parent.postMessage(r,d);function k(r,t){const e=document.createElement("button");return e.type="button",e.className="game-sys-button no-select",e.textContent=r,e.onclick=t,e}const g=k("",()=>{b.hidden=!b.hidden,b.hidden&&l&&(p.hasPointerCapture(l.id)&&p.releasePointerCapture(l.id),l=void 0,o()),g.setAttribute("aria-expanded",String(!b.hidden)),p.classList.toggle("arcade-editing",!b.hidden)});g.classList.add("arcade-layout-edit"),g.title=x.editLayout,g.setAttribute("aria-label",x.editLayout),g.setAttribute("aria-expanded","false");const b=k(x.resetLayout,()=>{s={},v(),o()});b.hidden=!0,E.append(g,b);function o(){w({type:"portfolio-arcade:layout",layout:{positions:s}})}function L(){s={},v(),o()}function v(){const r=p.getBoundingClientRect(),t=M.getScreenCTM()?.inverse();if(!t)return;const e=a=>new DOMPoint(r.left+a[0]*r.width,r.top+a[1]*r.height);if(h.forEach((a,c)=>{const m=s[a.name],S=m&&e(m).matrixTransform(t),[T,q]=S?[S.x,S.y]:P[c],F=`translate(${T-a.x} ${q-a.y})`;a.circle.setAttribute("transform",F),a.label.setAttribute("transform",F)}),u.style.translate="",s.directions){const a=e(s.directions),c=u.getBoundingClientRect();u.style.translate=`${a.x-c.left-c.width/2}px ${a.y-c.top-c.height/2}px`}}let l;p.addEventListener("pointerdown",r=>{if(b.hidden||l||r.button!==0)return;const t=h.find(c=>r.target===c.circle||r.target===c.label),e=t?.circle??(u.contains(r.target)?u:null);if(!e)return;r.preventDefault(),r.stopImmediatePropagation();const a=e.getBoundingClientRect();l={id:r.pointerId,name:t?.name??"directions",x:r.clientX-(a.left+a.width/2),y:r.clientY-(a.top+a.height/2),halfWidth:a.width/2,halfHeight:a.height/2},p.setPointerCapture(l.id)},!0),p.addEventListener("pointermove",r=>{if(b.hidden||r.pointerId!==l?.id)return;r.stopImmediatePropagation();const t=p.getBoundingClientRect(),e=E.getBoundingClientRect().bottom-t.top,a=(S,T,q)=>Math.min(Math.max(S,T),q),c=a(r.clientX-l.x-t.left,l.halfWidth,t.width-l.halfWidth),m=a(r.clientY-l.y-t.top,e+l.halfHeight,t.height-l.halfHeight);s[l.name]=[c/t.width,m/t.height],v()},!0);const A=r=>{r.pointerId===l?.id&&(r.stopImmediatePropagation(),l=void 0,o())};p.addEventListener("pointerup",A,!0),p.addEventListener("pointercancel",A,!0);let y={w:window.innerWidth,h:window.innerHeight},f=!1;screen.orientation?.addEventListener&&screen.orientation.addEventListener("change",()=>{f=!0}),window.addEventListener("resize",()=>{const r=window.innerWidth,t=window.innerHeight,e=y.w<y.h,a=r>t,c=Math.abs(r-y.w)>=120&&Math.abs(t-y.h)>=80||Math.abs(r-y.w)>=240;if(Object.keys(s).length>0&&e&&a&&(f||c)){f=!1,y={w:r,h:t},L();return}f=!1,y={w:r,h:t},v()}),v()}function G(E,x,d,C,p,M){const u=document.documentElement;if(u.dataset.portfolioArcade="",u.dataset.arcadeControls="",!document.getElementById("portfolio-arcade-style")){const o=document.createElement("style");o.id="portfolio-arcade-style",o.textContent=E,document.head.append(o)}if(document.querySelector(".label-a").textContent="Z",document.querySelector(".label-b").textContent="X",!globalThis.__portfolioAudioBridge){let y=function(t){let e=L.get(t);return e||(e=t.createGain(),e.gain.value=A(),l.call(e,t.destination),L.set(t,e),v.add(t)),e},f=function(){if(o.muted||o.volume<=0)return;v.forEach(e=>{e.state==="suspended"&&e.resume?.().catch(()=>{})});const t=globalThis.pxsim?.AudioContextManager?.context?.();t&&t.state==="suspended"&&t.resume?.().catch(()=>{})},r=function(t,e){typeof t=="number"&&Number.isFinite(t)&&(o.volume=Math.max(0,Math.min(1,t))),typeof e=="boolean"&&(o.muted=e);const a=A();v.forEach(c=>{const m=L.get(c);m&&m.gain.setTargetAtTime(a,c.currentTime,.015)}),globalThis.pxsim?.AudioContextManager?.mute?.(o.muted||o.volume<=0),a>0&&f()};var k=y,g=f,b=r;const o={volume:.8,muted:!1},L=new WeakMap,v=new Set,l=globalThis.AudioNode?.prototype?.connect,A=()=>o.muted?0:Math.max(0,Math.min(1,o.volume));l&&(globalThis.AudioNode.prototype.connect=function(e,...a){const c=this?.context;if(c&&e===c.destination){const m=y(c);if(this!==m)return l.call(this,m,...a),e}return l.call(this,e,...a)}),globalThis.addEventListener("message",t=>{t.origin===d&&t.data?.type==="portfolio-arcade:audio"&&r(t.data.volume,t.data.muted)}),globalThis.addEventListener("pointerdown",f,{capture:!0,passive:!0}),globalThis.addEventListener("keydown",f,{capture:!0,passive:!0}),globalThis.__portfolioAudioBridge={applyAudio:r,state:o}}globalThis.__portfolioAudioBridge.applyAudio(p?.volume??.8,!!p?.muted);const h=document.querySelector(".game-sys-button-group");M(h,x,d,C);const P=h.querySelector(".game-reset-button");let s=h.querySelector(".game-pause-button");s||(s=document.createElement("button"),s.type="button",s.className="game-sys-button game-pause-button no-select",h.prepend(s)),P.title=x.reset;const w=o=>{s.textContent=o?x.resume:x.pause,s.setAttribute("aria-pressed",String(o))};w(!1),s.onclick=()=>{const o=globalThis.pxsim.runtime;!o?.running||o.dead||(o.pausedOnBreakpoint?(o.resumeAllPausedScheduled(),o.board.onDebuggerResume()):o.pauseScheduled(),w(o.pausedOnBreakpoint))}}class K extends HTMLElement{connectedCallback(){if(this.lifecycle)return;const x=this.lifecycle=new AbortController,{signal:d}=x,C=this.querySelector("[data-start]"),p=this.querySelector("[data-screen]"),M=this.querySelector("[data-status]"),u=D(document.documentElement.lang.startsWith("zh")),h=this.querySelector("[data-fullscreen]"),P=this.querySelector("[data-back]"),s=this.querySelector("[data-audio]"),w=this.querySelector("[data-audio-toggle]"),k=this.querySelector("[data-audio-popover-mute]"),g=this.querySelector("[data-volume]"),b=this.querySelector("[data-volume-value]"),o=()=>{const n=document.referrer?new URL(document.referrer):null,i=location.pathname.replace(/\/play\/[^/]+\/?$/,this.dataset.game==="boss-rush"?"/portfolio/personal/boss-rush/":"/portfolio/scad/game121/");n?.origin===location.origin&&history.length>1?history.back():location.assign(i)};P.addEventListener("click",o,{signal:d});const L=()=>{const n=document.fullscreenElement===this||document.webkitFullscreenElement===this;h.textContent=n?u.exitFullscreen:u.fullscreen,h.setAttribute("aria-pressed",String(n))},v=this.requestFullscreen||this.webkitRequestFullscreen;h.disabled=!v||document.fullscreenEnabled===!1&&!document.webkitFullscreenEnabled,h.addEventListener("click",async()=>{try{document.fullscreenElement||document.webkitFullscreenElement?await(document.exitFullscreen||document.webkitExitFullscreen).call(document):await v.call(this)}catch(n){console.warn("Fullscreen unavailable",n)}L(),e?.focus()},{signal:d}),document.addEventListener("fullscreenchange",L,{signal:d}),document.addEventListener("webkitfullscreenchange",L,{signal:d});const l="portfolio-arcade:"+this.dataset.game,A="portfolio-arcade-layout",y="portfolio-arcade-audio",f=Object.create(null);let r=null;const t={volume:.8,muted:!1,lastVolume:.8};try{Object.assign(f,JSON.parse(localStorage.getItem(l))),r=JSON.parse(localStorage.getItem(A));const n=JSON.parse(localStorage.getItem(y));if(n&&typeof n.volume=="number"&&Number.isFinite(n.volume)){const i=Math.max(.05,Math.min(1,n.volume));t.volume=i,t.lastVolume=i}}catch{}let e,a,c,m,S,T;const q=n=>e?.contentWindow?.postMessage(n,m.origin),F=n=>{M.textContent=n,M.hidden=!n},I=()=>window.matchMedia("(max-width: 639px)").matches,_=()=>{try{localStorage.setItem(y,JSON.stringify({volume:t.lastVolume}))}catch{}},N=()=>{if(!e||!m)return;const n=t.muted||t.volume<=0;q({type:"mute",mute:n}),q({type:"portfolio-arcade:audio",volume:t.volume,muted:n})},j=()=>{if(!s)return;const n=t.muted||t.volume<=0,i=n?0:Math.round(t.volume*100),z=n?"muted":i<=50?"low":"high",B=n?u.unmute:u.mute;if(s.dataset.audioState=z,g&&(g.value=String(i),g.setAttribute("aria-label",u.volume),g.setAttribute("aria-valuetext",i+"%")),b&&(b.textContent=i+"%"),w){const J=I(),U=J?u.soundControls:B;w.title=U,w.setAttribute("aria-label",U),w.setAttribute("aria-pressed",String(J?s.classList.contains("is-open"):n))}k&&(k.title=B,k.setAttribute("aria-label",B),k.setAttribute("aria-pressed",String(n)))},O=()=>{t.muted||t.volume<=0?(t.muted=!1,t.volume<=0&&(t.volume=t.lastVolume||.8)):t.muted=!0,j(),N()};w&&w.addEventListener("click",()=>{I()?(s.classList.toggle("is-open"),j()):(O(),e?.focus())},{signal:d}),k&&k.addEventListener("click",()=>{O()},{signal:d}),g&&(g.addEventListener("input",()=>{const n=Math.max(0,Math.min(100,Number(g.value)||0));t.volume=n/100,n>0?(t.muted=!1,t.lastVolume=t.volume,_()):t.muted=!0,j(),N()},{signal:d}),g.addEventListener("change",()=>{e?.focus()},{signal:d})),document.addEventListener("pointerdown",n=>{s?.classList.contains("is-open")&&!s.contains(n.target)&&(s.classList.remove("is-open"),j())},{signal:d}),window.addEventListener("resize",()=>{!I()&&s?.classList.contains("is-open")&&s.classList.remove("is-open"),j()},{signal:d}),j();function R(){const n={volume:t.volume,muted:t.muted||t.volume<=0},i=[H,u,location.origin,r,n].map(z=>JSON.stringify(z)).join(",");q({type:"run",mute:n.muted,code:"(function(context) { ("+G.toString()+")("+i+", "+$.toString()+"); const factory = "+c+`
; return factory(context); })`,cdnUrl:a.cdnUrl,version:a.target,options:{theme:"green",player:""},storedState:f,frameCounter:1,parts:[],partDefinitions:{},id:"portfolio-"+l})}function V(){clearTimeout(T),S?.abort(),e?.remove(),e=void 0,C.textContent=u.retry,C.hidden=!1,F(u.error)}const W=async()=>{C.hidden=!0,F(u.loading),S=new AbortController,T=setTimeout(V,25e3);try{const n=await fetch(this.dataset.build,{signal:S.signal});if(!n.ok)throw new Error("Missing compiled game");const i=await n.text(),z=i.match(/^\/\/\s+meta=([^\r\n]+)/m);if(!z)throw new Error("Missing MakeCode metadata");if(a=JSON.parse(z[1]),m=new URL(a.simUrl),m.origin!=="https://trg-arcade.userpxt.io")throw new Error("Unexpected MakeCode origin");m.searchParams.set("noExtraPadding","1"),c=i,e=document.createElement("iframe"),e.title=this.dataset.title,e.allow="autoplay; gamepad; fullscreen 'none'",e.sandbox="allow-scripts allow-same-origin",e.src=m.href,p.replaceChildren(e)}catch(n){!d.aborted&&n.name!=="AbortError"&&V()}};C.addEventListener("click",W,{signal:d}),window.addEventListener("message",n=>{if(!e||n.source!==e.contentWindow||n.origin!==m.origin)return;const i=n.data;if(i?.type==="ready")R();else if(i?.type==="status"&&i.state==="running")clearTimeout(T),F(""),N(),e.focus();else if(i?.type==="simulator"&&i.command==="restart")R();else if(i?.type==="portfolio-arcade:layout"){r=i.layout;try{localStorage.setItem(A,JSON.stringify(r))}catch{}}else if(i?.type==="portfolio-arcade:back")o();else if(i?.type==="simulator"&&i.command==="setstate"){i.stateValue==null?delete f[i.stateKey]:f[i.stateKey]=i.stateValue;try{localStorage.setItem(l,JSON.stringify(f))}catch{}}},{signal:d}),d.addEventListener("abort",()=>{clearTimeout(T),S?.abort(),e?.remove()},{once:!0}),W()}disconnectedCallback(){this.lifecycle?.abort(),this.lifecycle=null}}customElements.get("arcade-player")||customElements.define("arcade-player",K);
