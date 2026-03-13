// ANIMACOES DE SCROLL
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 80);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.animate-in').forEach(el => scrollObserver.observe(el));

// MENU HAMBURGUER
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const menuClose   = document.getElementById('menuClose');
const backdrop    = document.getElementById('menuBackdrop');

function openMenu() {
  mobileMenu.classList.add('open');
  hamburger.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);

document.querySelectorAll('[data-close]').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});