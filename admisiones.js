// Datos de facultades y carreras
const faculties = [
  {
    name: "Facultad de Ingeniería",
    image: "https://www.epn.edu.ec/wp-content/uploads/2010/09/DSC00421.jpg",
    description: [
      "La Facultad de Ingeniería se especializa en formar profesionales para resolver problemas técnicos complejos.",
      "Con una infraestructura moderna, brindamos las herramientas necesarias para destacar en el sector industrial y tecnológico."
    ],
    youtube: "https://youtu.be/GbT9cuwiBQo",
    careers: [
      {
        name: "Ingeniería Civil",
        description: [
          "La Ingeniería Civil se encarga del diseño y la construcción de infraestructuras como puentes, edificios y carreteras.",
          "Nuestros estudiantes aprenden a aplicar principios de cálculo, física y mecánica para garantizar estructuras seguras y funcionales."
        ]
      },
      {
        name: "Ingeniería Mecánica",
        description: [
          "En Ingeniería Mecánica, te formarás en el diseño y desarrollo de maquinaria avanzada.",
          "Podrás innovar en sectores como la automoción, aeronáutica y manufactura."
        ]
      },
      {
        name: "Ingeniería Electrónica",
        description: [
          "Domina los circuitos electrónicos, la programación de sistemas embebidos y las telecomunicaciones.",
          "Esta carrera tiene un enfoque práctico con proyectos reales de alta tecnología."
        ]
      },
      {
        name: "Ingeniería de Sistemas",
        description: [
          "Adquiere habilidades en programación, diseño de software y gestión de sistemas informáticos.",
          "La carrera está orientada a preparar profesionales que lideren la transformación digital."
        ]
      },
      {
        name: "Ingeniería Industrial",
        description: [
          "La Ingeniería Industrial optimiza procesos y recursos en empresas para incrementar su eficiencia.",
          "Nuestros egresados son líderes en la gestión de operaciones y mejora continua."
        ]
      }
    ]
  },
  
  {
    name: "Facultad de Medicina",
    image: "https://www.uazuay.edu.ec/sites/default/files/public/2024-12/uazuay-facultad-medicina-2023.jpg",
    description: [
      "La Facultad de Medicina se dedica a la formación integral de profesionales de la salud.",
      "Con énfasis en la práctica clínica y la investigación científica, preparamos médicos comprometidos con el bienestar humano."
    ],
    youtube: "https://youtu.be/ttq1pYJ9lEo",
    careers: [
      {
        name: "Medicina General",
        description: [
          "La carrera de Medicina General tiene como objetivo formar profesionales capaces de diagnosticar, prevenir y tratar enfermedades.",
          "Nuestros estudiantes adquieren conocimientos en anatomía, fisiología, farmacología y realizan prácticas clínicas en hospitales asociados."
        ]
      },
      {
        name: "Enfermería",
        description: [
          "Enfermería es una carrera que combina conocimientos científicos con habilidades prácticas para el cuidado de pacientes.",
          "Formamos profesionales comprometidos con la atención integral de la salud, trabajando en hospitales, clínicas y centros comunitarios."
        ]
      },
      {
        name: "Nutrición",
        description: [
          "Esta carrera se centra en la promoción de la salud a través de una alimentación equilibrada y sostenible.",
          "Los estudiantes desarrollan habilidades para crear planes alimenticios y prevenir enfermedades relacionadas con la nutrición."
        ]
      },
      {
        name: "Odontología",
        description: [
          "Odontología se especializa en la prevención, diagnóstico y tratamiento de enfermedades bucales.",
          "Nuestra formación incluye el uso de tecnología avanzada en el cuidado dental y prácticas supervisadas en clínicas odontológicas."
        ]
      },
      {
        name: "Tecnología Médica",
        description: [
          "Forma parte del equipo de salud como tecnólogo médico, dominando técnicas de laboratorio y diagnósticos por imágenes.",
          "Esta carrera es ideal para quienes desean combinar la tecnología con el servicio a la salud humana."
        ]
      }
    ]
  },
  {
    name: "Facultad de Derecho",
    image: "https://www.uazuay.edu.ec/sites/default/files/public/prensa/a5Pequenia.jpg",
    description: [
      "La Facultad de Derecho tiene como misión formar profesionales comprometidos con la justicia y el estado de derecho.",
      "Nuestros programas están orientados al estudio de las leyes, la resolución de conflictos y la defensa de los derechos humanos."
    ],
    youtube: "https://youtu.be/oF6fEpKhRE4",
    careers: [
      {
        name: "Derecho",
        description: [
          "La carrera de Derecho te prepara para ejercer como abogado, fiscal, juez o notario.",
          "Nuestros estudiantes adquieren una sólida base en derecho civil, penal, constitucional y corporativo, con prácticas en bufetes legales y organismos públicos."
        ]
      },
      {
        name: "Ciencias Políticas",
        description: [
          "Esta carrera se centra en el análisis del poder, la gobernanza y las políticas públicas.",
          "Preparamos a los estudiantes para desempeñarse como líderes en el ámbito político, diplomático y social, promoviendo el desarrollo de las comunidades."
        ]
      },
      {
        name: "Relaciones Internacionales",
        description: [
          "Estudia las dinámicas entre naciones, organizaciones internacionales y la resolución de conflictos globales.",
          "La carrera incluye un enfoque práctico en diplomacia, comercio internacional y derechos humanos."
        ]
      },
      {
        name: "Criminología",
        description: [
          "Explora el estudio del comportamiento delictivo y las medidas para prevenirlo.",
          "Nuestros egresados trabajan en áreas como la seguridad pública, investigación criminal y políticas de prevención del crimen."
        ]
      },
      {
        name: "Derecho Ambiental",
        description: [
          "Esta especialidad se enfoca en la protección del medio ambiente a través de normas y políticas legales.",
          "Los estudiantes adquieren conocimientos para abordar conflictos ambientales y promover prácticas sostenibles."
        ]
      }
    ]
  },
  
  {
    name: "Facultad de Ciencias",
    image: "https://www.epn.edu.ec/wp-content/uploads/2014/10/ciencias1.jpg",
    description: [
      "La Facultad de Ciencias ofrece formación en disciplinas que desentrañan los misterios del universo.",
      "Nuestros programas promueven la investigación y el descubrimiento científico en diversas áreas."
    ],
    youtube: "https://youtu.be/OtMp0iAzZWM",
    careers: [
      {
        name: "Biología",
        description: [
          "Explora el fascinante mundo de los seres vivos, su estructura y evolución.",
          "La carrera tiene un enfoque práctico en la investigación científica y conservación ambiental."
        ]
      },
      {
        name: "Física",
        description: [
          "Estudia las leyes fundamentales que rigen el universo y sus aplicaciones prácticas.",
          "Podrás contribuir al desarrollo tecnológico mediante la investigación."
        ]
      },
      {
        name: "Matemáticas",
        description: [
          "Desarrolla habilidades analíticas para resolver problemas complejos en diversos campos.",
          "Esta carrera ofrece una sólida base en álgebra, cálculo y estadística."
        ]
      },
      {
        name: "Química",
        description: [
          "Comprende la composición, propiedades y transformaciones de la materia.",
          "Esta disciplina tiene aplicaciones en la industria farmacéutica, alimentos y materiales."
        ]
      },
      {
        name: "Ciencias Ambientales",
        description: [
          "Aborda los problemas medioambientales desde una perspectiva científica.",
          "La carrera fomenta el desarrollo de soluciones sostenibles para el futuro del planeta."
        ]
      }
    ]
  },
  // Añadir las otras facultades siguiendo el mismo formato...
];

// Contenedor de facultades
const facultiesContainer = document.querySelector(".faculties-container");

// Elementos del modal
const modal = document.getElementById("career-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.getElementById("close-modal");

// Generar HTML dinámico para las facultades y carreras
faculties.forEach((faculty) => {
  const facultyCard = document.createElement("div");
  facultyCard.classList.add("faculty-card");
  facultyCard.innerHTML = `
    <img src="${faculty.image}" alt="${faculty.name}">
    <h2>${faculty.name}</h2>
    <p>${faculty.description[0]}</p>
    <p>${faculty.description[1]}</p>
    <a href="${faculty.youtube}" target="_blank" class="youtube-link">Ver video introductorio</a>
  `;

  const careerList = document.createElement("ul");
  faculty.careers.forEach((career) => {
    const careerItem = document.createElement("li");
    careerItem.innerHTML = `
      ${career.name}
      <button class="more-info-btn">Más información</button>
    `;

    careerItem.querySelector(".more-info-btn").addEventListener("click", () => {
      modalTitle.textContent = career.name;
      modalDescription.innerHTML = career.description.join("<br><br>");
      modal.style.display = "flex";
    });

    careerList.appendChild(careerItem);
  });

  facultyCard.appendChild(careerList);
  facultiesContainer.appendChild(facultyCard);
});

// Cerrar modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de él
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
