// === Observador de animaciones ===
// Detecta cuando los elementos con clases animadas (.fade-up, .fade-right, etc.)

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 👈 deja de observar después de animar
    }
  });
}, { threshold: 0.3 }); // un poco más sensible para activar antes

document.querySelectorAll('.fade-up, .fade-right, .fade-left, .fade-down').forEach(el => {
  observer.observe(el);
});