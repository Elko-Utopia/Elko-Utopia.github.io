const pages = [
  'http://localhost:5174/Creation_notes/portfolio/HighSchool_Sketch/',',
  'http://localhost:5174/Creation_notes/portfolio/portfolio1-featured/',
  'http://localhost:5174/Creation_notes/blog/welcome/'
];

(async function() {
  for (const u of pages) {
    try {
      const res = await fetch(u, { method: 'GET' });
      if (!res.ok) {
        console.log(`${u} -> PAGE_STATUS ${res.status}`);
        continue;
      }
      const html = await res.text();
      const m = html.match(/src=["']([^"']*?/assets/[^"']*)/);
      if (!m) {
        console.log(`${u} -> NO_ASSET_SRC_FOUND`);
        continue;
      }
      let img = m[1];
      let imgUrl = img;
      if (!/^https?:\/\//i.test(img)) {
        if (img.startsWith('/')) imgUrl = `http://localhost:5174${img}`;
        else imgUrl = u.replace(/\/$/, '') + '/' + img;
      }
      try {
        const h = await fetch(imgUrl, { method: 'HEAD' });
        console.log(`${u} -> ${imgUrl} -> ${h.status} ${h.headers.get('content-type')}`);
      } catch (err) {
        console.log(`${u} -> ${imgUrl} -> IMAGE_FETCH_ERROR ${err.message}`);
      }
    } catch (err) {
      console.log(`${u} -> PAGE_FETCH_ERROR ${err.message}`);
    }
  }
})();
