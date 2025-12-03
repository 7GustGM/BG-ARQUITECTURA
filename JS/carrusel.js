// === Función general para iniciar un carrusel ===
function iniciarCarrusel(claseContenedor, claseImagenes) {
  const contenedor = document.querySelector(claseContenedor);
  const carrusel = document.querySelector(claseImagenes);

  if (!carrusel || !contenedor) {
    console.warn(`Faltan elementos para inicializar el carrusel: ${claseImagenes}`);
    return;
  }

  const imagenes = carrusel.querySelectorAll("img");
  const prevBtn = contenedor.querySelector('.prev');
  const nextBtn = contenedor.querySelector('.next');

  if (imagenes.length === 0 || !prevBtn || !nextBtn) {
    console.warn(`Faltan imágenes o botones en: ${claseImagenes}`);
    return;
  }

  let index = 0;

  function mostrarImagen() {
    carrusel.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % imagenes.length;
    mostrarImagen();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
  });

  setInterval(() => {
    index = (index + 1) % imagenes.length;
    mostrarImagen();
  }, 5000);

  mostrarImagen();
}

// === Iniciar carruseles ===
iniciarCarrusel('.carrusel', '.carrusel-imagenes');
iniciarCarrusel('.carrusel-DiseñoI', '.carruselI-imagenes');
