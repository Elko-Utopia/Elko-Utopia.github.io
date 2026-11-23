const P=`html[data-portfolio-arcade] {\r
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
`;function q(f){return f?{start:"开始游戏",loading:"正在加载…",error:"游戏加载失败。",retry:"重试",pause:"暂停",resume:"继续",reset:"重置",back:"返回",editLayout:"编辑按键位置",resetLayout:"恢复默认位置"}:{start:"Start Game",loading:"Loading…",error:"The game could not load.",retry:"Try again",pause:"Pause",resume:"Resume",reset:"Reset",back:"Back",editLayout:"Edit button positions",resetLayout:"Reset positions"}}function A(f,u,w,v){if(f.querySelector(".arcade-layout-edit"))return;const c=f.closest(".game-player"),y=c.querySelector(".game-button-svg"),l=c.querySelector(".game-joystick"),g=["a","b"].map(e=>{const n=y.querySelector(".button-"+e),i=y.querySelector(".label-"+e);return{name:e,circle:n,label:i,x:n.cx.baseVal.value,y:n.cy.baseVal.value}}),p=g.map((e,n)=>[g[1-n].x,g[1-n].y]);let m=v?.positions??{};const a=e=>parent.postMessage(e,w);function s(e,n){const i=document.createElement("button");return i.type="button",i.className="game-sys-button no-select",i.textContent=e,i.onclick=n,i}const C=s(u.back,()=>a({type:"portfolio-arcade:back"})),b=s("",()=>{d.hidden=!d.hidden,d.hidden&&o&&(c.hasPointerCapture(o.id)&&c.releasePointerCapture(o.id),o=void 0,k()),b.setAttribute("aria-expanded",String(!d.hidden)),c.classList.toggle("arcade-editing",!d.hidden)});b.classList.add("arcade-layout-edit"),b.title=u.editLayout,b.setAttribute("aria-label",u.editLayout),b.setAttribute("aria-expanded","false");const d=s(u.resetLayout,()=>{m={},x(),k()});d.hidden=!0,f.append(C,b,d);function k(){a({type:"portfolio-arcade:layout",layout:{positions:m}})}function x(){const e=c.getBoundingClientRect(),n=y.getScreenCTM()?.inverse();if(!n)return;const i=t=>new DOMPoint(e.left+t[0]*e.width,e.top+t[1]*e.height);if(g.forEach((t,r)=>{const h=m[t.name],S=h&&i(h).matrixTransform(n),[L,z]=S?[S.x,S.y]:p[r],j=`translate(${L-t.x} ${z-t.y})`;t.circle.setAttribute("transform",j),t.label.setAttribute("transform",j)}),l.style.translate="",m.directions){const t=i(m.directions),r=l.getBoundingClientRect();l.style.translate=`${t.x-r.left-r.width/2}px ${t.y-r.top-r.height/2}px`}}let o;c.addEventListener("pointerdown",e=>{if(d.hidden||o||e.button!==0)return;const n=g.find(r=>e.target===r.circle||e.target===r.label),i=n?.circle??(l.contains(e.target)?l:null);if(!i)return;e.preventDefault(),e.stopImmediatePropagation();const t=i.getBoundingClientRect();o={id:e.pointerId,name:n?.name??"directions",x:e.clientX-(t.left+t.width/2),y:e.clientY-(t.top+t.height/2),halfWidth:t.width/2,halfHeight:t.height/2},c.setPointerCapture(o.id)},!0),c.addEventListener("pointermove",e=>{if(d.hidden||e.pointerId!==o?.id)return;e.stopImmediatePropagation();const n=c.getBoundingClientRect(),i=f.getBoundingClientRect().bottom-n.top,t=(S,L,z)=>Math.min(Math.max(S,L),z),r=t(e.clientX-o.x-n.left,o.halfWidth,n.width-o.halfWidth),h=t(e.clientY-o.y-n.top,i+o.halfHeight,n.height-o.halfHeight);m[o.name]=[r/n.width,h/n.height],x()},!0);const E=e=>{e.pointerId===o?.id&&(e.stopImmediatePropagation(),o=void 0,k())};c.addEventListener("pointerup",E,!0),c.addEventListener("pointercancel",E,!0),window.addEventListener("resize",x),x()}function I(f,u,w,v,c){const y=document.documentElement;if(y.dataset.portfolioArcade="",y.dataset.arcadeControls="",!document.getElementById("portfolio-arcade-style")){const a=document.createElement("style");a.id="portfolio-arcade-style",a.textContent=f,document.head.append(a)}document.querySelector(".label-a").textContent="Z",document.querySelector(".label-b").textContent="X";const l=document.querySelector(".game-sys-button-group");c(l,u,w,v);const g=l.querySelector(".game-reset-button");let p=l.querySelector(".game-pause-button");p||(p=document.createElement("button"),p.type="button",p.className="game-sys-button game-pause-button no-select",l.prepend(p)),g.title=u.reset;const m=a=>{p.textContent=a?u.resume:u.pause,p.setAttribute("aria-pressed",String(a))};m(!1),p.onclick=()=>{const a=globalThis.pxsim.runtime;!a?.running||a.dead||(a.pausedOnBreakpoint?(a.resumeAllPausedScheduled(),a.board.onDebuggerResume()):a.pauseScheduled(),m(a.pausedOnBreakpoint))}}class M extends HTMLElement{connectedCallback(){if(this.lifecycle)return;const u=this.lifecycle=new AbortController,{signal:w}=u,v=this.querySelector("[data-start]"),c=this.querySelector("[data-screen]"),y=this.querySelector("[data-status]"),l=q(document.documentElement.lang.startsWith("zh")),g="portfolio-arcade:"+this.dataset.game,p="portfolio-arcade-layout",m=Object.create(null);let a=null;try{Object.assign(m,JSON.parse(localStorage.getItem(g))),a=JSON.parse(localStorage.getItem(p))}catch{}let s,C,b,d,k,x;const o=t=>s?.contentWindow?.postMessage(t,d.origin),E=t=>{y.textContent=t,y.hidden=!t};function e(){const t=[P,l,location.origin,a].map(r=>JSON.stringify(r)).join(",");o({type:"run",mute:!0,code:"(function(context) { ("+I.toString()+")("+t+", "+A.toString()+"); const factory = "+b+`
; return factory(context); })`,cdnUrl:C.cdnUrl,version:C.target,options:{theme:"green",player:""},storedState:m,frameCounter:1,parts:[],partDefinitions:{},id:"portfolio-"+g})}function n(){clearTimeout(x),k?.abort(),s?.remove(),s=void 0,v.textContent=l.retry,v.hidden=!1,E(l.error)}const i=async()=>{v.hidden=!0,E(l.loading),k=new AbortController,x=setTimeout(n,25e3);try{const t=await fetch(this.dataset.build,{signal:k.signal});if(!t.ok)throw new Error("Missing compiled game");const r=await t.text(),h=r.match(/^\/\/\s+meta=([^\r\n]+)/m);if(!h)throw new Error("Missing MakeCode metadata");if(C=JSON.parse(h[1]),d=new URL(C.simUrl),d.origin!=="https://trg-arcade.userpxt.io")throw new Error("Unexpected MakeCode origin");d.searchParams.set("noExtraPadding","1"),b=r,s=document.createElement("iframe"),s.title=this.dataset.title,s.allow="autoplay 'none'; gamepad; fullscreen 'none'",s.sandbox="allow-scripts allow-same-origin",s.src=d.href,c.replaceChildren(s)}catch(t){!w.aborted&&t.name!=="AbortError"&&n()}};v.addEventListener("click",i,{signal:w}),window.addEventListener("message",t=>{if(!s||t.source!==s.contentWindow||t.origin!==d.origin)return;const r=t.data;if(r?.type==="ready")e();else if(r?.type==="status"&&r.state==="running")clearTimeout(x),E(""),s.focus();else if(r?.type==="simulator"&&r.command==="restart")e();else if(r?.type==="portfolio-arcade:layout"){a=r.layout;try{localStorage.setItem(p,JSON.stringify(a))}catch{}}else if(r?.type==="portfolio-arcade:back"){const h=document.referrer?new URL(document.referrer):null,S=location.pathname.replace(/\/play\/[^/]+\/?$/,"/portfolio/scad/game121/");location.assign(h?.origin===location.origin&&h.pathname.includes("/portfolio/")?h.href:S)}else if(r?.type==="simulator"&&r.command==="setstate"){r.stateValue==null?delete m[r.stateKey]:m[r.stateKey]=r.stateValue;try{localStorage.setItem(g,JSON.stringify(m))}catch{}}},{signal:w}),w.addEventListener("abort",()=>{clearTimeout(x),k?.abort(),s?.remove()},{once:!0}),i()}disconnectedCallback(){this.lifecycle?.abort(),this.lifecycle=null}}customElements.get("arcade-player")||customElements.define("arcade-player",M);
