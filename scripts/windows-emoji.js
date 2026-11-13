// Fixed Windows glyph artwork keeps the same appearance on every platform.
const directory=new URL('../assets/ui/emoji/windows/',import.meta.url);
export function emojiKey(text){return text.includes('\uFE0E')?'':text.replaceAll('\uFE0F','');}

export function replaceEmojiText(root,manifest){
  if(!root||!globalThis.Intl?.Segmenter)return;
  const segmenter=new Intl.Segmenter('en',{granularity:'grapheme'});
  const exclude='script,style,pre,code,textarea,input,svg,[contenteditable]:not([contenteditable="false"])';
  const nodes=[];
  if(root.nodeType===3)nodes.push(root);
  else {const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);while(walker.nextNode())nodes.push(walker.currentNode);}
  for(const node of nodes){
    if(!node.parentElement||node.parentElement.closest(exclude))continue;
    if(!/\p{Extended_Pictographic}/u.test(node.data))continue;
    const parts=[...segmenter.segment(node.data)];
    if(!parts.some(p=>manifest[emojiKey(p.segment)]))continue;
    const fragment=document.createDocumentFragment();let text='';
    for(const {segment}of parts){
      const file=manifest[emojiKey(segment)];
      if(!file){text+=segment;continue;}
      if(text){fragment.append(text);text='';}
      const img=document.createElement('img');img.className='windows-emoji no-zoom';img.src=new URL(file,directory).href;
      if(emojiKey(segment)==='🛰')img.classList.add('site-logo-image');
      img.alt=emojiKey(segment)==='🛰'?'':segment;img.width=img.height=20;img.draggable=false;img.dataset.preserveResolution='true';fragment.append(img);
    }
    if(text)fragment.append(text);node.replaceWith(fragment);
  }
}

if(typeof document!=='undefined'){
  fetch(new URL('manifest.json',directory)).then(response=>{if(!response.ok)throw Error('Emoji assets '+response.status);return response.json();}).then(manifest=>{
    const apply=()=>replaceEmojiText(document.body,manifest);
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
    const observer=new MutationObserver(records=>{
      for(const record of records)if(record.type==='characterData')replaceEmojiText(record.target,manifest);
      else for(const node of record.addedNodes)if(node.nodeType===1||node.nodeType===3)replaceEmojiText(node,manifest);
    });
    observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
    document.addEventListener('astro:page-load',apply);
  }).catch(error=>console.warn('Windows emoji:',error));
}
