// 站內導覽使用短促的減速曲線；使用者操作時立即交還捲動控制權。
const navigationLinks = document.querySelectorAll('.header nav a[href^="#"]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let scrollAnimation = null;

function cancelNavigationScroll() {
  if (scrollAnimation !== null) {
    cancelAnimationFrame(scrollAnimation);
    scrollAnimation = null;
  }
}

for (const eventName of ['wheel', 'touchstart', 'keydown']) {
  window.addEventListener(eventName, cancelNavigationScroll, { passive: true });
}

navigationLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = link.getAttribute('href');
    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    event.preventDefault();
    cancelNavigationScroll();
    if (location.hash !== hash) history.pushState(null, '', hash);

    const start = window.scrollY;
    const destination = Math.max(0, target.getBoundingClientRect().top + start - 32);
    const distance = destination - start;
    if (reduceMotion.matches || Math.abs(distance) < 2) {
      window.scrollTo({ top: destination, behavior: 'instant' });
      return;
    }

    const duration = Math.min(850, Math.max(550, Math.abs(distance) * 0.4));
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      window.scrollTo({ top: start + distance * eased, behavior: 'instant' });
      if (progress < 1) scrollAnimation = requestAnimationFrame(step);
      else scrollAnimation = null;
    };
    scrollAnimation = requestAnimationFrame(step);
  });
});

// 捲動時標示目前所在的區塊（aria-current），讓導覽知道讀者讀到哪裡。
const sectionLinks = new Map();
navigationLinks.forEach((link) => {
  const target = document.getElementById(link.getAttribute('href').slice(1));
  if (target) sectionLinks.set(target, link);
});
if ('IntersectionObserver' in window && sectionLinks.size) {
  const visible = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => (entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target)));
    const current = [...sectionLinks.keys()].find((section) => visible.has(section));
    sectionLinks.forEach((link, section) => {
      if (section === current) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sectionLinks.forEach((_, section) => observer.observe(section));
}
