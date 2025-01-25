// Datos de facultades y carreras
const faculties = [
  {
    name: "Facultad de Ingeniería",
    careers: [
      { name: "Ingeniería Civil", description: "Estudia el diseño, construcción y mantenimiento de infraestructuras como puentes, edificios y carreteras." },
      { name: "Ingeniería Mecánica", description: "Aprende sobre diseño y desarrollo de sistemas mecánicos y maquinaria." },
      { name: "Ingeniería Electrónica", description: "Especialízate en circuitos, sistemas electrónicos y telecomunicaciones." },
      { name: "Ingeniería de Sistemas", description: "Domina la programación, desarrollo de software y gestión de sistemas informáticos." },
      { name: "Ingeniería Industrial", description: "Optimiza procesos y recursos en el ámbito empresarial e industrial." },
    ],
  },
  {
    name: "Facultad de Ciencias",
    careers: [
      { name: "Biología", description: "Explora el estudio de los seres vivos y sus ecosistemas." },
      { name: "Física", description: "Descubre las leyes fundamentales del universo y sus aplicaciones tecnológicas." },
      { name: "Matemáticas", description: "Desarrolla habilidades analíticas para resolver problemas complejos." },
      { name: "Química", description: "Estudia la composición y transformación de la materia." },
      { name: "Ciencias Ambientales", description: "Analiza y propone soluciones a problemas ambientales globales." },
    ],
  },
  {
    name: "Facultad de Humanidades",
    careers: [
      { name: "Psicología", description: "Comprende el comportamiento humano y sus procesos mentales." },
      { name: "Sociología", description: "Estudia la sociedad y las interacciones entre los individuos." },
      { name: "Historia", description: "Analiza eventos pasados y su impacto en el presente." },
      { name: "Filosofía", description: "Reflexiona sobre cuestiones fundamentales de la existencia y el conocimiento." },
      { name: "Trabajo Social", description: "Interviene y mejora las condiciones sociales de comunidades vulnerables." },
    ],
  },
  {
    name: "Facultad de Arte y Diseño",
    careers: [
      { name: "Diseño Gráfico", description: "Crea soluciones visuales para la comunicación." },
      { name: "Bellas Artes", description: "Expresa tu creatividad a través de la pintura, escultura y otras artes." },
      { name: "Diseño de Modas", description: "Diseña ropa y accesorios con impacto en el mercado." },
      { name: "Fotografía", description: "Domina la técnica y el arte de capturar imágenes." },
      { name: "Animación Digital", description: "Crea mundos virtuales y animaciones para cine y videojuegos." },
    ],
  },
];

// Contenedor de facultades
const facultiesContainer = document.querySelector(".faculties-container");

// Elementos del modal
const modal = document.getElementById("career-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.getElementById("close-modal");

// Generar HTML dinámico para las facultades y carreras
faculties.forEach(faculty => {
  const facultyCard = document.createElement("div");
  facultyCard.classList.add("faculty-card");

  const facultyTitle = document.createElement("h2");
  facultyTitle.textContent = faculty.name;

  const careerList = document.createElement("ul");
  careerList.classList.add("career-list");

  faculty.careers.forEach(career => {
    const careerItem = document.createElement("li");
    careerItem.textContent = career.name;

    const moreInfoBtn = document.createElement("button");
    moreInfoBtn.textContent = "Más información";

    moreInfoBtn.addEventListener("click", () => {
      modalTitle.textContent = career.name;
      modalDescription.textContent = career.description;
      modal.style.display = "flex";
    });

    careerItem.appendChild(moreInfoBtn);
    careerList.appendChild(careerItem);
  });

  facultyCard.appendChild(facultyTitle);
  facultyCard.appendChild(careerList);
  facultiesContainer.appendChild(facultyCard);
});

// Cerrar el modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la ventana
window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
