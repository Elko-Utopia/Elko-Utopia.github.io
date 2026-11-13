import{D as I,R as P,U,N as F,S as T,C as R,V as x,a as D,G as L,f as M}from"./planet-viewer.Di5QJQUe.js";import"./PortfolioPost.astro_astro_type_script_index_0_lang.sLTCwYpS.js";import"./planet-projection-math.Dyzstxiz.js";function z(i,l,a,e){if(i.length!==e*e*4||l.length<(a+1)*e*e*2)throw Error("Incomplete elevation tile");const o=a*e*e*2;for(let t=0;t<e*e;t++)l[o+t*2]=i[t*4],l[o+t*2+1]=i[t*4+1]}async function V({metadata:i,assets:l,signal:a,onProgress:e}){a.throwIfAborted();const{width:o,height:t,tile_size:n,columns:c,rows:h}=i,s=c*h;if(o!==c*n||t!==h*n||s>256)throw Error("Invalid elevation grid");const p=new Uint8Array(o*t*2),v=new AbortController,d=()=>v.abort();a.addEventListener("abort",d,{once:!0});let f=0,y=0;const m=async()=>{for(;f<s;){const u=f++,S=u%c,b=Math.floor(u/c);a.throwIfAborted();const C=new Uint8Array(await M(new URL(i.tile_directory+"/"+S+"-"+b+".bin.gz",l),v.signal));z(C,p,u,n),a.throwIfAborted(),e?.(++y,s),await new Promise(A=>setTimeout(A,0))}},w=[m(),m()];try{await Promise.all(w)}catch(u){throw v.abort(),await Promise.allSettled(w),u}finally{a.removeEventListener("abort",d)}a.throwIfAborted();const r=new I(p,n,n,s);r.format=P,r.type=U,r.minFilter=r.magFilter=F,r.generateMipmaps=!1,r.unpackAlignment=1,r.needsUpdate=!0;const g=new T({glslVersion:L,transparent:!0,depthWrite:!1,side:D,toneMapped:!1,uniforms:{uHeight:{value:r},uSize:{value:new x(o,t)},uTileSize:{value:n},uColumns:{value:c},uRange:{value:new x(i.height_min,i.height_span)},uInterval:{value:600},uOpacity:{value:.36},uSeaFactor:{value:.22/.36},uColor:{value:new R(.8,.8,.8)}},vertexShader:"out vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`precision highp float;precision highp sampler2DArray;
      in vec2 vUv;out vec4 outColor;
      uniform sampler2DArray uHeight;uniform vec2 uSize,uRange;uniform int uTileSize,uColumns;
      uniform float uInterval,uOpacity,uSeaFactor;uniform vec3 uColor;
      float heightPixel(ivec2 p){
        int w=int(uSize.x);p.x=(p.x%w+w)%w;p.y=clamp(p.y,0,int(uSize.y)-1);
        ivec2 tile=p/uTileSize,local=p-tile*uTileSize;int layer=tile.y*uColumns+tile.x;
        vec2 encoded=floor(texelFetch(uHeight,ivec3(local,layer),0).rg*255.+.5);
        return uRange.x+(encoded.x*256.+encoded.y)/65535.*uRange.y;
      }
      float terrain(vec2 uv){
        vec2 p=vec2(uv.x,1.-uv.y)*uSize-.5;ivec2 a=ivec2(floor(p));vec2 t=fract(p);
        return mix(mix(heightPixel(a),heightPixel(a+ivec2(1,0)),t.x),mix(heightPixel(a+ivec2(0,1)),heightPixel(a+ivec2(1,1)),t.x),t.y);
      }
      void main(){
        float h=terrain(vUv),level=h/uInterval,change=fwidth(level),nearest=round(level);
        if(abs(nearest*uInterval)<.5||change<.0000001)discard;
        float distance=abs(level-nearest),alpha=(1.-smoothstep(change*.15,change*.85,distance))*min(1.,.6/change);
        alpha*=uOpacity*(h<0.?uSeaFactor:1.);if(alpha<.005)discard;outColor=vec4(uColor,alpha);
      }`});return{material:g,texture:r,dispose(){r.dispose(),g.dispose()}}}export{V as createLiveContours,z as packHeightTile};
