/** Compact in-page navigation for long course portfolios. */
(function () {
  'use strict';

  let frameRequested = false;

  function courseElements() {
    const sourceNav = document.querySelector('.md-content .course-project-nav');
    if (!sourceNav) return null;
    const links = Array.from(sourceNav.querySelectorAll('a[href^="#"]'));
    const sections = links.map(function (link) {
      const id = decodeURIComponent(link.getAttribute('href').slice(1));
      return document.getElementById(id);
    });
    if (!links.length || sections.some(function (heading) { return !heading; })) return null;
    return { sourceNav, links, sections };
  }

  function buildDock(course) {
    const dock = document.createElement('nav');
    dock.className = 'course-section-dock';
    dock.setAttribute('aria-label', document.documentElement.lang.startsWith('zh') ? '课程项目快速导航' : 'Course project quick navigation');
    const index = document.createElement('a');
    index.className = 'course-section-dock__index';
    index.href = '#projects';
    index.textContent = document.documentElement.lang.startsWith('zh') ? '项目' : 'Projects';
    dock.appendChild(index);

    const shortcuts = document.createElement('div');
    shortcuts.className = 'course-section-dock__shortcuts';
    course.links.forEach(function (source, i) {
      const shortcut = document.createElement('a');
      shortcut.className = 'course-section-dock__link';
      shortcut.href = source.getAttribute('href');
      const label = source.querySelector('.course-project-nav__label');
      const name = label && label.firstChild ? label.firstChild.textContent.trim() : source.textContent.trim();
      const number = source.querySelector('.course-project-nav__number');
      shortcut.textContent = number ? number.textContent.trim() : String(i + 1).padStart(2, '0');
      shortcut.setAttribute('aria-label', name);
      shortcut.title = name;
      shortcuts.appendChild(shortcut);
    });
    dock.appendChild(shortcuts);
    document.body.appendChild(dock);
    return dock;
  }

  function update() {
    const dock = document.querySelector('.course-section-dock');
    const course = courseElements();
    if (!dock || !course) return;

    const threshold = Math.min(160, window.innerHeight * 0.25);
    let activeIndex = 0;
    course.sections.forEach(function (heading, i) {
      if (heading.getBoundingClientRect().top <= threshold) activeIndex = i;
    });

    const shortcuts = dock.querySelectorAll('.course-section-dock__link');
    shortcuts.forEach(function (link, i) {
      if (i === activeIndex) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    course.links.forEach(function (link, i) {
      if (i === activeIndex) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });

    const belowIndex = course.sourceNav.getBoundingClientRect().bottom < 0;
    const insideCourse = course.sourceNav.closest('.md-content').getBoundingClientRect().bottom > threshold;
    dock.classList.toggle('is-visible', belowIndex && insideCourse);
  }

  function queueUpdate() {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(function () {
      frameRequested = false;
      update();
    });
  }

  function init() {
    document.querySelectorAll('.course-section-dock').forEach(function (node) { node.remove(); });
    const course = courseElements();
    if (course) buildDock(course);
    queueUpdate();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  document.addEventListener('astro:page-load', init);
  window.addEventListener('scroll', queueUpdate, { passive: true });
  window.addEventListener('resize', queueUpdate, { passive: true });
  window.addEventListener('hashchange', queueUpdate);
})();
