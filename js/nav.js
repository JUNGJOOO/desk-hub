const isMobileNav = () => window.matchMedia('(max-width: 860px)').matches;

document.querySelectorAll('.nav-group').forEach((group) => {
  const head = group.querySelector('.nav-group-head');
  const toggle = head ? head.querySelector('.nav-toggle') : null;
  if (!head || !toggle) return;

  if (group.querySelector('.is-active')) {
    group.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  head.addEventListener('click', (e) => {
    if (isMobileNav()) return;
    e.preventDefault();
    const isOpen = group.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});
