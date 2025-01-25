// campus.js

// Horario dinámico
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


// Biblioteca
const biblioteca = [
  { titulo: "Libro 1", categoria: "Matemáticas", enlace: "#" },
  { titulo: "Libro 2", categoria: "Física", enlace: "#" },
  { titulo: "Libro 3", categoria: "Química", enlace: "#" },
  { titulo: "Libro 4", categoria: "Historia", enlace: "#" },
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

// Notificaciones
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

// Chat en tiempo real
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
