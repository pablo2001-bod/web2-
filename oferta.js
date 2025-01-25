// Función para mostrar el formulario de inscripción con el curso seleccionado
function showInscripcionForm(courseName) {
  // Muestra el contenedor del formulario de inscripción
  document.getElementById('inscripcion-container').style.display = 'block';
  
  // Establece el curso seleccionado en el mensaje
  document.getElementById('selected-course').innerText = `Inscribirse en: ${courseName}`;
}

// Función para manejar el envío del formulario
document.getElementById('inscripcion-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Evita que la página se recargue
  
  // Obtén los datos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Aquí podrías agregar código para enviar los datos al servidor

  // Muestra un mensaje de confirmación
  alert(`¡Gracias por tu inscripción, ${name}! Te hemos enviado un correo a ${email}.`);

  // Limpia el formulario
  document.getElementById('inscripcion-form').reset();

  // Oculta el formulario
  document.getElementById('inscripcion-container').style.display = 'none';
});
