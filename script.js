document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  navToggle.classList.toggle('nav__toggle--active', isOpen);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    navToggle.classList.remove('nav__toggle--active');
  });
});

// Animación de aparición al hacer scroll (tarjetas de seguros)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const groups = document.querySelectorAll('.reveal-group');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.card');
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('is-visible'), i * 90);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  groups.forEach(group => observer.observe(group));
} else {
  document.querySelectorAll('.reveal-group .card').forEach(card => card.classList.add('is-visible'));
}
