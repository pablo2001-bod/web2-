function showInscripcionForm(courseName) {
  document.getElementById('inscripcion-container').style.display = 'block';
  
  document.getElementById('selected-course').innerText = `Inscribirse en: ${courseName}`;
}

document.getElementById('inscripcion-form').addEventListener('submit', function(event) {
  event.preventDefault();  
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;


  alert(`¡Gracias por tu inscripción, ${name}! Te hemos enviado un correo a ${email}.`);

  document.getElementById('inscripcion-form').reset();

  document.getElementById('inscripcion-container').style.display = 'none';
});
