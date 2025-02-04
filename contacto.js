const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    formMessage.style.color = "green";
    formMessage.textContent = "¡Gracias por contactarnos! Responderemos pronto.";
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "Por favor, completa todos los campos.";
  }

  contactForm.reset();
});
