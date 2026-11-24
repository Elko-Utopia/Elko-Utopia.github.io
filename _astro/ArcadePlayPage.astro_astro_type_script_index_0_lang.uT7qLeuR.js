const F=`html[data-portfolio-arcade] {\r
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
  gap: 4px;\r
  top: max(6px, env(safe-area-inset-top));\r
  left: max(6px, env(safe-area-inset-left));\r
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
  padding: 0 10px;\r
  border: 2px solid #397382;\r
  border-radius: 999px;\r
  background: #333;\r
  color: #cecece;\r
  opacity: 1;\r
  font-family: system-ui, sans-serif;\r
  font-size: 15px;\r
  font-weight: 400;\r
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
html[data-arcade-controls] .game-buttons { grid-area: actions; overflow: visible; z-index: 2; }\r
html[data-arcade-controls] #wrap .game-button-svg { overflow: visible; pointer-events: none; }\r
html[data-arcade-controls] #wrap .game-button-svg circle { pointer-events: auto; }\r
html[data-arcade-controls] #wrap .game-joystick { z-index: 1; }\r
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
`;function P(y){return y?{start:"开始游戏",loading:"正在加载…",error:"游戏加载失败。",retry:"重试",pause:"暂停",resume:"继续",reset:"重置",back:"返回",fullscreen:"全屏",exitFullscreen:"退出全屏",editLayout:"编辑按键位置",resetLayout:"恢复默认位置"}:{start:"Start Game",loading:"Loading…",error:"The game could not load.",retry:"Try again",pause:"Pause",resume:"Resume",reset:"Reset",back:"Back",fullscreen:"Fullscreen",exitFullscreen:"Exit fullscreen",editLayout:"Edit button positions",resetLayout:"Reset positions"}}function A(y,f,m,k){if(y.querySelector(".arcade-layout-edit"))return;const l=y.closest(".game-player"),w=l.querySelector(".game-button-svg"),c=l.querySelector(".game-joystick"),u=["a","b"].map(t=>{const r=w.querySelector(".button-"+t),s=w.querySelector(".label-"+t);return{name:t,circle:r,label:s,x:r.cx.baseVal.value,y:r.cy.baseVal.value}}),p=u.map((t,r)=>[u[1-r].x,u[1-r].y]);let g=k?.positions??{};const i=t=>parent.postMessage(t,m);function z(t,r){const s=document.createElement("button");return s.type="button",s.className="game-sys-button no-select",s.textContent=t,s.onclick=r,s}const b=z("",()=>{h.hidden=!h.hidden,h.hidden&&e&&(l.hasPointerCapture(e.id)&&l.releasePointerCapture(e.id),e=void 0,x()),b.setAttribute("aria-expanded",String(!h.hidden)),l.classList.toggle("arcade-editing",!h.hidden)});b.classList.add("arcade-layout-edit"),b.title=f.editLayout,b.setAttribute("aria-label",f.editLayout),b.setAttribute("aria-expanded","false");const h=z(f.resetLayout,()=>{g={},v(),x()});h.hidden=!0,y.append(b,h);function x(){i({type:"portfolio-arcade:layout",layout:{positions:g}})}function v(){const t=l.getBoundingClientRect(),r=w.getScreenCTM()?.inverse();if(!r)return;const s=n=>new DOMPoint(t.left+n[0]*t.width,t.top+n[1]*t.height);if(u.forEach((n,d)=>{const E=g[n.name],S=E&&s(E).matrixTransform(r),[L,q]=S?[S.x,S.y]:p[d],a=`translate(${L-n.x} ${q-n.y})`;n.circle.setAttribute("transform",a),n.label.setAttribute("transform",a)}),c.style.translate="",g.directions){const n=s(g.directions),d=c.getBoundingClientRect();c.style.translate=`${n.x-d.left-d.width/2}px ${n.y-d.top-d.height/2}px`}}let e;l.addEventListener("pointerdown",t=>{if(h.hidden||e||t.button!==0)return;const r=u.find(d=>t.target===d.circle||t.target===d.label),s=r?.circle??(c.contains(t.target)?c:null);if(!s)return;t.preventDefault(),t.stopImmediatePropagation();const n=s.getBoundingClientRect();e={id:t.pointerId,name:r?.name??"directions",x:t.clientX-(n.left+n.width/2),y:t.clientY-(n.top+n.height/2),halfWidth:n.width/2,halfHeight:n.height/2},l.setPointerCapture(e.id)},!0),l.addEventListener("pointermove",t=>{if(h.hidden||t.pointerId!==e?.id)return;t.stopImmediatePropagation();const r=l.getBoundingClientRect(),s=y.getBoundingClientRect().bottom-r.top,n=(S,L,q)=>Math.min(Math.max(S,L),q),d=n(t.clientX-e.x-r.left,e.halfWidth,r.width-e.halfWidth),E=n(t.clientY-e.y-r.top,s+e.halfHeight,r.height-e.halfHeight);g[e.name]=[d/r.width,E/r.height],v()},!0);const C=t=>{t.pointerId===e?.id&&(t.stopImmediatePropagation(),e=void 0,x())};l.addEventListener("pointerup",C,!0),l.addEventListener("pointercancel",C,!0),window.addEventListener("resize",v),v()}function R(y,f,m,k,l){const w=document.documentElement;if(w.dataset.portfolioArcade="",w.dataset.arcadeControls="",!document.getElementById("portfolio-arcade-style")){const i=document.createElement("style");i.id="portfolio-arcade-style",i.textContent=y,document.head.append(i)}document.querySelector(".label-a").textContent="Z",document.querySelector(".label-b").textContent="X";const c=document.querySelector(".game-sys-button-group");l(c,f,m,k);const u=c.querySelector(".game-reset-button");let p=c.querySelector(".game-pause-button");p||(p=document.createElement("button"),p.type="button",p.className="game-sys-button game-pause-button no-select",c.prepend(p)),u.title=f.reset;const g=i=>{p.textContent=i?f.resume:f.pause,p.setAttribute("aria-pressed",String(i))};g(!1),p.onclick=()=>{const i=globalThis.pxsim.runtime;!i?.running||i.dead||(i.pausedOnBreakpoint?(i.resumeAllPausedScheduled(),i.board.onDebuggerResume()):i.pauseScheduled(),g(i.pausedOnBreakpoint))}}class I extends HTMLElement{connectedCallback(){if(this.lifecycle)return;const f=this.lifecycle=new AbortController,{signal:m}=f,k=this.querySelector("[data-start]"),l=this.querySelector("[data-screen]"),w=this.querySelector("[data-status]"),c=P(document.documentElement.lang.startsWith("zh")),u=this.querySelector("[data-fullscreen]"),p=this.querySelector("[data-back]"),g=()=>{const a=document.referrer?new URL(document.referrer):null,o=location.pathname.replace(/\/play\/[^/]+\/?$/,this.dataset.game==="boss-rush"?"/portfolio/personal/boss-rush/":"/portfolio/scad/game121/");a?.origin===location.origin&&history.length>1?history.back():location.assign(o)};p.addEventListener("click",g,{signal:m});const i=()=>{const a=document.fullscreenElement===this||document.webkitFullscreenElement===this;u.textContent=a?c.exitFullscreen:c.fullscreen,u.setAttribute("aria-pressed",String(a))},z=this.requestFullscreen||this.webkitRequestFullscreen;u.disabled=!z||document.fullscreenEnabled===!1&&!document.webkitFullscreenEnabled,u.addEventListener("click",async()=>{try{document.fullscreenElement||document.webkitFullscreenElement?await(document.exitFullscreen||document.webkitExitFullscreen).call(document):await z.call(this)}catch(a){console.warn("Fullscreen unavailable",a)}i(),e?.focus()},{signal:m}),document.addEventListener("fullscreenchange",i,{signal:m}),document.addEventListener("webkitfullscreenchange",i,{signal:m});const b="portfolio-arcade:"+this.dataset.game,h="portfolio-arcade-layout",x=Object.create(null);let v=null;try{Object.assign(x,JSON.parse(localStorage.getItem(b))),v=JSON.parse(localStorage.getItem(h))}catch{}let e,C,t,r,s,n;const d=a=>e?.contentWindow?.postMessage(a,r.origin),E=a=>{w.textContent=a,w.hidden=!a};function S(){const a=[F,c,location.origin,v].map(o=>JSON.stringify(o)).join(",");d({type:"run",mute:!0,code:"(function(context) { ("+R.toString()+")("+a+", "+A.toString()+"); const factory = "+t+`
; return factory(context); })`,cdnUrl:C.cdnUrl,version:C.target,options:{theme:"green",player:""},storedState:x,frameCounter:1,parts:[],partDefinitions:{},id:"portfolio-"+b})}function L(){clearTimeout(n),s?.abort(),e?.remove(),e=void 0,k.textContent=c.retry,k.hidden=!1,E(c.error)}const q=async()=>{k.hidden=!0,E(c.loading),s=new AbortController,n=setTimeout(L,25e3);try{const a=await fetch(this.dataset.build,{signal:s.signal});if(!a.ok)throw new Error("Missing compiled game");const o=await a.text(),j=o.match(/^\/\/\s+meta=([^\r\n]+)/m);if(!j)throw new Error("Missing MakeCode metadata");if(C=JSON.parse(j[1]),r=new URL(C.simUrl),r.origin!=="https://trg-arcade.userpxt.io")throw new Error("Unexpected MakeCode origin");r.searchParams.set("noExtraPadding","1"),t=o,e=document.createElement("iframe"),e.title=this.dataset.title,e.allow="autoplay 'none'; gamepad; fullscreen 'none'",e.sandbox="allow-scripts allow-same-origin",e.src=r.href,l.replaceChildren(e)}catch(a){!m.aborted&&a.name!=="AbortError"&&L()}};k.addEventListener("click",q,{signal:m}),window.addEventListener("message",a=>{if(!e||a.source!==e.contentWindow||a.origin!==r.origin)return;const o=a.data;if(o?.type==="ready")S();else if(o?.type==="status"&&o.state==="running")clearTimeout(n),E(""),e.focus();else if(o?.type==="simulator"&&o.command==="restart")S();else if(o?.type==="portfolio-arcade:layout"){v=o.layout;try{localStorage.setItem(h,JSON.stringify(v))}catch{}}else if(o?.type==="portfolio-arcade:back")g();else if(o?.type==="simulator"&&o.command==="setstate"){o.stateValue==null?delete x[o.stateKey]:x[o.stateKey]=o.stateValue;try{localStorage.setItem(b,JSON.stringify(x))}catch{}}},{signal:m}),m.addEventListener("abort",()=>{clearTimeout(n),s?.abort(),e?.remove()},{once:!0}),q()}disconnectedCallback(){this.lifecycle?.abort(),this.lifecycle=null}}customElements.get("arcade-player")||customElements.define("arcade-player",I);
