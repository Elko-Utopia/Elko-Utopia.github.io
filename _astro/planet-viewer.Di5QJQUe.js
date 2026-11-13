const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/planet-contours-live.Di2ovCHe.js","_astro/PortfolioPost.astro_astro_type_script_index_0_lang.sLTCwYpS.js","_astro/planet-projection-math.Dyzstxiz.js"])))=>i.map(i=>d[i]);
import{_ as Hh}from"./PortfolioPost.astro_astro_type_script_index_0_lang.sLTCwYpS.js";import{i as zh,r as Vh,s as Wh,p as Hi,u as Yl,a as qh,e as Xh,g as _a,f as Yh,P as Mo}from"./planet-projection-math.Dyzstxiz.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="187",Di={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jh=0,So=1,Kh=2,ar=1,Zh=2,Zn=3,cn=0,Xt=1,Nt=2,rn=0,es=1,Io=2,wo=3,bo=4,$h=5,bn=100,jh=101,eu=102,tu=103,iu=104,nu=200,su=201,ru=202,au=203,Jl=204,Kl=205,ou=206,lu=207,cu=208,hu=209,uu=210,du=211,fu=212,Au=213,pu=214,Ea=0,va=1,xa=2,ss=3,Ca=4,ya=5,Ma=6,Sa=7,Zl=0,gu=1,mu=2,Li=0,$l=1,jl=2,ec=3,tc=4,ic=5,nc=6,sc=7,rc=300,hn=301,rs=302,Ur=303,Fr=304,as=1e3,ni=1001,Ia=1002,At=1003,ac=1004,Rs=1005,ht=1006,Nr=1007,vi=1008,Le=1009,oc=1010,lc=1011,un=1012,Ka=1013,Ci=1014,Qt=1015,Ct=1016,Za=1017,$a=1018,Ln=1020,yr=35902,Mr=35899,cc=1021,os=1022,dt=1023,Wi=1026,Vi=1027,xi=1028,ja=1029,Kt=1030,eo=1031,to=1033,Bn=33776,an=33777,or=33778,on=33779,cr=35840,wa=35841,Pn=35842,ls=35843,hr=36196,cs=37492,hs=37496,ur=37488,dr=37489,us=37490,fr=37491,ln=37808,ba=37809,Ba=37810,Ta=37811,Tn=37812,Ra=37813,Da=37814,La=37815,Pa=37816,Ua=37817,Fa=37818,Na=37819,Qa=37820,Oa=37821,Un=36492,Ga=36494,Ar=36495,pr=36283,gr=36284,ds=36285,mr=36286,_u=3200,ka=0,Eu=1,hi="",Dt="srgb",fs="srgb-linear",_r="linear",et="srgb",Qr=7680,vu=519,xu=512,Cu=513,yu=514,hc=515,Mu=516,Su=517,uc=518,dc=519,Iu=35044,Fn="300 es",di=2e3,As=2001;function wu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bu(){const n=ps("canvas");return n.style.display="block",n}const Bo={};function To(...n){const e="THREE."+n.shift();console.log(e,...n)}function fc(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function De(...n){n=fc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ye(...n){n=fc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Rn(...n){const e=n.join(" ");e in Bo||(Bo[e]=!0,De(...n))}function Bu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Tu={[Ea]:Ea,[xa]:Ma,[Ca]:Ca,[ss]:ya,[va]:va,[Ma]:xa,[Sa]:Sa,[ya]:ss};class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ro=1234567;const ts=Math.PI/180,gs=180/Math.PI;function Gn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function He(n,e,t){return Math.max(e,Math.min(t,n))}function io(n,e){return(n%e+e)%e}function Ru(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Du(n,e,t){return n!==e?(t-n)/(e-n):0}function is(n,e,t){return(1-t)*n+t*e}function Lu(n,e,t,i){return is(n,e,1-Math.exp(-t*i))}function Pu(n,e=1){return e-Math.abs(io(n,e*2)-e)}function Uu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Fu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Nu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Qu(n,e){return n+Math.random()*(e-n)}function Ou(n){return n*(.5-Math.random())}function Gu(n){n!==void 0&&(Ro=n);let e=Ro+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ku(n){return n*ts}function Hu(n){return n*gs}function zu(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Vu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ac(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wu(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function no(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function pc(n,e){if(e.constructor===Float32Array)return n;const t=no(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function gc(n,e){if(e.constructor===Float32Array)return n;const t=no(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const _t={DEG2RAD:ts,RAD2DEG:gs,generateUUID:Gn,clamp:He,euclideanModulo:io,mapLinear:Ru,inverseLerp:Du,lerp:is,damp:Lu,pingpong:Pu,smoothstep:Uu,smootherstep:Fu,randInt:Nu,randFloat:Qu,randFloatSpread:Ou,seededRandom:Gu,degToRad:ku,radToDeg:Hu,isPowerOfTwo:zu,ceilPowerOfTwo:Vu,floorPowerOfTwo:Ac,setQuaternionFromProperEuler:Wu,normalize:gc,denormalize:pc};class be{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(u!==_||c!==d||l!==f||h!==g){let p=c*d+l*f+h*g+u*_;p<0&&(d=-d,f=-f,g=-g,_=-_,p=-p);let A=1-o;if(p<.9995){const v=Math.acos(p),y=Math.sin(v);A=Math.sin(A*v)/y,o=Math.sin(o*v)/y,c=c*A+d*o,l=l*A+f*o,h=h*A+g*o,u=u*A+_*o}else{c=c*A+d*o,l=l*A+f*o,h=h*A+g*o,u=u*A+_*o;const v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Do.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Do.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Or.copy(this).projectOnVector(e),this.sub(Or)}reflect(e){return this.sub(Or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new F,Do=new qi;class Fe{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],p=s[3],A=s[6],v=s[1],y=s[4],x=s[7],S=s[2],I=s[5],m=s[8];return r[0]=a*_+o*v+c*S,r[3]=a*p+o*y+c*I,r[6]=a*A+o*x+c*m,r[1]=l*_+h*v+u*S,r[4]=l*p+h*y+u*I,r[7]=l*A+h*x+u*m,r[2]=d*_+f*v+g*S,r[5]=d*p+f*y+g*I,r[8]=d*A+f*x+g*m,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Rn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return Rn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return Rn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new Fe,Lo=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qu(){const n={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?_r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fs]:{primaries:e,whitePoint:i,transfer:_r,toXYZ:Lo,fromXYZ:Po,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Lo,fromXYZ:Po,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),n}const We=qu();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Dn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let pn;class Xu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pn===void 0&&(pn=ps("canvas")),pn.width=e.width,pn.height=e.height;const s=pn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=pn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yu=0;class so{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kr(s[a].image)):r.push(kr(s[a]))}else r=kr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function kr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Ju=0;const Hr=new F;class Bt extends Yi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=ni,s=ni,r=ht,a=vi,o=dt,c=Le,l=Bt.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Gn(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hr).x}get height(){return this.source.getSize(Hr).y}get depth(){return this.source.getSize(Hr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=rc;Bt.DEFAULT_ANISOTROPY=1;class ft{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],A=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(f+1)/2,S=(A+1)/2,I=(h+d)/4,m=(u+_)/4,M=(g+p)/4;return y>x&&y>S?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=I/i,r=m/i):x>S?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=I/s,r=M/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=m/r,s=M/r),this.set(i,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+A-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ku extends Yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Bt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new so(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Ku{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sr extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ro extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class nt{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,c,l,h,u,d,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,_,p)}set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,_,p){const A=this.elements;return A[0]=e,A[4]=t,A[8]=i,A[12]=s,A[1]=r,A[5]=a,A[9]=o,A[13]=c,A[2]=l,A[6]=h,A[10]=u,A[14]=d,A[3]=f,A[7]=g,A[11]=_,A[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/gn.setFromMatrixColumn(e,0).length(),r=1/gn.setFromMatrixColumn(e,1).length(),a=1/gn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zu,e,$u)}lookAt(e,t,i){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Ni.crossVectors(i,Yt),Ni.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Ni.crossVectors(i,Yt)),Ni.normalize(),Ds.crossVectors(Yt,Ni),s[0]=Ni.x,s[4]=Ds.x,s[8]=Yt.x,s[1]=Ni.y,s[5]=Ds.y,s[9]=Yt.y,s[2]=Ni.z,s[6]=Ds.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],p=i[10],A=i[14],v=i[3],y=i[7],x=i[11],S=i[15],I=s[0],m=s[4],M=s[8],P=s[12],b=s[1],R=s[5],U=s[9],V=s[13],T=s[2],z=s[6],O=s[10],Q=s[14],K=s[3],N=s[7],Y=s[11],q=s[15];return r[0]=a*I+o*b+c*T+l*K,r[4]=a*m+o*R+c*z+l*N,r[8]=a*M+o*U+c*O+l*Y,r[12]=a*P+o*V+c*Q+l*q,r[1]=h*I+u*b+d*T+f*K,r[5]=h*m+u*R+d*z+f*N,r[9]=h*M+u*U+d*O+f*Y,r[13]=h*P+u*V+d*Q+f*q,r[2]=g*I+_*b+p*T+A*K,r[6]=g*m+_*R+p*z+A*N,r[10]=g*M+_*U+p*O+A*Y,r[14]=g*P+_*V+p*Q+A*q,r[3]=v*I+y*b+x*T+S*K,r[7]=v*m+y*R+x*z+S*N,r[11]=v*M+y*U+x*O+S*Y,r[15]=v*P+y*V+x*Q+S*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],A=e[15],v=c*f-l*d,y=o*f-l*u,x=o*d-c*u,S=a*f-l*h,I=a*d-c*h,m=a*u-o*h;return t*(_*v-p*y+A*x)-i*(g*v-p*S+A*I)+s*(g*y-_*S+A*m)-r*(g*x-_*I+p*m)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],A=e[15],v=t*o-i*a,y=t*c-s*a,x=t*l-r*a,S=i*c-s*o,I=i*l-r*o,m=s*l-r*c,M=h*_-u*g,P=h*p-d*g,b=h*A-f*g,R=u*p-d*_,U=u*A-f*_,V=d*A-f*p,T=v*V-y*U+x*R+S*b-I*P+m*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/T;return e[0]=(o*V-c*U+l*R)*z,e[1]=(s*U-i*V-r*R)*z,e[2]=(_*m-p*I+A*S)*z,e[3]=(d*I-u*m-f*S)*z,e[4]=(c*b-a*V-l*P)*z,e[5]=(t*V-s*b+r*P)*z,e[6]=(p*x-g*m-A*y)*z,e[7]=(h*m-d*x+f*y)*z,e[8]=(a*U-o*b+l*M)*z,e[9]=(i*b-t*U-r*M)*z,e[10]=(g*I-_*x+A*v)*z,e[11]=(u*x-h*I-f*v)*z,e[12]=(o*P-a*R-c*M)*z,e[13]=(t*R-i*P+s*M)*z,e[14]=(_*y-g*S-p*v)*z,e[15]=(h*S-u*y+d*v)*z,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,p=a*u,A=o*u,v=c*l,y=c*h,x=c*u,S=i.x,I=i.y,m=i.z;return s[0]=(1-(_+A))*S,s[1]=(f+x)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(f-x)*I,s[5]=(1-(d+A))*I,s[6]=(p+v)*I,s[7]=0,s[8]=(g+y)*m,s[9]=(p-v)*m,s[10]=(1-(d+_))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=gn.set(s[0],s[1],s[2]).length();const o=gn.set(s[4],s[5],s[6]).length(),c=gn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ri.copy(this);const l=1/a,h=1/o,u=1/c;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,t.setFromRotationMatrix(ri),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=di,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===di)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===As)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=di,c=!1){const l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===di)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===As)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gn=new F,ri=new nt,Zu=new F(0,0,0),$u=new F(1,1,1),Ni=new F,Ds=new F,Yt=new F,Uo=new nt,Fo=new qi;class Xi{constructor(e=0,t=0,i=0,s=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ju=0;const No=new F,mn=new qi,Si=new nt,Ls=new F,Vn=new F,ed=new F,td=new qi,Qo=new F(1,0,0),Oo=new F(0,1,0),Go=new F(0,0,1),ko={type:"added"},id={type:"removed"},_n={type:"childadded",child:null},zr={type:"childremoved",child:null};class Tt extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new F,t=new Xi,i=new qi,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Fe}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(Qo,e)}rotateY(e){return this.rotateOnAxis(Oo,e)}rotateZ(e){return this.rotateOnAxis(Go,e)}translateOnAxis(e,t){return No.copy(e).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qo,e)}translateY(e){return this.translateOnAxis(Oo,e)}translateZ(e){return this.translateOnAxis(Go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ls.copy(e):Ls.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Vn,Ls,this.up):Si.lookAt(Ls,Vn,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),mn.setFromRotationMatrix(Si),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ko),_n.child=e,this.dispatchEvent(_n),_n.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(id),zr.child=e,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ko),_n.child=e,this.dispatchEvent(_n),_n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,e,ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tt.DEFAULT_UP=new F(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nd={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),A=this._getHandJoint(l,_);p!==null&&(A.matrix.fromArray(p.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=p.radius),A.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Wr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=We.workingColorSpace){if(e=io(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Wr(a,r,e+1/3),this.g=Wr(a,r,e),this.b=Wr(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=Dt){function i(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=mc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return We.workingToColorSpace(Ft.copy(this),e),Math.round(He(Ft.r*255,0,255))*65536+Math.round(He(Ft.g*255,0,255))*256+Math.round(He(Ft.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Ft.copy(this),t);const i=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Dt){We.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,s=Ft.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Ps);const i=is(Qi.h,Ps.h,t),s=is(Qi.s,Ps.s,t),r=is(Qi.l,Ps.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ne;Ne.NAMES=mc;class sd extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ai=new F,Ii=new F,qr=new F,wi=new F,En=new F,vn=new F,Ho=new F,Xr=new F,Yr=new F,Jr=new F,Kr=new ft,Zr=new ft,$r=new ft;class ui{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ai.subVectors(e,t),s.cross(ai);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ai.subVectors(s,t),Ii.subVectors(i,t),qr.subVectors(e,t);const a=ai.dot(ai),o=ai.dot(Ii),c=ai.dot(qr),l=Ii.dot(Ii),h=Ii.dot(qr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wi.x),c.addScaledVector(a,wi.y),c.addScaledVector(o,wi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Kr.setScalar(0),Zr.setScalar(0),$r.setScalar(0),Kr.fromBufferAttribute(e,t),Zr.fromBufferAttribute(e,i),$r.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Kr,r.x),a.addScaledVector(Zr,r.y),a.addScaledVector($r,r.z),a}static isFrontFacing(e,t,i,s){return ai.subVectors(i,t),Ii.subVectors(e,t),ai.cross(Ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ai.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ui.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;En.subVectors(s,i),vn.subVectors(r,i),Xr.subVectors(e,i);const c=En.dot(Xr),l=vn.dot(Xr);if(c<=0&&l<=0)return t.copy(i);Yr.subVectors(e,s);const h=En.dot(Yr),u=vn.dot(Yr);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(i).addScaledVector(En,a);Jr.subVectors(e,r);const f=En.dot(Jr),g=vn.dot(Jr);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(vn,o);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Ho.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ho,o);const A=1/(p+_+d);return a=_*A,o=d*A,t.copy(i).addScaledVector(En,a).addScaledVector(vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Cs{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,oi):oi.fromBufferAttribute(r,a),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Us.copy(i.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wn),Fs.subVectors(this.max,Wn),xn.subVectors(e.a,Wn),Cn.subVectors(e.b,Wn),yn.subVectors(e.c,Wn),Oi.subVectors(Cn,xn),Gi.subVectors(yn,Cn),$i.subVectors(xn,yn);let t=[0,-Oi.z,Oi.y,0,-Gi.z,Gi.y,0,-$i.z,$i.y,Oi.z,0,-Oi.x,Gi.z,0,-Gi.x,$i.z,0,-$i.x,-Oi.y,Oi.x,0,-Gi.y,Gi.x,0,-$i.y,$i.x,0];return!jr(t,xn,Cn,yn,Fs)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,xn,Cn,yn,Fs))?!1:(Ns.crossVectors(Oi,Gi),t=[Ns.x,Ns.y,Ns.z],jr(t,xn,Cn,yn,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new F,new F,new F,new F,new F,new F,new F,new F],oi=new F,Us=new Cs,xn=new F,Cn=new F,yn=new F,Oi=new F,Gi=new F,$i=new F,Wn=new F,Fs=new F,Ns=new F,ji=new F;function jr(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ji.fromArray(n,r);const o=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),c=e.dot(ji),l=t.dot(ji),h=i.dot(ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const mt=new F,Qs=new be;let rd=0;class Vt extends Yi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Iu,this.updateRanges=[],this.gpuType=Qt,this.version=0,this._normalizationScale=e!==void 0?no(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):pc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):gc(e,this.array)}}class _c extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ec extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $e extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ad=new Cs,qn=new F,ea=new F;class yi{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ad.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qn.subVectors(e,this.center);const t=qn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qn,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qn.copy(e.center).add(ea)),this.expandByPoint(qn.copy(e.center).sub(ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let od=0;const ti=new nt,ta=new Tt,Mn=new F,Jt=new Cs,Xn=new Cs,bt=new F;class pt extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wu(e)?Ec:_c)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Fe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mn).negate(),this.translate(Mn.x,Mn.y,Mn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xn.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Jt.min,Xn.min),Jt.expandByPoint(bt),bt.addVectors(Jt.max,Xn.max),Jt.expandByPoint(bt)):(Jt.expandByPoint(Xn.min),Jt.expandByPoint(Xn.max))}Jt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)bt.fromBufferAttribute(o,l),c&&(Mn.fromBufferAttribute(e,l),bt.add(Mn)),s=Math.max(s,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Vt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new F,c[P]=new F;const h=new F,u=new F,d=new F,f=new be,g=new be,_=new be,p=new F,A=new F;function v(P,b,R){l[P]=l[b]=l[R]=1,h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,R),f.fromBufferAttribute(r,P),g.fromBufferAttribute(r,b),_.fromBufferAttribute(r,R),u.sub(h),d.sub(h),g.sub(f),_.sub(f);const U=1/(g.x*_.y-_.x*g.y);isFinite(U)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(U),A.copy(d).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(U),o[P].add(p),o[b].add(p),o[R].add(p),c[P].add(A),c[b].add(A),c[R].add(A))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,b=y.length;P<b;++P){const R=y[P],U=R.start,V=R.count;for(let T=U,z=U+V;T<z;T+=3)v(e.getX(T+0),e.getX(T+1),e.getX(T+2))}const x=new F,S=new F,I=new F,m=new F;function M(P){I.fromBufferAttribute(s,P),m.copy(I);const b=o[P];x.copy(b),x.sub(I.multiplyScalar(I.dot(b))).normalize(),S.crossVectors(m,b);const U=S.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,U)}for(let P=0,b=i.count;P<b;++P)l[P]&&M(P);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let A=0;A<h;A++)d[g++]=l[f++]}return new Vt(d,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ia=new F,ld=new F,cd=new Fe;class li{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ia.subVectors(i,t).cross(ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(ia),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cd.getNormalMatrix(e),s=this.coplanarPoint(ia).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let hd=0;class An extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=es,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Kl,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new li().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bi=new F,na=new F,Os=new F,Gs=new F;class ys{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){na.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),Gs.copy(this.origin).sub(na);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Os),o=Gs.dot(this.direction),c=-Gs.dot(Os),l=Gs.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(na).addScaledVector(Os,d),f}intersectSphere(e,t){if(e.radius<0)return null;Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),s=Bi.dot(Bi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,A=i.x-a.x,v=i.y-a.y,y=i.z-a.z,x=Math.abs(c),S=Math.abs(l),I=Math.abs(h);let m,M,P,b,R,U,V,T,z,O,Q,K;if(x>=S&&x>=I?(P=c,U=u,z=g,K=A,c>=0?(m=l,M=h,b=d,R=f,V=_,T=p,O=v,Q=y):(m=h,M=l,b=f,R=d,V=p,T=_,O=y,Q=v)):S>=I?(P=l,U=d,z=_,K=v,l>=0?(m=h,M=c,b=f,R=u,V=p,T=g,O=y,Q=A):(m=c,M=h,b=u,R=f,V=g,T=p,O=A,Q=y)):(P=h,U=f,z=p,K=y,h>=0?(m=c,M=l,b=u,R=d,V=g,T=_,O=A,Q=v):(m=l,M=c,b=d,R=u,V=_,T=g,O=v,Q=A)),P===0)return null;const N=m/P,Y=M/P,q=1/P,te=b-N*U,pe=R-Y*U,X=V-N*z,ne=T-Y*z,Ee=O-N*K,Se=Q-Y*K,fe=Ee*ne-Se*X,we=te*Se-pe*Ee,ve=X*pe-ne*te;if(s){if(fe<0||we<0||ve<0)return null}else if((fe<0||we<0||ve<0)&&(fe>0||we>0||ve>0))return null;const xe=fe+we+ve;if(xe===0)return null;const Xe=q*(fe*U+we*z+ve*K);return(xe>0?Xe<0:Xe>0)?null:this.at(Xe/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _i extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zo=new nt,en=new ys,ks=new yi,Vo=new F,Hs=new F,zs=new F,Vs=new F,sa=new F,Ws=new F,Wo=new F,qs=new F;class at extends Tt{constructor(e=new pt,t=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ws.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(sa.fromBufferAttribute(u,e),a?Ws.addScaledVector(sa,h):Ws.addScaledVector(sa.sub(t),h))}t.add(Ws)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(r),en.copy(e.ray).recast(e.near),!(ks.containsPoint(en.origin)===!1&&(en.intersectSphere(ks,Vo)===null||en.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(zo.copy(r).invert(),en.copy(e.ray).applyMatrix4(zo),!(i.boundingBox!==null&&en.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,en)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],A=a[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=v,S=y;x<S;x+=3){const I=o.getX(x),m=o.getX(x+1),M=o.getX(x+2);s=Xs(this,A,e,i,l,h,u,I,m,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,A=_;p<A;p+=3){const v=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);s=Xs(this,a,e,i,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],A=a[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let x=v,S=y;x<S;x+=3){const I=x,m=x+1,M=x+2;s=Xs(this,A,e,i,l,h,u,I,m,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,A=_;p<A;p+=3){const v=p,y=p+1,x=p+2;s=Xs(this,a,e,i,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function ud(n,e,t,i,s,r,a,o){let c;if(e.side===Xt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===cn,o),c===null)return null;qs.copy(o),qs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(qs);return l<t.near||l>t.far?null:{distance:l,point:qs.clone(),object:n}}function Xs(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Hs),n.getVertexPosition(c,zs),n.getVertexPosition(l,Vs);const h=ud(n,e,t,i,Hs,zs,Vs,Wo);if(h){const u=new F;ui.getBarycoord(Wo,Hs,zs,Vs,u),s&&(h.uv=ui.getInterpolatedAttribute(s,o,c,l,u,new be)),r&&(h.uv1=ui.getInterpolatedAttribute(r,o,c,l,u,new be)),a&&(h.normal=ui.getInterpolatedAttribute(a,o,c,l,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new F,materialIndex:0};ui.getNormal(Hs,zs,Vs,d.normal),h.face=d,h.barycoord=u}return h}class dn extends Bt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=At,h=At,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tn=new yi,dd=new be(.5,.5),Ys=new F;class ms{constructor(e=new li,t=new li,i=new li,s=new li,r=new li,a=new li){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],p=r[10],A=r[11],v=r[12],y=r[13],x=r[14],S=r[15];if(s[0].setComponents(l-a,f-h,A-g,S-v).normalize(),s[1].setComponents(l+a,f+h,A+g,S+v).normalize(),s[2].setComponents(l+o,f+u,A+_,S+y).normalize(),s[3].setComponents(l-o,f-u,A-_,S-y).normalize(),i)s[4].setComponents(c,d,p,x).normalize(),s[5].setComponents(l-c,f-d,A-p,S-x).normalize();else if(s[4].setComponents(l-c,f-d,A-p,S-x).normalize(),t===di)s[5].setComponents(l+c,f+d,A+p,S+x).normalize();else if(t===As)s[5].setComponents(c,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tn)}intersectsSprite(e){tn.center.set(0,0,0);const t=dd.distanceTo(e.center);return tn.radius=.7071067811865476+t,tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(tn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ys.x=s.normal.x>0?e.max.x:e.min.x,Ys.y=s.normal.y>0?e.max.y:e.min.y,Ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const qo=new nt;class oo{constructor(){this.coordinateSystem=di,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];qo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ms),i[s].setFromProjectionMatrix(qo,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ms),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new oo().copy(this)}}class Ms extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Er=new F,vr=new F,Xo=new nt,Yn=new ys,Js=new yi,ra=new F,Yo=new F;class fd extends Tt{constructor(e=new pt,t=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Er.fromBufferAttribute(t,s-1),vr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Er.distanceTo(vr);e.setAttribute("lineDistance",new $e(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(s),Js.radius+=r,e.ray.intersectsSphere(Js)===!1)return;Xo.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(Xo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=l){const A=h.getX(_),v=h.getX(_+1),y=Ks(this,e,Yn,c,A,v,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),A=Ks(this,e,Yn,c,_,p,g-1);A&&t.push(A)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=l){const A=Ks(this,e,Yn,c,_,_+1,_);A&&t.push(A)}if(this.isLineLoop){const _=Ks(this,e,Yn,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ks(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Er.fromBufferAttribute(o,s),vr.fromBufferAttribute(o,r),t.distanceSqToSegment(Er,vr,ra,Yo)>i)return;ra.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ra);if(!(l<e.near||l>e.far))return{distance:l,point:Yo.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Jo=new F,Ko=new F;class _s extends fd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Jo.fromBufferAttribute(t,s),Ko.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Jo.distanceTo(Ko);e.setAttribute("lineDistance",new $e(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ad extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zo=new nt,Ha=new ys,Zs=new yi,$s=new F;class pd extends Tt{constructor(e=new pt,t=new Ad){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=r,e.ray.intersectsSphere(Zs)===!1)return;Zo.copy(s).invert(),Ha.copy(e.ray).applyMatrix4(Zo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const p=l.getX(g);$s.fromBufferAttribute(u,p),$o($s,p,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)$s.fromBufferAttribute(u,g),$o($s,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $o(n,e,t,i,s,r,a){const o=Ha.distanceSqToPoint(n);if(o<t){const c=new F;Ha.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ir extends Bt{constructor(e=[],t,i,s,r,a,o,c,l,h,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class gd extends Ir{constructor(e,t,i,s,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=ni,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vc extends Ir{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,hn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class xc extends Bt{constructor(e=[],t=hn,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class md extends Bt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn extends Bt{constructor(e,t,i=Ci,s,r,a,o=At,c=At,l,h=Wi,u=1){if(h!==Wi&&h!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Cc extends Nn{constructor(e,t=Ci,i=hn,s,r,a=At,o=At,c,l=Wi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yc extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ss extends pt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(_,p,A,v,y,x,S,I,m,M,P){const b=x/m,R=S/M,U=x/2,V=S/2,T=I/2,z=m+1,O=M+1;let Q=0,K=0;const N=new F;for(let Y=0;Y<O;Y++){const q=Y*R-V;for(let te=0;te<z;te++){const pe=te*b-U;N[_]=pe*v,N[p]=q*y,N[A]=T,l.push(N.x,N.y,N.z),N[_]=0,N[p]=0,N[A]=I>0?1:-1,h.push(N.x,N.y,N.z),u.push(te/m),u.push(1-Y/M),Q+=1}}for(let Y=0;Y<M;Y++)for(let q=0;q<m;q++){const te=d+q+z*Y,pe=d+q+z*(Y+1),X=d+(q+1)+z*(Y+1),ne=d+(q+1)+z*Y;c.push(te,pe,ne),c.push(pe,X,ne),K+=6}o.addGroup(f,K,P),f+=K,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _d(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Mc(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=yd(n,e,r,t)),n.length>80*t){o=n[0],c=n[1];let h=o,u=c;for(let d=t;d<s;d+=t){const f=n[d],g=n[d+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Es(r,a,t,o,c,l,0),a}function Mc(n,e,t,i,s){let r;if(s===Pd(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=jo(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=jo(a/i|0,n[a],n[a+1],r);return r&&Qn(r,r.next)&&(xs(r),r=r.next),r}function fn(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Qn(t,t.next)||ct(t.prev,t,t.next)===0)){if(xs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Es(n,e,t,i,s,r,a){if(!n)return;!a&&r&&bd(n,i,s,r);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?vd(n,i,s,r):Ed(n)){e.push(c.i,n.i,l.i),xs(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=xd(fn(n),e),Es(n,e,t,i,s,r,2)):a===2&&Cd(n,e,t,i,s,r):Es(fn(n),e,t,i,s,r,1);break}}}function Ed(n){const e=n.prev,t=n,i=n.next;if(ct(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&$n(s,o,r,c,a,l,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vd(n,e,t,i){const s=n.prev,r=n,a=n.next;if(ct(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),g=Math.min(h,u,d),_=Math.max(o,c,l),p=Math.max(h,u,d),A=za(f,g,e,t,i),v=za(_,p,e,t,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=A&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&$n(o,h,c,u,l,d,y.x,y.y)&&ct(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&$n(o,h,c,u,l,d,x.x,x.y)&&ct(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=A;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&$n(o,h,c,u,l,d,y.x,y.y)&&ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&$n(o,h,c,u,l,d,x.x,x.y)&&ct(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function xd(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Qn(i,s)&&Ic(i,t,t.next,s)&&vs(i,s)&&vs(s,i)&&(e.push(i.i,t.i,s.i),xs(t),xs(t.next),t=n=s),t=t.next}while(t!==n);return fn(t)}function Cd(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rd(a,o)){let c=wc(a,o);a=fn(a,a.next),c=fn(c,c.next),Es(a,e,t,i,s,r,0),Es(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function yd(n,e,t,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,l=Mc(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Td(l))}s.sort(Md);for(let r=0;r<s.length;r++)t=Sd(s[r],t);return t}function Md(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Sd(n,e){const t=Id(n,e);if(!t)return e;const i=wc(t,n);return fn(i,i.next),fn(t,t.next)}function Id(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,a;if(Qn(n,t))return t;do{if(Qn(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Sc(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);vs(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&wd(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function wd(n,e){return ct(n.prev,n,e.prev)<0&&ct(e.next,n,n.next)<0}function bd(n,e,t,i){let s=n;do s.z===0&&(s.z=za(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Bd(s)}function Bd(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function za(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Td(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Sc(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function $n(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Sc(n,e,t,i,s,r,a,o)}function Rd(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Dd(n,e)&&(vs(n,e)&&vs(e,n)&&Ld(n,e)&&(ct(n.prev,n,e.prev)||ct(n,e.prev,e))||Qn(n,e)&&ct(n.prev,n,n.next)>0&&ct(e.prev,e,e.next)>0)}function ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Qn(n,e){return n.x===e.x&&n.y===e.y}function Ic(n,e,t,i){const s=er(ct(n,e,t)),r=er(ct(n,e,i)),a=er(ct(t,i,n)),o=er(ct(t,i,e));return!!(s!==r&&a!==o||s===0&&js(n,t,e)||r===0&&js(n,i,e)||a===0&&js(t,n,i)||o===0&&js(t,e,i))}function js(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function er(n){return n>0?1:n<0?-1:0}function Dd(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ic(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function vs(n,e){return ct(n.prev,n,n.next)<0?ct(n,e,n.next)>=0&&ct(n,n.prev,e)>=0:ct(n,e,n.prev)<0||ct(n,n.next,e)<0}function Ld(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function wc(n,e){const t=Va(n.i,n.x,n.y),i=Va(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function jo(n,e,t,i){const s=Va(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Va(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pd(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Ud{static triangulate(e,t,i=2){return _d(e,t,i)}}class wr{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return wr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];el(e),tl(i,e);let a=e.length;t.forEach(el);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,tl(i,t[c]);const o=Ud.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function el(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function tl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class kn extends pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],p=[];for(let A=0;A<h;A++){const v=A*d-a;for(let y=0;y<l;y++){const x=y*u-r;g.push(x,-v,0),_.push(0,0,1),p.push(y/o),p.push(1-A/c)}}for(let A=0;A<c;A++)for(let v=0;v<o;v++){const y=v+l*A,x=v+l*(A+1),S=v+1+l*(A+1),I=v+1+l*A;f.push(y,x,I),f.push(x,S,I)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.widthSegments,e.heightSegments)}}class br extends pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new F,d=new F,f=[],g=[],_=[],p=[];for(let A=0;A<=i;A++){const v=[],y=A/i,x=a+y*o,S=e*Math.cos(x),I=Math.sqrt(e*e-S*S);let m=0;A===0&&a===0?m=.5/t:A===i&&c===Math.PI&&(m=-.5/t);for(let M=0;M<=t;M++){const P=M/t,b=s+P*r;u.x=-I*Math.cos(b),u.y=S,u.z=I*Math.sin(b),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(P+m,1-y),v.push(l++)}h.push(v)}for(let A=0;A<i;A++)for(let v=0;v<t;v++){const y=h[A][v+1],x=h[A][v],S=h[A+1][v],I=h[A+1][v+1];(A!==0||a>0)&&f.push(y,x,I),(A!==i-1||c<Math.PI)&&f.push(x,S,I)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function On(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(il(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(il(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=On(n[t]);for(const s in i)e[s]=i[s]}return e}function il(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Fd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Bc={clone:On,merge:Ht};var Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=On(e.uniforms),this.uniformsGroups=Fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[i].value=new be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new nt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Od extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gd extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nl extends Gd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Rn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Rn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class kd extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hd extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ns={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(sl(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!sl(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function sl(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class zd{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Vd=new zd;class Is{constructor(e){this.manager=e!==void 0?e:Vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class Wd extends Error{constructor(e,t){super(e),this.response=t}}class aa extends Is{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ns.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:i,onError:s});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ti[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(A){v();function v(){u.read().then(({done:y,value:x})=>{if(y)A.close();else{_+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let I=0,m=h.length;I<m;I++){const M=h[I];M.onProgress&&M.onProgress(S)}A.enqueue(x),v()}},y=>{A.error(y)})}}});return new Response(p)}else throw new Wd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ns.add(`file:${e}`,l);const h=Ti[e];delete Ti[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Ti[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ti[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Sn=new WeakMap;class qd extends Is{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ns.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Sn.get(a);u===void 0&&(u=[],Sn.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=ps("img");function c(){h(),t&&t(this);const u=Sn.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Sn.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),ns.remove(`image:${e}`);const d=Sn.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Sn.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ns.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class rl extends Is{constructor(e){super(e)}load(e,t,i,s){const r=new Bt,a=new qd(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Xd extends Tt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const oa=new nt,al=new F,ol=new F;class Yd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Le,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;al.setFromMatrixPosition(e.matrixWorld),t.position.copy(al),ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ol),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(oa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===As||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const tr=new F,ir=new qi,gi=new F;class Tc extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tr,ir,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tr,ir,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(tr,ir,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tr,ir,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ki=new F,ll=new be,cl=new be;class ci extends Tc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,ll,cl),t.subVectors(cl,ll)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Br extends Tc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jd extends Yd{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kd extends Xd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Jd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const In=-90,wn=1;class Wa extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ci(In,wn,e,t);s.layers=this.layers,this.add(s);const r=new ci(In,wn,e,t);r.layers=this.layers,this.add(r);const a=new ci(In,wn,e,t);a.layers=this.layers,this.add(a);const o=new ci(In,wn,e,t);o.layers=this.layers,this.add(o);const c=new ci(In,wn,e,t);c.layers=this.layers,this.add(c);const l=new ci(In,wn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===As)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zd extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class $d{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=jd.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function jd(){this._document.hidden===!1&&this.reset()}const hl=new nt;class Rc{constructor(e,t,i=0,s=1/0){this.ray=new ys(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hl),this}intersectObject(e,t=!0,i=[]){return qa(e,this,i,t),i.sort(ul),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)qa(e[s],this,i,t);return i.sort(ul),i}}function ul(n,e){return n.distance-e.distance}function qa(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)qa(r[a],e,t,!0)}}class xr{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ef extends Yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function dl(n,e,t,i){const s=tf(i);switch(t){case cc:return n*e;case xi:return n*e/s.components*s.byteLength;case ja:return n*e/s.components*s.byteLength;case Kt:return n*e*2/s.components*s.byteLength;case eo:return n*e*2/s.components*s.byteLength;case os:return n*e*3/s.components*s.byteLength;case dt:return n*e*4/s.components*s.byteLength;case to:return n*e*4/s.components*s.byteLength;case Bn:case an:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case or:case on:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wa:case ls:return Math.max(n,16)*Math.max(e,8)/4;case cr:case Pn:return Math.max(n,8)*Math.max(e,8)/2;case hr:case cs:case ur:case dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hs:case us:case fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ln:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Tn:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Na:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Un:case Ga:case Ar:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pr:case gr:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ds:case mr:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tf(n){switch(n){case Le:case oc:return{byteLength:1,components:1};case un:case lc:case Ct:return{byteLength:2,components:1};case Za:case $a:return{byteLength:2,components:4};case Ci:case Ka:case Qt:return{byteLength:4,components:1};case yr:case Mr:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dc(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function nf(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rA=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,aA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mA=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_A=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,LA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,GA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$A=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,up=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:af,alphamap_pars_fragment:of,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:Af,beginnormal_vertex:pf,bsdfs:gf,iridescence_fragment:mf,bumpmap_pars_fragment:_f,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:xf,clipping_planes_vertex:Cf,color_fragment:yf,color_pars_fragment:Mf,color_pars_vertex:Sf,color_vertex:If,common:wf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Bf,displacementmap_vertex:Tf,emissivemap_fragment:Rf,emissivemap_pars_fragment:Df,colorspace_fragment:Lf,colorspace_pars_fragment:Pf,envmap_fragment:Uf,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Nf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:Jf,envmap_vertex:Of,fog_vertex:Gf,fog_pars_vertex:kf,fog_fragment:Hf,fog_pars_fragment:zf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Wf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Xf,lights_pars_begin:Yf,lights_toon_fragment:Kf,lights_toon_pars_fragment:Zf,lights_phong_fragment:$f,lights_phong_pars_fragment:jf,lights_physical_fragment:eA,lights_physical_pars_fragment:tA,lights_fragment_begin:iA,lights_fragment_maps:nA,lights_fragment_end:sA,lightprobes_pars_fragment:rA,logdepthbuf_fragment:aA,logdepthbuf_pars_fragment:oA,logdepthbuf_pars_vertex:lA,logdepthbuf_vertex:cA,map_fragment:hA,map_pars_fragment:uA,map_particle_fragment:dA,map_particle_pars_fragment:fA,metalnessmap_fragment:AA,metalnessmap_pars_fragment:pA,morphinstance_vertex:gA,morphcolor_vertex:mA,morphnormal_vertex:_A,morphtarget_pars_vertex:EA,morphtarget_vertex:vA,normal_fragment_begin:xA,normal_fragment_maps:CA,normal_pars_fragment:yA,normal_pars_vertex:MA,normal_vertex:SA,normalmap_pars_fragment:IA,clearcoat_normal_fragment_begin:wA,clearcoat_normal_fragment_maps:bA,clearcoat_pars_fragment:BA,iridescence_pars_fragment:TA,opaque_fragment:RA,packing:DA,premultiplied_alpha_fragment:LA,project_vertex:PA,dithering_fragment:UA,dithering_pars_fragment:FA,roughnessmap_fragment:NA,roughnessmap_pars_fragment:QA,shadowmap_pars_fragment:OA,shadowmap_pars_vertex:GA,shadowmap_vertex:kA,shadowmask_pars_fragment:HA,skinbase_vertex:zA,skinning_pars_vertex:VA,skinning_vertex:WA,skinnormal_vertex:qA,specularmap_fragment:XA,specularmap_pars_fragment:YA,tonemapping_fragment:JA,tonemapping_pars_fragment:KA,transmission_fragment:ZA,transmission_pars_fragment:$A,uv_pars_fragment:jA,uv_pars_vertex:ep,uv_vertex:tp,worldpos_vertex:ip,background_vert:np,background_frag:sp,backgroundCube_vert:rp,backgroundCube_frag:ap,cube_vert:op,cube_frag:lp,depth_vert:cp,depth_frag:hp,distance_vert:up,distance_frag:dp,equirect_vert:fp,equirect_frag:Ap,linedashed_vert:pp,linedashed_frag:gp,meshbasic_vert:mp,meshbasic_frag:_p,meshlambert_vert:Ep,meshlambert_frag:vp,meshmatcap_vert:xp,meshmatcap_frag:Cp,meshnormal_vert:yp,meshnormal_frag:Mp,meshphong_vert:Sp,meshphong_frag:Ip,meshphysical_vert:wp,meshphysical_frag:bp,meshtoon_vert:Bp,meshtoon_frag:Tp,points_vert:Rp,points_frag:Dp,shadow_vert:Lp,shadow_frag:Pp,sprite_vert:Up,sprite_frag:Fp},me={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Ei={basic:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ht([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ht([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ht([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ht([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ht([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ht([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Ht([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Ht([me.lights,me.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Ei.physical={uniforms:Ht([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const nr={r:0,b:0,g:0},Np=new nt,Lc=new Fe;Lc.set(-1,0,0,0,1,0,0,0,1);function Qp(n,e,t,i,s,r){const a=new Ne(0);let o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const x=v.backgroundBlurriness>0;y=e.get(y,x)}return y}function g(v){let y=!1;const x=f(v);x===null?p(a,o):x&&x.isColor&&(p(x,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,y){const x=f(y);x&&x.isCubeTexture?(l===void 0&&(l=new at(new Ss(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:On(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,I,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lc),l.material.toneMapped=We.getTransfer(x.colorSpace)!==et,(h!==x||u!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new at(new kn(2,2),new Ot({name:"BackgroundMaterial",uniforms:On(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=We.getTransfer(x.colorSpace)!==et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(nr,bc(n)),t.buffers.color.setClear(nr.r,nr.g,nr.b,y,r)}function A(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:_,dispose:A}}function Op(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(R,U,V,T,z){let O=!1;const Q=u(R,T,V,U);r!==Q&&(r=Q,l(r.object)),O=f(R,T,V,z),O&&g(R,T,V,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,x(R,U,V,T),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return n.createVertexArray()}function l(R){return n.bindVertexArray(R)}function h(R){return n.deleteVertexArray(R)}function u(R,U,V,T){const z=T.wireframe===!0;let O=i[U.id];O===void 0&&(O={},i[U.id]=O);const Q=R.isInstancedMesh===!0?R.id:0;let K=O[Q];K===void 0&&(K={},O[Q]=K);let N=K[V.id];N===void 0&&(N={},K[V.id]=N);let Y=N[z];return Y===void 0&&(Y=d(c()),N[z]=Y),Y}function d(R){const U=[],V=[],T=[];for(let z=0;z<t;z++)U[z]=0,V[z]=0,T[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:T,object:R,attributes:{},index:null}}function f(R,U,V,T){const z=r.attributes,O=U.attributes;let Q=0;const K=V.getAttributes();for(const N in K)if(K[N].location>=0){const q=z[N];let te=O[N];if(te===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),q===void 0||q.attribute!==te||te&&q.data!==te.data)return!0;Q++}return r.attributesNum!==Q||r.index!==T}function g(R,U,V,T){const z={},O=U.attributes;let Q=0;const K=V.getAttributes();for(const N in K)if(K[N].location>=0){let q=O[N];q===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));const te={};te.attribute=q,q&&q.data&&(te.data=q.data),z[N]=te,Q++}r.attributes=z,r.attributesNum=Q,r.index=T}function _(){const R=r.newAttributes;for(let U=0,V=R.length;U<V;U++)R[U]=0}function p(R){A(R,0)}function A(R,U){const V=r.newAttributes,T=r.enabledAttributes,z=r.attributeDivisors;V[R]=1,T[R]===0&&(n.enableVertexAttribArray(R),T[R]=1),z[R]!==U&&(n.vertexAttribDivisor(R,U),z[R]=U)}function v(){const R=r.newAttributes,U=r.enabledAttributes;for(let V=0,T=U.length;V<T;V++)U[V]!==R[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function y(R,U,V,T,z,O,Q){Q===!0?n.vertexAttribIPointer(R,U,V,z,O):n.vertexAttribPointer(R,U,V,T,z,O)}function x(R,U,V,T){_();const z=T.attributes,O=V.getAttributes(),Q=U.defaultAttributeValues;for(const K in O){const N=O[K];if(N.location>=0){let Y=z[K];if(Y===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),Y!==void 0){const q=Y.normalized,te=Y.itemSize,pe=e.get(Y);if(pe===void 0)continue;const X=pe.buffer,ne=pe.type,Ee=pe.bytesPerElement,Se=ne===n.INT||ne===n.UNSIGNED_INT||Y.gpuType===Ka;if(Y.isInterleavedBufferAttribute){const fe=Y.data,we=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,ve=Y.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let xe=0;xe<N.locationSize;xe++)A(N.location+xe,fe.meshPerAttribute);R.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let xe=0;xe<N.locationSize;xe++)p(N.location+xe);n.bindBuffer(n.ARRAY_BUFFER,X);for(let xe=0;xe<N.locationSize;xe++)y(N.location+xe,te/N.locationSize,ne,q,we*Ee,(ve+te/N.locationSize*xe)*Ee,Se)}else{if(Y.isInstancedBufferAttribute){for(let fe=0;fe<N.locationSize;fe++)A(N.location+fe,Y.meshPerAttribute);R.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let fe=0;fe<N.locationSize;fe++)p(N.location+fe);n.bindBuffer(n.ARRAY_BUFFER,X);for(let fe=0;fe<N.locationSize;fe++)y(N.location+fe,te/N.locationSize,ne,q,te*Ee,te/N.locationSize*fe*Ee,Se)}}else if(Q!==void 0){const q=Q[K];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(N.location,q);break;case 3:n.vertexAttrib3fv(N.location,q);break;case 4:n.vertexAttrib4fv(N.location,q);break;default:n.vertexAttrib1fv(N.location,q)}}}}v()}function S(){P();for(const R in i){const U=i[R];for(const V in U){const T=U[V];for(const z in T){const O=T[z];for(const Q in O)h(O[Q].object),delete O[Q];delete T[z]}}delete i[R]}}function I(R){if(i[R.id]===void 0)return;const U=i[R.id];for(const V in U){const T=U[V];for(const z in T){const O=T[z];for(const Q in O)h(O[Q].object),delete O[Q];delete T[z]}}delete i[R.id]}function m(R){for(const U in i){const V=i[U];for(const T in V){const z=V[T];if(z[R.id]===void 0)continue;const O=z[R.id];for(const Q in O)h(O[Q].object),delete O[Q];delete z[R.id]}}}function M(R){for(const U in i){const V=i[U],T=R.isInstancedMesh===!0?R.id:0,z=V[T];if(z!==void 0){for(const O in z){const Q=z[O];for(const K in Q)h(Q[K].object),delete Q[K];delete z[O]}delete V[T],Object.keys(V).length===0&&delete i[U]}}}function P(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:I,releaseStatesOfObject:M,releaseStatesOfProgram:m,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Gp(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function kp(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const m=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){return!(m!==dt&&i.convert(m)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){const M=m===Ct&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==Le&&m!==Qt&&!M&&i.convert(m)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(m){if(m==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(De("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),A=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:A,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,maxSamples:S,samples:I}}function Hp(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new li,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,A=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const v=r?0:i,y=v*4;let x=A.clippingState||null;c.value=x,x=h(g,d,y,f);for(let S=0;S!==y;++S)x[S]=t[S];A.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const A=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<A)&&(p=new Float32Array(A));for(let y=0,x=f;y!==_;++y,x+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(p,x),p[x+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}class lo extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ss(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:On(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:rn});r.uniforms.tEquirect.value=t;const a=new at(s,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=ht),new Wa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const fl=256,zp=3,Vp=20,Pc=256,Uc=16,Wp=3,qp=new F,Xp=new Ne;class Cr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wa(1,10,null),this._boxMesh=new at(new Ss(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=qp}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(Xp));const p=new Wa(i,s,h);return p.position.copy(o),p.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(fl,Ac(e))}_fromTexture(e,t){e.mapping===hn||e.mapping===rs?this._setSize(e.image.length===0?fl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Al(e,!1,!1),i=Math.log2(e)-zp;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Al(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===hn||e.mapping===rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Yp(),this._integrationMaterial=Jp());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Uc);for(let a=0;a<=i;a++){const o=Cr.lodToRoughness(a,i);if(a>i-Wp)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Pc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Kp());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function Al(n,e,t){return new lo(n,{minFilter:vi,generateMipmaps:e,type:Ct,colorSpace:fs,depthBuffer:t})}function ws(n,e,t){return new Ot({name:n,uniforms:e,vertexShader:Ge.cube_vert,fragmentShader:t,side:Xt,blending:rn,depthTest:!1,depthWrite:!1})}function Yp(){return ws("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Jp(){return ws("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Uc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Kp(){return ws("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function pl(){return ws("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function gl(){return ws("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zp(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ur||f===Fr)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new lo(g.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===Ur||f===Fr,_=f===hn||f===rs;if(g||_){let p=t.get(d);const A=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==A)return i===null&&(i=new Cr(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const v=d.image;return g&&v&&v.height>0||_&&v&&c(v)?(i===null&&(i=new Cr(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Ur?d.mapping=hn:f===Fr&&(d.mapping=rs),d}function c(d){let f=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function l(d){const f=d.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function $p(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Rn("WebGLRenderer: "+i+" extension not supported."),s}}}function jp(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const _=r.get(g);_&&(e.remove(_),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(g){const _=g.attributes;for(const p in _)e.update(_[p],n.ARRAY_BUFFER)}function u(g){const _=g.index,p=g.attributes.position;let A=0;if(p===void 0)return;const v=_!==null?_.array.length:p.array.length/3-1,y=p.count>=65535?Ec:_c,x=new y(Math.ceil(v/3)*6,1),S=x.array;if(_!==null){const m=_.array;A=_.version;for(let M=0,P=0;M<v;M+=3){const b=m[M+0],R=m[M+1],U=m[M+2];S[P++]=b,S[P++]=R,S[P++]=R,S[P++]=U,S[P++]=U,S[P++]=b}}else{A=p.version;for(let m=0,M=0;m<v;m+=3){const P=m+0,b=m+1,R=m+2;S[M++]=P,S[M++]=b,S[M++]=b,S[M++]=R,S[M++]=R,S[M++]=P}}x.version=A;const I=r.get(g);I&&e.remove(I),r.set(g,x)}function d(g){const _=r.get(g);if(_){const p=g.index;p!==null&&_.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(const g in s){const _=s[g].deref();_!==void 0&&c(_)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function eg(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function l(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function tg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ig(n,e,t){const i=new WeakMap,s=new ft;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let P=function(){m.dispose(),i.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=o.attributes.position.count*y,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const I=new Float32Array(x*S*4*u),m=new Sr(I,x,S,u);m.type=Qt,m.needsUpdate=!0;const M=y*4;for(let b=0;b<u;b++){const R=p[b],U=A[b],V=v[b],T=x*S*4*b;for(let z=0;z<R.count;z++){const O=z*M;f===!0&&(s.fromBufferAttribute(R,z),I[T+O+0]=s.x,I[T+O+1]=s.y,I[T+O+2]=s.z,I[T+O+3]=0),g===!0&&(s.fromBufferAttribute(U,z),I[T+O+4]=s.x,I[T+O+5]=s.y,I[T+O+6]=s.z,I[T+O+7]=0),_===!0&&(s.fromBufferAttribute(V,z),I[T+O+8]=s.x,I[T+O+9]=s.y,I[T+O+10]=s.z,I[T+O+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:m,size:new be(x,S)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ng(n,e,t,i,s){let r=new WeakMap;function a(l){const h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const sg={[$l]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[ec]:"CINEON_TONE_MAPPING",[tc]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[sc]:"NEUTRAL_TONE_MAPPING",[ic]:"CUSTOM_TONE_MAPPING"};function rg(n,e,t,i,s,r){const a=new Ai(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new pt;h.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $e([0,2,0,0,2,0],2));const u=new Od({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new at(h,u),f=new Br(-1,1,1,-1,0,1);let g=null,_=null,p=!1,A,v=null,y=[],x=!1;this.setSize=function(S,I){a.setSize(S,I),o!==null&&o.setSize(S,I),c!==null&&c.setSize(S,I);for(let m=0;m<y.length;m++){const M=y[m];M.setSize&&M.setSize(S,I)}},this.setEffects=function(S){y=S,x=y.length>0&&y[0].isRenderPass===!0;const I=a.width,m=a.height;y.length>0&&o===null&&(o=new Ai(I,m,{type:Ct,depthBuffer:!1,stencilBuffer:!1}),c=new Ai(I,m,{type:Ct,depthBuffer:!1,stencilBuffer:!1}));const M=s===!0&&y.some(P=>P.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new Nn(I,m),r===!0&&(l.format=Vi,l.type=Ln)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let P=0;P<y.length;P++){const b=y[P];b.setSize&&b.setSize(I,m),M&&b.needsDepthTexture===!0&&b.setDepthTexture&&b.setDepthTexture(l)}},this.begin=function(S,I){if(p||S.toneMapping===Li&&y.length===0)return!1;if(v=I,I!==null){const m=I.width,M=I.height;(a.width!==m||a.height!==M)&&this.setSize(m,M)}return x===!1&&S.setRenderTarget(a),A=S.toneMapping,S.toneMapping=Li,!0},this.hasRenderPass=function(){return x},this.end=function(S,I){S.toneMapping=A,p=!0;let m=a,M=o;for(let P=0;P<y.length;P++){const b=y[P];b.enabled!==!1&&(b.render(S,M,m,I),b.needsSwap!==!1&&(m=M,M=M===o?c:o))}if(g!==S.outputColorSpace||_!==S.toneMapping){g=S.outputColorSpace,_=S.toneMapping,u.defines={},We.getTransfer(g)===et&&(u.defines.SRGB_TRANSFER="");const P=sg[_];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=m.texture,S.setRenderTarget(v),S.render(d,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}const Fc=new Bt,Nc=new Nn(1,1),Qc=new Cc(1),Oc=new Sr,Gc=new ro,kc=new xc,ml=[],_l=[],El=new Float32Array(16),vl=new Float32Array(9),xl=new Float32Array(4);function Hn(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ml[s];if(r===void 0&&(r=new Float32Array(s),ml[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tr(n,e){let t=_l[e];t===void 0&&(t=new Int32Array(e),_l[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ag(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function hg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;xl.set(i),n.uniformMatrix2fv(this.addr,!1,xl),Mt(t,i)}}function ug(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;vl.set(i),n.uniformMatrix3fv(this.addr,!1,vl),Mt(t,i)}}function dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;El.set(i),n.uniformMatrix4fv(this.addr,!1,El),Mt(t,i)}}function fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function mg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Rr(n){return n.version===0&&(n.compareFunction=dc,n.needsUpdate=!0),n}function xg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Rr(Nc):r=Fc,t.setTexture2D(e||r,s)}function Cg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Gc,s)}function yg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Rr(Qc):r=kc,t.setTextureCube(e||r,s)}function Mg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Oc,s)}function Sg(n){switch(n){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return Ag;case 35668:case 35672:return pg;case 35669:case 35673:return gg;case 5125:return mg;case 36294:return _g;case 36295:return Eg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Mg}}function Ig(n,e){n.uniform1fv(this.addr,e)}function wg(n,e){const t=Hn(e,this.size,2);n.uniform2fv(this.addr,t)}function bg(n,e){const t=Hn(e,this.size,3);n.uniform3fv(this.addr,t)}function Bg(n,e){const t=Hn(e,this.size,4);n.uniform4fv(this.addr,t)}function Tg(n,e){const t=Hn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Rg(n,e){const t=Hn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dg(n,e){const t=Hn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lg(n,e){n.uniform1iv(this.addr,e)}function Pg(n,e){n.uniform2iv(this.addr,e)}function Ug(n,e){n.uniform3iv(this.addr,e)}function Fg(n,e){n.uniform4iv(this.addr,e)}function Ng(n,e){n.uniform1uiv(this.addr,e)}function Qg(n,e){n.uniform2uiv(this.addr,e)}function Og(n,e){n.uniform3uiv(this.addr,e)}function Gg(n,e){n.uniform4uiv(this.addr,e)}function kg(n,e,t){const i=this.cache,s=e.length,r=Tr(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Rr(Nc):a=Fc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Hg(n,e,t){const i=this.cache,s=e.length,r=Tr(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Gc,r[a])}function zg(n,e,t){const i=this.cache,s=e.length,r=Tr(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Rr(Qc):a=kc;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Vg(n,e,t){const i=this.cache,s=e.length,r=Tr(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Oc,r[a])}function Wg(n){switch(n){case 5126:return Ig;case 35664:return wg;case 35665:return bg;case 35666:return Bg;case 35674:return Tg;case 35675:return Rg;case 35676:return Dg;case 5124:case 35670:return Lg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ug;case 35669:case 35673:return Fg;case 5125:return Ng;case 36294:return Qg;case 36295:return Og;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Vg}}class qg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Sg(t.type)}}class Xg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wg(t.type)}}class Yg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Cl(n,e){n.seq.push(e),n.map[e.id]=e}function Jg(n,e,t){const i=n.name,s=i.length;for(la.lastIndex=0;;){const r=la.exec(i),a=la.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Cl(t,l===void 0?new qg(o,n,e):new Xg(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Yg(o),Cl(t,u)),t=u}}}class lr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Jg(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function yl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Kg=37297;let Zg=0;function $g(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ml=new Fe;function jg(n){We._getMatrix(Ml,We.workingColorSpace,n);const e=`mat3( ${Ml.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(n)){case _r:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$g(n.getShaderSource(e),o)}else return r}function em(n,e){const t=jg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const tm={[$l]:"Linear",[jl]:"Reinhard",[ec]:"Cineon",[tc]:"ACESFilmic",[nc]:"AgX",[sc]:"Neutral",[ic]:"Custom"};function im(n,e){const t=tm[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sr=new F;function nm(){We.getLuminanceCoefficients(sr);const n=sr.x.toFixed(4),e=sr.y.toFixed(4),t=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jn).join(`
`)}function rm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function am(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function jn(n){return n!==""}function Il(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function wl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(n){return n.replace(om,lm)}function lm(n,e){const t=Ge[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xa(t)}const cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(n){return n.replace(cm,hm)}function hm(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const um={[ar]:"SHADOWMAP_TYPE_PCF",[Zn]:"SHADOWMAP_TYPE_VSM"};function dm(n){return um[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fm={[rs]:"ENVMAP_MODE_REFRACTION"};function Am(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pm={[Zl]:"ENVMAP_BLENDING_MULTIPLY",[gu]:"ENVMAP_BLENDING_MIX",[mu]:"ENVMAP_BLENDING_ADD"};function gm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pm[n.combine]||"ENVMAP_BLENDING_NONE"}function mm(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=dm(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Am(t),u=gm(t),d=sm(t),f=rm(r),g=s.createProgram();let _,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(jn).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(jn).join(`
`),p.length>0&&(p+=`
`)):(_=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jn).join(`
`),p=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Li?im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,em("linearToOutputTexel",t.outputColorSpace),nm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jn).join(`
`)),a=Xa(a),a=Il(a,t),a=wl(a,t),o=Xa(o),o=Il(o,t),o=wl(o,t),a=bl(a),o=bl(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Fn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=A+_+a,y=A+p+o,x=yl(s,s.VERTEX_SHADER,v),S=yl(s,s.FRAGMENT_SHADER,y);s.attachShader(g,x),s.attachShader(g,S),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function I(b){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(x)||"",V=s.getShaderInfoLog(S)||"",T=R.trim(),z=U.trim(),O=V.trim();let Q=!0,K=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,x,S);else{const N=Sl(s,x,"vertex"),Y=Sl(s,S,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+T+`
`+N+`
`+Y)}else T!==""?De("WebGLProgram: Program Info Log:",T):(z===""||O==="")&&(K=!1);K&&(b.diagnostics={runnable:Q,programLog:T,vertexShader:{log:z,prefix:_},fragmentShader:{log:O,prefix:p}})}s.deleteShader(x),s.deleteShader(S),m=new lr(s,g),M=am(s,g)}let m;this.getUniforms=function(){return m===void 0&&I(this),m};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,Kg)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=S,this}let _m=0;class Em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vm(e),t.set(e,i)),i}}class vm{constructor(e){this.id=_m++,this.code=e,this.usedTimes=0}}function xm(n){return n===Kt||n===us||n===ds}function Cm(n,e,t,i,s,r){const a=new ao,o=new Em,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return c.add(m),m===0?"uv":`uv${m}`}function g(m,M,P,b,R,U){const V=b.fog,T=R.geometry,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?b.environment:null,O=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,Q=e.get(m.envMap||z,O),K=d[m.type];let N=i.precision;m.precision!==null&&(N=i.getMaxPrecision(m.precision),N!==m.precision&&De("WebGLProgram.getParameters:",m.precision,"not supported, using",N,"instead."));const Y=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,q=Y!==void 0?Y.length:0;let te=0;T.morphAttributes.position!==void 0&&(te=1),T.morphAttributes.normal!==void 0&&(te=2),T.morphAttributes.color!==void 0&&(te=3);let pe,X,ne,Ee;if(K){const ge=Ei[K];pe=ge.vertexShader,X=ge.fragmentShader}else{pe=m.vertexShader,X=m.fragmentShader;const ge=o.getVertexShaderStage(m),je=o.getFragmentShaderStage(m);o.update(m,ge,je),ne=ge.id,Ee=je.id}const Se=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),we=R.isInstancedMesh===!0,ve=R.isBatchedMesh===!0,xe=!!m.map,Xe=!!m.matcap,Ze=!!Q,ke=Ze&&Q.isPMREMTexture===!0,ut=!!m.aoMap,Et=!!m.lightMap,Wt=!!m.bumpMap&&m.wireframe===!1,ot=!!m.normalMap,pi=!!m.displacementMap,St=!!m.emissiveMap,Zt=!!m.metalnessMap,$t=!!m.roughnessMap,jt=m.anisotropy>0,L=m.clearcoat>0,ei=m.diffuseRoughness>0,st=m.dispersion>0,rt=m.retroreflectivity>0,Ae=m.iridescence>0,vt=m.sheen>0,Re=m.transmission>0,Pe=jt&&!!m.anisotropyMap,w=L&&!!m.clearcoatMap,E=L&&!!m.clearcoatNormalMap,k=L&&!!m.clearcoatRoughnessMap,ie=ei&&!!m.diffuseRoughnessMap,ee=Ae&&!!m.iridescenceMap,ae=Ae&&!!m.iridescenceThicknessMap,ue=vt&&!!m.sheenColorMap,Z=vt&&!!m.sheenRoughnessMap,$=!!m.specularMap,le=!!m.specularColorMap,B=!!m.specularIntensityMap,j=Re&&!!m.transmissionMap,J=Re&&!!m.thicknessMap,ce=!!m.gradientMap,re=!!m.alphaMap,oe=m.alphaTest>0,Be=!!m.alphaHash,Oe=!!m.extensions;let se=Li;m.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(se=n.toneMapping);const Te=ke?Q.isCompressedCubeTexture?Q.image[0].mipmaps:Q.mipmaps:null,Qe={shaderID:K,shaderType:m.type,shaderName:m.name,vertexShader:pe,fragmentShader:X,defines:m.defines,customVertexShaderID:ne,customFragmentShaderID:Ee,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:N,batching:ve,batchingColor:ve&&R._colorsTexture!==null,instancing:we,instancingColor:we&&R.instanceColor!==null,instancingMorph:we&&R.morphTexture!==null,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:xe,matcap:Xe,envMap:Ze,envMapMode:Ze&&Q.mapping,envMapPMREM:ke,envMapMaxLod:ke?Te.length-1:null,envMapSize:ke?Te[0].width:null,aoMap:ut,lightMap:Et,bumpMap:Wt,normalMap:ot,displacementMap:pi,emissiveMap:St,normalMapObjectSpace:ot&&m.normalMapType===Eu,normalMapTangentSpace:ot&&m.normalMapType===ka,packedNormalMap:ot&&m.normalMapType===ka&&xm(m.normalMap.format),metalnessMap:Zt,roughnessMap:$t,anisotropy:jt,anisotropyMap:Pe,clearcoat:L,clearcoatMap:w,clearcoatNormalMap:E,clearcoatRoughnessMap:k,diffuseRoughness:ei,diffuseRoughnessMap:ie,dispersion:st,retroreflection:rt,iridescence:Ae,iridescenceMap:ee,iridescenceThicknessMap:ae,sheen:vt,sheenColorMap:ue,sheenRoughnessMap:Z,specularMap:$,specularColorMap:le,specularIntensityMap:B,transmission:Re,transmissionMap:j,thicknessMap:J,gradientMap:ce,opaque:m.transparent===!1&&m.blending===es&&m.alphaToCoverage===!1,alphaMap:re,alphaTest:oe,alphaHash:Be,combine:m.combine,mapUv:xe&&f(m.map.channel),aoMapUv:ut&&f(m.aoMap.channel),lightMapUv:Et&&f(m.lightMap.channel),bumpMapUv:Wt&&f(m.bumpMap.channel),normalMapUv:ot&&f(m.normalMap.channel),displacementMapUv:pi&&f(m.displacementMap.channel),emissiveMapUv:St&&f(m.emissiveMap.channel),metalnessMapUv:Zt&&f(m.metalnessMap.channel),roughnessMapUv:$t&&f(m.roughnessMap.channel),anisotropyMapUv:Pe&&f(m.anisotropyMap.channel),clearcoatMapUv:w&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(m.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(m.sheenRoughnessMap.channel),specularMapUv:$&&f(m.specularMap.channel),specularColorMapUv:le&&f(m.specularColorMap.channel),specularIntensityMapUv:B&&f(m.specularIntensityMap.channel),transmissionMapUv:j&&f(m.transmissionMap.channel),thicknessMapUv:J&&f(m.thicknessMap.channel),alphaMapUv:re&&f(m.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(ot||jt),vertexNormals:!!T.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!T.attributes.uv&&(xe||re),fog:!!V,useFog:m.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||T.attributes.normal===void 0&&ot===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:te,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(ge=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:xe&&m.map.isVideoTexture===!0&&We.getTransfer(m.map.colorSpace)===et,decodeVideoTextureEmissive:St&&m.emissiveMap.isVideoTexture===!0&&We.getTransfer(m.emissiveMap.colorSpace)===et,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Nt,flipSided:m.side===Xt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Oe&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&m.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function _(m){const M=[];if(m.shaderID?M.push(m.shaderID):(M.push(m.customVertexShaderID),M.push(m.customFragmentShaderID)),m.defines!==void 0)for(const P in m.defines)M.push(P),M.push(m.defines[P]);return m.isRawShaderMaterial===!1&&(p(M,m),A(M,m),M.push(n.outputColorSpace)),M.push(m.customProgramCacheKey),M.join()}function p(m,M){m.push(M.precision),m.push(M.outputColorSpace),m.push(M.envMapMode),m.push(M.envMapPMREM),m.push(M.envMapMaxLod),m.push(M.envMapSize),m.push(M.mapUv),m.push(M.alphaMapUv),m.push(M.lightMapUv),m.push(M.aoMapUv),m.push(M.bumpMapUv),m.push(M.normalMapUv),m.push(M.displacementMapUv),m.push(M.emissiveMapUv),m.push(M.metalnessMapUv),m.push(M.roughnessMapUv),m.push(M.anisotropyMapUv),m.push(M.clearcoatMapUv),m.push(M.clearcoatNormalMapUv),m.push(M.clearcoatRoughnessMapUv),m.push(M.diffuseRoughnessMapUv),m.push(M.iridescenceMapUv),m.push(M.iridescenceThicknessMapUv),m.push(M.sheenColorMapUv),m.push(M.sheenRoughnessMapUv),m.push(M.specularMapUv),m.push(M.specularColorMapUv),m.push(M.specularIntensityMapUv),m.push(M.transmissionMapUv),m.push(M.thicknessMapUv),m.push(M.combine),m.push(M.fogExp2),m.push(M.sizeAttenuation),m.push(M.morphTargetsCount),m.push(M.numSunLights),m.push(M.numDirLights),m.push(M.numPointLights),m.push(M.numSpotLights),m.push(M.numSpotLightMaps),m.push(M.numHemiLights),m.push(M.numRectAreaLights),m.push(M.numSunLightShadows),m.push(M.numDirLightShadows),m.push(M.numPointLightShadows),m.push(M.numSpotLightShadows),m.push(M.numSpotLightShadowsWithMaps),m.push(M.numLightProbes),m.push(M.numLightProbeGrids),m.push(M.shadowMapType),m.push(M.toneMapping),m.push(M.numClippingPlanes),m.push(M.numClipIntersection),m.push(M.depthPacking)}function A(m,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function v(m){const M=d[m.type];let P;if(M){const b=Ei[M];P=Bc.clone(b.uniforms)}else P=m.uniforms;return P}function y(m,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new mm(n,M,m,s),l.push(P),h.set(M,P)),P}function x(m){if(--m.usedTimes===0){const M=l.indexOf(m);l[M]=l[l.length-1],l.pop(),h.delete(m.cacheKey),m.destroy()}}function S(m){o.remove(m)}function I(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:y,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:I}}function ym(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Mm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Tl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,p,A){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:A},n[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=p,v.group=A),e++,v}function c(d,f,g,_,p,A,v){v.reversedDepth===!0&&(p=-p);const y=o(d,f,g,_,p,A);g.transmission>0?i.push(y):g.transparent===!0?s.push(y):t.push(y)}function l(d,f,g,_,p,A){const v=o(d,f,g,_,p,A);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||Mm),i.length>1&&i.sort(f||Tl),s.length>1&&s.sort(f||Tl)}function u(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Sm(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Rl,n.set(i,[a])):s>=r.length?(a=new Rl,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Im(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ne};break;case"SpotLight":t={position:new F,direction:new F,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function wm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bm=0;function Bm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Tm(n){const e=new Im,t=wm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const s=new F,r=new nt,a=new nt;function o(l){let h=0,u=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,g=0,_=0,p=0,A=0,v=0,y=0,x=0,S=0,I=0,m=0,M=0,P=0,b=0;l.sort(Bm);for(let U=0,V=l.length;U<V;U++){const T=l[U],z=T.color,O=T.intensity,Q=T.distance;let K=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Kt?K=T.shadow.map.texture:K=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(T.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(T.sh.coefficients[N],O);b++}else if(T.isSunLight){const N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,q=t.get(T);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[g]=q,i.sunShadowMap[g]=K;const te=Y.getViewportCount();for(let pe=0;pe<te;pe++)i.sunShadowMatrix[_+pe]=Y.getMatrix(pe),i.sunShadowCascade[_+pe]=Y._cascadeData[pe];_+=te,g++}i.sun[f]=N,f++}else if(T.isDirectionalLight){const N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,q=t.get(T);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=T.shadow.matrix,S++}i.directional[p]=N,p++}else if(T.isSpotLight){const N=e.get(T);N.position.setFromMatrixPosition(T.matrixWorld),N.color.copy(z).multiplyScalar(O),N.distance=Q,N.coneCos=Math.cos(T.angle),N.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),N.decay=T.decay,i.spot[v]=N;const Y=T.shadow;if(T.map&&(i.spotLightMap[M]=T.map,M++,Y.updateMatrices(T),T.castShadow&&P++),i.spotLightMatrix[v]=Y.matrix,T.castShadow){const q=t.get(T);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=K,m++}v++}else if(T.isRectAreaLight){const N=e.get(T);N.color.copy(z).multiplyScalar(O),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),i.rectArea[y]=N,y++}else if(T.isPointLight){const N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),N.distance=T.distance,N.decay=T.decay,T.castShadow){const Y=T.shadow,q=t.get(T);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,i.pointShadow[A]=q,i.pointShadowMap[A]=K,i.pointShadowMatrix[A]=T.shadow.matrix,I++}i.point[A]=N,A++}else if(T.isHemisphereLight){const N=e.get(T);N.skyColor.copy(T.color).multiplyScalar(O),N.groundColor.copy(T.groundColor).multiplyScalar(O),i.hemi[x]=N,x++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const R=i.hash;(R.sunLength!==f||R.directionalLength!==p||R.pointLength!==A||R.spotLength!==v||R.rectAreaLength!==y||R.hemiLength!==x||R.numSunShadows!==g||R.numDirectionalShadows!==S||R.numPointShadows!==I||R.numSpotShadows!==m||R.numSpotMaps!==M||R.numLightProbes!==b)&&(i.sun.length=f,i.directional.length=p,i.spot.length=v,i.rectArea.length=y,i.point.length=A,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=I,i.pointShadowMap.length=I,i.pointShadowMatrix.length=I,i.spotShadow.length=m,i.spotShadowMap.length=m,i.spotLightMatrix.length=m+M-P,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=b,R.sunLength=f,R.directionalLength=p,R.pointLength=A,R.spotLength=v,R.rectAreaLength=y,R.hemiLength=x,R.numSunShadows=g,R.numDirectionalShadows=S,R.numPointShadows=I,R.numSpotShadows=m,R.numSpotMaps=M,R.numLightProbes=b,i.version=bm++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,p=0;const A=h.matrixWorldInverse;for(let v=0,y=l.length;v<y;v++){const x=l[v];if(x.isSunLight){const S=i.sun[u];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(A),u++}else if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(A),d++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(A),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(A),g++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(A),a.identity(),r.copy(x.matrixWorld),r.premultiply(A),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(A),f++}else if(x.isHemisphereLight){const S=i.hemi[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(A),p++}}}return{setup:o,setupView:c,state:i}}function Dl(n){const e=new Tm(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Rm(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Dl(n),e.set(s,[o])):r>=a.length?(o=new Dl(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pm=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Um=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ll=new nt,Jn=new F,ca=new F;function Fm(n,e,t){let i=new ms;const s=new be,r=new be,a=new ft,o=new kd,c=new Hd,l={},h=t.maxTextureSize,u={[cn]:Xt,[Xt]:cn,[Nt]:Nt},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Dm,fragmentShader:Lm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ar;let A=this.type;this.render=function(I,m,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;this.type===Zh&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ar);const P=n.getRenderTarget(),b=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(rn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=A!==this.type;V&&m.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(z=>z.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,z=I.length;T<z;T++){const O=I[T],Q=O.shadow;if(Q===void 0){De("WebGLShadowMap:",O,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const K=Q.getFrameExtents();s.multiply(K),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,Q.mapSize.y=r.y));const N=n.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=N,Q.map===null||V===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Zn){if(O.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Ai(s.x,s.y,{format:Kt,type:Ct,minFilter:ht,magFilter:ht,generateMipmaps:!1}),Q.map.texture.name=O.name+".shadowMap",Q.map.depthTexture=new Nn(s.x,s.y,Qt),Q.map.depthTexture.name=O.name+".shadowMapDepth",Q.map.depthTexture.format=Wi,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=At,Q.map.depthTexture.magFilter=At}else O.isPointLight?(Q.map=new lo(s.x),Q.map.depthTexture=new Cc(s.x,Ci)):(Q.map=new Ai(s.x,s.y),Q.map.depthTexture=new Nn(s.x,s.y,Ci)),Q.map.depthTexture.name=O.name+".shadowMap",Q.map.depthTexture.format=Wi,this.type===ar?(Q.map.depthTexture.compareFunction=N?uc:hc,Q.map.depthTexture.minFilter=ht,Q.map.depthTexture.magFilter=ht):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=At,Q.map.depthTexture.magFilter=At);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);const Y=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();O.isPointLight!==!0&&Q.updateMatrices(O,M);const q=(Q.camera.layers.mask&4294967294)!==0?Q.camera.layers:M.layers;for(let te=0;te<Y;te++){const pe=Q.getCamera(te);if(O.isPointLight){const X=Q.camera,ne=Q.matrix,Ee=O.distance||X.far;Ee!==X.far&&(X.far=Ee,X.updateProjectionMatrix()),Jn.setFromMatrixPosition(O.matrixWorld),X.position.copy(Jn),ca.copy(X.position),ca.add(Pm[te]),X.up.copy(Um[te]),X.lookAt(ca),X.updateMatrixWorld(),ne.makeTranslation(-Jn.x,-Jn.y,-Jn.z),Ll.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(Ll,X.coordinateSystem,X.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)n.setRenderTarget(Q.map,te),n.clear();else{te===0&&(n.setRenderTarget(Q.map),n.clear());const X=Q.getViewport(te);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),U.viewport(a)}i=Q.getFrustum(te),x(m,M,pe,O,q,this.type)}Q.isPointLightShadow!==!0&&this.type===Zn&&v(Q,M),Q.needsUpdate=!1}A=this.type,p.needsUpdate=!1,n.setRenderTarget(P,b,R)};function v(I,m){const M=e.update(_);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null?I.mapPass=new Ai(s.x,s.y,{format:Kt,type:Ct}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value.set(I.map.width,I.map.height),d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(m,null,M,d,_,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value.set(I.map.width,I.map.height),f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(m,null,M,f,_,null)}function y(I,m,M,P){let b=null;const R=M.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(R!==void 0)b=R;else if(b=M.isPointLight===!0?c:o,n.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){const U=b.uuid,V=m.uuid;let T=l[U];T===void 0&&(T={},l[U]=T);let z=T[V];z===void 0&&(z=b.clone(),T[V]=z,m.addEventListener("dispose",S)),b=z}if(b.visible=m.visible,b.wireframe=m.wireframe,P===Zn?b.side=m.shadowSide!==null?m.shadowSide:m.side:b.side=m.shadowSide!==null?m.shadowSide:u[m.side],b.alphaMap=m.alphaMap,b.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,b.map=m.map,b.clipShadows=m.clipShadows,b.clippingPlanes=m.clippingPlanes,b.clipIntersection=m.clipIntersection,b.displacementMap=m.displacementMap,b.displacementScale=m.displacementScale,b.displacementBias=m.displacementBias,b.wireframeLinewidth=m.wireframeLinewidth,b.linewidth=m.linewidth,M.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=n.properties.get(b);U.light=M}return b}function x(I,m,M,P,b,R){if(I.visible===!1)return;if(I.layers.test(b)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Zn)&&(!I.frustumCulled||I.intersectsFrustum(i))){I.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,I.matrixWorld);const T=e.update(I),z=I.material;if(Array.isArray(z)){const O=T.groups;for(let Q=0,K=O.length;Q<K;Q++){const N=O[Q],Y=z[N.materialIndex];if(Y&&Y.visible){const q=y(I,Y,P,R);I.onBeforeShadow(n,I,m,M,T,q,N),n.renderBufferDirect(M,null,T,q,I,N),I.onAfterShadow(n,I,m,M,T,q,N)}}}else if(z.visible){const O=y(I,z,P,R);I.onBeforeShadow(n,I,m,M,T,O,null),n.renderBufferDirect(M,null,T,O,I,null),I.onAfterShadow(n,I,m,M,T,O,null)}}const V=I.children;for(let T=0,z=V.length;T<z;T++)x(V[T],m,M,P,b,R)}function S(I){I.target.removeEventListener("dispose",S);for(const M in l){const P=l[M],b=I.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}function Nm(n,e){function t(){let B=!1;const j=new ft;let J=null;const ce=new ft(0,0,0,0);return{setMask:function(re){J!==re&&!B&&(n.colorMask(re,re,re,re),J=re)},setLocked:function(re){B=re},setClear:function(re,oe,Be,Oe,se){se===!0&&(re*=Oe,oe*=Oe,Be*=Oe),j.set(re,oe,Be,Oe),ce.equals(j)===!1&&(n.clearColor(re,oe,Be,Oe),ce.copy(j))},reset:function(){B=!1,J=null,ce.set(-1,0,0,0)}}}function i(){let B=!1,j=!1,J=null,ce=null,re=null;return{setReversed:function(oe){if(j!==oe){const Be=e.get("EXT_clip_control");oe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),j=oe;const Oe=re;re=null,this.setClear(Oe)}},getReversed:function(){return j},setTest:function(oe){oe?fe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(oe){J!==oe&&!B&&(n.depthMask(oe),J=oe)},setFunc:function(oe){if(j&&(oe=Tu[oe]),ce!==oe){switch(oe){case Ea:n.depthFunc(n.NEVER);break;case va:n.depthFunc(n.ALWAYS);break;case xa:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case Ca:n.depthFunc(n.EQUAL);break;case ya:n.depthFunc(n.GEQUAL);break;case Ma:n.depthFunc(n.GREATER);break;case Sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=oe}},setLocked:function(oe){B=oe},setClear:function(oe){re!==oe&&(re=oe,j&&(oe=1-oe),n.clearDepth(oe))},reset:function(){B=!1,J=null,ce=null,re=null,j=!1}}}function s(){let B=!1,j=null,J=null,ce=null,re=null,oe=null,Be=null,Oe=null,se=null;return{setTest:function(Te){B||(Te?fe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(Te){j!==Te&&!B&&(n.stencilMask(Te),j=Te)},setFunc:function(Te,Qe,ge){(J!==Te||ce!==Qe||re!==ge)&&(n.stencilFunc(Te,Qe,ge),J=Te,ce=Qe,re=ge)},setOp:function(Te,Qe,ge){(oe!==Te||Be!==Qe||Oe!==ge)&&(n.stencilOp(Te,Qe,ge),oe=Te,Be=Qe,Oe=ge)},setLocked:function(Te){B=Te},setClear:function(Te){se!==Te&&(n.clearStencil(Te),se=Te)},reset:function(){B=!1,j=null,J=null,ce=null,re=null,oe=null,Be=null,Oe=null,se=null}}}const r=new t,a=new i,o=new s;let c={};const l=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],_=null,p=!1,A=null,v=null,y=null,x=null,S=null,I=null,m=null,M=new Ne(0,0,0),P=0,b=!1,R=null,U=null,V=null,T=null,z=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,K=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(N)[1]),Q=K>=1):N.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Q=K>=2);let Y=null,q={};const te=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),X=new ft().fromArray(te),ne=new ft().fromArray(pe);function Ee(B,j,J,ce){const re=new Uint8Array(4),oe=n.createTexture();n.bindTexture(B,oe),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<J;Be++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(j+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return oe}const Se={};Se[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),a.setFunc(ss),Wt(!1),ot(So),fe(n.CULL_FACE),ut(rn);function fe(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function we(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function ve(B,j){return d[B]!==j?(n.bindFramebuffer(B,j),d[B]=j,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=j),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=j),!0):!1}function xe(B,j){let J=g,ce=!1;if(B){J=f.get(j),J===void 0&&(J=[],f.set(j,J));const re=B.textures;if(J.length!==re.length||J[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Be=re.length;oe<Be;oe++)J[oe]=n.COLOR_ATTACHMENT0+oe;J.length=re.length,ce=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ce=!0);ce&&n.drawBuffers(J)}function Xe(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const Ze={[bn]:n.FUNC_ADD,[jh]:n.FUNC_SUBTRACT,[eu]:n.FUNC_REVERSE_SUBTRACT};Ze[tu]=n.MIN,Ze[iu]=n.MAX;const ke={[nu]:n.ZERO,[su]:n.ONE,[ru]:n.SRC_COLOR,[Jl]:n.SRC_ALPHA,[uu]:n.SRC_ALPHA_SATURATE,[cu]:n.DST_COLOR,[ou]:n.DST_ALPHA,[au]:n.ONE_MINUS_SRC_COLOR,[Kl]:n.ONE_MINUS_SRC_ALPHA,[hu]:n.ONE_MINUS_DST_COLOR,[lu]:n.ONE_MINUS_DST_ALPHA,[du]:n.CONSTANT_COLOR,[fu]:n.ONE_MINUS_CONSTANT_COLOR,[Au]:n.CONSTANT_ALPHA,[pu]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(B,j,J,ce,re,oe,Be,Oe,se,Te){if(B===rn){p===!0&&(we(n.BLEND),p=!1);return}if(p===!1&&(fe(n.BLEND),p=!0),B!==$h){if(B!==A||Te!==b){if((v!==bn||S!==bn)&&(n.blendEquation(n.FUNC_ADD),v=bn,S=bn),Te)switch(B){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Io:n.blendFunc(n.ONE,n.ONE);break;case wo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ye("WebGLState: Invalid blending: ",B);break}else switch(B){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Io:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wo:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bo:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",B);break}y=null,x=null,I=null,m=null,M.set(0,0,0),P=0,A=B,b=Te}return}re=re||j,oe=oe||J,Be=Be||ce,(j!==v||re!==S)&&(n.blendEquationSeparate(Ze[j],Ze[re]),v=j,S=re),(J!==y||ce!==x||oe!==I||Be!==m)&&(n.blendFuncSeparate(ke[J],ke[ce],ke[oe],ke[Be]),y=J,x=ce,I=oe,m=Be),(Oe.equals(M)===!1||se!==P)&&(n.blendColor(Oe.r,Oe.g,Oe.b,se),M.copy(Oe),P=se),A=B,b=!1}function Et(B,j){B.side===Nt?we(n.CULL_FACE):fe(n.CULL_FACE);let J=B.side===Xt;j&&(J=!J),Wt(J),B.blending===es&&B.transparent===!1?ut(rn):ut(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const ce=B.stencilWrite;o.setTest(ce),ce&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),St(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(B){R!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),R=B)}function ot(B){B!==Jh?(fe(n.CULL_FACE),B!==U&&(B===So?n.cullFace(n.BACK):B===Kh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),U=B}function pi(B){B!==V&&(Q&&n.lineWidth(B),V=B)}function St(B,j,J){B?(fe(n.POLYGON_OFFSET_FILL),(T!==j||z!==J)&&(T=j,z=J,a.getReversed()&&(j=-j,J=-J),n.polygonOffset(j,J))):we(n.POLYGON_OFFSET_FILL)}function Zt(B){B?fe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function $t(B){B===void 0&&(B=n.TEXTURE0+O-1),Y!==B&&(n.activeTexture(B),Y=B)}function jt(B,j,J){J===void 0&&(Y===null?J=n.TEXTURE0+O-1:J=Y);let ce=q[J];ce===void 0&&(ce={type:void 0,texture:void 0},q[J]=ce),(ce.type!==B||ce.texture!==j)&&(Y!==J&&(n.activeTexture(J),Y=J),n.bindTexture(B,j||Se[B]),ce.type=B,ce.texture=j)}function L(){const B=q[Y];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ei(){try{n.compressedTexImage2D(...arguments)}catch(B){Ye("WebGLState:",B)}}function st(){try{n.compressedTexImage3D(...arguments)}catch(B){Ye("WebGLState:",B)}}function rt(){try{n.texSubImage2D(...arguments)}catch(B){Ye("WebGLState:",B)}}function Ae(){try{n.texSubImage3D(...arguments)}catch(B){Ye("WebGLState:",B)}}function vt(){try{n.compressedTexSubImage2D(...arguments)}catch(B){Ye("WebGLState:",B)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(B){Ye("WebGLState:",B)}}function Pe(){try{n.texStorage2D(...arguments)}catch(B){Ye("WebGLState:",B)}}function w(){try{n.texStorage3D(...arguments)}catch(B){Ye("WebGLState:",B)}}function E(){try{n.texImage2D(...arguments)}catch(B){Ye("WebGLState:",B)}}function k(){try{n.texImage3D(...arguments)}catch(B){Ye("WebGLState:",B)}}function ie(B){return u[B]!==void 0?u[B]:n.getParameter(B)}function ee(B,j){u[B]!==j&&(n.pixelStorei(B,j),u[B]=j)}function ae(B){X.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),X.copy(B))}function ue(B){ne.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ne.copy(B))}function Z(B,j){let J=l.get(j);J===void 0&&(J=new WeakMap,l.set(j,J));let ce=J.get(B);ce===void 0&&(ce=n.getUniformBlockIndex(j,B.name),n.uniformBlockBinding(j,ce,ce),J.set(B,ce))}function $(B,j,J){const re=l.get(j).get(B);c[re]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,re,J),c[re]=J)}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,q={},d={},c={},f=new WeakMap,g=[],_=null,p=!1,A=null,v=null,y=null,x=null,S=null,I=null,m=null,M=new Ne(0,0,0),P=0,b=!1,R=null,U=null,V=null,T=null,z=null,X.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:we,bindFramebuffer:ve,drawBuffers:xe,useProgram:Xe,setBlending:ut,setMaterial:Et,setFlipSided:Wt,setCullFace:ot,setLineWidth:pi,setPolygonOffset:St,setScissorTest:Zt,activeTexture:$t,bindTexture:jt,unbindTexture:L,compressedTexImage2D:ei,compressedTexImage3D:st,texImage2D:E,texImage3D:k,pixelStorei:ee,getParameter:ie,updateUBOMapping:Z,uniformBlockBinding:$,texStorage2D:Pe,texStorage3D:w,texSubImage2D:rt,texSubImage3D:Ae,compressedTexSubImage2D:vt,compressedTexSubImage3D:Re,scissor:ae,viewport:ue,reset:le}}function Qm(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new be,h=new WeakMap,u=new Set;let d;const f=new WeakMap,g=new Set,_=new FinalizationRegistry(w=>g.delete(w));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,E){return p?new OffscreenCanvas(w,E):ps("canvas")}function v(w,E,k){let ie=1;const ee=Pe(w);if((ee.width>k||ee.height>k)&&(ie=k/Math.max(ee.width,ee.height)),ie<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ae=Math.floor(ie*ee.width),ue=Math.floor(ie*ee.height);d===void 0&&(d=A(ae,ue));const Z=E?A(ae,ue):d;return Z.width=ae,Z.height=ue,Z.getContext("2d").drawImage(w,0,0,ae,ue),De("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ae+"x"+ue+")."),Z}else return"data"in w&&De("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function y(w){return w.generateMipmaps}function x(w){n.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(w,E,k,ie,ee,ae=!1){if(w!==null){if(n[w]!==void 0)return n[w];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;ie&&(ue=e.get("EXT_texture_norm16"),ue||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=E;if(E===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8),k===n.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),k===n.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),E===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),E===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8),k===n.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),k===n.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),E===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),E===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),E===n.RGB&&(k===n.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),k===n.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),E===n.RGBA){const $=ae?_r:We.getTransfer(ee);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=$===et?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),k===n.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function m(w,E){let k;return w?E===null||E===Ci||E===Ln?k=n.DEPTH24_STENCIL8:E===Qt?k=n.DEPTH32F_STENCIL8:E===un&&(k=n.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ci||E===Ln?k=n.DEPTH_COMPONENT24:E===Qt?k=n.DEPTH_COMPONENT32F:E===un&&(k=n.DEPTH_COMPONENT16),k}function M(w,E){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==At&&w.minFilter!==ht?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function P(w){const E=new WeakRef(w);i.get(w).__ref=E,g.add(E),_.register(w,E,E)}function b(w){const E=i.get(w).__ref;E!==void 0&&(g.delete(E),_.unregister(E))}function R(w){V(w.target)}function U(w){T(w.target)}function V(w){w.removeEventListener("dispose",R),b(w),O(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function T(w){w.removeEventListener("dispose",U),b(w),K(w)}function z(){for(const w of g){const E=w.deref();E!==void 0&&(E.isRenderTarget===!0?T(E):V(E))}g.clear(),u.clear()}function O(w){const E=i.get(w);if(E.__webglInit===void 0)return;const k=w.source,ie=f.get(k);if(ie){const ee=ie[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&Q(w),Object.keys(ie).length===0&&f.delete(k)}i.remove(w)}function Q(w){const E=i.get(w);n.deleteTexture(E.__webglTexture);const k=w.source,ie=f.get(k);delete ie[E.__cacheKey],a.memory.textures--}function K(w){const E=i.get(w);E.__depthDisposeCallback&&E.__depthDisposeCallback();const k=w.depthTexture;if(k&&k.renderTarget===w&&V(k),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ae=0;ae<E.__webglFramebuffer[ee].length;ae++)n.deleteFramebuffer(E.__webglFramebuffer[ee][ae]);else n.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[ee]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ie=w.textures;for(let ee=0,ae=ie.length;ee<ae;ee++){const ue=i.get(ie[ee]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(ie[ee])}i.remove(w)}let N=0;function Y(){N=0}function q(){return N}function te(w){N=w}function pe(){const w=N;return w>=s.maxTextures&&De("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,w}function X(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.mipmapsAutoUpdate),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function ne(w,E){const k=i.get(w);if(w.isVideoTexture&&vt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){const ie=w.image;if(ie===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(k,w,E);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+E)}function Ee(w,E){const k=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){Et(k,w,E);return}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+E)}function Se(w,E){const k=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){Et(k,w,E);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+E)}function fe(w,E){const k=i.get(w);if(w.version>0&&k.__version!==w.version){Wt(k,w,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+E)}const we={[as]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[Ia]:n.MIRRORED_REPEAT},ve={[At]:n.NEAREST,[ac]:n.NEAREST_MIPMAP_NEAREST,[Rs]:n.NEAREST_MIPMAP_LINEAR,[ht]:n.LINEAR,[Nr]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},xe={[xu]:n.NEVER,[dc]:n.ALWAYS,[Cu]:n.LESS,[hc]:n.LEQUAL,[yu]:n.EQUAL,[uc]:n.GEQUAL,[Mu]:n.GREATER,[Su]:n.NOTEQUAL};function Xe(w,E){if(E.type===Qt&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ht||E.magFilter===Nr||E.magFilter===Rs||E.magFilter===vi||E.minFilter===ht||E.minFilter===Nr||E.minFilter===Rs||E.minFilter===vi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,we[E.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,we[E.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,we[E.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ve[E.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===At||E.minFilter!==Rs&&E.minFilter!==vi||E.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ze(w,E){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",R),P(E));const ie=E.source;let ee=f.get(ie);ee===void 0&&(ee={},f.set(ie,ee));const ae=X(E);if(ae!==w.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[ae].usedTimes++;const ue=ee[w.__cacheKey];ue!==void 0&&(ee[w.__cacheKey].usedTimes--,ue.usedTimes===0&&Q(E)),w.__cacheKey=ae,w.__webglTexture=ee[ae].texture}return k}function ke(w,E,k){return Math.floor(Math.floor(w/k)/E)}function ut(w,E,k,ie){const ae=w.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,k,ie,E.data);else{ae.sort((B,j)=>B.start-j.start);let ue=0;for(let B=1;B<ae.length;B++){const j=ae[ue],J=ae[B],ce=j.start+j.count,re=ke(J.start,E.width,4),oe=ke(j.start,E.width,4);J.start<=ce+1&&re===oe&&ke(J.start+J.count-1,E.width,4)===re?j.count=Math.max(j.count,J.start+J.count-j.start):(++ue,ae[ue]=J)}ae.length=ue+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),$=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let B=0,j=ae.length;B<j;B++){const J=ae[B],ce=Math.floor(J.start/4),re=Math.ceil(J.count/4),oe=ce%E.width,Be=Math.floor(ce/E.width),Oe=re,se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(n.TEXTURE_2D,0,oe,Be,Oe,se,k,ie,E.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,$),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Et(w,E,k){let ie=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=n.TEXTURE_3D);const ee=Ze(w,E),ae=E.source;t.bindTexture(ie,w.__webglTexture,n.TEXTURE0+k);const ue=i.get(ae);if(ae.version!==ue.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const se=We.getPrimaries(We.workingColorSpace),Te=E.colorSpace===hi?null:We.getPrimaries(E.colorSpace),Qe=E.colorSpace===hi||se===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let $=v(E.image,!1,s.maxTextureSize);$=Re(E,$);const le=r.convert(E.format,E.colorSpace),B=r.convert(E.type);let j=I(E.internalFormat,le,B,E.normalized,E.colorSpace,E.isVideoTexture);Xe(ie,E);let J;const ce=E.mipmaps,re=E.isVideoTexture!==!0,oe=ue.__version===void 0||ee===!0,Be=ae.dataReady,Oe=M(E,$);if(E.isDepthTexture)j=m(E.format===Vi,E.type),oe&&(re?t.texStorage2D(n.TEXTURE_2D,1,j,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,j,$.width,$.height,0,le,B,null));else if(E.isDataTexture)if(ce.length>0){re&&oe&&t.texStorage2D(n.TEXTURE_2D,Oe,j,ce[0].width,ce[0].height);for(let se=0,Te=ce.length;se<Te;se++)J=ce[se],re?Be&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,J.width,J.height,le,B,J.data):t.texImage2D(n.TEXTURE_2D,se,j,J.width,J.height,0,le,B,J.data);E.generateMipmaps=!1}else re?(oe&&t.texStorage2D(n.TEXTURE_2D,Oe,j,$.width,$.height),Be&&ut(E,$,le,B)):t.texImage2D(n.TEXTURE_2D,0,j,$.width,$.height,0,le,B,$.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){re&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,j,ce[0].width,ce[0].height,$.depth);for(let se=0,Te=ce.length;se<Te;se++)if(J=ce[se],E.format!==dt)if(le!==null)if(re){if(Be)if(E.layerUpdates.size>0){const Qe=dl(J.width,J.height,E.format,E.type);for(const ge of E.layerUpdates){const je=J.data.subarray(ge*Qe/J.data.BYTES_PER_ELEMENT,(ge+1)*Qe/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,ge,J.width,J.height,1,le,je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,J.width,J.height,$.depth,le,J.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,j,J.width,J.height,$.depth,0,J.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,J.width,J.height,$.depth,le,B,J.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,j,J.width,J.height,$.depth,0,le,B,J.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{re&&oe&&t.texStorage2D(n.TEXTURE_2D,Oe,j,ce[0].width,ce[0].height);for(let se=0,Te=ce.length;se<Te;se++)J=ce[se],E.format!==dt?le!==null?re?Be&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,J.width,J.height,le,J.data):t.compressedTexImage2D(n.TEXTURE_2D,se,j,J.width,J.height,0,J.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Be&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,J.width,J.height,le,B,J.data):t.texImage2D(n.TEXTURE_2D,se,j,J.width,J.height,0,le,B,J.data)}else if(E.isDataArrayTexture)if(re){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,j,$.width,$.height,$.depth),Be)if(E.layerUpdates.size>0){const se=dl($.width,$.height,E.format,E.type);for(const Te of E.layerUpdates){const Qe=$.data.subarray(Te*se/$.data.BYTES_PER_ELEMENT,(Te+1)*se/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Te,$.width,$.height,1,le,B,Qe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,le,B,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,j,$.width,$.height,$.depth,0,le,B,$.data);else if(E.isData3DTexture)re?(oe&&t.texStorage3D(n.TEXTURE_3D,Oe,j,$.width,$.height,$.depth),Be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,le,B,$.data)):t.texImage3D(n.TEXTURE_3D,0,j,$.width,$.height,$.depth,0,le,B,$.data);else if(E.isFramebufferTexture){if(oe)if(re)t.texStorage2D(n.TEXTURE_2D,Oe,j,$.width,$.height);else{let se=$.width,Te=$.height;for(let Qe=0;Qe<Oe;Qe++)t.texImage2D(n.TEXTURE_2D,Qe,j,se,Te,0,le,B,null),se>>=1,Te>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),$.parentNode!==se){se.appendChild($),u.add(E),se.onpaint=Te=>{const Qe=Te.changedElements;for(const ge of u)Qe.includes(ge.image)&&(ge.needsUpdate=!0)},se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{const Qe=n.RGBA,ge=n.RGBA,je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Qe,ge,je,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ce.length>0){if(re&&oe){const se=Pe(ce[0]);t.texStorage2D(n.TEXTURE_2D,Oe,j,se.width,se.height)}for(let se=0,Te=ce.length;se<Te;se++)J=ce[se],re?Be&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,le,B,J):t.texImage2D(n.TEXTURE_2D,se,j,le,B,J);E.generateMipmaps=!1}else if(re){if(oe){const se=Pe($);t.texStorage2D(n.TEXTURE_2D,Oe,j,se.width,se.height)}Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,B,$)}else t.texImage2D(n.TEXTURE_2D,0,j,le,B,$);y(E)&&E.mipmapsAutoUpdate===!0&&x(ie),ue.__version=ae.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Wt(w,E,k){if(E.image.length!==6)return;const ie=Ze(w,E),ee=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+k);const ae=i.get(ee);if(ee.version!==ae.__version||ie===!0){t.activeTexture(n.TEXTURE0+k);const ue=We.getPrimaries(We.workingColorSpace),Z=E.colorSpace===hi?null:We.getPrimaries(E.colorSpace),$=E.colorSpace===hi||ue===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const le=E.isCompressedTexture||E.image[0].isCompressedTexture,B=E.image[0]&&E.image[0].isDataTexture,j=[];for(let ge=0;ge<6;ge++)!le&&!B?j[ge]=v(E.image[ge],!0,s.maxCubemapSize):j[ge]=B?E.image[ge].image:E.image[ge],j[ge]=Re(E,j[ge]);const J=j[0],ce=r.convert(E.format,E.colorSpace),re=r.convert(E.type);let oe=I(E.internalFormat,ce,re,E.normalized,E.colorSpace);const Be=E.isVideoTexture!==!0,Oe=ae.__version===void 0||ie===!0,se=ee.dataReady;let Te=M(E,J);Xe(n.TEXTURE_CUBE_MAP,E);let Qe;if(E.isDepthTexture){if(oe=m(E.format===Vi,E.type),Oe)if(Be)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,oe,J.width,J.height);else for(let ge=0;ge<6;ge++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,oe,J.width,J.height,0,ce,re,null)}else if(le){Be&&Oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,oe,J.width,J.height);for(let ge=0;ge<6;ge++){Qe=j[ge].mipmaps;for(let je=0;je<Qe.length;je++){const It=Qe[je];E.format!==dt?ce!==null?Be?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,0,0,It.width,It.height,ce,It.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,oe,It.width,It.height,0,It.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,0,0,It.width,It.height,ce,re,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,oe,It.width,It.height,0,ce,re,It.data)}}}else{if(Qe=E.mipmaps,Be&&Oe){Qe.length>0&&Te++;const ge=Pe(j[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,oe,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(B){Be?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,j[ge].width,j[ge].height,ce,re,j[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,oe,j[ge].width,j[ge].height,0,ce,re,j[ge].data);for(let je=0;je<Qe.length;je++){const Ui=Qe[je].image[ge].image;Be?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,0,0,Ui.width,Ui.height,ce,re,Ui.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,oe,Ui.width,Ui.height,0,ce,re,Ui.data)}}else{Be?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ce,re,j[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,oe,ce,re,j[ge]);for(let je=0;je<Qe.length;je++){const It=Qe[je];Be?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,0,0,ce,re,It.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,oe,ce,re,It.image[ge])}}}y(E)&&E.mipmapsAutoUpdate===!0&&x(n.TEXTURE_CUBE_MAP),ae.__version=ee.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function ot(w,E,k,ie,ee,ae){const ue=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),$=I(k.internalFormat,ue,Z,k.normalized,k.colorSpace),le=i.get(E),B=i.get(k);if(B.__renderTarget=E,!le.__hasExternalTextures){const j=Math.max(1,E.width>>ae),J=Math.max(1,E.height>>ae);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ae,$,j,J,E.depth,0,ue,Z,null):t.texImage2D(ee,ae,$,j,J,0,ue,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Ae(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ee,B.__webglTexture,0,rt(E)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ee,B.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pi(w,E,k){if(n.bindRenderbuffer(n.RENDERBUFFER,w),E.depthBuffer){const ie=E.depthTexture,ee=ie&&ie.isDepthTexture?ie.type:null,ae=m(E.stencilBuffer,ee),ue=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt(E),ae,E.width,E.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt(E),ae,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,w)}else{const ie=E.textures;for(let ee=0;ee<ie.length;ee++){const ae=ie[ee],ue=r.convert(ae.format,ae.colorSpace),Z=r.convert(ae.type),$=I(ae.internalFormat,ue,Z,ae.normalized,ae.colorSpace);Ae(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt(E),$,E.width,E.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt(E),$,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(w,E,k){const ie=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(E.depthTexture);ee.__renderTarget=E;const ae=ie?E.depthTexture.image[0]:E.depthTexture.image;(!ee.__webglTexture||ae.width!==E.width||ae.height!==E.height)&&(ae.width=E.width,ae.height=E.height,E.depthTexture.needsUpdate=!0),ie?fe(E.depthTexture,0):ne(E.depthTexture,0);const ue=ee.__webglTexture,Z=rt(E),$=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,le=E.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Wi)Ae(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,$,ue,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,le,$,ue,0);else if(E.depthTexture.format===Vi)Ae(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,$,ue,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,le,$,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(w){const E=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const ie=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",ee)};ie.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=ie}if(w.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let ie=0;ie<6;ie++)St(E.__webglFramebuffer[ie],w,ie);else w.texture.mipmaps.length>0?St(E.__webglFramebuffer[0],w,0):St(E.__webglFramebuffer,w,0);else if(k){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=n.createRenderbuffer(),pi(E.__webglDepthbuffer[ie],w,!1);else{const ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ae)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),pi(E.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $t(w,E,k){const ie=i.get(w);E!==void 0&&ot(ie.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Zt(w)}function jt(w){const E=w.texture,k=i.get(w),ie=i.get(E);w.addEventListener("dispose",U),P(w);const ee=w.textures,ae=w.isWebGLCubeRenderTarget===!0,ue=ee.length>1;if(ue||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=E.version,a.memory.textures++),ae){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(E.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let $=0;$<E.mipmaps.length;$++)k.__webglFramebuffer[Z][$]=n.createFramebuffer()}else k.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(E.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<E.mipmaps.length;Z++)k.__webglFramebuffer[Z]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ue)for(let Z=0,$=ee.length;Z<$;Z++){const le=i.get(ee[Z]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Ae(w)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<ee.length;Z++){const $=ee[Z];k.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);const le=r.convert($.format,$.colorSpace),B=r.convert($.type),j=I($.internalFormat,le,B,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),J=rt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,j,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),pi(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,E);for(let Z=0;Z<6;Z++)if(E.mipmaps.length>0)for(let $=0;$<E.mipmaps.length;$++)ot(k.__webglFramebuffer[Z][$],w,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$);else ot(k.__webglFramebuffer[Z],w,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);y(E)?x(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let Z=0,$=ee.length;Z<$;Z++){const le=ee[Z],B=i.get(le);let j=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,B.__webglTexture),Xe(j,le),ot(k.__webglFramebuffer,w,le,n.COLOR_ATTACHMENT0+Z,j,0),y(le)&&x(j)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,ie.__webglTexture),Xe(Z,E),E.mipmaps.length>0)for(let $=0;$<E.mipmaps.length;$++)ot(k.__webglFramebuffer[$],w,E,n.COLOR_ATTACHMENT0,Z,$);else ot(k.__webglFramebuffer,w,E,n.COLOR_ATTACHMENT0,Z,0);y(E)?x(Z):E.mipmaps.length>0&&n.texParameteri(Z,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Zt(w)}function L(w){const E=w.textures;for(let k=0,ie=E.length;k<ie;k++){const ee=E[k];if(y(ee)&&ee.mipmapsAutoUpdate===!0){const ae=S(w),ue=i.get(ee).__webglTexture;t.bindTexture(ae,ue),x(ae),t.unbindTexture()}}}const ei=[];function st(w){if(w.samples>0){if(Ae(w)===!1){const E=w.textures,k=w.width,ie=w.height;let ee=n.COLOR_BUFFER_BIT;const ae=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(w),Z=E.length>1;if(Z)for(let le=0;le<E.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<E.length;le++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const B=i.get(E[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,B,0)}n.blitFramebuffer(0,0,k,ie,0,0,k,ie,ee,n.NEAREST),c===!0&&(ei.length=0,ei.push(n.COLOR_ATTACHMENT0+le),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&ei.push(ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ei))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let le=0;le<E.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const B=i.get(E[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,B,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const E=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function rt(w){return Math.min(s.maxSamples,w.samples)}function Ae(w){const E=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(w){const E=a.render.frame;h.get(w)!==E&&(h.set(w,E),w.update())}function Re(w,E){const k=w.colorSpace,ie=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==fs&&k!==hi&&(We.getTransfer(k)===et?(ie!==dt||ee!==Le)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",k)),E}function Pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=pe,this.resetTextureUnits=Y,this.getTextureUnits=q,this.setTextureUnits=te,this.setTexture2D=ne,this.setTexture2DArray=Ee,this.setTexture3D=Se,this.setTextureCube=fe,this.rebindTextures=$t,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Ae,this.dispose=z}function Om(n,e){function t(i,s=hi){let r;const a=We.getTransfer(s);if(i===Le)return n.UNSIGNED_BYTE;if(i===Za)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$a)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yr)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mr)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oc)return n.BYTE;if(i===lc)return n.SHORT;if(i===un)return n.UNSIGNED_SHORT;if(i===Ka)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Qt)return n.FLOAT;if(i===Ct)return n.HALF_FLOAT;if(i===cc)return n.ALPHA;if(i===os)return n.RGB;if(i===dt)return n.RGBA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===xi)return n.RED;if(i===ja)return n.RED_INTEGER;if(i===Kt)return n.RG;if(i===eo)return n.RG_INTEGER;if(i===to)return n.RGBA_INTEGER;if(i===Bn||i===an||i===or||i===on)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Bn)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===an)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===on)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Bn)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===an)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===on)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cr||i===wa||i===Pn||i===ls)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pn)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ls)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hr||i===cs||i===hs||i===ur||i===dr||i===us||i===fr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hr||i===cs)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hs)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ur)return r.COMPRESSED_R11_EAC;if(i===dr)return r.COMPRESSED_SIGNED_R11_EAC;if(i===us)return r.COMPRESSED_RG11_EAC;if(i===fr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ln||i===ba||i===Ba||i===Ta||i===Tn||i===Ra||i===Da||i===La||i===Pa||i===Ua||i===Fa||i===Na||i===Qa||i===Oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ln)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ba)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ba)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ta)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tn)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ra)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Da)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===La)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Na)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Un||i===Ga||i===Ar)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Un)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ar)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pr||i===gr||i===ds||i===mr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ds)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ln?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,km=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new yc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ot({vertexShader:Gm,fragmentShader:km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new kn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zm extends Yi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new Hm,A={},v=t.getContextAttributes();let y=null,x=null;const S=[],I=[],m=new be;let M=null,P=null;const b=new ci;b.viewport=new ft;const R=new ci;R.viewport=new ft;const U=[b,R],V=new Zd;let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=S[X];return ne===void 0&&(ne=new Vr,S[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=S[X];return ne===void 0&&(ne=new Vr,S[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=S[X];return ne===void 0&&(ne=new Vr,S[X]=ne),ne.getHandSpace()};function O(X){const ne=I.indexOf(X.inputSource);if(ne===-1)return;const Ee=S[ne];Ee!==void 0&&(Ee.update(X.inputSource,X.frame,l||a),Ee.dispatchEvent({type:X.type,data:X.inputSource}))}function Q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",K);for(let X=0;X<S.length;X++){const ne=I[X];ne!==null&&(I[X]=null,S[X].disconnect(ne))}T=null,z=null,p.reset();for(const X in A)delete A[X];if(e.setRenderTarget(y),f=null,d=null,u=null,s=null,x=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(m.width,m.height,!1),P!==null){const X=P.camera;X.fov=P.fov,X.zoom=P.zoom,X.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(m),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Se=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=v.stencil?Vi:Wi,Se=v.stencil?Ln:Ci);const we={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(we),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ai(d.textureWidth,d.textureHeight,{format:dt,type:Le,depthTexture:new Nn(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ai(f.framebufferWidth,f.framebufferHeight,{format:dt,type:Le,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(X){for(let ne=0;ne<X.removed.length;ne++){const Ee=X.removed[ne],Se=I.indexOf(Ee);Se>=0&&(I[Se]=null,S[Se].disconnect(Ee))}for(let ne=0;ne<X.added.length;ne++){const Ee=X.added[ne];let Se=I.indexOf(Ee);if(Se===-1){for(let we=0;we<S.length;we++)if(we>=I.length){I.push(Ee),Se=we;break}else if(I[we]===null){I[we]=Ee,Se=we;break}if(Se===-1)break}const fe=S[Se];fe&&fe.connect(Ee)}}function N(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ne=X.near,Ee=X.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(Ee=p.depthFar)),V.near=R.near=b.near=ne,V.far=R.far=b.far=Ee,(T!==V.near||z!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),T=V.near,z=V.far),V.layers.mask=X.layers.mask|6,b.layers.mask=V.layers.mask&-5,R.layers.mask=V.layers.mask&-3;const Se=X.parent,fe=V.cameras;N(V,Se);for(let we=0;we<fe.length;we++)N(fe[we],Se);V.projectionMatrix.copy(b.projectionMatrix),V.projectionMatrixInverse.copy(b.projectionMatrixInverse),P===null&&X.isPerspectiveCamera&&(P={camera:X,fov:X.fov,zoom:X.zoom}),Y(X,V,Se)};function Y(X,ne,Ee){Ee===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(Ee.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=gs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(X){return A[X]};let q=null;function te(X,ne){if(h=ne.getViewerPose(l||a),g=ne,h!==null){const Ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Se=!1;Ee.length!==V.cameras.length&&(V.cameras.length=0,Se=!0);for(let xe=0;xe<Ee.length;xe++){const Xe=Ee[xe];let Ze=null;if(f!==null)Ze=f.getViewport(Xe);else{const ut=u.getViewSubImage(d,Xe);Ze=ut.viewport,xe===0&&(e.setRenderTargetTextures(x,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(x))}let ke=U[xe];ke===void 0&&(ke=new ci,ke.layers.enable(xe),ke.viewport=new ft,U[xe]=ke),ke.matrix.fromArray(Xe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Xe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),xe===0&&(V.matrix.copy(ke.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Se===!0&&V.cameras.push(ke)}const fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const xe=u.getDepthInformation(Ee[0]);xe&&xe.isValid&&xe.texture&&p.init(xe,s.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let xe=0;xe<Ee.length;xe++){const Xe=Ee[xe].camera;if(Xe){let Ze=A[Xe];Ze||(Ze=new yc,A[Xe]=Ze);const ke=u.getCameraImage(Xe);Ze.sourceTexture=ke}}}}for(let Ee=0;Ee<S.length;Ee++){const Se=I[Ee],fe=S[Ee];Se!==null&&fe!==void 0&&fe.update(Se,ne,l||a)}q&&q(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const pe=new Dc;pe.setAnimationLoop(te),this.setAnimationLoop=function(X){q=X},this.dispose=function(){}}}const Vm=new nt,Hc=new Fe;Hc.set(-1,0,0,0,1,0,0,0,1);function Wm(n,e){function t(p,A){p.matrixAutoUpdate===!0&&p.updateMatrix(),A.value.copy(p.matrix)}function i(p,A){A.color.getRGB(p.fogColor.value,bc(n)),A.isFog?(p.fogNear.value=A.near,p.fogFar.value=A.far):A.isFogExp2&&(p.fogDensity.value=A.density)}function s(p,A,v,y,x){A.isNodeMaterial?A.uniformsNeedUpdate=!1:A.isMeshBasicMaterial?r(p,A):A.isMeshLambertMaterial?(r(p,A),A.envMap&&(p.envMapIntensity.value=A.envMapIntensity)):A.isMeshToonMaterial?(r(p,A),u(p,A)):A.isMeshPhongMaterial?(r(p,A),h(p,A),A.envMap&&(p.envMapIntensity.value=A.envMapIntensity)):A.isMeshStandardMaterial?(r(p,A),d(p,A),A.isMeshPhysicalMaterial&&f(p,A,x)):A.isMeshMatcapMaterial?(r(p,A),g(p,A)):A.isMeshDepthMaterial?r(p,A):A.isMeshDistanceMaterial?(r(p,A),_(p,A)):A.isMeshNormalMaterial?r(p,A):A.isLineBasicMaterial?(a(p,A),A.isLineDashedMaterial&&o(p,A)):A.isPointsMaterial?c(p,A,v,y):A.isSpriteMaterial?l(p,A):A.isShadowMaterial?(p.color.value.copy(A.color),p.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function r(p,A){p.opacity.value=A.opacity,A.color&&p.diffuse.value.copy(A.color),A.emissive&&p.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(p.map.value=A.map,t(A.map,p.mapTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.bumpMap&&(p.bumpMap.value=A.bumpMap,t(A.bumpMap,p.bumpMapTransform),p.bumpScale.value=A.bumpScale,A.side===Xt&&(p.bumpScale.value*=-1)),A.normalMap&&(p.normalMap.value=A.normalMap,t(A.normalMap,p.normalMapTransform),p.normalScale.value.copy(A.normalScale),A.side===Xt&&p.normalScale.value.negate()),A.displacementMap&&(p.displacementMap.value=A.displacementMap,t(A.displacementMap,p.displacementMapTransform),p.displacementScale.value=A.displacementScale,p.displacementBias.value=A.displacementBias),A.emissiveMap&&(p.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,p.emissiveMapTransform)),A.specularMap&&(p.specularMap.value=A.specularMap,t(A.specularMap,p.specularMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest);const v=e.get(A),y=v.envMap,x=v.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Hc),p.reflectivity.value=A.reflectivity,p.ior.value=A.ior,p.refractionRatio.value=A.refractionRatio),A.lightMap&&(p.lightMap.value=A.lightMap,p.lightMapIntensity.value=A.lightMapIntensity,t(A.lightMap,p.lightMapTransform)),A.aoMap&&(p.aoMap.value=A.aoMap,p.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,p.aoMapTransform))}function a(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,A.map&&(p.map.value=A.map,t(A.map,p.mapTransform))}function o(p,A){p.dashSize.value=A.dashSize,p.totalSize.value=A.dashSize+A.gapSize,p.scale.value=A.scale}function c(p,A,v,y){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.size.value=A.size*v,p.scale.value=y*.5,A.map&&(p.map.value=A.map,t(A.map,p.uvTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest)}function l(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.rotation.value=A.rotation,A.map&&(p.map.value=A.map,t(A.map,p.mapTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest)}function h(p,A){p.specular.value.copy(A.specular),p.shininess.value=Math.max(A.shininess,1e-4)}function u(p,A){A.gradientMap&&(p.gradientMap.value=A.gradientMap)}function d(p,A){p.metalness.value=A.metalness,A.metalnessMap&&(p.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,p.metalnessMapTransform)),p.roughness.value=A.roughness,A.roughnessMap&&(p.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,p.roughnessMapTransform)),A.envMap&&(p.envMapIntensity.value=A.envMapIntensity)}function f(p,A,v){p.ior.value=A.ior,A.diffuseRoughness>0&&(p.diffuseRoughness.value=A.diffuseRoughness,A.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=A.diffuseRoughnessMap,t(A.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),A.sheen>0&&(p.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),p.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(p.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,p.sheenColorMapTransform)),A.sheenRoughnessMap&&(p.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,p.sheenRoughnessMapTransform))),A.clearcoat>0&&(p.clearcoat.value=A.clearcoat,p.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(p.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,p.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(p.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Xt&&p.clearcoatNormalScale.value.negate())),A.dispersion>0&&(p.dispersion.value=A.dispersion),A.retroreflectivity>0&&(p.retroreflectivity.value=A.retroreflectivity),A.iridescence>0&&(p.iridescence.value=A.iridescence,p.iridescenceIOR.value=A.iridescenceIOR,p.iridescenceThicknessMinimum.value=A.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=A.iridescenceThicknessMaximum,A.iridescenceMap&&(p.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,p.iridescenceMapTransform)),A.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),A.transmission>0&&(p.transmission.value=A.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),A.transmissionMap&&(p.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,p.transmissionMapTransform)),p.thickness.value=A.thickness,A.thicknessMap&&(p.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=A.attenuationDistance,p.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(p.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(p.anisotropyMap.value=A.anisotropyMap,t(A.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=A.specularIntensity,p.specularColor.value.copy(A.specularColor),A.specularColorMap&&(p.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,p.specularColorMapTransform)),A.specularIntensityMap&&(p.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,A){A.matcap&&(p.matcap.value=A.matcap)}function _(p,A){const v=e.get(A).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qm(n,e,t,i){let s={},r={};function a(v,y){const x=y.program;i.uniformBlockBinding(v,x,s[v.id])}function o(v,y){let x=s[v.id];x===void 0&&(g(v),x=c(v),s[v.id]=x,v.addEventListener("dispose",p));const S=y.program;i.updateUBOMapping(v,S);const I=e.render.frame;r[v.id]!==I&&(l(v),r[v.id]=I)}function c(v){const y=n.createBuffer(),x=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,x,S),n.bindBuffer(n.UNIFORM_BUFFER,null),y}function l(v){const y=s[v.id],x=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let I=0,m=x.length;I<m;I++){const M=x[I];if(Array.isArray(M))for(let P=0,b=M.length;P<b;P++)h(M[P],I,P,S);else h(M,I,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,y,x,S){if(d(v,y,x,S)===!0){const I=v.__offset,m=v.value;if(Array.isArray(m)){let M=0;for(let P=0;P<m.length;P++){const b=m[P],R=_(b,!0);u(b,v.__data,M),M+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(m,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,I,v.__data)}}function u(v,y,x){typeof v=="number"||typeof v=="boolean"?y[x]=v:v.isMatrix3?(y[x]=v.elements[0],y[x+1]=v.elements[1],y[x+2]=v.elements[2],y[x+3]=0,y[x+4]=v.elements[3],y[x+5]=v.elements[4],y[x+6]=v.elements[5],y[x+7]=0,y[x+8]=v.elements[6],y[x+9]=v.elements[7],y[x+10]=v.elements[8],y[x+11]=0):ArrayBuffer.isView(v)?y.set(v.subarray(0,y.length-x),x):v.toArray(y,x)}function d(v,y,x,S){const I=v.value,m=y+"_"+x;if(Array.isArray(I)){S[m]===void 0&&(S[m]=[]);const M=S[m];let P=!1;for(let b=0;b<I.length;b++)f(I[b],M,b)===!0&&(P=!0);return P}return f(I,S,m)}function f(v,y,x){if(y[x]===void 0)return typeof v=="number"||typeof v=="boolean"?y[x]=v:ArrayBuffer.isView(v)?y[x]=v.slice():y[x]=v.clone(),!0;{const S=y[x];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return y[x]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function g(v){const y=v.uniforms;let x=0;const S=16;for(let m=0,M=y.length;m<M;m++){const P=Array.isArray(y[m])?y[m]:[y[m]];for(let b=0,R=P.length;b<R;b++){const U=P[b],V=Array.isArray(U.value)?U.value:[U.value],T=Array.isArray(y[m])||Array.isArray(U.value);let z=x;for(let Q=0,K=V.length;Q<K;Q++){const N=V[Q],Y=_(N,T),q=x%S,te=q%Y.boundary,pe=q+te;x+=te,pe!==0&&S-pe<Y.storage&&(x+=S-pe),Q===0&&(z=x),x+=Y.storage}const O=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new O((x-z)/Float32Array.BYTES_PER_ELEMENT),U.__offset=z}}const I=x%S;return I>0&&(x+=S-I),v.__size=x,v.__cache={},this}function _(v,y){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=16,x.storage=48):v.isMatrix4?(x.boundary=16,x.storage=64):v.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(x.boundary=16,x.storage=v.byteLength):De("WebGLRenderer: Unsupported uniform value type.",v),y===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function p(v){const y=v.target;y.removeEventListener("dispose",p),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function A(){for(const v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:A}}const Xm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function Ym(){return mi===null&&(mi=new dn(Xm,16,16,Kt,Ct),mi.name="DFG_LUT",mi.minFilter=ht,mi.magFilter=ht,mi.wrapS=ni,mi.wrapT=ni,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class Jm{constructor(e={}){const{canvas:t=bu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Le}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=f,p=new Set([to,eo,ja]),A=new Set([Le,Ci,un,Ln,Za,$a]),v=new Uint32Array(4),y=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]};let S=null,I=null;const m=[],M=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let R=!1,U=null,V=null,T=null,z=null;this._outputColorSpace=Dt;let O=0,Q=0,K=null,N=-1,Y=null;const q=new ft,te=new ft;let pe=null;const X=new Ne(0);let ne=0,Ee=t.width,Se=t.height,fe=1,we=null,ve=null;const xe=new ft(0,0,Ee,Se),Xe=new ft(0,0,Ee,Se);let Ze=!1;const ke=new ms,ut=new oo;let Et=!1,Wt=!1;const ot=new nt,pi=new F,St=new ft,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function jt(){return K===null?fe:1}let L=i;function ei(C,D){return t.getContext(C,D)}let st,rt,Ae,vt,Re,Pe,w,E,k,ie,ee,ae,ue,Z,$,le,B,j,J,ce,re,oe,Be;try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),L===null){const D="webgl2";if(L=ei(D,C),L===null)throw ei(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(C){throw t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ye("WebGLRenderer: "+C.message),C}function Oe(){st=new $p(L),st.init(),re=new Om(L,st),rt=new kp(L,st,e,re),Ae=new Nm(L,st),rt.reversedDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),V=L.createFramebuffer(),T=L.createFramebuffer(),z=L.createFramebuffer(),vt=new tg(L),Re=new ym,Pe=new Qm(L,st,Ae,Re,rt,re,vt),w=new Zp(b),E=new nf(L),oe=new Op(L,E),k=new jp(L,E,vt,oe),ie=new ng(L,k,E,oe,vt),j=new ig(L,rt,Pe),$=new Hp(Re),ee=new Cm(b,w,st,rt,oe,$),ae=new Wm(b,Re),ue=new Sm,Z=new Rm(st),B=new Qp(b,w,Ae,ie,g,c),le=new Fm(b,ie,rt),Be=new qm(L,vt,rt,Ae),J=new Gp(L,st,vt),ce=new eg(L,st,vt),vt.programs=ee.programs,b.capabilities=rt,b.extensions=st,b.properties=Re,b.renderLists=ue,b.shadowMap=le,b.state=Ae,b.info=vt}_!==Le&&(P=new rg(_,t.width,t.height,o,s,r));const se=new zm(b,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=st.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=st.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(Ee,Se,!1))},this.getSize=function(C){return C.set(Ee,Se)},this.setSize=function(C,D,W=!0){if(se.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=C,Se=D,t.width=Math.floor(C*fe),t.height=Math.floor(D*fe),W===!0&&(t.style.width=C+"px",t.style.height=D+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,C,D)},this.getDrawingBufferSize=function(C){return C.set(Ee*fe,Se*fe).floor()},this.setDrawingBufferSize=function(C,D,W){Ee=C,Se=D,fe=W,t.width=Math.floor(C*W),t.height=Math.floor(D*W),this.setViewport(0,0,C,D)},this.setEffects=function(C){if(_===Le){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let D=0;D<C.length;D++)if(C[D].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(q)},this.getViewport=function(C){return C.copy(xe)},this.setViewport=function(C,D,W,G){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,D,W,G),Ae.viewport(q.copy(xe).multiplyScalar(jt()).round())},this.getScissor=function(C){return C.copy(Xe)},this.setScissor=function(C,D,W,G){C.isVector4?Xe.set(C.x,C.y,C.z,C.w):Xe.set(C,D,W,G),Ae.scissor(te.copy(Xe).multiplyScalar(jt()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(C){Ae.setScissorTest(Ze=C)},this.setOpaqueSort=function(C){we=C},this.setTransparentSort=function(C){ve=C},this.getClearColor=function(C){return C.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(C=!0,D=!0,W=!0){let G=0;if(C){let H=!1;if(K!==null){const de=K.texture.format;H=p.has(de)}if(H){const de=K.texture.type,Ce=A.has(de),he=B.getClearColor(),_e=B.getClearAlpha(),Ie=he.r,Ue=he.g,ze=he.b;Ce?(v[0]=Ie,v[1]=Ue,v[2]=ze,v[3]=_e,L.clearBufferuiv(L.COLOR,0,v)):(y[0]=Ie,y[1]=Ue,y[2]=ze,y[3]=_e,L.clearBufferiv(L.COLOR,0,y))}else G|=L.COLOR_BUFFER_BIT}D&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),U=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),B.dispose(),ue.dispose(),Z.dispose(),Pe.dispose(),Re.dispose(),w.dispose(),ie.dispose(),k.dispose(),oe.dispose(),Be.dispose(),ee.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ao),se.removeEventListener("sessionend",po),Ji.stop()};function Te(C){C.preventDefault(),To("WebGLRenderer: Context Lost."),R=!0}function Qe(){To("WebGLRenderer: Context Restored."),R=!1;const C=vt.autoReset,D=le.enabled,W=le.autoUpdate,G=le.needsUpdate,H=le.type;Oe(),vt.autoReset=C,le.enabled=D,le.autoUpdate=W,le.needsUpdate=G,le.type=H}function ge(C){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function je(C){const D=C.target;D.removeEventListener("dispose",je),It(D)}function It(C){Ui(C),Re.remove(C)}function Ui(C){const D=Re.get(C).programs;D!==void 0&&(D.forEach(function(W){ee.releaseProgram(W)}),C.isShaderMaterial&&ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,D,W,G,H,de){D===null&&(D=Zt);const Ce=H.isMesh&&H.matrixWorld.determinantAffine()<0,he=Oh(C,D,W,G,H);Ae.setMaterial(G,Ce);let _e=W.index,Ie=1;if(G.wireframe===!0){if(_e=k.getWireframeAttribute(W),_e===void 0)return;Ie=2}const Ue=W.drawRange,ze=W.attributes.position;let ye=Ue.start*Ie,Ve=(Ue.start+Ue.count)*Ie;de!==null&&(ye=Math.max(ye,de.start*Ie),Ve=Math.min(Ve,(de.start+de.count)*Ie)),_e!==null?(ye=Math.max(ye,0),Ve=Math.min(Ve,_e.count)):ze!=null&&(ye=Math.max(ye,0),Ve=Math.min(Ve,ze.count));const gt=Ve-ye;if(gt<0||gt===1/0)return;oe.setup(H,G,he,W,_e);let it,tt=J;if(_e!==null&&(it=E.get(_e),tt=ce,tt.setIndex(it)),H.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*jt()),tt.setMode(L.LINES)):tt.setMode(L.TRIANGLES);else if(H.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),Ae.setLineWidth(Lt*jt()),H.isLineSegments?tt.setMode(L.LINES):H.isLineLoop?tt.setMode(L.LINE_LOOP):tt.setMode(L.LINE_STRIP)}else H.isPoints?tt.setMode(L.POINTS):H.isSprite&&tt.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(st.get("WEBGL_multi_draw"))tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Lt=H._multiDrawStarts,Me=H._multiDrawCounts,Gt=H._multiDrawCount,Je=_e?E.get(_e).bytesPerElement:1,Ki=Re.get(G).currentProgram.getUniforms();for(let Pt=0;Pt<Gt;Pt++)Ki.setValue(L,"_gl_DrawID",Pt),tt.render(Lt[Pt]/Je,Me[Pt])}else if(H.isInstancedMesh)tt.renderInstances(ye,gt,H.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Me=Math.min(W.instanceCount,Lt);tt.renderInstances(ye,gt,Me)}else tt.render(ye,gt)};function fo(C,D,W,G){U!==null&&C.isNodeMaterial&&U.setObject(G,C),Et===!0&&$.setState(C,W,!1),C.transparent===!0&&C.side===Nt&&C.forceSinglePass===!1?(C.side=Xt,C.needsUpdate=!0,zn(C,D,G),C.side=cn,C.needsUpdate=!0,zn(C,D,G),C.side=Nt):zn(C,D,G)}this.compile=function(C,D,W=null){W===null&&(W=C),U!==null&&U.renderStart(C,D,W),I=Z.get(W),I.init(D),M.push(I),W.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(I.pushLight(H),H.castShadow&&I.pushShadow(H))}),C!==W&&C.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(I.pushLight(H),H.castShadow&&I.pushShadow(H))}),I.setupLights(),U!==null&&U.updateLights(I.state.lightsArray),Wt=this.localClippingEnabled,Et=$.init(this.clippingPlanes,Wt),Et===!0&&$.setGlobalState(this.clippingPlanes,D),U!==null&&le.render(I.state.shadowsArray,W,D);const G=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const de=H.material;if(de)if(Array.isArray(de))for(let Ce=0;Ce<de.length;Ce++){const he=de[Ce];fo(he,W,D,H),G.add(he)}else fo(de,W,D,H),G.add(de)}),I=M.pop(),U!==null&&U.renderEnd(),G},this.compileAsync=function(C,D,W=null){const G=this.compile(C,D,W);return new Promise(H=>{function de(){if(G.forEach(function(Ce){const _e=Re.get(Ce).currentProgram;(_e===void 0||_e.isReady())&&G.delete(Ce)}),G.size===0){H(C);return}setTimeout(de,10)}st.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Lr=null;function Nh(C){Lr&&Lr(C)}function Ao(){Ji.stop()}function po(){Ji.start()}const Ji=new Dc;Ji.setAnimationLoop(Nh),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(C){Lr=C,se.setAnimationLoop(C),C===null?Ji.stop():Ji.start()},se.addEventListener("sessionstart",Ao),se.addEventListener("sessionend",po),this.render=function(C,D){if(D!==void 0&&D.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(C,D);const W=se.enabled===!0&&se.isPresenting===!0,G=P!==null&&(K===null||W)&&P.begin(b,K);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(D),D=se.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,D,K),I=Z.get(C,M.length),I.init(D),I.state.textureUnits=Pe.getTextureUnits(),M.push(I),ot.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?ut.setFromArrayCamera(D):ke.setFromProjectionMatrix(ot,di,D.reversedDepth),Wt=this.localClippingEnabled,Et=$.init(this.clippingPlanes,Wt),S=ue.get(C,m.length),S.init(),m.push(S),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const Ce=b.xr.getDepthSensingMesh();Ce!==null&&Pr(Ce,D,-1/0,b.sortObjects)}Pr(C,D,0,b.sortObjects),S.finish(),U!==null&&U.updateLights(I.state.lightsArray),b.sortObjects===!0&&S.sort(we,ve),$t=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,$t&&B.addToRenderList(S,C),this.info.autoReset===!0&&this.info.reset(),Et===!0&&$.beginShadows();const H=I.state.shadowsArray;if(le.render(H,C,D),Et===!0&&$.endShadows(),(G&&P.hasRenderPass())===!1){const Ce=S.opaque,he=S.transmissive;if(I.setupLights(),D.isArrayCamera){const _e=D.cameras;if(he.length>0)for(let Ie=0,Ue=_e.length;Ie<Ue;Ie++){const ze=_e[Ie];mo(Ce,he,C,ze)}$t&&B.render(C);for(let Ie=0,Ue=_e.length;Ie<Ue;Ie++){const ze=_e[Ie];go(S,C,ze,ze.viewport)}}else he.length>0&&mo(Ce,he,C,D),$t&&B.render(C),go(S,C,D)}K!==null&&Q===0&&(Pe.updateMultisampleRenderTarget(K),Pe.updateRenderTargetMipmap(K)),G&&P.end(b),C.isScene===!0&&C.onAfterRender(b,C,D),oe.resetDefaultState(),N=-1,Y=null,M.pop(),M.length>0?(I=M[M.length-1],Pe.setTextureUnits(I.state.textureUnits),Et===!0&&$.setGlobalState(b.clippingPlanes,I.state.camera)):I=null,m.pop(),m.length>0?S=m[m.length-1]:S=null,U!==null&&U.renderEnd()};function Pr(C,D,W,G){if(C.visible===!1)return;if(C.layers.test(D.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(D);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){const Ce=D.isArrayCamera?ut:ke;if(!C.frustumCulled||C.intersectsFrustum(Ce)){G&&St.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ot);const he=ie.update(C),_e=C.material;_e.visible&&S.push(C,he,_e,W,St.z,null,D)}}else if(C.isMesh||C.isLine||C.isPoints){const Ce=D.isArrayCamera?ut:ke;if(!C.frustumCulled||C.intersectsFrustum(Ce)){const he=ie.update(C),_e=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),St.copy(C.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),St.copy(he.boundingSphere.center)),St.applyMatrix4(C.matrixWorld).applyMatrix4(ot)),Array.isArray(_e)){const Ie=he.groups;for(let Ue=0,ze=Ie.length;Ue<ze;Ue++){const ye=Ie[Ue],Ve=_e[ye.materialIndex];Ve&&Ve.visible&&S.push(C,he,Ve,W,St.z,ye,D)}}else _e.visible&&S.push(C,he,_e,W,St.z,null,D)}}}const de=C.children;for(let Ce=0,he=de.length;Ce<he;Ce++)Pr(de[Ce],D,W,G)}function go(C,D,W,G){const{opaque:H,transmissive:de,transparent:Ce}=C;I.setupLightsView(W),Et===!0&&$.setGlobalState(b.clippingPlanes,W),G&&Ae.viewport(q.copy(G)),H.length>0&&Bs(H,D,W),de.length>0&&Bs(de,D,W),Ce.length>0&&Bs(Ce,D,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function mo(C,D,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[G.id]===void 0){const ye=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[G.id]=new Ai(1,1,{generateMipmaps:!0,type:ye?Ct:Le,minFilter:vi,samples:Math.max(4,rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}const de=I.state.transmissionRenderTarget[G.id],Ce=G.viewport||q;de.setSize(Ce.z*b.transmissionResolutionScale,Ce.w*b.transmissionResolutionScale);const he=b.getRenderTarget(),_e=b.getActiveCubeFace(),Ie=b.getActiveMipmapLevel();b.setRenderTarget(de),b.getClearColor(X),ne=b.getClearAlpha(),ne<1&&b.setClearColor(16777215,.5),b.clear(),$t&&B.render(W);const Ue=b.toneMapping;b.toneMapping=Li;const ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),I.setupLightsView(G),Et===!0&&$.setGlobalState(b.clippingPlanes,G),Bs(C,W,G),Pe.updateMultisampleRenderTarget(de),Pe.updateRenderTargetMipmap(de),st.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ve=0,gt=D.length;Ve<gt;Ve++){const it=D[Ve],{object:tt,geometry:Lt,material:Me,group:Gt}=it;if(Me.side===Nt&&tt.layers.test(G.layers)){const Je=Me.side;Me.side=Xt,Me.needsUpdate=!0,_o(tt,W,G,Lt,Me,Gt),Me.side=Je,Me.needsUpdate=!0,ye=!0}}ye===!0&&(Pe.updateMultisampleRenderTarget(de),Pe.updateRenderTargetMipmap(de))}b.setRenderTarget(he,_e,Ie),b.setClearColor(X,ne),ze!==void 0&&(G.viewport=ze),b.toneMapping=Ue}function Bs(C,D,W){const G=D.isScene===!0?D.overrideMaterial:null;for(let H=0,de=C.length;H<de;H++){const Ce=C[H],{object:he,geometry:_e,group:Ie}=Ce;let Ue=Ce.material;Ue.allowOverride===!0&&G!==null&&(Ue=G),he.layers.test(W.layers)&&_o(he,D,W,_e,Ue,Ie)}}function _o(C,D,W,G,H,de){U!==null&&H.isNodeMaterial&&U.setObject(C,H),C.onBeforeRender(b,D,W,G,H,de),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(b,D,W,G,C,de),H.transparent===!0&&H.side===Nt&&H.forceSinglePass===!1?(H.side=Xt,H.needsUpdate=!0,b.renderBufferDirect(W,D,G,H,C,de),H.side=cn,H.needsUpdate=!0,b.renderBufferDirect(W,D,G,H,C,de),H.side=Nt):b.renderBufferDirect(W,D,G,H,C,de),C.onAfterRender(b,D,W,G,H,de)}function Eo(C){let D=0;for(const W of C)W.texture!==null&&D++;return D}function zn(C,D,W){D.isScene!==!0&&(D=Zt);const G=Re.get(C),H=I.state.lights,de=I.state.shadowsArray,Ce=H.state.version,he=ee.getParameters(C,H.state,de,D,W,I.state.lightProbeGridArray),_e=ee.getProgramCacheKey(he);let Ie=G.programs;G.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;const Ue=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;G.envMap=w.get(C.envMap||G.environment,Ue),G.envMapRotation=G.environment!==null&&C.envMap===null?D.environmentRotation:C.envMapRotation,Ie===void 0&&(C.addEventListener("dispose",je),Ie=new Map,G.programs=Ie,G.programVariants=new Map);let ze=Ie.get(_e);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===Ce)return xo(C,he),ze}else he.uniforms=ee.getUniforms(C),U!==null&&C.isNodeMaterial&&U.build(C,W,he),C.onBeforeCompile(he,b),ze=ee.acquireProgram(he,_e),Ie.set(_e,ze),G.uniforms=he.uniforms;const ye=G.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ye.clippingPlanes=$.uniform),xo(C,he),G.needsLights=kh(C),G.lightsStateVersion=Ce,G.needsLights&&(ye.ambientLightColor.value=H.state.ambient,ye.lightProbe.value=H.state.probe,ye.sunLights.value=H.state.sun,ye.sunLightShadows.value=H.state.sunShadow,ye.directionalLights.value=H.state.directional,ye.directionalLightShadows.value=H.state.directionalShadow,ye.spotLights.value=H.state.spot,ye.spotLightShadows.value=H.state.spotShadow,ye.rectAreaLights.value=H.state.rectArea,ye.ltc_1.value=H.state.rectAreaLTC1,ye.ltc_2.value=H.state.rectAreaLTC2,ye.pointLights.value=H.state.point,ye.pointLightShadows.value=H.state.pointShadow,ye.hemisphereLights.value=H.state.hemi,ye.sunShadowMatrix.value=H.state.sunShadowMatrix,ye.sunShadowCascade.value=H.state.sunShadowCascade,ye.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ye.spotLightMatrix.value=H.state.spotLightMatrix,ye.spotLightMap.value=H.state.spotLightMap,ye.pointShadowMatrix.value=H.state.pointShadowMatrix),G.numLightProbeGrids=Eo(I.state.lightProbeGridArray),G.currentProgram=ze,G.uniformsList=null,ze}function Qh(C,D,W,G,H){const de=Re.get(C),Ce=de.currentProgram.id+","+G+","+H;let he=de.programVariants.get(Ce);return he===void 0?(he=zn(C,D,W),de.programVariants.set(Ce,he)):(de.currentProgram=he,de.uniformsList=null,de.outputColorSpace=G,de.toneMapping=H),he}function vo(C){if(C.uniformsList===null){const D=C.currentProgram.getUniforms();C.uniformsList=lr.seqWithValue(D.seq,C.uniforms)}return C.uniformsList}function xo(C,D){const W=Re.get(C);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Oh(C,D,W,G,H){D.isScene!==!0&&(D=Zt),Pe.resetTextureUnits();const de=D.fog,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,he=K===null?b.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:We.workingColorSpace,_e=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ie=w.get(G.envMap||Ce,_e),Ue=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ye=!!W.morphAttributes.position,Ve=!!W.morphAttributes.normal,gt=!!W.morphAttributes.color;let it=Li;G.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(it=b.toneMapping);const tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Lt=tt!==void 0?tt.length:0,Me=Re.get(G),Gt=I.state.lights;if(Et===!0&&(Wt===!0||C!==Y)){const lt=C===Y&&G.id===N;$.setState(G,C,lt)}let Je=!1,Ki=!1;G.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==Gt.state.version||H.isBatchedMesh&&Me.batching===!1||!H.isBatchedMesh&&Me.batching===!0||H.isBatchedMesh&&Me.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Me.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Me.instancing===!1||!H.isInstancedMesh&&Me.instancing===!0||H.isSkinnedMesh&&Me.skinning===!1||!H.isSkinnedMesh&&Me.skinning===!0||H.isInstancedMesh&&Me.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Me.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Me.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Me.instancingMorph===!1&&H.morphTexture!==null||Me.envMap!==Ie||G.fog===!0&&Me.fog!==de||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==$.numPlanes||Me.numIntersection!==$.numIntersection)||Me.vertexAlphas!==Ue||Me.vertexTangents!==ze||Me.morphTargets!==ye||Me.morphNormals!==Ve||Me.morphColors!==gt||Me.morphTargetsCount!==Lt||Me.numLightProbeGrids!==Eo(I.state.lightProbeGridArray)?Je=!0:(Me.outputColorSpace!==he||Me.toneMapping!==it)&&(Ki=!0):(Je=!0,Me.__version=G.version);let Pt=Me.currentProgram;(Je===!0||Ki===!0)&&(Pt=Ki===!0?Qh(G,D,H,he,it):zn(G,D,H),U&&G.isNodeMaterial&&U.onUpdateProgram(G,Pt,Me));let Ts=!1,Fi=!1,Zi=!1;const qe=Pt.getUniforms(),Rt=Me.uniforms;if(Ae.useProgram(Pt.program)&&(Ts=!0,Fi=!0,Zi=!0),G.id!==N&&(N=G.id,Fi=!0),Ts||Y!==C){Ae.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),qe.setValue(L,"projectionMatrix",C.projectionMatrix),qe.setValue(L,"viewMatrix",C.matrixWorldInverse);const wt=qe.map.cameraPosition;wt!==void 0&&wt.setValue(L,pi.setFromMatrixPosition(C.matrixWorld)),rt.logarithmicDepthBuffer&&qe.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&qe.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),Y!==C&&(Y=C,Fi=!0,Zi=!0)}if(Me.needsLights&&(Gt.state.sunShadowMap.length>0&&qe.setValue(L,"sunShadowMap",Gt.state.sunShadowMap,Pe),Gt.state.directionalShadowMap.length>0&&qe.setValue(L,"directionalShadowMap",Gt.state.directionalShadowMap,Pe),Gt.state.spotShadowMap.length>0&&qe.setValue(L,"spotShadowMap",Gt.state.spotShadowMap,Pe),Gt.state.pointShadowMap.length>0&&qe.setValue(L,"pointShadowMap",Gt.state.pointShadowMap,Pe)),H.isSkinnedMesh){qe.setOptional(L,H,"bindMatrix"),qe.setOptional(L,H,"bindMatrixInverse");const lt=H.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),qe.setValue(L,"boneTexture",lt.boneTexture,Pe))}H.isBatchedMesh&&(qe.setOptional(L,H,"batchingTexture"),qe.setValue(L,"batchingTexture",H._matricesTexture,Pe),qe.setOptional(L,H,"batchingIdTexture"),qe.setValue(L,"batchingIdTexture",H._indirectTexture,Pe),qe.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&qe.setValue(L,"batchingColorTexture",H._colorsTexture,Pe));const si=W.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&j.update(H,W,Pt),(Fi||Me.receiveShadow!==H.receiveShadow)&&(Me.receiveShadow=H.receiveShadow,qe.setValue(L,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(Rt.envMapIntensity.value=D.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=Ym()),Fi){if(qe.setValue(L,"toneMappingExposure",b.toneMappingExposure),Me.needsLights&&Gh(Rt,Zi),de&&G.fog===!0&&ae.refreshFogUniforms(Rt,de),ae.refreshMaterialUniforms(Rt,G,fe,Se,I.state.transmissionRenderTarget[C.id]),Me.needsLights&&Me.numLightProbeGrids>0){const lt=x;let wt=0;for(const Mi of I.state.lightProbeGridArray)Mi.texture!==null&&(lt.textures[wt]=Mi.texture,lt.min[wt]=Mi.boundingBox.min,lt.max[wt]=Mi.boundingBox.max,lt.resolution[wt]=Mi.resolution,wt++);for(const Mi in lt)lt[Mi].length=wt;Rt.probesSH.value=lt.textures,Rt.probesMin.value=lt.min,Rt.probesMax.value=lt.max,Rt.probesResolution.value=lt.resolution}lr.upload(L,vo(Me),Rt,Pe)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(lr.upload(L,vo(Me),Rt,Pe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&qe.setValue(L,"center",H.center),qe.setValue(L,"modelViewMatrix",H.modelViewMatrix),qe.setValue(L,"normalMatrix",H.normalMatrix),qe.setValue(L,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const lt=G.uniformsGroups;for(let wt=0,Mi=lt.length;wt<Mi;wt++){const yo=lt[wt];Be.update(yo,Pt),Be.bind(yo,Pt)}}return Pt}function Gh(C,D){C.ambientLightColor.needsUpdate=D,C.lightProbe.needsUpdate=D,C.sunLights.needsUpdate=D,C.sunLightShadows.needsUpdate=D,C.directionalLights.needsUpdate=D,C.directionalLightShadows.needsUpdate=D,C.pointLights.needsUpdate=D,C.pointLightShadows.needsUpdate=D,C.spotLights.needsUpdate=D,C.spotLightShadows.needsUpdate=D,C.rectAreaLights.needsUpdate=D,C.hemisphereLights.needsUpdate=D}function kh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(C,D,W){const G=Re.get(C);G.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Re.get(C.texture).__webglTexture=D,Re.get(C.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,D){const W=Re.get(C);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(C,D=0,W=0){K=C,O=D,Q=W;let G=null,H=!1,de=!1;if(C){const he=Re.get(C);if(he.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),q.copy(C.viewport),te.copy(C.scissor),pe=C.scissorTest,Ae.viewport(q),Ae.scissor(te),Ae.setScissorTest(pe),N=-1;return}else if(he.__webglFramebuffer===void 0)Pe.setupRenderTarget(C);else if(he.__hasExternalTextures)Pe.rebindTextures(C,Re.get(C.texture).__webglTexture,Re.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ue=C.depthTexture;if(he.__boundDepthTexture!==Ue){if(Ue!==null&&Re.has(Ue)&&(C.width!==Ue.image.width||C.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(C)}}const _e=C.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(de=!0);const Ie=Re.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?G=Ie[D][W]:G=Ie[D],H=!0):C.samples>0&&Pe.useMultisampledRTT(C)===!1?G=Re.get(C).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[W]:G=Ie,q.copy(C.viewport),te.copy(C.scissor),pe=C.scissorTest}else q.copy(xe).multiplyScalar(fe).floor(),te.copy(Xe).multiplyScalar(fe).floor(),pe=Ze;if(W!==0&&(G=V),Ae.bindFramebuffer(L.FRAMEBUFFER,G)&&Ae.drawBuffers(C,G),Ae.viewport(q),Ae.scissor(te),Ae.setScissorTest(pe),H){const he=Re.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,he.__webglTexture,W)}else if(de){const he=D;for(let _e=0;_e<C.textures.length;_e++){const Ie=Re.get(C.textures[_e]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_e,Ie.__webglTexture,W,he)}}else if(C!==null&&W!==0){const he=Re.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,W)}N=-1};function Co(C){const D=Re.get(C);return(D.__readFormat!==C.format||D.__readType!==C.type)&&(D.__readFormat=C.format,D.__readType=C.type,D.__formatReadable=rt.textureFormatReadable(C.format),D.__typeReadable=rt.textureTypeReadable(C.type)),D}this.readRenderTargetPixels=function(C,D,W,G,H,de,Ce,he=0){if(!(C&&C.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Re.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(_e=_e[Ce],Array.isArray(_e)&&(_e=_e[0])),_e){Ae.bindFramebuffer(L.FRAMEBUFFER,_e);try{const Ie=C.textures[he],Ue=Ie.format,ze=Ie.type;C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he);const ye=Co(Ie);if(ye.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=C.width-G&&W>=0&&W<=C.height-H&&L.readPixels(D,W,G,H,re.convert(Ue),re.convert(ze),de)}finally{const Ie=K!==null?Re.get(K).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(C,D,W,G,H,de,Ce,he=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Re.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(_e=_e[Ce],Array.isArray(_e)&&(_e=_e[0])),_e)if(D>=0&&D<=C.width-G&&W>=0&&W<=C.height-H){Ae.bindFramebuffer(L.FRAMEBUFFER,_e);const Ie=C.textures[he],Ue=Ie.format,ze=Ie.type;C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he);const ye=Co(Ie);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(D,W,G,H,re.convert(Ue),re.convert(ze),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const gt=K!==null?Re.get(K).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,gt);const it=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bu(L,it,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ve),L.deleteSync(it),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,D=null,W=0){const G=Math.pow(2,-W),H=Math.floor(C.image.width*G),de=Math.floor(C.image.height*G),Ce=D!==null?D.x:0,he=D!==null?D.y:0;Pe.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Ce,he,H,de),Ae.unbindTexture()},this.copyTextureToTexture=function(C,D,W=null,G=null,H=0,de=0){let Ce,he,_e,Ie,Ue,ze,ye,Ve,gt;const it=C.isCompressedTexture?C.mipmaps[de]:C.image;if(W!==null)Ce=W.max.x-W.min.x,he=W.max.y-W.min.y,_e=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,Ue=W.min.y,ze=W.isBox3?W.min.z:0;else{const qe=Math.pow(2,-H);Ce=Math.floor(it.width*qe),he=Math.floor(it.height*qe),C.isDataArrayTexture?_e=it.depth:C.isData3DTexture?_e=Math.floor(it.depth*qe):_e=1,Ie=0,Ue=0,ze=0}G!==null?(ye=G.x,Ve=G.y,gt=G.z):(ye=0,Ve=0,gt=0);const tt=re.convert(D.format),Lt=re.convert(D.type);let Me;D.isData3DTexture?(Pe.setTexture3D(D,0),Me=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Pe.setTexture2DArray(D,0),Me=L.TEXTURE_2D_ARRAY):(Pe.setTexture2D(D,0),Me=L.TEXTURE_2D),Ae.activeTexture(L.TEXTURE0),Ae.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),Ae.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),Ae.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Gt=Ae.getParameter(L.UNPACK_ROW_LENGTH),Je=Ae.getParameter(L.UNPACK_IMAGE_HEIGHT),Ki=Ae.getParameter(L.UNPACK_SKIP_PIXELS),Pt=Ae.getParameter(L.UNPACK_SKIP_ROWS),Ts=Ae.getParameter(L.UNPACK_SKIP_IMAGES);Ae.pixelStorei(L.UNPACK_ROW_LENGTH,it.width),Ae.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it.height),Ae.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),Ae.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),Ae.pixelStorei(L.UNPACK_SKIP_IMAGES,ze);const Fi=C.isDataArrayTexture||C.isData3DTexture,Zi=D.isDataArrayTexture||D.isData3DTexture;if(C.isDepthTexture){const qe=Re.get(C),Rt=Re.get(D),si=Re.get(qe.__renderTarget),lt=Re.get(Rt.__renderTarget);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,si.__webglFramebuffer),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let wt=0;wt<_e;wt++)Fi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(C).__webglTexture,H,ze+wt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(D).__webglTexture,de,gt+wt)),L.blitFramebuffer(Ie,Ue,Ie+Ce,Ue+he,ye,Ve,ye+Ce,Ve+he,L.DEPTH_BUFFER_BIT,L.NEAREST);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||Re.has(C)){const qe=Re.get(C),Rt=Re.get(D);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,T),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,z);for(let si=0;si<_e;si++)Fi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qe.__webglTexture,H,ze+si):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qe.__webglTexture,H),Zi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.__webglTexture,de,gt+si):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rt.__webglTexture,de),H!==0?L.blitFramebuffer(Ie,Ue,Ie+Ce,Ue+he,ye,Ve,ye+Ce,Ve+he,L.COLOR_BUFFER_BIT,L.NEAREST):Zi?L.copyTexSubImage3D(Me,de,ye,Ve,gt+si,Ie,Ue,Ce,he):L.copyTexSubImage2D(Me,de,ye,Ve,Ie,Ue,Ce,he);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Zi?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Me,de,ye,Ve,gt,Ce,he,_e,tt,Lt,it.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,de,ye,Ve,gt,Ce,he,_e,tt,it.data):L.texSubImage3D(Me,de,ye,Ve,gt,Ce,he,_e,tt,Lt,it):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,ye,Ve,Ce,he,tt,Lt,it.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,ye,Ve,it.width,it.height,tt,it.data):L.texSubImage2D(L.TEXTURE_2D,de,ye,Ve,Ce,he,tt,Lt,it);Ae.pixelStorei(L.UNPACK_ROW_LENGTH,Gt),Ae.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),Ae.pixelStorei(L.UNPACK_SKIP_PIXELS,Ki),Ae.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),Ae.pixelStorei(L.UNPACK_SKIP_IMAGES,Ts),de===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&L.generateMipmap(Me),Ae.unbindTexture()},this.initRenderTarget=function(C){Re.get(C).__webglFramebuffer===void 0&&Pe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Pe.setTextureCube(C,0):C.isData3DTexture?Pe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Pe.setTexture2DArray(C,0):Pe.setTexture2D(C,0),Ae.unbindTexture()},this.resetState=function(){O=0,Q=0,K=null,Ae.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}const Pl={type:"change"},co={type:"start"},zc={type:"end"},rr=new ys,Ul=new li,Km=Math.cos(70*_t.DEG2RAD),xt=new F,qt=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ha=1e-6;class Fl extends ef{constructor(e,t=null){super(e,t),this.state=Ke.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new qi,this._lastTargetPosition=new F,this._quat=new qi().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xr,this._sphericalDelta=new xr,this._scale=1,this._panOffset=new F,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new F,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$m.bind(this),this._onPointerDown=Zm.bind(this),this._onPointerUp=jm.bind(this),this._onContextMenu=a0.bind(this),this._onMouseWheel=i0.bind(this),this._onKeyDown=n0.bind(this),this._onTouchStart=s0.bind(this),this._onTouchMove=r0.bind(this),this._onMouseDown=e0.bind(this),this._onMouseMove=t0.bind(this),this._interceptControlDown=o0.bind(this),this._interceptControlUp=l0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ke.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pl),this.update(),this.state=Ke.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qt:i>Math.PI&&(i-=qt),s<-Math.PI?s+=qt:s>Math.PI&&(s-=qt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=xt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(rr.origin.copy(this.object.position),rr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rr.direction))<Km?this.object.lookAt(this.target):(Ul.setFromNormalAndCoplanarPoint(this.object.up,this.target),rr.intersectPlane(Ul,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ha||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ha||this._lastTargetPosition.distanceToSquared(this.target)>ha?(this.dispatchEvent(Pl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xt.copy(s).sub(this.target);let r=xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Zm(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $m(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function jm(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zc),this.state=Ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function e0(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ke.DOLLY;break;case Di.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ke.ROTATE}break;case Di.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(co)}function t0(n){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function i0(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(n.preventDefault(),this.dispatchEvent(co),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(zc))}function n0(n){this.enabled!==!1&&this._handleKeyDown(n)}function s0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1){this.state=Ke.NONE;break}this._handleTouchStartRotate(n),this.state=Ke.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1){this.state=Ke.NONE;break}this._handleTouchStartPan(n),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ke.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(co)}function r0(n){switch(this._trackPointer(n),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ke.NONE}}function a0(n){this.enabled!==!1&&n.preventDefault()}function o0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class c0{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:s,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=i,this.workers[s].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const h0=0,Nl=2,u0=1,Ql=2,d0=0,f0=1,A0=10,p0=0,Vc=9,Wc=15,qc=16,Xc=22,Yc=37,Jc=43,Kc=76,Zc=83,ho=91,$c=97,jc=100,eh=103,th=109,ih=122,nh=123,sh=131,rh=132,ah=133,oh=134,lh=137,ch=138,hh=139,uh=140,dh=141,fh=142,Ah=145,ph=146,gh=148,mh=152,_h=153,Eh=154,vh=155,xh=156,Ch=157,yh=158,Mh=165,Sh=166,Ih=1000054e3,wh=1000054001,bh=1000054004,Bh=1000054005,uo=1000066e3,Th=1000066004;class Kn{constructor(e,t,i,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){const i=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,s)}}const kt=[171,75,84,88,32,50,48,187,13,10,26,10];function Ol(n){return new TextDecoder().decode(n)}function g0(n){const e=new Uint8Array(n.buffer,n.byteOffset,kt.length);if(e[0]!==kt[0]||e[1]!==kt[1]||e[2]!==kt[2]||e[3]!==kt[3]||e[4]!==kt[4]||e[5]!==kt[5]||e[6]!==kt[6]||e[7]!==kt[7]||e[8]!==kt[8]||e[9]!==kt[9]||e[10]!==kt[10]||e[11]!==kt[11])throw new Error("Missing KTX 2.0 identifier.");const t={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},i=17*Uint32Array.BYTES_PER_ELEMENT,s=new Kn(n,kt.length,i,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32(),t.levelCount=s._nextUint32(),t.supercompressionScheme=s._nextUint32();const r=s._nextUint32(),a=s._nextUint32(),o=s._nextUint32(),c=s._nextUint32(),l=s._nextUint64(),h=s._nextUint64(),u=3*Math.max(t.levelCount,1)*8,d=new Kn(n,kt.length+i,u,!0);for(let q=0,te=Math.max(t.levelCount,1);q<te;q++)t.levels.push({levelData:new Uint8Array(n.buffer,n.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const f=new Kn(n,r,a,!0);f._skip(4);const g=f._nextUint16(),_=f._nextUint16(),p=f._nextUint16(),A=f._nextUint16(),v={vendorId:g,descriptorType:_,versionNumber:p,colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},y=(A/4-6)/4;for(let q=0;q<y;q++){const te={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&te.channelType?(te.sampleLower=f._nextInt32(),te.sampleUpper=f._nextInt32()):(te.sampleLower=f._nextUint32(),te.sampleUpper=f._nextUint32()),v.samples[q]=te}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(v);const x=new Kn(n,o,c,!0);for(;x._offset<c;){const q=x._nextUint32(),te=x._scan(q),pe=Ol(te);if(t.keyValue[pe]=x._nextUint8Array(q-te.byteLength-1),pe.match(/^ktx/i)){const X=Ol(t.keyValue[pe]);t.keyValue[pe]=X.substring(0,X.lastIndexOf("\0"))}x._skip(q%4?4-q%4:0)}if(h<=0)return t;const S=new Kn(n,l,h,!0),I=S._nextUint16(),m=S._nextUint16(),M=S._nextUint32(),P=S._nextUint32(),b=S._nextUint32(),R=S._nextUint32(),U=[];for(let q=0,te=Math.max(t.levelCount,1);q<te;q++)U.push({imageFlags:S._nextUint32(),rgbSliceByteOffset:S._nextUint32(),rgbSliceByteLength:S._nextUint32(),alphaSliceByteOffset:S._nextUint32(),alphaSliceByteLength:S._nextUint32()});const V=l+S._offset,T=V+M,z=T+P,O=z+b,Q=new Uint8Array(n.buffer,n.byteOffset+V,M),K=new Uint8Array(n.buffer,n.byteOffset+T,P),N=new Uint8Array(n.buffer,n.byteOffset+z,b),Y=new Uint8Array(n.buffer,n.byteOffset+O,R);return t.globalData={endpointCount:I,selectorCount:m,imageDescs:U,endpointsData:Q,selectorsData:K,tablesData:N,extendedData:Y},t}let ua,Ri,Ya;const da={env:{emscripten_notify_memory_growth:function(n){Ya=new Uint8Array(Ri.exports.memory.buffer)}}};class m0{init(){return ua||(ua=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Gl).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,da)).then(this._init):WebAssembly.instantiate(Buffer.from(Gl,"base64"),da).then(this._init),ua)}_init(e){Ri=e.instance,da.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Ri)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,s=Ri.exports.malloc(i);Ya.set(e,s),t=t||Number(Ri.exports.ZSTD_findDecompressedSize(s,i));const r=Ri.exports.malloc(t),a=Ri.exports.ZSTD_decompress(r,t,s,i),o=Ya.slice(r,r+a);return Ri.exports.free(s),Ri.exports.free(r),o}}const Gl="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",_0="display-p3",E0="display-p3-linear";({...We.spaces[Dt]});const v0=new URL("/_astro/basis_transcoder.VXdx5NbI.wasm",import.meta.url).toString(),x0=new URL("/_astro/basis_transcoder.o4Hde_L7.js",import.meta.url).toString(),fa=new WeakMap;let Aa=0,pa;class ii extends Is{constructor(e){super(e),this.isKTX2Loader=!0,this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new c0,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await e.init(),this.detectSupport(e)}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-s3tc"),bptcSupported:e.hasFeature("texture-compression-bc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&typeof navigator.platform<"u"&&typeof navigator.userAgent<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Android")<0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc1Supported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){const e=new aa(this.manager);e.setPriority(this.priority),e.setCache(this.cache),e.setWithCredentials(this.withCredentials);const t=new aa(this.manager);t.setPriority(this.priority),t.setCache(this.cache),t.setWithCredentials(this.withCredentials),t.setResponseType("arraybuffer");let i,s;this.transcoderPath===""?(i=e.loadAsync(x0),s=t.loadAsync(v0)):(e.setPath(this.transcoderPath),i=e.loadAsync("basis_transcoder.js"),t.setPath(this.transcoderPath),s=t.loadAsync("basis_transcoder.wasm")),this.transcoderPending=Promise.all([i,s]).then(([r,a])=>{const o=ii.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(ii.EngineFormat),"let _EngineType = "+JSON.stringify(ii.EngineType),"let _TranscoderFormat = "+JSON.stringify(ii.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(ii.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),Aa>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Aa++}return this.transcoderPending}load(e,t,i,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new aa(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setRequestHeader(this.requestHeader),r.setResponseType("arraybuffer"),r.load(e,a=>{this.parse(a,t,s)},i,s)}parse(e,t,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(fa.has(e))return fa.get(e).promise.then(t).catch(i);this._createTexture(e).then(s=>t?t(s):null).catch(i)}_createTextureFrom(e,t){const{type:i,error:s,data:{faces:r,width:a,height:o,format:c,type:l,dfdFlags:h}}=e;if(i==="error")return Promise.reject(s);let u;if(t.faceCount===6)u=new vc(r,c,l);else{const d=r[0].mipmaps;u=t.layerCount>1?new gd(d,a,o,t.layerCount,c,l):new Ir(d,a,o,c,l)}return u.minFilter=r[0].mipmaps.length===1?ht:vi,u.magFilter=ht,u.generateMipmaps=!1,u.needsUpdate=!0,u.colorSpace=Rh(t),u.premultiplyAlpha=!!(h&u0),u}async _createTexture(e,t={}){const i=g0(new Uint8Array(e)),s=i.vkFormat===uo&&i.dataFormatDescriptor[0].colorModel===167;if(!(i.vkFormat===p0||s&&!this.workerConfig.astcHDRSupported))return M0(i);const a=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:a},[e])).then(c=>this._createTextureFrom(c.data,i));return fa.set(e,{promise:o}),o}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Aa--}}ii.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};ii.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};ii.EngineFormat={RGBAFormat:dt,RGBA_ASTC_4x4_Format:ln,RGB_BPTC_UNSIGNED_Format:Ar,RGBA_BPTC_Format:Un,RGBA_ETC2_EAC_Format:hs,RGBA_PVRTC_4BPPV1_Format:Pn,RGBA_S3TC_DXT5_Format:on,RGB_ETC1_Format:hr,RGB_ETC2_Format:cs,RGB_PVRTC_4BPPV1_Format:cr,RGBA_S3TC_DXT1_Format:an};ii.EngineType={UnsignedByteType:Le,HalfFloatType:Ct,FloatType:Qt};ii.BasisWorker=function(){let n,e,t;const i=_EngineFormat,s=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(g){const _=g.data;switch(_.type){case"init":n=_.config,o(_.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:p,buffers:A,width:v,height:y,hasAlpha:x,format:S,type:I,dfdFlags:m}=c(_.buffer);self.postMessage({type:"transcode",id:_.id,data:{faces:p,width:v,height:y,hasAlpha:x,format:S,type:I,dfdFlags:m}},A)}catch(p){console.error(p),self.postMessage({type:"error",id:_.id,error:p.message})}});break}});function o(g){e=new Promise(_=>{t={wasmBinary:g,onRuntimeInitialized:_},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(g){const _=new t.KTX2File(new Uint8Array(g));function p(){_.close(),_.delete()}if(!_.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let A;if(_.isUASTC())A=a.UASTC;else if(_.isETC1S())A=a.ETC1S;else if(_.isHDR())A=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const v=_.getWidth(),y=_.getHeight(),x=_.getLayers()||1,S=_.getLevels(),I=_.getFaces(),m=_.getHasAlpha(),M=_.getDFDFlags(),{transcoderFormat:P,engineFormat:b,engineType:R}=u(A,v,y,m);if(!v||!y||!S)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!_.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");const U=[],V=[];for(let T=0;T<I;T++){const z=[];for(let O=0;O<S;O++){const Q=[];let K,N;for(let q=0;q<x;q++){const te=_.getImageLevelInfo(O,q,T);T===0&&O===0&&q===0&&(te.origWidth%4!==0||te.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),S>1?(K=te.origWidth,N=te.origHeight):(K=te.width,N=te.height);let pe=new Uint8Array(_.getImageTranscodedSizeInBytes(O,q,0,P));const X=_.transcodeImage(pe,O,q,T,P,0,-1,-1);if(R===s.HalfFloatType&&(pe=new Uint16Array(pe.buffer,pe.byteOffset,pe.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!X)throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");Q.push(pe)}const Y=f(Q);z.push({data:Y,width:K,height:N}),V.push(Y.buffer)}U.push({mipmaps:z,width:v,height:y,format:b,type:R})}return p(),{faces:U,buffers:V,width:v,height:y,hasAlpha:m,dfdFlags:M,format:b,type:R}}const l=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[i.RGBA_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[i.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[i.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[i.RGBAFormat,i.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[i.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[a.ETC1S]:l.filter(g=>g.basisFormat.includes(a.ETC1S)).sort((g,_)=>g.priorityETC1S-_.priorityETC1S),[a.UASTC]:l.filter(g=>g.basisFormat.includes(a.UASTC)).sort((g,_)=>g.priorityUASTC-_.priorityUASTC),[a.UASTC_HDR]:l.filter(g=>g.basisFormat.includes(a.UASTC_HDR)).sort((g,_)=>g.priorityHDR-_.priorityHDR)};function u(g,_,p,A){const v=h[g];for(let y=0;y<v.length;y++){const x=v[y];if(x.if&&!n[x.if]||!x.basisFormat.includes(g)||A&&x.transcoderFormat.length<2||x.needsPowerOfTwo&&!(d(_)&&d(p)))continue;const S=x.transcoderFormat[A?1:0],I=x.engineFormat[A?1:0],m=x.engineType[0];return{transcoderFormat:S,engineFormat:I,engineType:m}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function d(g){return g<=2?!0:(g&g-1)===0&&g!==0}function f(g){if(g.length===1)return g[0];let _=0;for(let v=0;v<g.length;v++){const y=g[v];_+=y.byteLength}const p=new Uint8Array(_);let A=0;for(let v=0;v<g.length;v++){const y=g[v];p.set(y,A),A+=y.byteLength}return p}};const C0=new Set([dt,os,Kt,xi]),y0=new Set([ho]),ga={[th]:dt,[eh]:Kt,[jc]:xi,[$c]:dt,[Zc]:Kt,[Kc]:xi,[ho]:dt,[Jc]:dt,[Yc]:dt,[Xc]:Kt,[qc]:Kt,[Wc]:xi,[Vc]:xi,[nh]:os,[ih]:os,[mh]:hs,[gh]:cs,[_h]:ur,[Eh]:dr,[vh]:us,[xh]:fr,[uo]:ln,[yh]:ln,[Ch]:ln,[Th]:Tn,[Sh]:Tn,[Mh]:Tn,[oh]:an,[ah]:an,[rh]:Bn,[sh]:Bn,[ch]:on,[lh]:on,[uh]:gr,[hh]:pr,[fh]:mr,[dh]:ds,[ph]:Un,[Ah]:Un,[Bh]:Pn,[wh]:Pn,[bh]:ls,[Ih]:ls},nn={[th]:Qt,[eh]:Qt,[jc]:Qt,[$c]:Ct,[Zc]:Ct,[Kc]:Ct,[ho]:un,[Jc]:Le,[Yc]:Le,[Xc]:Le,[qc]:Le,[Wc]:Le,[Vc]:Le,[nh]:yr,[ih]:Mr,[mh]:Le,[gh]:Le,[_h]:Le,[Eh]:Le,[vh]:Le,[xh]:Le,[uo]:Ct,[yh]:Le,[Ch]:Le,[Th]:Ct,[Sh]:Le,[Mh]:Le,[oh]:Le,[ah]:Le,[rh]:Le,[sh]:Le,[ch]:Le,[lh]:Le,[uh]:Le,[hh]:Le,[fh]:Le,[dh]:Le,[ph]:Le,[Ah]:Le,[Bh]:Le,[wh]:Le,[bh]:Le,[Ih]:Le};async function M0(n){const{vkFormat:e}=n;if(ga[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+e);nn[e]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+e);let t;n.supercompressionScheme===Nl&&(pa||(pa=new Promise(async a=>{const o=new m0;await o.init(),a(o)})),t=await pa);const i=[];for(let a=0;a<n.levels.length;a++){const o=Math.max(1,n.pixelWidth>>a),c=Math.max(1,n.pixelHeight>>a),l=n.pixelDepth?Math.max(1,n.pixelDepth>>a):0,h=n.levels[a];let u;if(n.supercompressionScheme===h0)u=h.levelData;else if(n.supercompressionScheme===Nl)u=t.decode(h.levelData,h.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let d;nn[e]===Qt?d=new Float32Array(u.buffer,u.byteOffset,u.byteLength/Float32Array.BYTES_PER_ELEMENT):nn[e]===Ct||nn[e]===un?d=new Uint16Array(u.buffer,u.byteOffset,u.byteLength/Uint16Array.BYTES_PER_ELEMENT):nn[e]===yr||nn[e]===Mr?d=new Uint32Array(u.buffer,u.byteOffset,u.byteLength/Uint32Array.BYTES_PER_ELEMENT):d=u,i.push({data:d,width:o,height:c,depth:l})}const s=n.levelCount===0||i.length>1;let r;if(C0.has(ga[e]))r=n.pixelDepth===0?new dn(i[0].data,n.pixelWidth,n.pixelHeight):new ro(i[0].data,n.pixelWidth,n.pixelHeight,n.pixelDepth),r.mipmaps=i,r.minFilter=s?ac:At,r.magFilter=At,r.generateMipmaps=n.levelCount===0,r.normalized=y0.has(e);else{if(n.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");if(n.faceCount===6){const a=[];for(let o=0;o<6;o++){const c=[];for(const l of i){const h=l.data.length/6;c.push({data:l.data.subarray(o*h,(o+1)*h),width:l.width,height:l.height})}a.push({mipmaps:c,width:n.pixelWidth,height:n.pixelHeight})}r=new vc(a)}else r=new Ir(i,n.pixelWidth,n.pixelHeight);r.minFilter=s?vi:ht,r.magFilter=ht}return r.type=nn[e],r.format=ga[e],r.colorSpace=Rh(n),r.needsUpdate=!0,r}function Rh(n){const e=n.dataFormatDescriptor[0];return e.colorPrimaries===f0?e.transferFunction===Ql?Dt:fs:e.colorPrimaries===A0?e.transferFunction===Ql?_0:E0:(e.colorPrimaries===d0||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),hi)}async function bs(n,e){const t=await fetch(n,{signal:e});if(!t.ok)throw new Error(`Planet data: ${t.status}`);const i=await t.arrayBuffer(),s=new Uint8Array(i);return s[0]===31&&s[1]===139?new Response(new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer():i}async function S0(n,e,t){const i=n.temporal_atlas,s=new Uint8Array(await bs(new URL(`climate/${i.file}`,e),t));if(s.length!==i.width*i.height*i.layers*4)throw new Error("Incomplete climate value atlas");const r=new Sr(s,i.width,i.height,i.layers);r.format=dt,r.type=Le,r.minFilter=r.magFilter=ht,r.generateMipmaps=!1,r.wrapS=as,r.wrapT=ni,r.needsUpdate=!0;const a={};for(const u of["temperature","precipitation"]){const d=n.layers[u],f=new Uint8Array(256*4);for(let _=0;_<256;_++){const p=d.display_limits[0]+_/255*(d.display_limits[1]-d.display_limits[0]);let A=d.palette.findIndex(S=>S.value>=p);A<0&&(A=d.palette.length-1);const v=d.palette[Math.max(0,A-1)],y=d.palette[A],x=v.value===y.value?0:_t.clamp((p-v.value)/(y.value-v.value),0,1);for(let S=0;S<3;S++)f[_*4+S]=Math.round(_t.lerp(parseInt(v.color.slice(1+S*2,3+S*2),16),parseInt(y.color.slice(1+S*2,3+S*2),16),x));f[_*4+3]=255}const g=new dn(f,256,1,dt);g.minFilter=g.magFilter=ht,g.needsUpdate=!0,a[u]=g}const o={uAtlas:{value:r},uPalette:{value:a.temperature},uPhase:{value:0},uVariable:{value:0},uLimits:{value:new be(-80,50)},uTempEncoding:{value:new be(...i.encode_limits.temperature)},uRainEncoding:{value:new be(...i.encode_limits.precipitation)}},c=new Ot({glslVersion:Fn,uniforms:o,toneMapped:!1,vertexShader:"out vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
      precision highp float;precision highp sampler2DArray;
      in vec2 vUv;out vec4 outColor;
      uniform sampler2DArray uAtlas;uniform sampler2D uPalette;
      uniform float uPhase,uVariable;uniform vec2 uLimits,uTempEncoding,uRainEncoding;
      float sampleValue(float month){
        vec4 code=texture(uAtlas,vec3(vUv,mod(month+12.,12.)));
        vec2 pair=uVariable<.5?code.rg:code.ba;
        float n=(pair.x*65280.+pair.y*255.)/65535.;
        vec2 range=uVariable<.5?uTempEncoding:uRainEncoding;
        return mix(range.x,range.y,n);
      }
      float slope(float a,float b){return a*b>0.?2.*a*b/(a+b):0.;}
      void main(){
        float i=floor(uPhase),t=fract(uPhase),t2=t*t,t3=t2*t;
        float p=sampleValue(i-1.),a=sampleValue(i),b=sampleValue(i+1.),n=sampleValue(i+2.);
        float value=(2.*t3-3.*t2+1.)*a+(t3-2.*t2+t)*slope(a-p,b-a)
                   +(-2.*t3+3.*t2)*b+(t3-t2)*slope(b-a,n-b);
        float q=clamp((value-uLimits.x)/(uLimits.y-uLimits.x),0.,1.);
        // 色带字节已是显示用 sRGB，气候图层不再叠加光照。
        outColor=vec4(texture(uPalette,vec2((q*255.+.5)/256.,.5)).rgb,1.);
      }`});function l(u,d,f,g){const _=(f+180)/360*i.width-.5,p=_t.clamp((g+90)/180*i.height-.5,0,i.height-1),A=Math.floor(_),v=Math.floor(p),y=_-A,x=p-v,S=d===0?"temperature":"precipitation",I=i.encode_limits[S];let m=0;for(let M=0;M<2;M++)for(let P=0;P<2;P++){const b=((A+P)%i.width+i.width)%i.width,R=Math.min(i.height-1,v+M),U=(((u%12+12)%12*i.height+R)*i.width+b)*4+d*2;m+=(s[U]*256+s[U+1])/65535*(P?y:1-y)*(M?x:1-x)}return I[0]+m*(I[1]-I[0])}function h(u,d,f,g){const _=Math.floor(g),p=g-_,A=p*p,v=A*p,[y,x,S,I]=[-1,0,1,2].map(M=>l(_+M,u,d,f)),m=(M,P)=>M*P>0?2*M*P/(M+P):0;return(2*v-3*A+1)*x+(v-2*A+p)*m(x-y,S-x)+(-2*v+3*A)*S+(v-A)*m(S-x,I-S)}return{material:c,sample(u,d,f){return{temperature:h(0,u,d,f),precipitation:h(1,u,d,f)}},sampleAverage(u,d){let f=0,g=0;for(let _=0;_<12;_++)f+=l(_,0,u,d),g+=l(_,1,u,d);return{temperature:f/12,precipitation:g/12}},setPhase(u,d){o.uVariable.value=u==="temperature"?0:1,o.uPalette.value=a[u],o.uPhase.value=(d%12+12)%12,o.uLimits.value.set(...n.layers[u].display_limits)},dispose(){r.dispose(),Object.values(a).forEach(u=>u.dispose()),c.dispose()}}}function I0(n,{interval:e=0,radius:t=1.002}={}){if(!Number.isFinite(e)||e<0)throw new RangeError("Invalid contour interval");if(zh(n))return w0(n,e,t);const i=new DataView(n),s=Math.PI/180,r=l=>{const h=i.getFloat32(l,!0)*s,u=i.getFloat32(l+4,!0)*s;if(!Number.isFinite(h)||!Number.isFinite(u))throw new Error("Invalid vector coordinate");const d=Math.cos(u);return[d*Math.cos(h),Math.sin(u),-d*Math.sin(h)]};function a(l){let h=0,u=0;for(;h<n.byteLength;){if(h+8>n.byteLength)throw new Error("Incomplete contour header");const d=i.getFloat32(h,!0),f=i.getUint32(h+4,!0);if(h+=8,f<2||h+f*8>n.byteLength)throw new Error("Incomplete contour coordinates");if(!e||d%e===0){let g=r(h);for(let _=1;_<f;_++){const p=r(h+_*8),A=g[0]*p[0]+g[1]*p[1]+g[2]*p[2],v=Math.max(1,Math.ceil(Math.acos(Math.max(-1,Math.min(1,A)))/s));if(l){let y=g;for(let x=1;x<=v;x++){let S=p;if(x!==v){const I=x/v;S=g.map((M,P)=>M+(p[P]-M)*I);const m=Math.hypot(...S);S=S.map(M=>M/m)}for(const I of[y,S])for(const m of I)l[u++]=m*t;y=S}}else u+=v*6;g=p}}h+=f*8}return u}const o=a(null),c=new Float32Array(o);return a(c),c}function w0(n,e,t){let i=new Float32Array(16384),s=0;const r=Math.PI/180,a=c=>{const l=c[0]*r,h=c[1]*r,u=Math.cos(h);return[u*Math.cos(l),Math.sin(h),-u*Math.sin(l)]},o=c=>{if(s+3>i.length){const l=new Float32Array(i.length*2);l.set(i),i=l}for(const l of c)i[s++]=l*t};for(const c of Vh(n,{interval:e}))for(let l=1;l<c.coordinates.length;l++){const h=a(c.coordinates[l-1]),u=a(c.coordinates[l]),d=Math.acos(Math.max(-1,Math.min(1,h.reduce((_,p,A)=>_+p*u[A],0)))),f=Math.max(1,Math.ceil(d/r));let g=h;for(let _=1;_<=f;_++){let p=u;if(_!==f){p=h.map((v,y)=>v+(u[y]-v)*_/f);const A=Math.hypot(...p);p=p.map(v=>v/A)}o(g),o(p),g=p}}return i.slice(0,s)}function kl(n){const e=_t.degToRad(n[0]),t=_t.degToRad(n[1]);return new F(Math.cos(t)*Math.cos(e),Math.sin(t),-Math.cos(t)*Math.sin(e))}function Dh(n,{radius:e=1.002,opacity:t=.9}={}){const i=[];for(const o of n.features){const c=o.geometry.type==="LineString"?[o.geometry.coordinates]:o.geometry.coordinates;for(const l of c)for(let h=1;h<l.length;h++){const u=kl(l[h-1]),d=kl(l[h]),f=Math.acos(_t.clamp(u.dot(d),-1,1)),g=Math.max(1,Math.ceil(f/_t.degToRad(1)));let _=u;for(let p=1;p<=g;p++){const A=p===g?d:u.clone().lerp(d,p/g).normalize();i.push(_.x*e,_.y*e,_.z*e,A.x*e,A.y*e,A.z*e),_=A}}}const s=new pt;s.setAttribute("position",new $e(i,3)),s.computeBoundingSphere();const r=new Ms({color:15265266,transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1}),a=new _s(s,r);return a.renderOrder=2,a.visible=!1,a}function b0(){const n=[];for(let e=-180;e<180;e+=15)n.push({geometry:{type:"LineString",coordinates:Array.from({length:181},(t,i)=>[e,i-90])}});for(let e=-75;e<=75;e+=15)n.push({geometry:{type:"LineString",coordinates:Array.from({length:361},(t,i)=>[i-180,e])}});return Dh({features:n},{radius:1.001,opacity:.3})}function B0(n,{interval:e=0,opacity:t=.9}={}){const i=I0(n,{interval:e}),s=new pt;s.setAttribute("position",new Vt(i,3)),s.boundingSphere=new yi(new F,1.003);const r=new Ms({color:15265266,transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1}),a=new _s(s,r);return a.renderOrder=2,a.visible=!1,a}async function T0(n,e,t,i,{northUp:s=!1}={}){const r=await fetch(n,{signal:i});if(!r.ok)throw new Error(`Map ${r.status}`);let a;if(String(n).endsWith(".png")){const c=await createImageBitmap(await r.blob(),{colorSpaceConversion:"none"});if(c.width!==e||c.height!==t)throw c.close(),new Error("Incorrect map dimensions");const l=Math.min(t,192),h=typeof OffscreenCanvas<"u"?new OffscreenCanvas(e,l):document.createElement("canvas");h.width=e,h.height=l;const u=h.getContext("2d",{willReadFrequently:!0});if(!u)throw c.close(),new Error("Cannot decode index image");a=new Uint8Array(e*t);try{for(let d=0;d<t;d+=l){if(i?.aborted)throw new DOMException("Aborted","AbortError");const f=Math.min(l,t-d);u.clearRect(0,0,e,l),u.drawImage(c,0,d,e,f,0,0,e,f);const g=u.getImageData(0,0,e,f).data;for(let _=0;_<e*f;_++)a[d*e+_]=g[_*4]}}finally{c.close(),h.width=h.height=0}}else a=new Uint8Array(await r.arrayBuffer());if(a.length!==e*t)throw new Error("Incomplete map values");if(s){const c=new Uint8Array(a.length);for(let l=0;l<t;l++)c.set(a.subarray((t-l-1)*e,(t-l)*e),l*e);a=c}const o=new dn(a,e,t,xi);return o.minFilter=o.magFilter=At,o.wrapS=as,o.needsUpdate=!0,o}function Hl(n,e){const{width:t,height:i,data:s}=n.image,r=Math.ceil(t/e),a=Math.ceil(i/e),o=Math.ceil(t/r),c=Math.ceil(i/a),l=new Uint8Array(o*c*r*a);for(let u=0;u<a;u++)for(let d=0;d<r;d++){const f=u*r+d;for(let g=0;g<c;g++){const _=u*c+g;if(_>=i)break;const p=Math.min(o,t-d*o);if(p<=0)break;l.set(s.subarray(_*t+d*o,_*t+d*o+p),f*o*c+g*o)}}const h=new Sr(l,o,c,r*a);return h.format=xi,h.minFilter=h.magFilter=At,h.wrapS=h.wrapT=ni,h.generateMipmaps=!1,h.needsUpdate=!0,{texture:h,width:t,height:i,tileWidth:o,tileHeight:c,columns:r}}function R0(n,e,t=null,i=1/0,s=null){const r=new Uint8Array(1024);e.forEach(({value:u,color:d})=>{for(let f=0;f<3;f++)r[u*4+f]=parseInt(d.slice(1+f*2,3+f*2),16);r[u*4+3]=255});const a=new dn(r,256,1,dt);a.needsUpdate=!0;const o=n.image.width>i||n.image.height>i,c=o?Hl(n,i):null,l=o&&t?Hl(t,i):null,h=new Ot({glslVersion:Fn,toneMapped:!1,transparent:!!t,uniforms:{uValues:{value:c?.texture||n},uPalette:{value:a},uLand:{value:l?.texture||c?.texture||t||n},uClipLand:{value:!!t},uClipCategory0:{value:!1},uUseVectorMap:{value:!!s},uVectorMap:{value:s||a},uOpacity:{value:1},uSourceSize:{value:new be(n.image.width,n.image.height)},uTileSize:{value:new be(c?.tileWidth||0,c?.tileHeight||0)},uTileColumns:{value:c?.columns||0},uSelected:{value:0},uPrevious:{value:0},uTransition:{value:1}},vertexShader:"out vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
      precision highp float;
      in vec2 vUv;out vec4 outColor;
      uniform sampler2D uValues,uPalette,uLand,uVectorMap;
      uniform bool uClipLand,uClipCategory0,uUseVectorMap;
      uniform float uOpacity,uTransition;
      uniform int uSelected,uPrevious;
      int category(ivec2 cell){
        ivec2 size=textureSize(uValues,0);
        cell.x=(cell.x%size.x+size.x)%size.x;
        cell.y=clamp(cell.y,0,size.y-1);
        return int(floor(texelFetch(uValues,cell,0).r*255.0+0.5));
      }
      vec3 shade(int code,int chosen,vec3 original){
        if(chosen==0||code==0||code==chosen)return original;
        return vec3(dot(original,vec3(.2126,.7152,.0722)));
      }
      float innerOutline(int chosen,ivec2 cell,vec2 pos,float pixelFootprint){
        if(chosen==0||category(cell)!=chosen)return 0.0;
        ivec2 size=textureSize(uValues,0);
        // Width is based on actual screen derivatives but is never painted outside the selected cells.
        float width=min(8.0,max(1.0,pixelFootprint*1.1));
        float nearest=100.0;
        for(int direction=0;direction<4;direction++){
          ivec2 delta=direction==0?ivec2(-1,0):direction==1?ivec2(1,0):direction==2?ivec2(0,-1):ivec2(0,1);
          for(int step=1;step<=8;step++){
            ivec2 neighborCell=cell+delta*step;
            if((neighborCell.y<0||neighborCell.y>=size.y))break;
            if(category(neighborCell)!=chosen){
              float distance=direction==0?pos.x-float(cell.x-step+1):
                             direction==1?float(cell.x+step)-pos.x:
                             direction==2?pos.y-float(cell.y-step+1):float(cell.y+step)-pos.y;
              nearest=min(nearest,distance);break;
            }
          }
        }
        float aa=max(.5,pixelFootprint*.55);
        return 1.0-smoothstep(max(0.0,width-aa),width+aa,nearest);
      }
      void main(){
        if(uClipLand&&texture(uLand,vUv).r<.001)discard;
        ivec2 size=textureSize(uValues,0);
        vec2 pos=clamp(vUv,vec2(0.0),vec2(.999999))*vec2(size);
        ivec2 cell=ivec2(floor(pos));
        int code=category(cell);
        if(uClipCategory0&&code==0)discard;
        vec3 rgb=uUseVectorMap?texture(uVectorMap,vUv).rgb:texelFetch(uPalette,ivec2(code,0),0).rgb;
        // Derivatives must be evaluated before any per-fragment category branches.
        float pixelFootprint=max(length(dFdx(pos)),length(dFdy(pos)));
        if(uSelected!=0){
          vec3 from=shade(code,uPrevious,rgb),to=shade(code,uSelected,rgb);
          rgb=mix(from,to,uTransition);
          float outline=innerOutline(uSelected,cell,pos,pixelFootprint);
          rgb=mix(rgb,vec3(1.0),outline*uTransition);
        }
        outColor=vec4(rgb,uOpacity);
      }`});return o&&(h.fragmentShader=h.fragmentShader.replace("uniform sampler2D uValues,uPalette,uLand,uVectorMap;",`uniform sampler2DArray uValues,uLand;
        uniform sampler2D uPalette,uVectorMap;
        uniform ivec2 uSourceSize,uTileSize;uniform int uTileColumns;
        vec4 indexFetch(sampler2DArray tex,ivec2 cell){
          int tx=cell.x/uTileSize.x,ty=cell.y/uTileSize.y;
          return texelFetch(tex,ivec3(cell.x%uTileSize.x,cell.y%uTileSize.y,ty*uTileColumns+tx),0);
        }`).replaceAll("textureSize(uValues,0)","uSourceSize").replaceAll("texelFetch(uValues,cell,0)","indexFetch(uValues,cell)").replace("texture(uLand,vUv).r","indexFetch(uLand,ivec2(clamp(vUv,vec2(0.),vec2(.999999))*vec2(uSourceSize))).r"),h.userData.indexSource=n.image),h.addEventListener("dispose",()=>{a.dispose(),c?.texture.dispose(),l?.texture.dispose()}),h}function D0(n){const e=[];for(const t of n){let i=null,s=0;for(const r of Wh(t.d)){let a=0;for(let c=1;c<r.length;c++)a+=r[c-1][0]*r[c][1]-r[c][0]*r[c-1][1];if(!a)continue;const o=Math.sign(a);if(s||(s=o),o===s)i={value:t.value,color:t.color,rings:[r]},e.push(i);else if(i)i.rings.push(r);else throw Error("Climate hole has no outer ring")}}return e}async function L0(n,{signal:e}={}){const t=await fetch(n,{signal:e});if(!t.ok)throw Error("Climate SVG "+t.status);const i=new DOMParser().parseFromString(await t.text(),"image/svg+xml");if(i.querySelector("parsererror")||i.documentElement.localName!=="svg")throw Error("Invalid climate SVG");const s=i.documentElement.getAttribute("viewBox").trim().split(/[\s,]+/).map(Number),[r,a,o,c]=s;if(r!==0||a!==0||!Number.isInteger(o)||!Number.isInteger(c)||o*c>32e6)throw Error("Invalid climate grid");const l=D0([...i.querySelectorAll("path[data-value]")].map(g=>({value:Number(g.dataset.value),color:g.getAttribute("fill"),d:g.getAttribute("d")}))),h=JSON.parse(i.querySelector("metadata#native-classification").textContent);if(h.width!==o||h.height!==c||h.rowOrder!=="north-to-south"||h.encoding!=="gzip-base64-u8")throw Error("Invalid native category values");const u=Uint8Array.from(atob(h.data),g=>g.charCodeAt(0)),d=new Uint8Array(await new Response(new Blob([u]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer());if(d.length!==o*c)throw Error("Incomplete category values");e?.throwIfAborted();const f=new Uint8Array(d.length);for(let g=0;g<c;g++)f.set(d.subarray((c-g-1)*o,(c-g)*o),g*o);return Lh(l,{width:o,height:c,indexSource:{width:o,height:c,data:f},signal:e})}async function Lh(n,{width:e,height:t,indexSource:i=null,signal:s}={}){const r=[],a=[],o=[],c=[],l={position:[],uv:[],previous:[],next:[],side:[],category:[],other:[],index:[]},h=e*2/360,u=t*2/180,d=b=>{const R=(b[0]/e-.5)*Math.PI*2,U=(.5-b[1]/t)*Math.PI,V=Math.cos(U);return[V*Math.cos(R),Math.sin(U),-V*Math.sin(R)]},f=()=>new Promise(b=>setTimeout(b,0));let g=0;const _=new Map;for(const b of n){s?.throwIfAborted();const R=b.rings.map(O=>O.slice(0,-1)),U=R.flat(),V=wr.triangulateShape(R[0].map(O=>new be(...O)),R.slice(1).map(O=>O.map(Q=>new be(...Q)))),T=[1,3,5].map(O=>parseInt(b.color.slice(O,O+2),16)/255),z=V.map(O=>O.map(Q=>U[Q]));for(;z.length;){const O=z.pop();let Q=0,K=0;for(let N=0;N<3;N++){const Y=O[N],q=O[(N+1)%3],te=Math.max(Math.abs(Y[0]-q[0])/h,Math.abs(Y[1]-q[1])/u);te>Q&&(Q=te,K=N)}if(Q>1.00000001){const N=O[K],Y=O[(K+1)%3],q=O[(K+2)%3],te=[(N[0]+Y[0])/2,(N[1]+Y[1])/2];z.push([N,te,q],[te,Y,q])}else for(const N of O)r.push(...d(N)),a.push(N[0]/e,1-N[1]/t),o.push(b.value),c.push(...T);++g%4096===0&&(await f(),s?.throwIfAborted())}for(const O of b.rings)for(let Q=1;Q<O.length;Q++){const K=O[Q-1],N=O[Q];if(K[0]===N[0]&&(K[0]===0||K[0]===e))continue;const Y=Math.max(1,Math.ceil(Math.max(Math.abs(K[0]-N[0])/h,Math.abs(K[1]-N[1])/u)));for(let q=0;q<Y;q++){const te=ve=>[K[0]+(N[0]-K[0])*ve,K[1]+(N[1]-K[1])*ve],pe=te(q/Y),X=te((q+1)/Y),ne=[pe.map(ve=>ve.toFixed(6)).join(","),X.map(ve=>ve.toFixed(6)).join(",")].sort().join("|"),Ee=_.get(ne);if(Ee!==void 0){for(let ve=0;ve<4;ve++)l.other[Ee+ve]=b.value;continue}const Se=d(pe),fe=d(X),we=l.side.length;_.set(ne,we);for(const ve of[pe,X])for(const xe of[-1,1])l.position.push(...d(ve)),l.uv.push(ve[0]/e,1-ve[1]/t),l.previous.push(...Se),l.next.push(...fe),l.side.push(xe),l.category.push(b.value),l.other.push(0);l.index.push(we,we+1,we+2,we+1,we+3,we+2)}}await f()}const p=new pt;p.setAttribute("position",new $e(r,3)),p.setAttribute("uv",new $e(a,2)),p.setAttribute("category",new $e(o,1)),p.setAttribute("color",new $e(c,3)),p.computeBoundingSphere();const A={uSelected:{value:0},uPrevious:{value:0},uTransition:{value:1},uOpacity:{value:1},uViewport:{value:new be(1,1)}},v=new Ot({uniforms:A,side:Nt,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:"attribute float category;attribute vec3 color;varying float vCategory;varying vec3 vColor;void main(){vCategory=category;vColor=color;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform int uSelected,uPrevious;uniform float uTransition,uOpacity;varying float vCategory;varying vec3 vColor;vec3 shade(int selected){if(selected==0||abs(vCategory-float(selected))<.1)return vColor;return vec3(dot(vColor,vec3(.2126,.7152,.0722)));}void main(){gl_FragColor=vec4(mix(shade(uPrevious),shade(uSelected),uTransition),uOpacity);}"});v.userData.climateVector=!0,v.userData.indexSource=i;const y=new pt;for(const b of["position","previous","next"])y.setAttribute(b,new $e(l[b],3));y.setAttribute("uv",new $e(l.uv,2));for(const b of["side","category","other"])y.setAttribute(b,new $e(l[b],1));y.setIndex(l.index),y.computeBoundingSphere();const x=new Ot({uniforms:A,transparent:!0,depthWrite:!1,side:Nt,toneMapped:!1,vertexShader:"attribute vec3 previous,next;attribute float side,category,other;uniform vec2 uViewport;varying float vCategory,vOther;void main(){vCategory=category;vOther=other;vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.),a=projectionMatrix*modelViewMatrix*vec4(previous,1.),b=projectionMatrix*modelViewMatrix*vec4(next,1.);vec2 d=(b.xy/b.w-a.xy/a.w)*uViewport;vec2 normal=vec2(-d.y,d.x)/max(length(d),.00001);p.xy+=normal*side*1.35/uViewport*p.w;gl_Position=p;}",fragmentShader:"uniform int uSelected;uniform float uTransition,uOpacity;varying float vCategory,vOther;void main(){if(uSelected==0||(abs(vCategory-float(uSelected))>.1&&abs(vOther-float(uSelected))>.1))discard;gl_FragColor=vec4(1.,1.,1.,uOpacity*uTransition);}"}),S=new at(p,v),I=new at(y,x);S.frustumCulled=I.frustumCulled=!1,S.renderOrder=1,I.renderOrder=5,I.onBeforeRender=b=>b.getSize(A.uViewport.value);const m=new fi;m.add(S,I);function M(b,R){const U=b.clone(),V=b.getAttribute("uv");for(const T of["position","previous","next"]){const z=U.getAttribute(T);if(z)for(let O=0;O<z.count;O++){let Q=V.getX(O),K=V.getY(O);if(T!=="position"){const Y=z.getX(O),q=z.getY(O),te=z.getZ(O);Q=.5+Math.atan2(-te,Y)/(2*Math.PI),K=.5+Math.asin(Math.max(-1,Math.min(1,q)))/Math.PI,Q-V.getX(O)>.5&&(Q-=1),V.getX(O)-Q>.5&&(Q+=1)}const N=Hi(R,Math.max(0,Math.min(1,Q)),K);if(!N)throw Error("Invalid projected climate vertex");z.setXYZ(O,N.x,N.y,0)}}return U.computeBoundingSphere(),U}let P=!1;return{group:m,geometry:p,material:v,outlineMaterial:x,regions:n.length,projectedMeshes:b=>[S,I].map(R=>{const U=new at(M(R.geometry,b),R.material);return U.frustumCulled=!1,U.onBeforeRender=R.onBeforeRender,U.renderOrder=R.renderOrder,U}),dispose(){P||(P=!0,p.dispose(),y.dispose(),v.dispose(),x.dispose(),m.clear())}}}const P0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Dr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const U0=new Br(-1,1,1,-1,0,1);class F0 extends pt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}}const N0=new F0;class Q0{constructor(e){this._mesh=new at(N0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ph extends Dr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bc.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Q0(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class zl extends Dr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class O0 extends Dr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class G0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new be);this._width=i.width,this._height=i.height,t=new Ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ct}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ph(P0),this.copyPass.material.blending=rn,this.timer=new $d}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}zl!==void 0&&(a instanceof zl?i=!0:a instanceof O0&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class k0 extends Dr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}function H0(n,e,t,i){n.copy(e).applyQuaternion(t.quaternion),i.position.copy(n)}function z0(n,e,t){const i=new xr().setFromVector3(n);return i.theta-=e,i.phi=_t.clamp(i.phi+t,.06,Math.PI-.06),n.setFromSpherical(i).normalize()}const V0="out vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}";function ma(n,e){return new Ph(new Ot({glslVersion:Fn,uniforms:n,toneMapped:!1,vertexShader:V0,fragmentShader:`precision highp float;precision highp sampler3D;in vec2 vUv;out vec4 outColor;uniform sampler2D tDiffuse;${e}`}))}async function W0({renderer:n,scene:e,camera:t,globe:i,geometry:s,assets:r,manifest:a,texture:o,signal:c}){const[l,h,u,d,f,g,_,p,A,v]=await Promise.all([o(a.surface[1].url),o(a.normal,!1),o(a.roughness),o(a.clouds),o(a.cloudNormal,!1),fetch(new URL("original-stars.f32",r),{signal:c}),fetch(new URL("author-filmic-64.rgba",r),{signal:c}),fetch(new URL("author-curves.f32",r),{signal:c}),fetch(new URL("author-atmosphere-density.f16",r),{signal:c}),fetch(new URL("author-atmosphere-columns.f16",r),{signal:c})]);if(!_.ok||!p.ok)throw new Error("Author color transform missing");const y=new Uint8Array(await _.arrayBuffer());if(y.length!==64**3*4)throw new Error("Incomplete author color transform");const x=new ro(y,64,64,64);x.format=dt,x.minFilter=x.magFilter=ht,x.needsUpdate=!0;const S=new dn(new Float32Array(await p.arrayBuffer()),4096,1,dt,Qt);S.minFilter=S.magFilter=ht,S.needsUpdate=!0;async function I(ve,xe,Xe,Ze){if(!ve.ok)throw new Error("Author atmosphere data missing");const ke=new Uint16Array(await ve.arrayBuffer());if(ke.length!==xe*Xe*Ze)throw new Error("Incomplete atmosphere data");const ut=new dn(ke,xe,Xe,Ze===2?Kt:xi,Ct);return ut.minFilter=ut.magFilter=ht,ut.needsUpdate=!0,ut}const m=await I(A,4096,1,1),M=await I(v,128,512,2),P="uniform sampler2D uAtmosColumns;vec3 originalSolar(vec3 p,vec3 sun){float r=length(p);vec2 q=vec2(clamp((r-1.)/.03,0.,1.),clamp(dot(p/r,sun)*.5+.5,0.,1.));vec2 optical=texture2D(uAtmosColumns,(q*vec2(127.,511.)+.5)/vec2(128.,512.)).rg;return exp(-(vec3(optical.x)+(vec3(.0666259378,.25015831,1.)-vec3(1.))*optical.y));}",b=new F(-.8832113743,.415504694,.217470676).normalize(),R=b.clone().applyQuaternion(t.quaternion.clone().invert()),U=R.clone();if(!g.ok)throw new Error("Original star field missing");const V=new Float32Array(await g.arrayBuffer());if(V.length%6)throw new Error("Incomplete star field");const T=new Float32Array(V.length/2),z=new Float32Array(V.length/2);for(let ve=0;ve<V.length/6;ve++)for(let xe=0;xe<3;xe++)T[ve*3+xe]=V[ve*6+xe]*15,z[ve*3+xe]=V[ve*6+xe+3];const O=new pt;O.setAttribute("position",new Vt(T,3)),O.setAttribute("starRadiance",new Vt(z,3));const Q=new Ot({glslVersion:Fn,transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{uPixelRatio:{value:n.getPixelRatio()}},vertexShader:"in vec3 starRadiance;out vec3 vRadiance;uniform float uPixelRatio;void main(){vRadiance=starRadiance*3.;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=2.*uPixelRatio;}",fragmentShader:"precision highp float;in vec3 vRadiance;out vec4 outColor;void main(){float a=1.-smoothstep(.15,.5,length(gl_PointCoord-vec2(.5)));if(a<=0.)discard;outColor=vec4(vRadiance,a);}"}),K=new pd(O,Q);K.renderOrder=-1,e.add(K);const N=new Kd(16777215,10);N.position.copy(b),e.add(N);const Y=new nl({map:l,normalMap:h,roughnessMap:u,roughness:1,metalness:0,ior:1.45,toneMapped:!1}),q=new at(s,Y);i.add(q);const te=new nl({color:16777215,alphaMap:d,normalMap:f,transparent:!0,depthWrite:!1,roughness:1,ior:1.45,specularIntensity:1,toneMapped:!1});te.defines={USE_PACKED_NORMALMAP:""};const pe=new at(s,te);pe.scale.setScalar(1.003724),pe.renderOrder=3,i.add(pe),Y.onBeforeCompile=ve=>{ve.uniforms.uCloudOpacity={value:d},ve.uniforms.uCloudSun={value:b},ve.uniforms.uGlobeInverse={value:i.matrixWorld.clone().invert()},ve.uniforms.uAtmosColumns={value:M},Y.userData.shader=ve,ve.vertexShader=ve.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOriginalWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOriginalWorld=(modelMatrix*vec4(position,1.)).xyz;`),ve.fragmentShader=ve.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vOriginalWorld;uniform sampler2D uCloudOpacity;uniform vec3 uCloudSun;uniform mat4 uGlobeInverse;`+P).replace("#include <lights_fragment_begin>",`vec3 p=vOriginalWorld;float b=dot(p,uCloudSun);float t=-b+sqrt(max(0.,b*b+1.003724*1.003724-dot(p,p)));vec3 c=normalize((uGlobeInverse*vec4(p+t*uCloudSun,1.)).xyz);vec2 cuv=vec2(atan(-c.z,c.x)/6.28318530718+.5,asin(clamp(c.y,-1.,1.))/3.14159265359+.5);float cloudShadow=texture2D(uCloudOpacity,cuv).g;float horizon=smoothstep(-.0045902161,.0045902161,dot(normalize(p),uCloudSun));vec3 visibility=(1.-cloudShadow)*horizon*originalSolar(p,uCloudSun);
#include <lights_fragment_begin>
reflectedLight.directDiffuse*=visibility;reflectedLight.directSpecular*=visibility;`)},Y.customProgramCacheKey=()=>"original-cloud-shadow-v1",te.onBeforeCompile=ve=>{ve.uniforms.uOriginalSun={value:b},ve.uniforms.uAtmosColumns={value:M},ve.vertexShader=ve.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCloudWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCloudWorld=(modelMatrix*vec4(position,1.)).xyz;`),ve.fragmentShader=ve.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCloudWorld;uniform vec3 uOriginalSun;`+P).replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
float horizon=smoothstep(-.09065,-.08147,dot(normalize(vCloudWorld),uOriginalSun));vec3 visibility=horizon*originalSolar(vCloudWorld,uOriginalSun);reflectedLight.directDiffuse*=visibility;reflectedLight.directSpecular*=visibility;`)},te.customProgramCacheKey=()=>"original-cloud-horizon-v1";const X=new Ne(0),ne=new G0(n),Ee=new k0(e,t);ne.addPass(Ee);const Se=ma({tDiffuse:{value:null},uProjectionInverse:{value:t.projectionMatrixInverse},uCameraMatrix:{value:t.matrixWorld},uSun:{value:b},uDensity:{value:m},uColumns:{value:M}},`
    uniform mat4 uProjectionInverse,uCameraMatrix;uniform vec3 uSun;uniform sampler2D uDensity,uColumns;
    vec2 hit(vec3 p,vec3 d,float radius){float b=dot(p,d),q=b*b-dot(p,p)+radius*radius;if(q<0.)return vec2(1e6,-1e6);float s=sqrt(q);return vec2(-b-s,-b+s);}
    float density(vec3 p){float x=clamp((length(p)-1.)/.03,0.,1.);return textureLod(uDensity,vec2((x*4095.+.5)/4096.,.5),0.).r;}
    vec3 scatterColor(vec3 p){return mix(vec3(1.),vec3(.0666259378,.25015831,1.),clamp(dot(p,p)/(1.03*1.03),0.,1.));}
    void main(){
      vec4 base=texture(tDiffuse,vUv);vec3 eye=uCameraMatrix[3].xyz;
      vec4 ray=uProjectionInverse*vec4(vUv*2.-1.,1.,1.);vec3 direction=normalize(mat3(uCameraMatrix)*(ray.xyz/ray.w));
      vec2 shell=hit(eye,direction,1.03);if(shell.y<0.||shell.x>shell.y){outColor=base;return;}
      float begin=max(shell.x,0.),end=shell.y;vec2 ground=hit(eye,direction,1.);if(ground.x>0.)end=min(end,ground.x);
      float stepSize=(end-begin)/32.;vec3 transmittance=vec3(1.),scattered=vec3(0.);
      for(int i=0;i<32;i++){
        vec3 p=eye+direction*(begin+(float(i)+.5)*stepSize);vec3 sigma=density(p)*scatterColor(p);
        vec2 shadow=hit(p,uSun,1.);bool lit=shadow.x<0.||shadow.x>shadow.y;
        if(lit){float r=length(p);vec2 q=vec2(clamp((r-1.)/.03,0.,1.),clamp(dot(p/r,uSun)*.5+.5,0.,1.));vec2 optical=textureLod(uColumns,(q*vec2(127.,511.)+.5)/vec2(128.,512.),0.).rg;vec3 sunlight=exp(-(vec3(optical.x)+(vec3(.0666259378,.25015831,1.)-vec3(1.))*optical.y));scattered+=transmittance*sunlight*sigma*stepSize*(10./12.5663706144);}
        transmittance*=exp(-sigma*stepSize);
      }
      outColor=vec4(base.rgb*transmittance+scattered,base.a);
    }`);ne.addPass(Se);const fe=ma({tDiffuse:{value:null},uCurves:{value:S}},`
    uniform sampler2D uCurves;
    float curve(float x){float y=texture(uCurves,vec2((clamp(x,0.,1.)*4095.+.5)/4096.,.5)).a;if(x>1.){float last=texture(uCurves,vec2((4094.+.5)/4096.,.5)).a;y+=(x-1.)*(1.-last)*4095.;}return y;}
    void main(){vec4 c=texture(tDiffuse,vUv);outColor=vec4(curve(c.r),curve(c.g),curve(c.b),c.a);}`);ne.addPass(fe);const we=ma({tDiffuse:{value:null},uLut:{value:x}},"uniform sampler3D uLut;void main(){vec4 c=texture(tDiffuse,vUv);vec3 q=log2(1.+clamp(c.rgb,0.,64.))/log2(65.);outColor=vec4(texture(uLut,(q*63.+.5)/64.).rgb,c.a);}");return ne.addPass(we),{surface:q,material:Y,sky:X,rotateLight(ve,xe){z0(R,ve,xe)},resetLight(){R.copy(U)},setVisible(ve){q.visible=pe.visible=N.visible=K.visible=ve},resize(ve,xe){ne.setSize(ve,xe),Q.uniforms.uPixelRatio.value=n.getPixelRatio()},render(){i.updateMatrixWorld(!0),H0(b,R,t,N),K.position.copy(t.position),Y.userData.shader&&Y.userData.shader.uniforms.uGlobeInverse.value.copy(i.matrixWorld).invert(),ne.render()},dispose(){Y.dispose(),te.dispose(),O.dispose(),Q.dispose(),x.dispose(),S.dispose(),m.dispose(),M.dispose(),ne.passes.forEach(ve=>ve.dispose?.()),ne.dispose()}}}const q0={Af:"Tropical rainforest",Am:"Tropical monsoon",As:"Summer-dry tropical savanna",Aw:"Tropical savanna",BWk:"Cold desert",BWh:"Hot desert",BSk:"Cold semi-arid",BSh:"Hot semi-arid",Cfa:"Humid subtropical",Cfb:"Temperate oceanic",Cfc:"Subpolar oceanic",Csa:"Hot-summer Mediterranean",Csb:"Warm-summer Mediterranean",Csc:"Cool-summer Mediterranean",Cwa:"Subtropical monsoon",Cwb:"Subtropical highland",Cwc:"Cold subtropical highland",Dfa:"Hot-summer humid continental",Dfb:"Warm-summer humid continental",Dfc:"Subarctic",Dfd:"Very cold subarctic",Dsa:"Hot-summer continental with dry summers",Dsb:"Warm-summer continental with dry summers",Dsc:"Subarctic with dry summers",Dsd:"Very cold subarctic with dry summers",Dwa:"Hot-summer continental with dry winters",Dwb:"Warm-summer continental with dry winters",Dwc:"Subarctic with dry winters",Dwd:"Very cold subarctic with dry winters",ET:"Tundra",EF:"Ice cap"};function X0(n,e,t){if(!n.land)return t?"海洋":"Ocean";const i=e.classes[n.category];return i?`${t?i.zh:i.en||q0[i.code]||i.code} (${i.code})`:t?"未分类":"Unclassified"}function Y0({lon:n,lat:e,data:t,weather:i},{mode:s,metadata:r,zh:a,phase:o,climateFirst:c=!1}){const l=i?.sampleAverage?i.sampleAverage(n,e):null,h=i?.sample?i.sample(n,e,o):null,u=s==="temperature"||s==="precipitation"?h:l,d=[];s==="plates"&&d.push({label:a?"板块":"Plate",value:r.plates?.[t.plate]?.[a?"zh":"en"]||(a?"未标注板块":"Unnamed plate")});const f={label:a?"气候类型":"Climate",value:X0(t,r,a)};return c&&d.push(f),Number.isFinite(t.height)&&d.push({label:t.height<0?a?"水深":"Depth":a?"海拔":"Elevation",value:`${Math.round(Math.abs(t.height)*(a?1:3.28084)).toLocaleString(a?"zh-CN":"en-US")} ${a?"米":"ft"}`}),c||d.push(f),u&&(d.push({label:s==="temperature"?a?"当前气温":"Current temperature":a?"平均气温":"Average temperature",value:a?`${u.temperature.toFixed(1)} °C`:`${(u.temperature*9/5+32).toFixed(1)} °F`}),d.push({label:s==="precipitation"?a?"当前降水":"Current precipitation":a?"平均降水":"Average precipitation",value:a?`${Math.max(0,u.precipitation).toFixed(1)} 毫米/天`:`${(Math.max(0,u.precipitation)/25.4).toFixed(2)} in/day`})),d.map(g=>`<div class="planet-tooltip__row"><strong>${g.label}</strong><span>${g.value}</span></div>`).join("")}const J0=7200,K0=3600,Z0=600,$0=12,j0=6,e_=-6e3,t_=12e3,i_={1:{code:"Af",zh:"热带雨林气候",en:"Tropical rainforest"},2:{code:"Am",zh:"热带季风气候",en:"Tropical monsoon"},3:{code:"As",zh:"夏季干燥的热带草原气候",en:"Summer-dry tropical savanna"},4:{code:"Aw",zh:"热带冬干 / 热带草原气候",en:"Tropical savanna"},5:{code:"BWk",zh:"寒冷沙漠气候",en:"Cold desert"},6:{code:"BWh",zh:"炎热沙漠气候",en:"Hot desert"},7:{code:"BSk",zh:"寒冷半干旱 / 草原气候",en:"Cold semi-arid"},8:{code:"BSh",zh:"炎热半干旱 / 草原气候",en:"Hot semi-arid"},9:{code:"Cfa",zh:"暖温带全年湿润、炎热夏季",en:"Humid subtropical"},10:{code:"Cfb",zh:"暖温带全年湿润、温暖夏季",en:"Temperate oceanic"},11:{code:"Cfc",zh:"暖温带全年湿润、凉夏",en:"Subpolar oceanic"},12:{code:"Csa",zh:"暖温带夏干、炎热夏季",en:"Hot-summer Mediterranean"},13:{code:"Csb",zh:"暖温带夏干、温暖夏季",en:"Warm-summer Mediterranean"},14:{code:"Csc",zh:"暖温带夏干、凉夏",en:"Cool-summer Mediterranean"},15:{code:"Cwa",zh:"暖温带冬干、炎热夏季",en:"Subtropical monsoon"},16:{code:"Cwb",zh:"暖温带冬干、温暖夏季",en:"Subtropical highland"},17:{code:"Cwc",zh:"寒冷的亚热带高原气候",en:"Cold subtropical highland"},18:{code:"Dfa",zh:"夏季炎热的湿润大陆性气候",en:"Hot-summer humid continental"},19:{code:"Dfb",zh:"寒冷全年湿润、温暖夏季",en:"Warm-summer humid continental"},20:{code:"Dfc",zh:"寒冷全年湿润、凉夏",en:"Subarctic"},21:{code:"Dfd",zh:"严寒亚寒带气候",en:"Very cold subarctic"},22:{code:"Dsa",zh:"夏季炎热且干燥的大陆性气候",en:"Hot-summer continental with dry summers"},23:{code:"Dsb",zh:"寒冷夏干、温暖夏季",en:"Warm-summer continental with dry summers"},24:{code:"Dsc",zh:"寒冷夏干、凉夏",en:"Subarctic with dry summers"},25:{code:"Dsd",zh:"夏季干燥的严寒亚寒带气候",en:"Very cold subarctic with dry summers"},26:{code:"Dwa",zh:"冬季干燥、夏季炎热的大陆性气候",en:"Hot-summer continental with dry winters"},27:{code:"Dwb",zh:"冬季干燥、夏季温暖的大陆性气候",en:"Warm-summer continental with dry winters"},28:{code:"Dwc",zh:"冬季干燥的亚寒带气候",en:"Subarctic with dry winters"},29:{code:"Dwd",zh:"冬季干燥的严寒亚寒带气候",en:"Very cold subarctic with dry winters"},30:{code:"ET",zh:"极地苔原气候",en:"Tundra"},31:{code:"EF",zh:"极地冰原气候",en:"Ice cap"}},n_={1:{zh:"新陆板块",en:"Newland Plate"},2:{zh:"西岬板块",en:"Westcape Plate"},3:{zh:"西南群岛板块",en:"Southwestern Archipelago Plate"},4:{zh:"东南荒洋板块",en:"Southeastern Barren Ocean Plate"},5:{zh:"东环板块",en:"Eastern Rim Plate"},6:{zh:"北极洋板块",en:"Boreal Ocean Plate"},7:{zh:"南极洋板块",en:"Austral Ocean Plate"},8:{zh:"中央洋板块",en:"Central Ocean Plate"},9:{zh:"北央海盆板块",en:"North-Central Basin Plate"},10:{zh:"东央海盆板块",en:"East-Central Basin Plate"},11:{zh:"东北海盆板块",en:"Northeastern Basin Plate"},12:{zh:"西北海盆板块",en:"Northwestern Basin Plate"},13:{zh:"东南陆缘微板块",en:"Southeastern Margin Microplate"},14:{zh:"月湾微板块",en:"Crescent Bay Microplate"},15:{zh:"北弧微板块",en:"Northern Arc Microplate"},16:{zh:"北缘群岛微板块",en:"Northern Rim Archipelago Microplate"},17:{zh:"内洋微板块",en:"Interior Ocean Microplate"},18:{zh:"南极缘微板块",en:"South Polar Margin Microplate"},19:{zh:"东南过渡微板块",en:"Southeastern Transitional Microplate"}},s_="hover/native-gospl-step20",r_="TSFE_T85_20260913_164deg_y49-63",a_="goSPL_R1_step20_original",o_={file:"elev.tif",stage:"Original goSPL output before Blender terrain corrections",sha256:"4128166e8a236d024a5f913b54c02876559bc391586d29f988cf4ed541d36a37"},zt={width:J0,height:K0,tile_size:Z0,columns:$0,rows:j0,height_min:e_,height_span:t_,classes:i_,plates:n_,tile_directory:s_,dataset_id:r_,height_dataset_id:a_,height_source:o_};function l_({mount:n,stage:e,globe:t,camera:i,tooltip:s,assets:r,signal:a,climate:o,phase:c,layer:l,climateFirst:h,zh:u,onClimateHover:d,plateAtPoint:f,projection:g}){const _=new Rc,p=new yi(new F,1),A=new F,v=new li(new F(0,0,1),0),y=new Map;let x=null,S=0,I=!1,m=null;async function M(R){return y.has(R)||(y.size>=16&&y.delete(y.keys().next().value),y.set(R,bs(new URL(`${zt.tile_directory}/${R}.bin.gz`,r),a).then(U=>{const V=new Uint8Array(U);if(V.length!==zt.tile_size**2*4)throw new Error("Incomplete inspection tile");return V}).catch(U=>{throw y.delete(R),U}))),y.get(R)}function P(){!x||!x.data||x.mode===l()&&(s.innerHTML=Y0(x,{mode:l(),metadata:zt,zh:u,phase:c(),climateFirst:h?.()}))}async function b(R){if(m={clientX:R.clientX,clientY:R.clientY},I)return;const U=n.getBoundingClientRect(),V=(R.clientX-U.left)/U.width,T=(R.clientY-U.top)/U.height,z=g?.(),O=z?.mode&&z.mode!=="globe";_.setFromCamera(new be(V*2-1,1-T*2),O?z.camera:i);let Q,K,N;if(O){const X=_.ray.intersectPlane(v,A)&&Yl(z.mode,A.x,A.y);if(!X){d?.(null),x=null,S++,s.hidden=!0;return}({lon:K,lat:N}=X),Q=d?.(X)}else{if(!_.ray.intersectSphere(p,A)){d?.(null),x=null,S++,s.hidden=!0;return}const pe=t.worldToLocal(A.clone()).normalize();Q=d?.(pe),K=_t.radToDeg(Math.atan2(-pe.z,pe.x)),N=_t.radToDeg(Math.asin(pe.y))}const Y=++S,q=l();x={lon:K,lat:N,mode:q},s.hidden=!0;const te=e.getBoundingClientRect();s.style.left=`${Math.max(8,Math.min(te.width-230,R.clientX-te.left+14))}px`,s.style.top=`${Math.max(8,Math.min(te.height-160,R.clientY-te.top+14))}px`,Q&&(s.textContent=Q,s.hidden=!1);try{const pe=_t.clamp(Math.floor((K+180)/360*zt.width),0,zt.width-1),X=_t.clamp(Math.floor((90-N)/180*zt.height),0,zt.height-1),ne=zt.tile_size,Ee=`${Math.floor(pe/ne)}-${Math.floor(X/ne)}`,[Se,fe]=await Promise.all([M(Ee),o()]);if(Y!==S||a.aborted)return;const we=(X%ne*ne+pe%ne)*4;x={lon:K,lat:N,weather:fe,mode:q,data:{height:zt.height_min+(Se[we]*256+Se[we+1])/65535*zt.height_span,category:Se[we+2],land:(Se[we+3]&1)!==0,plate:f?.(K,N)||Se[we+3]>>1}},P(),s.hidden=!1}catch(pe){pe.name!=="AbortError"&&console.warn("Planet inspection:",pe)}}return n.addEventListener("pointermove",b,{signal:a}),n.addEventListener("pointerleave",()=>{d?.(null),m=null,x=null,S++,s.hidden=!0},{signal:a}),{projectionChanged(){d?.(null),x=null,S++,s.hidden=!0,m&&!I&&b(m)},refresh(){x?.mode===l()?P():m&&!I&&b(m)},setDragging(R){I=R,R?(d?.(null),x=null,S++,s.hidden=!0):m&&b(m)},dispose(){y.clear(),x=null,S++}}}const sn=([n,e])=>{const t=n*Math.PI/180,i=e*Math.PI/180;return new F(Math.cos(i)*Math.cos(t),Math.sin(i),-Math.cos(i)*Math.sin(t))},Vl=([n,e])=>[(n+180)/360,(e+90)/180];function c_(n){const e=[];let t=[];for(const i of n){if(!Number.isFinite(i[0])||!Number.isFinite(i[1])||Math.abs(i[1])>90)throw new Error("Invalid water coordinate");const s=i.slice(0,2),r=t.at(-1);if(r&&Math.abs(r[0]-s[0])>180){const a=s[0]+(r[0]>s[0]?360:-360),o=r[0]>0?180:-180,c=(o-r[0])/(a-r[0]),l=r[1]+c*(s[1]-r[1]);t.push([o,l]),t.length>1&&e.push(t),t=[[-o,l]]}t.push(s)}return t.length>1&&e.push(t),e}function h_(n){const e=Math.max(0,Math.min(1,(n-.1)/.62));return .55+4.05*Math.pow(e,.85)}function u_(n){return new Ot({transparent:!0,depthWrite:!1,side:Nt,toneMapped:!1,uniforms:{uViewport:{value:new be(1,1)},uWidth:{value:h_(n)},uOpacity:{value:1},uColor:{value:new Ne("#397eaa")}},vertexShader:"attribute vec3 previous,next;attribute float side;uniform vec2 uViewport;uniform float uWidth;void main(){vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);vec4 a=projectionMatrix*modelViewMatrix*vec4(previous,1.);vec4 b=projectionMatrix*modelViewMatrix*vec4(next,1.);vec2 d=(b.xy/b.w-a.xy/a.w)*uViewport;float n=max(length(d),.00001);vec2 normal=vec2(-d.y,d.x)/n;p.xy+=normal*side*uWidth/uViewport*p.w;gl_Position=p;}",fragmentShader:`uniform vec3 uColor;uniform float uOpacity;void main(){gl_FragColor=vec4(uColor,uOpacity);
#include <colorspace_fragment>
}`})}function Wl(n){const e=new pt;return e.setAttribute("position",new $e(n.position,3)),e.setAttribute("uv",new $e(n.uv,2)),n.previous&&(e.setAttribute("previous",new $e(n.previous,3)),e.setAttribute("next",new $e(n.next,3)),e.setAttribute("side",new $e(n.side,1))),e.setIndex(n.index),e.computeBoundingSphere(),e}function d_(n,e){const t=n.clone(),i=n.getAttribute("uv");for(const s of["position","previous","next"]){const r=t.getAttribute(s);if(r){for(let a=0;a<r.count;a++){let o=i.getX(a),c=i.getY(a);if(s!=="position"){const h=_a(r.getX(a),r.getY(a),r.getZ(a));o=h.u,c=h.v,o-i.getX(a)>.5&&(o-=1),i.getX(a)-o>.5&&(o+=1)}const l=Hi(e,Math.max(0,Math.min(1,o)),c);r.setXYZ(a,l?.x||0,l?.y||0,0)}r.needsUpdate=!0}}return t.computeBoundingSphere(),t}async function f_(n,{assets:e,signal:t}){const i=await bs(new URL(n.url,e),t),s=new DataView(i).getUint32(0,!0)===826493008?qh(i):JSON.parse(new TextDecoder().decode(i));return t?.throwIfAborted(),A_(Xh(s),{signal:t})}async function A_(n,{signal:e}={}){const t=new fi;t.visible=!1,t.userData.vectorHydrology=!0;const i=new Map,s={position:[],uv:[],index:[]};let r=0;const a=async()=>{e?.throwIfAborted(),await new Promise(l=>setTimeout(l,0)),e?.throwIfAborted()};function o(l,h,u,d=0){const f=sn(l),g=sn(h),_=sn(u),p=[f.angleTo(g),g.angleTo(_),_.angleTo(f)];if(d<8&&Math.max(...p)>Math.PI/180){const v=(I,m)=>[(I[0]+m[0])/2,(I[1]+m[1])/2],y=v(l,h),x=v(h,u),S=v(u,l);o(l,y,S,d+1),o(y,h,x,d+1),o(S,x,u,d+1),o(y,x,S,d+1);return}const A=s.position.length/3;for(const v of[l,h,u]){const y=sn(v);s.position.push(y.x,y.y,y.z),s.uv.push(...Vl(v))}s.index.push(A,A+1,A+2)}for(const l of n.features){e?.throwIfAborted();const h=l.geometry;if(l.properties.kind==="river"){const u=Number(l.properties.width_mm)||.1;i.has(u)||i.set(u,{position:[],uv:[],previous:[],next:[],side:[],index:[]});const d=i.get(u),f=h.type==="MultiLineString"?h.coordinates:[h.coordinates];for(const g of f)for(const _ of c_(g)){const p=d.position.length/3;for(let A=0;A<_.length;A++){const v=sn(_[A]),y=sn(_[Math.max(0,A-1)]),x=sn(_[Math.min(_.length-1,A+1)]);for(const S of[-1,1])d.position.push(v.x,v.y,v.z),d.uv.push(...Vl(_[A])),d.previous.push(y.x,y.y,y.z),d.next.push(x.x,x.y,x.z),d.side.push(S);if(A<_.length-1){const S=p+A*2;d.index.push(S,S+1,S+2,S+1,S+3,S+2)}}}}else if(l.properties.kind==="lake"){const u=h.type==="MultiPolygon"?h.coordinates:[h.coordinates];for(const d of u){const f=d.map(v=>v.slice(0,-1));if(f[0].length<3)continue;const g=f[0].map(v=>new be(...v)),_=f.slice(1).map(v=>v.map(y=>new be(...y))),p=f.flat(),A=wr.triangulateShape(g,_);for(const[v,y,x]of A)o(p[v],p[y],p[x])}}++r%128===0&&await a()}e?.throwIfAborted();for(const[l,h]of i){const u=u_(l),d=new at(Wl(h),u);d.frustumCulled=!1,d.onBeforeRender=f=>{f.getSize(u.uniforms.uViewport.value),u.uniforms.uOpacity.value=u.opacity},t.add(d)}s.index.length&&t.add(new at(Wl(s),new _i({color:"#397eaa",transparent:!0,depthWrite:!1,side:Nt,toneMapped:!1}))),t.projectedMeshes=l=>t.children.map(h=>{const u=new at(d_(h.geometry,l),h.material);return u.frustumCulled=!1,u.onBeforeRender=h.onBeforeRender,u});let c=!1;return t.dispose=()=>{if(!c){c=!0;for(const l of t.children)l.geometry.dispose(),l.material.dispose();t.clear()}},t}async function p_(n,{texture:e,release:t,signal:i,assets:s}){if(n.type==="vector")return f_(n,{assets:s,signal:i});const r=new fi;r.visible=!1;let a=!1;r.dispose=()=>{if(!a){a=!0;for(const o of r.children)o.geometry.dispose(),o.material.dispose(),t(o.material.map);r.clear()}};try{for(const o of n.tiles){if(i.aborted)throw new DOMException("Disposed","AbortError");const c=await e(o.url);if(i.aborted)throw t(c),new DOMException("Disposed","AbortError");const[l,h,u,d]=o.rect,[f,g,_,p]=o.padding,A=new br(1,Math.max(2,Math.ceil(96*u/n.width)),Math.max(2,Math.ceil(64*d/n.height)),l/n.width*Math.PI*2,u/n.width*Math.PI*2,h/n.height*Math.PI,d/n.height*Math.PI),v=A.getAttribute("uv"),y=u+f+_,x=d+g+p;for(let m=0;m<v.count;m++)v.setXY(m,(f+Math.max(0,Math.min(1,v.getX(m)))*u)/y,(p+v.getY(m)*d)/x);const S=new _i({map:c,transparent:n.transparent===!0,depthWrite:!1,toneMapped:!1}),I=new at(A,S);I.scale.setScalar(1.0008),r.add(I)}return r}catch(o){throw r.dispose(),o}}const g_=[{width:2048,url:"uv-global-2048.ktx2"},{width:4096,url:"uv-global-4096.ktx2"},{width:8192,url:"uv-global-8192.ktx2"}],m_={coastline:"vectors/coastline.bin.gz",plates:"vectors/plates-curves.bin.gz","coast-original-land":"vectors/coast-original-land.bin.gz","coast-original-contours":"vectors/coast-original-contours.bin.gz"},__={"uv-global-2048.ktx2":"uv-global-2048.webp","uv-global-4096.ktx2":"uv-global-4096.webp","uv-global-8192.ktx2":"uv-global-8192.webp","clouds-original-4096.ktx2":"clouds-original-4096.webp","clouds-normal-original-4096.ktx2":"clouds-normal-original-4096.webp","roughness-original-4096.ktx2":"roughness-original-4096.webp"},E_="clouds-original-4096.ktx2",v_="clouds-normal-original-4096.ktx2",x_="source-normal-4096.ktx2",C_="roughness-original-4096.ktx2",y_={url:"climate/landmask.webp",width:7200,height:3600},M_="scientific-landsea.webp",S_={display_limits:[-6500,6200],actual_range:[-5595.2119140625,5829.802734375],palette:[{value:-6500,color:"#081d58"},{value:-5500,color:"#253494"},{value:-4500,color:"#225ea8"},{value:-3500,color:"#1d91c0"},{value:-2500,color:"#41b6c4"},{value:-1200,color:"#7fcdbb"},{value:-300,color:"#c7e9b4"},{value:-30,color:"#edf8b1"},{value:0,color:"#bfd48b"},{value:20,color:"#b5cc81"},{value:50,color:"#a9c275"},{value:100,color:"#9cb86a"},{value:180,color:"#8eac5d"},{value:300,color:"#7fa052"},{value:450,color:"#709247"},{value:650,color:"#62853f"},{value:850,color:"#56773a"},{value:1100,color:"#5c6f38"},{value:1400,color:"#635f36"},{value:1800,color:"#694f34"},{value:2300,color:"#634331"},{value:2900,color:"#58392f"},{value:3500,color:"#4d312c"},{value:4100,color:"#432a29"},{value:4700,color:"#3a2526"},{value:5200,color:"#514542"},{value:5600,color:"#756c67"},{value:5900,color:"#a49c95"},{value:6200,color:"#d3cec7"}],palette_source:"R1.qgz: elevation color ramp"},I_={rivers:{type:"vector",url:"vectors/hydrology-curves.bin.gz",coastline:"coast-original-contours",coastColor:"#8ca4a5",source:"TSFE_INLAND_HYDRO_R002 sources: TSFE_FLOW_LINES_LAND_D8 river geometry and positive on-land waterDepth lake polygons"}},w_={surface:g_,vectors:m_,fallbacks:__,clouds:E_,cloudNormal:v_,normal:x_,roughness:C_,landmask:y_,geography:M_,geographyLegend:S_,hydrology:I_},b_="TSFE_T85_20260913_164deg_y49-63",B_=[{id:1,lon:-4.25,lat:16.25,clearance:28.98},{id:2,lon:-66.75,lat:28.25,clearance:29},{id:3,lon:-46.25,lat:-29.75,clearance:26.844},{id:4,lon:18.25,lat:-48.75,clearance:23.22},{id:5,lon:67.75,lat:6.75,clearance:39},{id:6,lon:-88.75,lat:75.25,clearance:22.492},{id:7,lon:-84.75,lat:-83.75,clearance:18.117},{id:8,lon:-170.75,lat:-26.25,clearance:42.397},{id:9,lon:164.75,lat:38.25,clearance:32.591},{id:10,lon:-100.75,lat:-12.25,clearance:32.898},{id:11,lon:-136.75,lat:49.25,clearance:11.048},{id:12,lon:95.25,lat:56.75,clearance:13.5},{id:13,lon:11.25,lat:-11.25,clearance:6},{id:14,lon:29.25,lat:27.25,clearance:2.667},{id:15,lon:36.75,lat:60.75,clearance:6.5},{id:16,lon:-21.25,lat:63.75,clearance:2.5},{id:17,lon:-169.75,lat:20.25,clearance:2.969},{id:18,lon:74.75,lat:-72.25,clearance:3.134},{id:19,lon:56.25,lat:-50.25,clearance:.959}],T_=[{id:31,lon:-23.25,lat:76.25,clearance:8,share:.005742},{id:31,lon:70.75,lat:66.25,clearance:3,share:.001217},{id:30,lon:-25.25,lat:47.75,clearance:3.026,share:.001453},{id:7,lon:-17.25,lat:46.25,clearance:1.836,share:.001323},{id:30,lon:4.25,lat:47.25,clearance:2.5,share:.001361},{id:10,lon:-10.25,lat:39.75,clearance:7.5,share:.007925},{id:5,lon:-34.25,lat:36.75,clearance:3.603,share:.002013},{id:6,lon:-43.25,lat:17.25,clearance:4.41,share:.003966},{id:9,lon:-28.75,lat:29.75,clearance:2.605,share:.002649},{id:6,lon:-7.75,lat:20.75,clearance:5.5,share:.008231},{id:6,lon:28.75,lat:16.25,clearance:2.44,share:965e-6},{id:10,lon:-26.75,lat:1.75,clearance:3.5,share:.003697},{id:8,lon:-15.75,lat:10.75,clearance:3,share:.003967},{id:4,lon:25.25,lat:10.75,clearance:2.5,share:.006047},{id:1,lon:-38.75,lat:1.25,clearance:3.997,share:.003381},{id:1,lon:7.75,lat:1.75,clearance:7.5,share:.014717},{id:1,lon:103.25,lat:2.25,clearance:2.498,share:.001004},{id:4,lon:-20.75,lat:-1.25,clearance:1.5,share:.001043},{id:2,lon:-11.25,lat:-8.75,clearance:1.994,share:.001699},{id:4,lon:5.75,lat:-9.75,clearance:2,share:.00295},{id:31,lon:-39.25,lat:-74.75,clearance:3,share:.002799}],R_={dataset_id:b_,plates:B_,climate:T_};function ql(n,e,t){let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const a=t[s],o=t[r];a[1]>e!=o[1]>e&&n<(o[0]-a[0])*(e-a[1])/(o[1]-a[1])+a[0]&&(i=!i)}return i}function D_(n,e,t){const i=(e+180)*20,s=(90-t)*20;return n.find(r=>ql(i,s,r.rings[0])&&!r.rings.slice(1).some(a=>ql(i,s,a)))?.value||0}async function L_(n,{signal:e}={}){const t=JSON.parse(new TextDecoder().decode(await bs(n,e)));if(t.width!==7200||t.height!==3600||!Array.isArray(t.regions)||t.regions.length>100)throw Error("Invalid native plate regions");const i=await Lh(t.regions,{width:t.width,height:t.height,signal:e});return i.group.scale.setScalar(1.0015),i.group.visible=!1,i.material.fragmentShader="uniform int uSelected;uniform float uOpacity;varying float vCategory;varying vec3 vColor;void main(){if(uSelected==0||abs(vCategory-float(uSelected))>.1)discard;gl_FragColor=vec4(vColor,.24*uOpacity);}",i.pick=(s,r)=>D_(t.regions,s,r),i}function P_(n){return Math.pow(Math.max(1,n),-.45)}function Uh(n,e,t,i,s,r=1.006){const a=e*Math.PI/180,o=t*Math.PI/180,c=Math.cos(o),l=Math.sin(o),h=new F(c*Math.cos(a),l,-c*Math.sin(a)),u=new F(-Math.sin(a),0,-Math.cos(a)),d=new F(-l*Math.cos(a),c,l*Math.sin(a)),f=n.getAttribute("position"),g=n.getAttribute("uv"),_=n.getAttribute("normal"),p=new F;for(let A=0;A<f.count;A++)p.copy(h).addScaledVector(u,(g.getX(A)-.5)*i).addScaledVector(d,(g.getY(A)-.5)*s).normalize(),_.setXYZ(A,p.x,p.y,p.z),p.multiplyScalar(r),f.setXYZ(A,p.x,p.y,p.z);return f.needsUpdate=_.needsUpdate=!0,n.computeBoundingSphere(),n}function U_(n,e,t,i,s=1.006){return Uh(new kn(t,i,24,8),n,e,t,i,s)}function F_(n,e){if(e)return n.length<=8?[n]:[n.slice(0,-3),n.slice(-3)];const t=[""];for(const i of n.split(" ")){const s=t.length-1;t[s]&&t[s].length+i.length>21?t.push(i):t[s]+=(t[s]?" ":"")+i}return t}function N_(n,{metadata:e,zh:t,fontFamily:i,climate:s=!1}){const r=new fi;r.name=s?"climate-labels":"plate-labels";for(const o of n){const c=(s?e.classes:e.plates)[o.id];if(!c)continue;const l=s?c.code:c[t?"zh":"en"],h=s?[l]:F_(l,t),u=document.createElement("canvas"),d=u.getContext("2d"),f="96px "+i;d.font=f,u.width=Math.ceil(Math.max(...h.map(y=>d.measureText(y).width))+32),u.height=h.length*116+24,d.font=f,d.textAlign="center",d.textBaseline="middle",d.lineJoin="round",d.lineWidth=13,d.strokeStyle="rgba(18,25,32,.94)",d.fillStyle="#f4f6f8",h.forEach((y,x)=>{const S=12+(x+.5)*116;d.strokeText(y,u.width/2,S),d.fillText(y,u.width/2,S)});const g=new md(u);g.colorSpace=Dt,g.anisotropy=4;const _=(s?.031:.033)*u.height/96,p=_*u.width/u.height,A=new _i({map:g,transparent:!0,alphaTest:.08,depthWrite:!1,toneMapped:!1}),v=new at(U_(o.lon,o.lat,p,_),A);v.name=l,v.userData.category=o.id,v.userData.anchor=o,v.userData.labelSize={width:p,height:_},v.renderOrder=7,r.add(v)}r.visible=!1;let a=1;return r.resize=o=>{if(!(Math.abs(a-o)<1e-4)){a=o;for(const c of r.children){const{anchor:l,labelSize:h}=c.userData;Uh(c.geometry,l.lon,l.lat,h.width*o,h.height*o)}}},r.projectedMeshes=o=>r.children.map(c=>{const{anchor:l,labelSize:h}=c.userData,u=Hi(o,(l.lon+180)/360,(l.lat+90)/180),d=new at(new kn(h.width*.9,h.height*.9),c.material);return d.position.set(u.x,u.y,.05),d.name=c.name,d.renderOrder=7,d}),r.dispose=()=>{for(const o of r.children)o.geometry.dispose(),o.material.map.dispose(),o.material.dispose();r.clear()},r}const Q_=1800,O_={file:"monthly-t85.rgba.gz",width:512,height:256,layers:12,encode_limits:{temperature:[-100,60],precipitation:[0,100]}},G_={temperature:{display_limits:[-80,50],actual_range:[-65.94036153157549,40.927398681640625],palette:[{value:-80,color:"#4527a0"},{value:-40,color:"#2055bf"},{value:-10,color:"#1aa8d5"},{value:0,color:"#27b67b"},{value:10,color:"#a8cf3c"},{value:20,color:"#f3cc2b"},{value:30,color:"#ef8a22"},{value:40,color:"#dc3d32"},{value:50,color:"#a52341"}]},precipitation:{display_limits:[0,30],actual_range:[0,56.31428008200601],palette:[{value:0,color:"#d5ba62"},{value:.2,color:"#b9ce54"},{value:1,color:"#75c56d"},{value:2,color:"#2cb57f"},{value:5,color:"#1bafae"},{value:10,color:"#2386c1"},{value:20,color:"#3f59af"},{value:30,color:"#69429f"}]}},k_="TSFE_T85_20260913_164deg_y49-63",H_={playback_duration_ms:Q_,temporal_atlas:O_,layers:G_,dataset_id:k_},z_="final-climate-zones.svg",V_={vector_file:z_},W_=[{value:1,code:"Af",name:{zh:"热带雨林气候",en:"Tropical rainforest"},description:{zh:"全年高温；全年多雨；没有明显旱季；空气湿度高；常绿雨林",en:"Hot all year; abundant rainfall year-round; no distinct dry season; high humidity; evergreen rain forest"},area_km2:10009224,percent:"21.19",color:"#940101"},{value:2,code:"Am",name:{zh:"热带季风气候",en:"Tropical monsoon"},description:{zh:"全年高温；雨季雨量很大；有短暂旱季；季风变化明显；植被茂密",en:"Hot all year; very heavy rainy-season precipitation; a brief dry season; pronounced monsoon shifts; dense vegetation"},area_km2:1919354,percent:"4.06",color:"#fe0000"},{value:4,code:"Aw",name:{zh:"热带冬干 / 热带草原气候",en:"Tropical savanna"},description:{zh:"全年较热；雨季旱季分明；冬季明显干燥；大片草原；树木较稀疏",en:"Warm to hot year-round; distinct wet and dry seasons; notably dry winters; extensive grasslands; scattered trees"},area_km2:6396579,percent:"13.54",color:"#ffcfcf"},{value:5,code:"BWk",name:{zh:"寒冷沙漠气候",en:"Cold desert"},description:{zh:"降水极少；冬季寒冷；昼夜温差大；空气干燥；植被极少",en:"Very little precipitation; cold winters; large day–night temperature swings; dry air; sparse vegetation"},area_km2:923894,percent:"1.96",color:"#ffff65"},{value:6,code:"BWh",name:{zh:"炎热沙漠气候",en:"Hot desert"},description:{zh:"非常炎热；降水极少；蒸发非常强；昼夜温差大；大片裸地沙漠",en:"Extremely hot; very little precipitation; intense evaporation; large day–night temperature swings; extensive bare desert"},area_km2:6778682,percent:"14.35",color:"#ffcf00"},{value:7,code:"BSk",name:{zh:"寒冷半干旱 / 草原气候",en:"Cold semi-arid"},description:{zh:"偏冷干燥；降水较少；冬季寒冷；以草原为主；树木较少",en:"Cool and dry; limited precipitation; cold winters; mainly grassland; few trees"},area_km2:629920,percent:"1.33",color:"#cfaa55"},{value:8,code:"BSh",name:{zh:"炎热半干旱 / 草原气候",en:"Hot semi-arid"},description:{zh:"炎热干燥；降水不多；旱季较长；草原和灌木为主；比沙漠稍湿",en:"Hot and dry; limited precipitation; a long dry season; grasslands and shrubs; slightly wetter than a desert"},area_km2:4508844,percent:"9.55",color:"#cf8e14"},{value:9,code:"Cfa",name:{zh:"暖温带全年湿润、炎热夏季",en:"Humid subtropical"},description:{zh:"夏季炎热潮湿；冬季较温和；全年都有降水；没有明显旱季；四季较明显",en:"Hot, humid summers; relatively mild winters; precipitation year-round; no distinct dry season; noticeable seasons"},area_km2:1244333,percent:"2.63",color:"#003000"},{value:10,code:"Cfb",name:{zh:"暖温带全年湿润、温暖夏季",en:"Temperate oceanic"},description:{zh:"夏季温暖不酷热；冬季较温和；全年湿润；温差较小；天气较温和",en:"Warm but not excessively hot summers; relatively mild winters; moist year-round; modest temperature swings; generally mild weather"},area_km2:6117648,percent:"12.95",color:"#014f01"},{value:11,code:"Cfc",name:{zh:"暖温带全年湿润、凉夏",en:"Subpolar oceanic"},description:{zh:"夏季凉爽；冬季偏冷；全年湿润；多阴雨大风；生长季较短",en:"Cool summers; relatively cold winters; moist year-round; frequent rain, clouds, and wind; short growing season"},area_km2:501459,percent:"1.06",color:"#007800"},{value:13,code:"Csb",name:{zh:"暖温带夏干、温暖夏季",en:"Warm-summer Mediterranean"},description:{zh:"夏季温暖干燥；很少极端炎热；冬季温和多雨；夏冬降水反差大；沿海较常见",en:"Warm, dry summers; extreme heat is uncommon; mild, rainy winters; strong seasonal rainfall contrast; often coastal"},area_km2:103696,percent:"0.22",color:"#95ff00"},{value:14,code:"Csc",name:{zh:"暖温带夏干、凉夏",en:"Cool-summer Mediterranean"},description:{zh:"夏季凉爽干燥；冬季较冷湿润；夏季很短；生长季短；多见于高纬或高地",en:"Cool, dry summers; relatively cold, wet winters; very brief summers; short growing season; common at high latitudes or elevations"},area_km2:38398,percent:"0.08",color:"#cbff00"},{value:16,code:"Cwb",name:{zh:"暖温带冬干、温暖夏季",en:"Subtropical highland"},description:{zh:"夏季温暖多雨；冬季凉爽干燥；夏季不太炎热；季节降水明显；高地较常见",en:"Warm, rainy summers; cool, dry winters; summers rarely very hot; strongly seasonal rainfall; common in highlands"},area_km2:4442,percent:"0.01",color:"#956603"},{value:19,code:"Dfb",name:{zh:"寒冷全年湿润、温暖夏季",en:"Warm-summer humid continental"},description:{zh:"冬季寒冷；夏季温暖；全年有降水；四季分明；冬夏温差大",en:"Cold winters; warm summers; precipitation year-round; distinct seasons; large winter–summer temperature swings"},area_km2:20778,percent:"0.04",color:"#650065"},{value:20,code:"Dfc",name:{zh:"寒冷全年湿润、凉夏",en:"Subarctic"},description:{zh:"冬季漫长寒冷；夏季短而凉；全年有降水；冬夏温差很大；针叶林常见",en:"Long, cold winters; short, cool summers; precipitation year-round; large winter–summer temperature swings; conifer forests are common"},area_km2:102836,percent:"0.22",color:"#cb00cb"},{value:23,code:"Dsb",name:{zh:"寒冷夏干、温暖夏季",en:"Warm-summer continental with dry summers"},description:{zh:"冬季寒冷；夏季温暖干燥；冬季相对更湿；季节温差大；夏季降水很少",en:"Cold winters; warm, dry summers; relatively wetter winters; large seasonal temperature swings; very little summer rain"},area_km2:3705,percent:"0.01",color:"#feb6ff"},{value:24,code:"Dsc",name:{zh:"寒冷夏干、凉夏",en:"Subarctic with dry summers"},description:{zh:"冬季漫长寒冷；夏季短而凉爽；夏季干燥；冬夏温差大；生长季很短",en:"Long, cold winters; short, cool summers; dry summers; large seasonal temperature swings; very short growing season"},area_km2:39532,percent:"0.08",color:"#e7cafd"},{value:30,code:"ET",name:{zh:"极地苔原气候",en:"Tundra"},description:{zh:"全年寒冷；夏季短暂解冻；没有真正暖夏；永久冻土常见；苔藓低矮植物为主",en:"Cold year-round; a brief summer thaw; no truly warm summer; permafrost is common; mosses and low-growing plants dominate"},area_km2:1928672,percent:"4.08",color:"#65ffff"},{value:31,code:"EF",name:{zh:"极地冰原气候",en:"Ice cap"},description:{zh:"全年严寒；最暖月也低于冰点附近；长期冰雪覆盖；几乎没有植被；降水很少",en:"Bitterly cold year-round; even the warmest month stays near or below freezing; persistent snow and ice; virtually no vegetation; little precipitation"},area_km2:5960513,percent:"12.62",color:"#6496ff"}],q_={classes:W_};function Xl({x:n,y:e,z:t}){const s=(Math.atan2(t,-n)/(2*Math.PI)%1+1)%1,r=Math.max(0,Math.min(1,Math.asin(Math.max(-1,Math.min(1,e)))/Math.PI+.5));return{u:s,v:r}}function X_(n,e,t,i,s){if(!n||!e||!t||!Number.isFinite(i)||!Number.isFinite(s))return 0;const r=Math.max(0,Math.min(e-1,Math.floor((i%1+1)%1*e))),a=Math.max(0,Math.min(t-1,Math.floor(s*t)));return n[a*e+r]||0}function Fh(n,{left:e=0,right:t=1,bottom:i=0,top:s=1,columns:r=360,rows:a=180,uvMap:o=null}={}){const c=new Float32Array((r+1)*(a+1)*3),l=new Float32Array((r+1)*(a+1)*2),h=new Uint32Array(r*a*6),u=i,d=s;if(u>=d)throw new RangeError("Invalid projection extent");let f=0,g=0,_=0;for(let A=0;A<=a;A++){const v=u+(d-u)*A/a;for(let y=0;y<=r;y++){const x=e+(t-e)*y/r,S=Hi(n,x,v);c[f++]=S?.x??0,c[f++]=S?.y??0,c[f++]=0;const I=o?o(x,v):{u:x,v};if(l[g++]=I.u,l[g++]=I.v,y<r&&A<a){const m=A*(r+1)+y,M=m+1,P=m+r+1,b=P+1;h[_++]=m,h[_++]=M,h[_++]=b,h[_++]=m,h[_++]=b,h[_++]=P}}}const p=new pt;return p.setAttribute("position",new Vt(c,3)),p.setAttribute("uv",new Vt(l,2)),p.setIndex(new Vt(h,1)),p.computeBoundingSphere(),p}function Y_(n,{spacing:e=15,sampleStep:t=1}={}){const i=[],s=(c,l)=>{c&&l&&i.push(c.x,c.y,.012,l.x,l.y,.012)};for(let c=-180;c<=180;c+=e){const l=(c+180)/360;for(let h=-90;h<90;h+=t)s(Hi(n,l,(h+90)/180),Hi(n,l,(h+t+90)/180))}for(let c=-90;c<=90;c+=e){const l=(c+90)/180;for(let h=-180;h<180;h+=t)s(Hi(n,(h+180)/360,l),Hi(n,(h+t+180)/360,l))}const r=new pt;r.setAttribute("position",new $e(i,3)),r.computeBoundingSphere();const a=new Ms({color:12174021,transparent:!0,opacity:.32,depthWrite:!1,depthTest:!1,toneMapped:!1}),o=new _s(r,a);return o.frustumCulled=!1,o.renderOrder=2,o}function J_(n,e,t){const[i,s,r,a]=t.rect,[o,c,l,h]=t.padding,u=r+o+l,d=a+c+h,f=i/e.width,g=1-(s+a)/e.height,_={left:f,right:(i+r)/e.width,bottom:g,top:1-s/e.height,columns:Math.max(12,Math.ceil(r/e.width*360)),rows:Math.max(12,Math.ceil(a/e.height*180)),uvMap(p,A){return{u:(o+(p-f)*e.width)/u,v:(h+(A-g)*e.height)/d}}};return Fh(n,_)}async function K_(n,e,t){let i=new Float32Array(n.length+12),s=0;const r=(c,l,h,u)=>{if(s+6>i.length){const d=new Float32Array(Math.ceil(i.length*1.25)+6);d.set(i),i=d}i[s++]=c,i[s++]=l,i[s++]=0,i[s++]=h,i[s++]=u,i[s++]=0},a=6e3;for(let c=0;c<n.length;c+=a*6){t?.throwIfAborted?.();const l=Math.min(n.length,c+a*6);for(let h=c;h+5<l;h+=6){const u=_a(n[h],n[h+1],n[h+2]),d=_a(n[h+3],n[h+4],n[h+5]);Yh(u,d,e,r)}l<n.length&&await new Promise(h=>setTimeout(h,0))}const o=new pt;return o.setAttribute("position",new Vt(i.subarray(0,s),3)),o.boundingSphere=new yi(new F,2),o}class Z_ extends HTMLElement{connectedCallback(){if(this.observer)return;this.initializing=null,this.renderer=null,this.levels=null,this.upgrading=!1,this.vectorPromises=new Map,this.vectorLayers=new Map,this.climatePromise=null,this.climateRuntime=null,this.fittedDistance=0,this.viewInitialized=!1,this.playAnchor=null,this.speed=1,this.classList.remove("ready"),this.disposed=!1,this.visible=!1,this.dirty=!0,this.frame=0,this.month=0,this.layer="surface",this.playing=!1,this.sequence=0,this.projectionMode="globe",this.flatRevision=0,this.flatVectorCache=new Map,this.flatVectorPromises=new Map,this.flatHydroMeshes=null,this.flatClimateMeshes=null,this.flatAbort=new AbortController,this.climateHover=0,this.climateHoverPrevious=0,this.climateHoverFrame=0;const e=Number(this.querySelector("[data-contour-value]")?.value??this.querySelector("[data-contour-interval]")?.value);this.contourInterval=Number.isFinite(e)&&e>=1&&e<=1200?Math.round(e):600,this.denseContourNoticeShown=!1,this.liveContours=null,this.liveContourMesh=null,this.liveContourPromise=null,this.overlayEnabled={plates:!1,contours:!1,classification:!1,rivers:!1},this.overlayOpacity=.3,this.overlaySequence=0,this.rasterLayers=new Map,this.rasterPromises=new Map,this.landmaskPromise=null,this.mapLabels=new Map,this.flatMapLabels=new Map,this.textures=new Set,this.climateTextures=new Map,this.extraTexturePrefetchStarted=!1,this.extraTexturePrefetchRequested=!1,this.abort=new AbortController,this.connectionAbort=new AbortController,this.zh=this.dataset.lang==="zh",this.assets=new URL(this.dataset.assets,location.href),this.status=this.querySelector(".planet-status"),this.progressUI=this.querySelector(".planet-loading"),this.progressFill=this.querySelector(".planet-loading-fill"),this.setProgress(0,this.zh?"正在加载三维星球…":"Loading 3D planet…");const t={signal:this.connectionAbort.signal};this.querySelectorAll("[data-layer]").forEach(i=>i.addEventListener("click",()=>{this.layer=i.dataset.layer,this.syncLayerControls(),this.appearance?this.setLayer(this.layer):this.startInitialization()},t)),this.querySelector("[data-contour-interval]")?.addEventListener("input",i=>{this.setContourInterval(Number(i.target.value))},t),this.querySelector("[data-contour-value]")?.addEventListener("change",i=>{this.setContourInterval(i.target.value.trim()===""?NaN:Number(i.target.value))},t),this.syncLayerControls(),this.syncProjectionControl(),window.addEventListener("pageshow",()=>{this.syncProjectionControl(),this.setContourInterval(Number(this.querySelector("[data-contour-value]")?.value??this.querySelector("[data-contour-interval]")?.value))},t),this.querySelector("[data-projection-mode]")?.addEventListener("change",i=>{const s=i.target.value;Mo.includes(s)&&(this.projectionMode=s,this.appearance?this.setProjection(s):this.startInitialization())},t),this.observer=new IntersectionObserver(i=>{this.visible=i[0].isIntersecting,clearTimeout(this.offscreenRelease),this.visible?(this.appearance||this.startInitialization(),this.invalidate()):(this.frame&&cancelAnimationFrame(this.frame),this.frame=0,this.offscreenRelease=setTimeout(()=>{!this.visible&&!this.disposed&&!this.classList.contains("ready")&&(this.disposeScene(),this.initializing=null)},1500)),this.schedulePlayback()},{rootMargin:"0px",threshold:0}),this.observer.observe(this)}setProgress(e,t){if(!this.progressUI)return;this.progressUI.hidden=e>=100,this.progressUI.setAttribute("aria-busy",String(e<100)),this.progressFill&&(this.progressFill.style.width=`${Math.max(0,Math.min(100,e))}%`);const i=this.progressUI.querySelector(".planet-loading-label");i&&(i.textContent=t||"")}prefetchMapTextures(){if(this.disposed||this.extraTexturePrefetchStarted||navigator.connection?.saveData||(this.extraTexturePrefetchRequested=!0,!this.classList.contains("ready")||!this.appearance||!this.manifest))return;this.extraTexturePrefetchStarted=!0;const e=this.abort.signal,t=async()=>{if(e.aborted||this.disposed||!this.visible)return;const i=[this.manifest.vectors["coast-original-contours"],this.manifest.geography,this.manifest.hydrology?.drainage?.url,this.manifest.hydrology?.rivers?.url].filter(Boolean);for(const s of i){if(e.aborted||this.disposed||!this.visible)break;try{const r=await fetch(new URL(s,this.assets),{signal:e,cache:"force-cache"});r.ok&&await r.arrayBuffer()}catch{if(e.aborted)break}}};"requestIdleCallback"in window?requestIdleCallback(()=>{e.aborted||t()},{timeout:1200}):setTimeout(()=>{e.aborted||t()},150)}startInitialization(){if(this.disposed||this.initializing)return this.initializing;this.abort=new AbortController,this.flatAbort?.signal.aborted&&(this.flatAbort=new AbortController),this.activeProjection=null,this.setProgress(4,this.zh?"正在加载 3D 场景…":"Loading 3D scene…");const e=this.initialize().finally(()=>{this.initializing===e&&!this.appearance&&(this.initializing=null)});return this.initializing=e,e}async json(e){const t=await fetch(e,{signal:this.abort.signal});if(!t.ok)throw new Error(`Asset ${t.status}: ${e}`);return t.json()}async texture(e,t=!0,i=this.abort.signal){let s;if(e.endsWith(".ktx2"))try{s=await this.ktx.loadAsync(new URL(e,this.assets).href)}catch(r){if(i.aborted)throw new DOMException("Disposed","AbortError");const a=this.manifest.fallbacks?.[e];if(!a)throw r;s=await new rl().loadAsync(new URL(a,this.assets).href)}else s=await new rl().loadAsync(new URL(e,this.assets).href);if(i.aborted||this.disposed)throw s.dispose(),new DOMException("Disposed","AbortError");return s.colorSpace=t?Dt:hi,s.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),this.textures.add(s),s}release(e){e&&(e.dispose(),this.textures.delete(e))}async initialize(){const e=this.abort.signal;try{const t=w_;this.manifest=t;const i=this.querySelector(".planet-canvas"),s=new Jm({antialias:!0,alpha:!0,powerPreference:"low-power"});this.renderer=s,s.setClearColor(0,0),this.ktx=new ii().setTranscoderPath(new URL("basis/",this.assets).href).setWorkerLimit(1).detectSupport(s),s.setPixelRatio(Math.min(devicePixelRatio||1,2.5)),s.outputColorSpace=Dt,i.append(s.domElement);const r=document.createElement("div");r.className="planet-interaction",r.setAttribute("aria-label",this.zh?"星球交互区域":"Planet interaction area"),r.tabIndex=0,i.append(r),this.interaction=r,r.addEventListener("pointerdown",()=>this.prefetchMapTextures(),{signal:this.connectionAbort.signal,passive:!0}),this.scene=new sd,this.camera=new ci(37,1,.05,20),this.camera.position.set(0,.12,3.7),this.controls=new Fl(this.camera,r),this.controls.enablePan=!1,this.controls.enableDamping=!1,this.controls.mouseButtons.RIGHT=null,this.controls.minDistance=1.15,this.controls.maxDistance=5.8,this.controls.saveState(),this.flatCamera=new Br(-1.85,1.85,1,-1,.1,30),this.flatCamera.position.set(0,0,5),this.flatControls=new Fl(this.flatCamera,r),this.flatControls.enabled=!1,this.flatControls.enableRotate=!1,this.flatControls.enablePan=!0,this.flatControls.enableZoom=!0,this.flatControls.minZoom=1,this.flatControls.maxZoom=14,this.flatControls.mouseButtons.LEFT=Di.PAN,this.flatControls.mouseButtons.RIGHT=Di.PAN,this.flatControls.mouseButtons.MIDDLE=Di.DOLLY,this.flatControls.touches.ONE=zi.PAN,this.flatControls.touches.TWO=zi.DOLLY_PAN,this.flatControls.addEventListener("change",()=>this.invalidate()),this.installTouchGestures(r,i),this.controls.addEventListener("change",()=>{this.controls.rotateSpeed=_t.clamp((this.camera.position.length()-1)/Math.max(.1,(this.fittedDistance||3.7)-1),.025,1),this.updateTouchArea(i),this.invalidate(),this.upgradeSurface()}),this.globe=new fi,this.globe.rotation.y=-Math.PI/2,this.scene.add(this.globe),this.geometry=new br(1,160,96),this.flatGroup=new fi,this.flatGroup.visible=!1,this.scene.add(this.flatGroup),this.setProgress(16,this.zh?"正在加载纹理与光照数据…":"Loading textures and lighting data…");const a=await W0({renderer:s,scene:this.scene,camera:this.camera,globe:this.globe,geometry:this.geometry,assets:this.assets,manifest:t,texture:this.texture.bind(this),signal:e});if(e.aborted||this.disposed)throw a.dispose(),new DOMException("Disposed","AbortError");this.setProgress(83,this.zh?"正在加载星球模型…":"Loading planet model…"),this.appearance=a,this.surface=this.appearance.surface,this.surfaceMaterial=this.appearance.material,this.flatSurfaceMaterial=new _i({map:this.surfaceMaterial.map,toneMapped:!1,side:Nt}),this.flatBackgroundMaterial=new _i({color:getComputedStyle(document.documentElement).getPropertyValue("--surface").trim()||"#ffffff",toneMapped:!1,side:Nt}),this.flatClimateBackgroundMaterial=new _i({color:2962491,toneMapped:!1,side:Nt}),this.grid=b0(),this.globe.add(this.grid),this.occluder=new at(this.geometry,new _i({toneMapped:!1})),this.occluder.renderOrder=-2,this.occluder.visible=!1,this.globe.add(this.occluder),this.overlayMaterial=new _i({transparent:!0,depthWrite:!1,toneMapped:!1}),this.overlay=new at(this.geometry,this.overlayMaterial),this.overlay.scale.setScalar(1.0008),this.overlay.visible=!1,this.globe.add(this.overlay),this.climateOverlay=new fi,this.climateOverlay.scale.setScalar(1.0015),this.climateOverlay.visible=!1,this.climateOverlay.renderOrder=0,this.globe.add(this.climateOverlay);const o=t.surface.filter(l=>l.width<=s.capabilities.maxTextureSize);if(!o.length)throw new Error("No supported surface texture");this.levels=o,this.surfaceLevel=Math.min(1,o.length-1),this.climate=H_,this.inspection=l_({mount:i,stage:this.querySelector(".planet-stage"),globe:this.globe,camera:this.camera,tooltip:this.querySelector(".planet-tooltip"),assets:this.assets,signal:this.abort.signal,climate:()=>this.climatePlayback(),phase:()=>this.month,layer:()=>this.layer,climateFirst:()=>this.layer==="classification"||this.supportsOverlays()&&this.overlayEnabled.classification,zh:this.zh,onClimateHover:l=>this.selectMapAtPoint(l),plateAtPoint:(l,h)=>this.plateRegions?.pick(l,h),projection:()=>({mode:this.projectionMode,camera:this.flatCamera})}),this.controls.addEventListener("start",()=>this.inspection.setDragging(!0)),this.controls.addEventListener("end",()=>this.inspection.setDragging(!1)),this.installEvents(i);const c=()=>{const{width:l,height:h}=i.getBoundingClientRect();if(!l||!h)return;s.setSize(l,h,!1),this.camera.aspect=l/h;const u=Math.max(1.02,1.75*h/l);this.flatCamera.left=-u*l/h,this.flatCamera.right=-this.flatCamera.left,this.flatCamera.top=u,this.flatCamera.bottom=-u,this.flatCamera.updateProjectionMatrix(),this.appearance.resize(l,h);const d=_t.degToRad(this.camera.fov/2),f=Math.atan(Math.tan(d)*this.camera.aspect),g=1.08/Math.sin(Math.min(d,f));this.controls.maxDistance=Math.max(5.8,g*1.8);const _=this.fittedDistance?this.camera.position.length()*g/this.fittedDistance:g;this.camera.position.setLength(_t.clamp(_,this.controls.minDistance,this.controls.maxDistance)),this.fittedDistance=g,this.viewInitialized||(this.controls.saveState(),this.viewInitialized=!0),this.camera.updateProjectionMatrix(),this.controls.update(),this.updateTouchArea(i),this.invalidate()};if(this.resize=new ResizeObserver(c),c(),this.resize.observe(i),this.setProgress(92,this.zh?"正在加载渲染资源…":"Loading rendering resources…"),this.projectionMode!=="globe"&&this.setProjection(this.projectionMode),await this.setLayer(this.layer),e.aborted||this.disposed)return;this.classList.add("ready"),this.setProgress(100,""),this.invalidate(),this.extraTexturePrefetchRequested&&this.prefetchMapTextures()}catch(t){if(this.abort.signal!==e)return;this.disposeScene(),t.name!=="AbortError"&&!this.disposed&&(this.setProgress(100,""),console.error("Planet viewer:",t),this.status.textContent=this.zh?"星球加载失败，点击图层重试。":"The planet could not load. Select a layer to retry.")}}updateTouchArea(e){if(!this.interaction||!this.camera)return;const{width:t,height:i}=e.getBoundingClientRect();if(!t||!i)return;if(this.projectionMode!=="globe"){this.interaction.style.width="100%",this.interaction.style.height="100%",this.interaction.style.clipPath="none",this.interaction.style.borderRadius="0",this.interaction.style.touchAction="pan-y";return}this.interaction.style.clipPath="circle(50% at 50% 50%)",this.interaction.style.borderRadius="50%",this.interaction.style.touchAction="none";const s=this.camera.position.length(),o=2*(i/(2*Math.tan(_t.degToRad(this.camera.fov)/2))/Math.sqrt(Math.max(.01,s*s-1)));this.interaction.style.width=`${o}px`,this.interaction.style.height=`${o}px`}installTouchGestures(e,t){const i=new Map;let s=null,r=0;const a=()=>{const c=[...i.values()];return{x:(c[0].x+c[1].x)/2,y:(c[0].y+c[1].y)/2,distance:Math.hypot(c[0].x-c[1].x,c[0].y-c[1].y)}},o=c=>{if(!(c.pointerType!=="touch"||this.projectionMode!=="globe"))if(c.stopImmediatePropagation(),c.type==="pointerdown"){if(c.preventDefault(),i.set(c.pointerId,{x:c.clientX,y:c.clientY}),e.setPointerCapture(c.pointerId),i.size===2){const l=a();s=l,r=l.distance}this.inspection?.setDragging(!0)}else if(c.type==="pointermove"){if(!i.has(c.pointerId))return;c.preventDefault();const l=i.get(c.pointerId);if(i.set(c.pointerId,{x:c.clientX,y:c.clientY}),i.size===1){const h=c.clientX-l.x,u=c.clientY-l.y,d=new xr().setFromVector3(this.camera.position);d.theta-=h/Math.max(1,e.clientWidth)*Math.PI*2,d.phi=_t.clamp(d.phi-u/Math.max(1,e.clientHeight)*Math.PI*2,.02,Math.PI-.02),this.camera.position.setFromSpherical(d),this.camera.lookAt(this.controls.target),this.controls.update(),this.invalidate()}else if(i.size===2){const h=a();s&&this.layer==="surface"&&(this.appearance.rotateLight((h.x-s.x)/Math.max(1,t.clientWidth)*Math.PI*2,(h.y-s.y)/Math.max(1,t.clientHeight)*Math.PI),this.invalidate()),r>0&&h.distance>0&&this.zoom(r/h.distance),s=h,r=h.distance}}else(c.type==="pointerup"||c.type==="pointercancel")&&(i.delete(c.pointerId),e.hasPointerCapture(c.pointerId)&&e.releasePointerCapture(c.pointerId),s=null,r=0,i.size||this.inspection?.setDragging(!1))};for(const c of["pointerdown","pointermove","pointerup","pointercancel"])e.addEventListener(c,o,{capture:!0,signal:this.abort.signal})}updateInputHelp(e){const t=e==="touch"?"touch":"mouse";if(this.inputMode===t)return;this.inputMode=t;const i=this.querySelector("[data-planet-help]"),s=this.querySelector(".planet-canvas");i?.dataset&&(i.textContent=this.projectionMode==="globe"?i.dataset[t+"Text"]:this.zh?"拖动平移 · 滚轮或双指缩放":"Drag to pan · Scroll or pinch to zoom");const r=this.projectionMode==="globe"?s?.dataset?.[t+"Label"]:this.zh?"交互式平面世界地图。拖动平移、滚轮或双指缩放，Home 复位。":"Interactive projected world map. Drag to pan, scroll or pinch to zoom, Home to reset.";r&&s.setAttribute("aria-label",r)}installEvents(e){const t={signal:this.abort.signal};this.updateInputHelp("mouse");const i=u=>{u.pointerType&&this.updateInputHelp(u.pointerType)};for(const u of["pointerdown","pointermove"])e.addEventListener(u,i,{...t,capture:!0,passive:!0});e.addEventListener("keydown",()=>this.updateInputHelp("mouse"),t);const s=new Rc,r=new yi(new F,1),a=new be,o=new li(new F(0,0,1),0),c=new F;e.addEventListener("wheel",u=>{const d=e.getBoundingClientRect();if(!d.width||!d.height){u.stopPropagation();return}a.set((u.clientX-d.left)/d.width*2-1,1-(u.clientY-d.top)/d.height*2);const f=this.projectionMode!=="globe",g=f?this.flatCamera:this.camera;g.updateMatrixWorld(),s.setFromCamera(a,g),f?(!s.ray.intersectPlane(o,c)||!Yl(this.projectionMode,c.x,c.y))&&u.stopPropagation():s.ray.intersectsSphere(r)||u.stopPropagation()},{...t,capture:!0,passive:!0}),this.querySelectorAll("[data-overlay-toggle]").forEach(u=>u.addEventListener("change",()=>{const d=u.dataset.overlayToggle;if(!this.supportsOverlays()||d===this.layer){this.syncLayerControls();return}this.overlayEnabled[d]=u.checked,this.syncLayerControls(),this.appearance?this.updateOverlays():this.startInitialization()},t)),this.querySelector("[data-overlay-opacity]")?.addEventListener("input",u=>{this.overlayOpacity=Number(u.target.value)/100,this.querySelector("[data-overlay-opacity-value]").textContent=u.target.value+"%",this.syncOverlayOpacity(),this.syncLoadedOverlayVisibility(),this.invalidate()},t),this.slider=this.querySelector("[data-time]"),this.slider.addEventListener("input",()=>{this.month=Number(this.slider.value),this.playAnchor=null,this.updateClimatePhase()},t),this.querySelector("[data-speed]").addEventListener("change",u=>{this.speed=Number(u.target.value),this.playAnchor=null,this.schedulePlayback()},t),this.querySelectorAll("[data-action]").forEach(u=>u.addEventListener("click",()=>{const d=u.dataset.action;(d==="in"||d==="out")&&this.zoom(d==="in"?.82:1.22),d==="reset"&&this.resetView(),d==="play"&&(this.playing=!this.playing,this.playAnchor=null,this.schedulePlayback()),d==="fullscreen"&&(document.fullscreenElement?document.exitFullscreen():this.requestFullscreen?.())?.catch(()=>{this.status.textContent=this.zh?"当前浏览器未开启全屏。":"Fullscreen is unavailable in this browser."})},t));let l=null;e.addEventListener("contextmenu",u=>u.preventDefault(),t),e.addEventListener("pointerdown",u=>{this.projectionMode!=="globe"||u.button!==2||this.layer!=="surface"||(u.preventDefault(),e.setPointerCapture(u.pointerId),l={id:u.pointerId,x:u.clientX,y:u.clientY,startX:u.clientX,startY:u.clientY,moved:!1},this.inspection.setDragging(!0))},t),e.addEventListener("pointermove",u=>{if(!l||u.pointerId!==l.id)return;const d=u.clientX-l.x,f=u.clientY-l.y;l.moved||=Math.hypot(u.clientX-l.startX,u.clientY-l.startY)>3,l.moved&&(this.appearance.rotateLight(d/e.clientWidth*Math.PI*2,f/e.clientHeight*Math.PI),this.invalidate()),l.x=u.clientX,l.y=u.clientY},t);const h=u=>{!l||u.pointerId!==l.id||(l=null,e.hasPointerCapture(u.pointerId)&&e.releasePointerCapture(u.pointerId),this.inspection.setDragging(!1))};e.addEventListener("pointerup",h,t),e.addEventListener("pointercancel",h,t),e.addEventListener("keydown",u=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","=","-","Home"].includes(u.key)){if(u.preventDefault(),this.projectionMode!=="globe"){const f=.15/this.flatCamera.zoom;u.key==="ArrowLeft"&&(this.flatCamera.position.x-=f),u.key==="ArrowRight"&&(this.flatCamera.position.x+=f),u.key==="ArrowUp"&&(this.flatCamera.position.y+=f),u.key==="ArrowDown"&&(this.flatCamera.position.y-=f),(u.key==="+"||u.key==="=")&&this.zoom(.82),u.key==="-"&&this.zoom(1.22),u.key==="Home"&&this.resetView(),this.flatControls.target.set(this.flatCamera.position.x,this.flatCamera.position.y,0),this.flatControls.update(),this.invalidate();return}u.key==="ArrowLeft"&&(this.globe.rotation.y-=.12),u.key==="ArrowRight"&&(this.globe.rotation.y+=.12),u.key==="ArrowUp"&&(this.globe.rotation.x=Math.max(-1.4,this.globe.rotation.x-.12)),u.key==="ArrowDown"&&(this.globe.rotation.x=Math.min(1.4,this.globe.rotation.x+.12)),(u.key==="+"||u.key==="=")&&this.zoom(.82),u.key==="-"&&this.zoom(1.22),u.key==="Home"&&this.resetView(),this.invalidate()}},t),document.addEventListener("visibilitychange",()=>{this.schedulePlayback(),this.invalidate()},t),this.renderer.domElement.addEventListener("webglcontextlost",u=>{u.preventDefault(),this.playing=!1,this.schedulePlayback(),this.classList.remove("ready"),this.status.textContent=this.zh?"交互预览已暂停，可查看下方原始渲染图。":"Interactive preview paused. The original renders remain available below."},t)}zoom(e){if(this.projectionMode!=="globe"){this.flatCamera.zoom=_t.clamp(this.flatCamera.zoom/e,1,14),this.flatCamera.updateProjectionMatrix(),this.flatControls.update(),this.invalidate();return}const t=_t.clamp(this.camera.position.length()*e,this.controls.minDistance,this.controls.maxDistance);this.camera.position.setLength(t),this.controls.update(),this.upgradeSurface(),this.invalidate()}resetView(){if(this.projectionMode!=="globe"){this.flatCamera.zoom=1,this.flatCamera.position.set(0,0,5),this.flatControls.target.set(0,0,0),this.flatCamera.updateProjectionMatrix(),this.flatControls.update(),this.invalidate();return}this.controls.reset(),this.appearance?.resetLight(),this.camera.position.setLength(this.fittedDistance||3.7),this.globe.rotation.set(0,-Math.PI/2,0),this.controls.update(),this.invalidate()}async upgradeSurface(){if(this.layer==="surface"&&!(!this.levels||this.upgrading||this.camera.position.length()>2.6||this.surfaceLevel===this.levels.length-1)){this.upgrading=!0;try{const e=this.levels.length-1,t=await this.texture(this.levels[e].url),i=this.surfaceMaterial.map;this.surfaceMaterial.map=t,this.surfaceLevel=e,this.release(i),this.flatSurfaceMaterial&&(this.flatSurfaceMaterial.map=t,this.flatSurfaceMaterial.needsUpdate=!0),this.invalidate()}catch(e){e.name!=="AbortError"&&console.warn("High-resolution surface:",e)}finally{this.upgrading=!1}}}async buildVectorOffMainThread(e,t,i=0,s=.9){if(typeof Worker>"u")return B0(e,{interval:i,opacity:s});const r=new Worker(new URL("/_astro/planet-contour-worker-gkk2QToc.js",import.meta.url),{type:"module"});try{const a=await new Promise((h,u)=>{const d=()=>u(new DOMException("Aborted","AbortError"));t.addEventListener("abort",d,{once:!0}),r.onmessage=f=>{t.removeEventListener("abort",d),f.data.error?u(new Error(f.data.error)):h(f.data.positions)},r.onerror=f=>{t.removeEventListener("abort",d),u(new Error(f.message||"Contour worker error"))},r.postMessage({buffer:e,interval:i},[e])});if(t.aborted)throw new DOMException("Aborted","AbortError");const o=new pt;o.setAttribute("position",new Vt(new Float32Array(a),3)),o.boundingSphere=new yi(new F,1.003);const c=new Ms({color:15265266,transparent:!0,opacity:s,depthWrite:!1,toneMapped:!1}),l=new _s(o,c);return l.renderOrder=2,l.visible=!1,l}finally{r.terminate()}}async loadLiveContours(){if(this.liveContours)return this.liveContours;if(!this.liveContourPromise){const t=this.abort.signal,i=new AbortController,s=()=>i.abort();this.liveContourAbort=i,t.addEventListener("abort",s,{once:!0}),this.liveContourPromise=(async()=>{const r=this.renderer.getContext();if(r.getParameter(r.MAX_ARRAY_TEXTURE_LAYERS)<zt.columns*zt.rows)throw Error("Elevation texture exceeds GPU array limit");const{createLiveContours:a}=await Hh(async()=>{const{createLiveContours:c}=await import("./planet-contours-live.Di2ovCHe.js");return{createLiveContours:c}},__vite__mapDeps([0,1,2])),o=await a({metadata:zt,assets:this.assets,signal:i.signal,onProgress:(c,l)=>{!t.aborted&&!i.signal.aborted&&this.layer==="contours"&&this.setProgress(12+c/l*76,this.zh?"正在准备实时等高线…":"Preparing live contours…")}});if(t.aborted||i.signal.aborted||this.disposed)throw o.dispose(),new DOMException("Disposed","AbortError");return this.liveContours=o,this.liveContourMesh=new at(this.geometry,o.material),this.liveContourMesh.scale.setScalar(1.0025),this.liveContourMesh.renderOrder=2,this.liveContourMesh.visible=!1,this.globe.add(this.liveContourMesh),this.syncOverlayOpacity(),o})().finally(()=>{t.removeEventListener("abort",s),this.liveContourAbort===i&&(this.liveContourAbort=null)})}const e=this.liveContourPromise;try{return await e}catch(t){throw this.liveContourPromise===e&&(this.liveContourPromise=null),t}}syncContourControls(){const e=this.contourInterval||600;for(const i of["[data-contour-interval]","[data-contour-value]"]){const s=this.querySelector(i);s&&(s.value=String(i==="[data-contour-interval]"?Math.max(50,e):e))}if(!(this.layer==="contours"||this.overlayActive("contours"))||e>=240){this.denseContourNoticeShown=!1;return}this.denseContourNoticeShown||(this.denseContourNoticeShown=!0,this.showNotice(this.zh?"间距低于240米，等高线较密，低性能设备可能卡顿。":"Spacing below 240 m creates dense contours and may slow lower-powered devices."))}async setContourInterval(e){if(!Number.isFinite(e)){this.syncContourControls();return}const t=Math.max(1,Math.min(1200,Math.round(e)));if(t<50&&t!==this.contourInterval&&!window.confirm(this.zh?"间距低于50米，等高线极密，可能导致页面卡死。是否继续？":"Spacing below 50 m creates extremely dense contours and may freeze the page. Continue?")){this.syncContourControls();return}this.contourInterval=t,this.syncContourControls(),this.liveContours&&(this.liveContours.material.uniforms.uInterval.value=t),this.invalidate()}async vectorLayer(e){if(["contours","seabed"].includes(e))throw Error("Contours use live elevation rendering");if(!this.vectorPromises.has(e)){const i=this.abort.signal;this.vectorPromises.set(e,(async()=>{const s=new URL(this.manifest.vectors[e],this.assets),r=String(s).endsWith(".bin.gz")?await this.buildVectorOffMainThread(await bs(s,i),i):Dh(await this.json(s));if(i.aborted||this.disposed)throw r.geometry.dispose(),r.material.dispose(),new DOMException("Disposed","AbortError");return this.vectorLayers.set(e,r),this.globe.add(r),r})())}const t=this.vectorPromises.get(e);try{return await t}catch(i){throw this.vectorPromises.get(e)===t&&this.vectorPromises.delete(e),i}}async rasterLayer(e){const t=this.abort.signal;this.rasterPromises.has(e)||this.rasterPromises.set(e,(async()=>{const s=this.manifest.hydrology?.[e];if(s){const l=new AbortController,h=()=>l.abort();this.hydrologyAbort=l,t.addEventListener("abort",h,{once:!0});try{const u=await p_(s,{texture:d=>this.texture(d,!0,l.signal),release:this.release.bind(this),signal:l.signal,assets:this.assets});if(t.aborted||this.disposed)throw u.dispose(),new DOMException("Disposed","AbortError");return this.rasterLayers.set(e,u),this.globe.add(u),u}finally{t.removeEventListener("abort",h),this.hydrologyAbort===l&&(this.hydrologyAbort=null)}}if(e==="classification"){const l=`climate/${V_.vector_file}`;this.layer==="classification"&&this.setProgress(24,this.zh?"正在加载气候类型图层…":"Loading climate zones…");const h=await L0(new URL(l,this.assets),{signal:t});if(t.aborted||this.disposed)throw h.dispose(),new DOMException("Disposed","AbortError");const u=h.material;return u.userData.vectorLayer=h,this.climateOverlay.add(h.group),this.climateOverlayMaterial=u,this.rasterLayers.set(e,u),u}if(e==="geography"||e==="landsea"){const l=new _i({map:await this.texture(this.manifest.geography),toneMapped:!1});if(t.aborted||this.disposed)throw l.dispose(),new DOMException("Disposed","AbortError");return this.rasterLayers.set(e,l),l}const r=this.manifest.landmask;this.landmaskPromise||=T0(new URL(r.url,this.assets),r.width,r.height,t).then(l=>{if(t.aborted||this.disposed)throw l.dispose(),new DOMException("Disposed","AbortError");return this.textures.add(l),l});const a=this.landmaskPromise;let o;try{o=await a}catch(l){throw this.landmaskPromise===a&&(this.landmaskPromise=null),l}let c;if(c=R0(o,[{value:0,color:"#000000"},{value:1,color:"#ffffff"}],null,this.renderer?.capabilities?.maxTextureSize||4096),t.aborted||this.disposed)throw c.dispose(),new DOMException("Disposed","AbortError");return this.rasterLayers.set(e,c),c})());const i=this.rasterPromises.get(e);try{return await i}catch(s){throw this.rasterPromises.get(e)===i&&this.rasterPromises.delete(e),s}}updateClimatePhase(){this.slider.value=String(this.month);const e=Math.floor(this.month)+1;this.slider.setAttribute("aria-valuetext",this.zh?`模型月 ${e}`:`Model month ${e}`),this.querySelector("[data-month-value]").value=`${e} / 12`,this.climateRuntime?.setPhase(this.layer,this.month),this.invalidate(),this.inspection?.refresh()}async climatePlayback(){const e=this.abort.signal;this.climatePromise||=S0(this.climate,this.assets,e).then(i=>{if(e.aborted||this.disposed)throw i.dispose(),new DOMException("Disposed","AbortError");return i});const t=this.climatePromise;try{return this.climateRuntime=await t,this.climateRuntime}catch(i){throw this.climatePromise===t&&(this.climatePromise=null),i}}supportsOverlays(){return["surface","landsea","temperature","precipitation","plates","contours","classification","rivers"].includes(this.layer)}overlayActive(e){return this.supportsOverlays()&&e!==this.layer&&!!this.overlayEnabled[e]}syncLayerControls(){const e=this.supportsOverlays();for(const o of this.querySelectorAll("[data-layer]"))o.setAttribute("aria-pressed",String(o.dataset.layer===this.layer));const t=this.querySelector("[data-overlay-options]");t&&(t.hidden=!(e||this.layer==="contours"));for(const o of this.querySelectorAll("[data-overlay-toggle]")){const c=o.closest(".planet-overlay-checkbox"),l=o.dataset.overlayToggle;c&&(c.hidden=!e||l===this.layer),o.checked=this.overlayActive(l),o.disabled=!e||l===this.layer}const i=Object.keys(this.overlayEnabled).some(o=>this.overlayActive(o)),s=this.querySelector("[data-opacity-control]");s&&(s.hidden=!i);const r=this.querySelector("[data-contour-control]"),a=this.layer==="contours"||this.overlayActive("contours");r&&(r.hidden=!a),this.syncContourControls()}showNotice(e){const t=this.querySelector("[data-planet-notice]");t&&(clearTimeout(this.noticeTimer),t.textContent=e,t.hidden=!1,t.classList.remove("is-floating"),t.offsetWidth,t.classList.add("is-floating"),this.noticeTimer=setTimeout(()=>{t.hidden=!0,t.classList.remove("is-floating")},3e3))}releaseUnusedHydrology(){if(!(this.layer==="rivers"||this.overlayEnabled.rivers)){this.flatHydroMeshes&&(this.flatGroup?.clear(),this.flatHydroMeshes.forEach(e=>e.geometry.dispose()),this.flatHydroMeshes=null),this.hydrologyAbort?.abort();for(const[e,t]of this.rasterLayers)t.isGroup&&(this.globe.remove(t),t.dispose(),this.rasterLayers.delete(e));for(const e of Object.keys(this.manifest.hydrology||{}))this.rasterPromises.delete(e);this.hydrologyActive=null}}async loadPlateHighlight(){const e=this.abort.signal;this.plateRegionsPromise||=L_(new URL("vectors/plate-regions.json.gz",this.assets),{signal:e}).then(i=>{if(this.disposed||e.aborted)throw i.dispose(),new DOMException("Disposed","AbortError");return this.plateRegions=i,this.globe.add(i.group),i});const t=this.plateRegionsPromise;try{return await t}catch(i){throw this.plateRegionsPromise===t&&(this.plateRegionsPromise=null),i}}selectMapAtPoint(e){let t=0;if(e&&this.layer==="plates"&&this.plateRegions){const{u:s,v:r}=Number.isFinite(e.u)&&Number.isFinite(e.v)?e:Xl(e);t=this.plateRegions.pick((s-.5)*360,(r-.5)*180)}this.plateRegions&&this.plateHover!==t&&(this.plateHover=t,this.plateRegions.material.uniforms.uSelected.value=t,this.invalidate());const i=this.selectClimateAtPoint(e);return t?zt.plates[t]?.[this.zh?"zh":"en"]:i}selectClimateAtPoint(e){if(!e||!(this.layer==="classification"||this.supportsOverlays()&&this.overlayEnabled.classification))return this.setClimateHover(0),null;const t=this.rasterLayers.get("classification"),i=t?.userData?.indexSource||t?.uniforms?.uValues?.value?.image;if(!i?.data)return this.setClimateHover(0),null;const{u:s,v:r}=Number.isFinite(e.u)&&Number.isFinite(e.v)?e:Xl(e),a=X_(i.data,i.width,i.height,s,r),o=q_.classes.find(c=>c.value===a);return this.setClimateHover(o?a:0),o?`${o.name[this.zh?"zh":"en"]} (${o.code})`:null}setClimateHover(e){if(this.climateHover===e)return;const t=this.climateHover;this.climateHover=e,this.climateHoverPrevious=t,this.climateHoverFrame&&cancelAnimationFrame(this.climateHoverFrame),this.climateHoverFrame=0;const i=[this.rasterLayers.get("classification"),this.climateOverlayMaterial].filter(Boolean),s=o=>{for(const c of i){const l=c?.uniforms;l?.uSelected&&(l.uSelected.value=e,l.uPrevious.value=t,l.uTransition.value=o)}this.invalidate()};if(!i.length)return;if(typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches){s(1);return}let r=0;const a=o=>{r||(r=o);const c=Math.min(1,(o-r)/180),l=c*c*(3-2*c);s(l),this.climateHoverFrame=c<1?requestAnimationFrame(a):0};this.climateHoverFrame=requestAnimationFrame(a)}async showMapLabels(e,t){if(["plates","classification"].includes(e)){if(!this.mapLabels.has(e)){if(await document.fonts.ready,t!==this.sequence||this.disposed)return;const i=e==="classification",s=N_(R_[i?"climate":"plates"],{metadata:zt,zh:this.zh,fontFamily:getComputedStyle(this).fontFamily,climate:i});this.mapLabels.set(e,s),this.globe.add(s)}this.mapLabels.get(e).visible=!0}}async setLayer(e){const t=++this.sequence;this.layer=e,e!=="contours"&&!this.overlayActive("contours")&&(this.liveContourAbort?.abort(),this.liveContourPromise=null);for(const l of this.mapLabels.values())l.visible=!1;if(++this.overlaySequence,this.climateOverlay&&(this.climateOverlay.visible=!1),this.liveContourMesh&&(this.liveContourMesh.visible=!1),this.releaseUnusedHydrology(),this.appearance){const l={plates:["正在加载板块边界…","Loading plate boundaries…"],contours:["正在加载等高线…","Loading contours…"],classification:["正在加载气候类型图层…","Loading climate zones…"],rivers:["正在加载河流与湖泊…","Loading rivers and lakes…"],landsea:["正在加载海陆高程图…","Loading land and sea elevations…"],temperature:["正在加载气温数据…","Loading temperature data…"],precipitation:["正在加载降水数据…","Loading precipitation data…"]};(e==="contours"?!this.liveContours:e==="plates"?!this.vectorLayers.has("plates"):e==="temperature"||e==="precipitation"?!this.climateRuntime:e==="surface"?!1:!this.rasterLayers.has(e))&&l[e]&&this.setProgress(12,l[e][this.zh?0:1])}const i=e==="temperature"||e==="precipitation";this.querySelector("[data-planet-help]").hidden=this.projectionMode==="globe"&&e!=="surface";const s=this.querySelector(".planet-time");s.classList.toggle("is-inactive",!i),s.setAttribute("aria-hidden",String(!i)),this.querySelector("[data-speed]").disabled=!i,this.syncLayerControls(),this.querySelector("[data-time]").disabled=!i,this.querySelector('[data-action="play"]').disabled=!i,clearTimeout(this.timer),this.playing=i,this.playAnchor=null,this.selectMapAtPoint(null),this.plateRegions&&(this.plateRegions.group.visible=!1),this.appearance.setVisible(e==="surface"&&this.projectionMode==="globe"),this.scene.background=e==="surface"&&this.projectionMode==="globe"?this.appearance.sky:null,this.grid.visible=e!=="surface",this.overlay.visible=!1,this.occluder.visible=e!=="surface";const r=getComputedStyle(document.documentElement).getPropertyValue("--gray-dark").trim();this.grid.material.color.set(`rgb(${r})`);const a=new Ne(getComputedStyle(document.documentElement).getPropertyValue("--surface").trim()||"#ffffff").convertLinearToSRGB(),o=new Ne(`rgb(${r})`).convertLinearToSRGB();this.occluder.material.color.copy(a.lerp(o,.025).convertSRGBToLinear()),e==="classification"&&this.occluder.material.color.set(2962491);const c=this.manifest.hydrology?.[e];for(const l of this.vectorLayers.values())l.visible=!1;for(const l of this.rasterLayers.values())l.isGroup&&(l.visible=!1);this.invalidate(),this.projectionMode!=="globe"&&this.updateProjectedScene();try{let l;if(e==="contours"?await this.loadLiveContours():e==="plates"?[l]=await Promise.all([this.vectorLayer(e),this.loadPlateHighlight()]):e==="coastline"&&(l=await this.vectorLayer(e)),["landsea","landmask","classification","geography"].includes(e)||this.manifest.hydrology?.[e]){const[h]=await Promise.all([this.rasterLayer(e),...["landsea","landmask"].includes(e)?[this.vectorLayer("coast-original-land")]:[]]);if(t!==this.sequence||this.disposed)return;h.userData?.climateVector?(this.climateOverlay.visible=!0,h.uniforms.uOpacity.value=1):h.isGroup?(h.visible=!0,this.setHydrologyAppearance(h,!1)):(this.overlay.material=h,this.overlay.visible=!0)}if(i&&await this.climatePlayback(),t!==this.sequence||this.disposed)return;if(this.plateRegions&&(this.plateRegions.group.visible=e==="plates"),this.liveContourMesh&&(this.liveContourMesh.visible=e==="contours"),i&&(this.overlay.material=this.climateRuntime.material,this.overlay.visible=!0,this.updateClimatePhase()),l){const h=getComputedStyle(document.documentElement).getPropertyValue("--gray-dark").trim();l.material.color.set(i?15265266:e==="plates"?6069728:`rgb(${h})`),l.visible=!0}if(!["surface","classification"].includes(e)&&(!c||c.coastline)){const h=c?.coastline||(["landsea","landmask"].includes(e)?"coast-original-land":e==="contours"?"coast-original-contours":"coastline"),u=await this.vectorLayer(h);if(t!==this.sequence||this.disposed)return;u.material.color.set(c?.coastColor||(["contours","plates"].includes(e)?`rgb(${r})`:15265266)),u.visible=!0}if(this.legend(i?this.climate.layers[e]:e==="landsea"?this.manifest.geographyLegend:null),await this.showMapLabels(e,t),t!==this.sequence||this.disposed)return;this.inspection?.refresh(),this.status.textContent="",this.appearance&&t===this.sequence&&this.setProgress(100,""),this.invalidate(),this.schedulePlayback(),this.updateOverlays(),this.projectionMode!=="globe"&&this.updateProjectedScene()}catch(l){t===this.sequence&&this.setProgress(100,""),l.name!=="AbortError"&&(this.playing=!1,this.schedulePlayback(),this.status.textContent=this.zh?"图层未能加载，请重新选择图层。":"This layer could not load. Select the layer to retry.",console.error(l))}}syncProjectionControl(){const e=this.querySelector("[data-projection-mode]");e&&(e.value=this.projectionMode)}setProjection(e){if(!Mo.includes(e)||!this.appearance)return;const t=this.activeProjection!==e;if(this.projectionMode=e,this.activeProjection=e,this.lastFlatOpacityVisible=this.overlayOpacity>0,this.controls.enabled=e==="globe",this.flatControls.enabled=e!=="globe",this.globe.visible=e==="globe",this.flatGroup.visible=e!=="globe",this.appearance.setVisible(e==="globe"&&this.layer==="surface"),this.scene.background=e==="globe"&&this.layer==="surface"?this.appearance.sky:null,t){this.flatAbort.abort(),this.flatAbort=new AbortController,this.clearFlatVectors(),this.flatGroup.clear(),this.flatGeometry?.dispose(),this.flatGeometry=null,this.flatGraticule?.geometry.dispose(),this.flatGraticule?.material.dispose(),this.flatGraticule=null,this.flatHydroMeshes?.forEach(r=>r.geometry.dispose()),this.flatHydroMeshes=null,this.flatClimateMeshes?.forEach(r=>r.geometry.dispose()),this.flatClimateMeshes=null,this.flatPlateMeshes?.forEach(r=>r.geometry.dispose()),this.flatPlateMeshes=null;for(const r of this.flatMapLabels.values())r.forEach(a=>a.geometry.dispose());this.flatMapLabels.clear(),e!=="globe"&&(this.flatGeometry=Fh(e),this.flatGraticule=Y_(e),this.flatCamera.zoom=1,this.flatCamera.position.set(0,0,5),this.flatControls.target.set(0,0,0),this.flatCamera.updateProjectionMatrix(),this.flatControls.update())}this.updateTouchArea(this.querySelector(".planet-canvas"));const i=this.querySelector("[data-planet-help]");i&&(i.hidden=e==="globe"&&this.layer!=="surface");const s=this.inputMode||"mouse";this.inputMode=null,this.updateInputHelp(s),this.syncProjectionControl(),this.inspection?.projectionChanged?.(),this.invalidate(),e!=="globe"&&this.updateProjectedScene()}clearFlatVectors(e=null){++this.flatRevision;for(const[t,i]of this.flatVectorCache||new Map)e&&!e.some(s=>t.includes(`:${s}:`))||(i.geometry.dispose(),this.flatVectorCache.delete(t));for(const t of[...this.flatVectorPromises?.keys()||[]])(!e||e.some(i=>t.includes(`:${i}:`)))&&this.flatVectorPromises.delete(t)}async flatVector(e,t){const i=`${this.projectionMode}:${e}`;if(this.flatVectorCache.has(i))return this.flatVectorCache.get(i);if(!this.flatVectorPromises.has(i)){const s=this.flatAbort.signal,r=this.projectionMode,a=K_(t.geometry.getAttribute("position").array,r,s).then(o=>{if(s.aborted||this.disposed)throw o.dispose(),new DOMException("Aborted","AbortError");const c=new _s(o,t.material);return c.frustumCulled=!1,c.renderOrder=t.renderOrder||2,this.flatVectorCache.set(i,c),c});this.flatVectorPromises.set(i,a),a.finally(()=>{this.flatVectorPromises.get(i)===a&&this.flatVectorPromises.delete(i)}).catch(()=>{})}return this.flatVectorPromises.get(i)}async updateProjectedScene(){if(this.projectionMode==="globe"||!this.flatGroup||!this.flatGeometry||this.disposed)return;const e=++this.flatRevision,t=this.projectionMode,i=this.flatGroup;i.clear();const s=(l,h=0,u=0)=>{const d=new at(this.flatGeometry,l);return d.position.z=h,d.renderOrder=u,i.add(d),d};let r=null;if(this.layer==="surface"?(this.flatSurfaceMaterial.map=this.surfaceMaterial.map,r=this.flatSurfaceMaterial):this.layer==="temperature"||this.layer==="precipitation"?r=this.climateRuntime?.material:this.layer==="classification"?r=this.flatClimateBackgroundMaterial:["landsea","geography","landmask"].includes(this.layer)&&(r=this.rasterLayers.get(this.layer)),(!r||r.isGroup)&&(r=this.flatBackgroundMaterial),s(r,-.04,0),this.flatGraticule&&i.add(this.flatGraticule),this.layer==="classification"||this.supportsOverlays()&&this.overlayEnabled.classification&&this.overlayOpacity>0){const l=this.rasterLayers.get("classification")?.userData?.vectorLayer;if(l){this.flatClimateMeshes||=l.projectedMeshes(t);for(const h of this.flatClimateMeshes)h.position.z=.02,h.renderOrder=h.material===l.outlineMaterial?5:1,i.add(h)}}for(const[l,h]of this.mapLabels)if(h.visible){this.flatMapLabels.has(l)||this.flatMapLabels.set(l,h.projectedMeshes(t));for(const u of this.flatMapLabels.get(l))i.add(u)}if(this.layer==="plates"&&this.plateRegions){this.flatPlateMeshes||=this.plateRegions.projectedMeshes(t);for(const l of this.flatPlateMeshes)l.position.z=.023,l.renderOrder=l.material===this.plateRegions.outlineMaterial?6:2,i.add(l)}const a=this.rasterLayers.get("rivers");if(a?.isGroup&&a.visible){if(!this.flatHydroMeshes){const l=this.manifest.hydrology.rivers;this.flatHydroMeshes=a.userData.vectorHydrology?a.projectedMeshes(t):a.children.map((h,u)=>{const d=J_(t,l,l.tiles[u]);return new at(d,h.material)})}for(const l of this.flatHydroMeshes)l.position.z=.025,l.renderOrder=3,i.add(l)}this.liveContours&&this.liveContourMesh?.visible&&s(this.liveContours.material,.032,2),this.invalidate();const c=[...this.vectorLayers].filter(([,l])=>l.visible).map(async([l,h])=>{const u=await this.flatVector(l,h);e!==this.flatRevision||this.projectionMode!==t||this.disposed||(u.position.z=.035,i.add(u),this.invalidate())});await Promise.allSettled(c)}setHydrologyAppearance(e,t){for(const i of e.children)i.material.opacity=t?this.overlayOpacity:1,i.scale.setScalar(1.0031),i.renderOrder=4}syncOverlayOpacity(){const e=this.overlayOpacity;if(this.liveContours){const s=this.liveContours.material.uniforms;s.uInterval.value=this.contourInterval||600,s.uOpacity.value=this.layer==="contours"?.36:e,s.uSeaFactor.value=this.layer==="contours"?.22/.36:1;const r=getComputedStyle(document.documentElement).getPropertyValue("--gray-dark").trim();s.uColor.value.set("rgb("+r+")").convertLinearToSRGB()}this.climateOverlayMaterial?.uniforms?.uOpacity&&(this.climateOverlayMaterial.uniforms.uOpacity.value=this.layer==="classification"?1:e);const t=this.vectorLayers.get("plates");t&&(t.material.opacity=this.layer==="plates"?.9:e);const i=this.rasterLayers.get("rivers");i?.isGroup&&this.setHydrologyAppearance(i,this.layer!=="rivers"),this.invalidate()}syncLoadedOverlayVisibility(){const e=this.supportsOverlays()&&this.overlayOpacity>0;this.climateOverlay&&this.climateOverlayMaterial&&(this.climateOverlay.visible=this.layer==="classification"||e&&this.overlayEnabled.classification);const t=this.vectorLayers.get("plates");t&&this.layer!=="plates"&&(t.visible=e&&this.overlayActive("plates")),this.liveContourMesh&&(this.liveContourMesh.visible=this.layer==="contours"||e&&this.overlayActive("contours"));const i=this.rasterLayers.get("rivers");if(i?.isGroup&&this.layer!=="rivers"&&(i.visible=e&&!!this.overlayEnabled.rivers),this.projectionMode!=="globe"){const s=this.overlayOpacity>0;this.lastFlatOpacityVisible!==s&&(this.lastFlatOpacityVisible=s,this.updateProjectedScene())}this.invalidate()}async updateOverlays(){if(!this.appearance||this.disposed)return;const e=++this.overlaySequence,t=this.layer,i=this.zh?"正在准备实时等高线…":"Preparing live contours…";this.status.textContent===i&&(this.status.textContent=""),t!=="contours"&&!this.overlayActive("contours")&&(this.liveContourAbort?.abort(),this.liveContourPromise=null);const s=Object.fromEntries(["plates","contours","classification","rivers"].map(l=>[l,this.overlayActive(l)]));this.climateOverlay&&t!=="classification"&&(this.climateOverlay.visible=!1);const r=this.vectorLayers.get("plates");r&&t!=="plates"&&(r.visible=!1);const a=this.rasterLayers.get("rivers");a?.isGroup&&t!=="rivers"&&(a.visible=!1),this.syncOverlayOpacity(),this.invalidate(),this.projectionMode!=="globe"&&this.updateProjectedScene();const o=[];if(s.classification&&o.push((async()=>{const l=await this.rasterLayer("classification");e!==this.overlaySequence||this.disposed||(this.climateOverlayMaterial=l,this.syncOverlayOpacity(),this.climateOverlay.visible=this.overlayOpacity>0,this.invalidate())})()),this.liveContourMesh&&t!=="contours"&&(this.liveContourMesh.visible=!1),s.contours&&o.push((async()=>{this.status.textContent=i,await this.loadLiveContours(),!(e!==this.overlaySequence||this.disposed)&&(this.syncOverlayOpacity(),this.liveContourMesh.visible=this.overlayOpacity>0,this.status.textContent===i&&(this.status.textContent=""),this.invalidate())})()),s.plates&&o.push((async()=>{const l=await this.vectorLayer("plates");e!==this.overlaySequence||this.disposed||(l.material.color.set(6069728),l.scale.setScalar(1.0009),this.syncOverlayOpacity(),l.visible=this.overlayOpacity>0,this.invalidate())})()),s.rivers&&o.push((async()=>{const l=await this.rasterLayer("rivers");e!==this.overlaySequence||this.disposed||(this.syncOverlayOpacity(),l.visible=this.overlayOpacity>0,this.invalidate())})()),!s.rivers&&t!=="rivers"&&this.releaseUnusedHydrology(),!o.length){this.projectionMode!=="globe"&&this.updateProjectedScene();return}const c=await Promise.allSettled(o);if(!(e!==this.overlaySequence||this.disposed)){this.projectionMode!=="globe"&&this.updateProjectedScene();for(const l of c)l.status==="rejected"&&l.reason?.name!=="AbortError"&&(console.warn("Optional 3D map overlay:",l.reason),this.status.textContent=this.zh?"部分叠加层暂时无法加载。":"An optional overlay could not load.")}}legend(e){const t=this.querySelector(".planet-legend");if(t.hidden=!e,!e)return;this.querySelector("[data-legend-title]").textContent=this.layer==="landsea"?this.zh?"海拔 / 水深（米）":"Elevation / depth (ft)":this.layer==="temperature"?this.zh?"近地面气温（°C）":"Near-surface temperature (°F)":this.zh?"降水（毫米/天）":"Precipitation (in/day)";const[i,s]=e.display_limits,r=this.querySelector("[data-legend-zero]");r&&(r.hidden=this.layer!=="temperature"||i>0||s<0,r.hidden||(r.style.left=(0-i)/(s-i)*100+"%",r.dataset.label=this.zh?"0°C":"32°F"));const a=!this.zh&&this.layer==="landsea",o=!this.zh&&this.layer==="temperature",c=!this.zh&&this.layer==="precipitation",l=h=>a?Math.round(h*3.28084).toLocaleString("en-US"):o?(h*9/5+32).toFixed(1):c?(h/25.4).toFixed(2):String(h);this.querySelector("[data-legend-min]").textContent=l(i),this.querySelector("[data-legend-max]").textContent=(e.actual_range[1]>s?"≥ ":"")+l(s),this.querySelector(".planet-legend-ramp").style.background=`linear-gradient(to right,${e.palette.map(h=>`${h.color} ${(h.value-i)/(s-i)*100}%`).join(",")})`}schedulePlayback(){clearTimeout(this.timer);const e=this.querySelector('[data-action="play"]');if(e.textContent=this.playing?this.zh?"暂停":"Pause":this.zh?"播放":"Play",e.setAttribute("aria-label",this.playing?this.zh?"暂停月份播放":"Pause months":this.zh?"播放月份":"Play months"),this.querySelector("[data-month-value]").setAttribute("aria-live",this.playing?"off":"polite"),!this.playing||!this.visible||document.hidden||!this.climateRuntime||!["temperature","precipitation"].includes(this.layer)){this.playAnchor=null;return}this.playAnchor||(this.playAnchor={time:performance.now(),phase:this.month}),this.timer=setTimeout(()=>{this.month=(this.playAnchor.phase+(performance.now()-this.playAnchor.time)/this.climate.playback_duration_ms*12*this.speed)%12,this.updateClimatePhase(),this.schedulePlayback()},30)}invalidate(){this.dirty=!0,!(!this.renderer||!this.visible||document.hidden||this.disposed||this.frame)&&(this.frame=requestAnimationFrame(()=>{if(this.frame=0,this.disposed||!this.visible||document.hidden)return;const e=P_(this.projectionMode==="globe"?Math.max(1,((this.fittedDistance||3.7)-1)/Math.max(.1,this.camera.position.length()-1)):this.flatCamera.zoom);if(this.projectionMode==="globe")for(const t of this.mapLabels.values())t.visible&&t.resize(e);else for(const t of this.flatMapLabels.values())for(const i of t)i.scale.setScalar(e);this.projectionMode==="globe"&&this.layer==="surface"&&this.appearance?this.appearance.render():this.renderer.render(this.scene,this.projectionMode==="globe"?this.camera:this.flatCamera),this.dirty=!1}))}disposeScene(){this.abort?.abort(),this.sequence++,clearTimeout(this.timer),cancelAnimationFrame(this.frame),this.climateHoverFrame&&cancelAnimationFrame(this.climateHoverFrame),this.climateHoverFrame=0,this.frame=0,this.playing=!1,this.playAnchor=null,this.classList.remove("ready"),this.inspection?.dispose(),this.liveContourAbort?.abort(),this.liveContourAbort=null,this.liveContours?.dispose(),this.liveContours=this.liveContourMesh=this.liveContourPromise=null,this.hydrologyAbort?.abort(),this.hydrologyAbort=null,this.hydrologyActive=null,this.rasterLayers?.forEach(e=>e.userData?.vectorLayer?e.userData.vectorLayer.dispose():e.dispose()),this.resize?.disconnect(),this.controls?.dispose(),this.flatControls?.dispose(),this.flatAbort?.abort(),this.clearFlatVectors(),this.flatGroup?.clear(),this.flatGeometry?.dispose(),this.flatGraticule?.geometry.dispose(),this.flatGraticule?.material.dispose(),this.flatGraticule=null,this.flatHydroMeshes?.forEach(e=>e.geometry.dispose()),this.flatSurfaceMaterial?.dispose(),this.flatClimateBackgroundMaterial?.dispose(),this.flatClimateMeshes?.forEach(e=>e.geometry.dispose()),this.flatClimateMeshes=null,this.flatPlateMeshes?.forEach(e=>e.geometry.dispose()),this.flatPlateMeshes=null,this.plateRegions?.dispose(),this.plateRegions=this.plateRegionsPromise=null,this.plateHover=0,this.flatBackgroundMaterial!==this.flatSurfaceMaterial&&this.flatBackgroundMaterial?.dispose(),this.textures?.forEach(e=>e.dispose()),this.textures?.clear(),this.climateTextures?.clear(),this.ktx?.dispose(),this.climateRuntime?.dispose(),this.climateOverlayMaterial=null,this.geometry?.dispose(),this.appearance?.dispose(),this.overlayMaterial?.dispose();for(const e of this.flatMapLabels.values())e.forEach(t=>t.geometry.dispose());this.flatMapLabels.clear(),this.mapLabels?.forEach(e=>e.dispose()),this.mapLabels?.clear(),this.grid?.geometry.dispose(),this.grid?.material.dispose(),this.occluder?.material.dispose(),this.vectorLayers?.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove(),this.interaction?.remove(),this.interaction=null,this.vectorLayers?.clear(),this.vectorPromises?.clear(),this.rasterLayers?.clear(),this.rasterPromises?.clear(),this.renderer=this.appearance=this.scene=this.camera=this.globe=null,this.controls=this.geometry=this.surface=this.surfaceMaterial=null,this.flatControls=this.flatCamera=this.flatGroup=this.flatGeometry=this.flatHydroMeshes=null,this.grid=this.occluder=this.overlay=this.overlayMaterial=this.climateOverlay=null,this.ktx=this.inspection=this.resize=null,this.climateRuntime=this.climatePromise=this.landmaskPromise=null,this.activeProjection=null,this.flatAbort=new AbortController,this.levels=null,this.upgrading=!1,this.fittedDistance=0,this.viewInitialized=!1,this.extraTexturePrefetchStarted=!1,this.extraTexturePrefetchRequested=!1}disconnectedCallback(){clearTimeout(this.offscreenRelease),clearTimeout(this.noticeTimer),this.disposed=!0,this.connectionAbort?.abort(),this.observer?.disconnect(),this.observer=null,this.disposeScene()}}customElements.get("planet-viewer")||customElements.define("planet-viewer",Z_);const eE=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{Ne as C,Sr as D,Fn as G,At as N,Kt as R,Ot as S,Le as U,be as V,Nt as a,bs as f,eE as p};
