// Carrusel dinámico
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

// Mostrar slide actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Siguiente slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  document.querySelector(".carousel-container").style.transform = `translateX(-${currentIndex * 100}%)`;
  showSlide(currentIndex);
}

// Slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  document.querySelector(".carousel-container").style.transform = `translateX(-${currentIndex * 100}%)`;
  showSlide(currentIndex);
}

// Event Listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Autoplay (opcional)
setInterval(nextSlide, 5000);
