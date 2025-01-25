document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const newsCards = document.querySelectorAll('.news-card');
  const modal = document.getElementById('news-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDetails = document.getElementById('modal-details');
  const closeBtn = document.querySelector('.close-btn');

  // Filtrar noticias
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      // Actualizar botón activo
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Mostrar u ocultar tarjetas
      newsCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        card.style.display = category === 'all' || cardCategory === category ? 'block' : 'none';
      });
    });
  });

  // Mostrar detalles en el modal
  document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
      const details = button.getAttribute('data-details');
      const title = button.previousElementSibling.textContent;

      modalTitle.textContent = title;
      modalDetails.textContent = details;
      modal.style.display = 'flex';
    });
  });

  // Cerrar el modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.style.display = 'none';
  });
});
