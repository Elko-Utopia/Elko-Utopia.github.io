// Classify image orientation for portfolio/article featured images
(function () {
  const SELECTOR = '.md-content.pswp-featured img:not(.hero-img):not(.no-zoom)';

  function updateImageState(img) {
    if (!(img instanceof HTMLImageElement)) return;
    
    // Skip specific containers
    if (img.closest('.inline-portfolio-card') || img.closest('.md-masonry-wrapper')) return;

    // Handle Cursor and Title
    if (!img.complete || !img.naturalWidth || !img.naturalHeight) {
      img.style.cursor = 'wait';
      img.title = 'Loading...';
      img.addEventListener('load', () => updateImageState(img), { once: true });
    } else {
      img.style.cursor = 'pointer';
      img.title = 'Click to enlarge';
      
      // Handle Orientation
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      img.classList.remove('landscape', 'portrait', 'square');
      if (aspectRatio > 1.1) img.classList.add('landscape');
      else if (aspectRatio < 0.9) img.classList.add('portrait');
      else img.classList.add('square');
    }
  }

  let observer = null;

  function init() {
    if (observer) { observer.disconnect(); observer = null; }
    const imgs = document.querySelectorAll(SELECTOR);
    imgs.forEach(updateImageState);
    const root = document.querySelector('.md-content.pswp-featured');
    if (root && typeof MutationObserver !== 'undefined') {
      observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (node instanceof Element) {
              if (node.matches && node.matches(SELECTOR)) updateImageState(node);
              if (node.querySelectorAll) node.querySelectorAll(SELECTOR).forEach(updateImageState);
            }
          });
        });
      });
      observer.observe(root, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('astro:page-load', init);
  document.addEventListener('astro:before-swap', () => {
    if (observer) { observer.disconnect(); observer = null; }
  });
})();
