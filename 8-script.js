// Hamburger logic for ≤480px only
(function () {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.site-nav');

  if (!btn || !nav) return;

  // Helper: update ARIA + class
  function setOpen(isOpen) {
    btn.classList.toggle('open', isOpen);
    nav.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  }

  // Toggle on click
  btn.addEventListener('click', () => {
    const isOpen = !nav.classList.contains('open');
    setOpen(isOpen);
  });

  // Close menu when clicking a nav link (nice UX)
  nav.addEventListener('click', (e) => {
    if (e.target.matches('a')) setOpen(false);
  });

  // If the screen resizes above 480px, ensure menu state is reset
  window.addEventListener('resize', () => {
    const w = window.innerWidth || document.documentElement.clientWidth;
    if (w > 480) setOpen(false);
  });
})()