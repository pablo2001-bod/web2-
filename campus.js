const horario = [
  { dia: "Lunes", clase: "Matemáticas - 8:00 AM" },
  { dia: "Martes", clase: "Física - 10:00 AM" },
  { dia: "Miércoles", clase: "Química - 11:00 AM" },
  { dia: "Jueves", clase: "Historia - 1:00 PM" },
  { dia: "Viernes", clase: "Literatura - 3:00 PM" },
];

const horarioContainer = document.getElementById("horario-container");
horario.forEach((item) => {
  const div = document.createElement("div");
  div.textContent = `${item.dia}: ${item.clase}`;
  horarioContainer.appendChild(div);
});

const biblioteca = [
  { titulo: "Libro 1", categoria: "Matemáticas", enlace: "https://www.utadeo.edu.co/sites/tadeo/files/node/publication/field_attached_file/pdf-_matematicas_basicas-_completo-_09-15.pdf" },
  { titulo: "Libro 2", categoria: "Física", enlace: "https://fisicas.ucm.es/data/cont/media/www/pag-39686/fisica-general-libro-completo.pdf" },
  { titulo: "Libro 3", categoria: "Química", enlace: "https://educacion.gob.ec/wp-content/uploads/downloads/2016/09/librostexto/Texto_quimica_1_BGU.pdf" },
  { titulo: "Libro 4", categoria: "Historia", enlace: "https://www.educacion.gob.ec/wp-content/uploads/downloads/2016/09/librostexto/HISTORIA-1-BGU.pdf" },
];

const bibliotecaContainer = document.getElementById("biblioteca-container");
biblioteca.forEach((recurso) => {
  const div = document.createElement("div");
  div.textContent = `${recurso.titulo} - ${recurso.categoria}`;
  const enlace = document.createElement("a");
  enlace.href = recurso.enlace;
  enlace.textContent = "Ver recurso";
  enlace.style.marginLeft = "10px";
  div.appendChild(enlace);
  bibliotecaContainer.appendChild(div);
});

const notifications = [
  "Nueva tarea subida en Matemáticas",
  "Clase de Física reprogramada",
  "Consulta la convocatoria de becas",
];

const notificationsList = document.getElementById("notifications");
notifications.forEach((notification) => {
  const li = document.createElement("li");
  li.textContent = notification;
  notificationsList.appendChild(li);
});

const chatInput = document.getElementById("chat-input");
const messages = document.getElementById("messages");
document.getElementById("send-btn").addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message) {
    const div = document.createElement("div");
    div.textContent = message;
    messages.appendChild(div);
    chatInput.value = "";
  }
});
