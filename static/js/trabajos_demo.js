document.addEventListener('DOMContentLoaded', function () {
  // 1. Filtrado de proyectos
  const filterButtons = document.querySelectorAll('.jm-filter-btn');
  const projectCards = document.querySelectorAll('.jm-project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-jm-filter');

      // Actualizar botón activo
      filterButtons.forEach(btn => btn.classList.remove('jm-active'));
      button.classList.add('jm-active');

      // Mostrar/ocultar proyectos según el filtro
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-jm-category') === filter) {
          card.classList.add('jm-active');
        } else {
          card.classList.remove('jm-active');
        }
      });
    });
  });

  // 2. Configuración del Modal
  const modal = document.getElementById('detailsModal');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalContent = document.getElementById('modalProjectContent');
  const detailButtons = document.querySelectorAll('.jm-details-btn');
  const closeModalButtons = document.querySelectorAll('.jm-close-modal, .jm-modal-close-btn');

  // 3. Manejo de los botones de detalles
  detailButtons.forEach(button => {
    button.addEventListener('click', () => {
      const title = button.getAttribute('data-title');
      const tech = button.getAttribute('data-tech');
      const features = button.getAttribute('data-features');
      const challenges = button.getAttribute('data-challenges');
      const mediaType = button.getAttribute('data-media-type');
      const mediaSrc = button.getAttribute('data-media-src');

      modalTitle.textContent = title;

      // 4. Construir contenido del modal según el tipo de medio
      if (mediaType === 'video') {
        // Solo agregar imagen al proyecto 6 (Análisis)
        if (title === 'Análisis de Datos') {
          modalContent.innerHTML = `
            <div class="video-container">
              <iframe src="${mediaSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
                       <div class="jm-modal-section">
              <h3>Descripción del Dashboard</h3>
            <div class="jm-modal-image">
              <img src="../static/imagenes/proyecto 1.png" alt="Dashboard de terremotos" style="max-width: 100%; margin: 1rem 0; border-radius: 8px;">
            </div>
            <p>
                Desarrollé una aplicación web tipo CRUD (Crear, Leer, Actualizar, Eliminar) utilizando <strong>Python</strong> y el microframework <strong>Flask</strong>. Este proyecto permite gestionar registros tanto de <strong>usuarios</strong> como de <strong>empleados</strong>, incluyendo funcionalidades como autenticación, validación de datos y generación de <strong>reportes dinámicos</strong>.
              </p>
              <p>
                El sistema está enfocado en la <strong>organización eficiente de información</strong>, con una interfaz simple y funcional. Utilicé plantillas HTML con Jinja2, integré Bootstrap para el diseño responsivo y MySQL como base de datos.
              </p>
            </div>
          `;
        } else {
          modalContent.innerHTML = `
            <div class="video-container">
              <iframe src="${mediaSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="jm-modal-section">
              <h3>Descripción del Proyecto</h3>
              <p>
                Desarrollé una aplicación web tipo CRUD (Crear, Leer, Actualizar, Eliminar) utilizando <strong>Python</strong> y el microframework <strong>Flask</strong>. Este proyecto permite gestionar registros tanto de <strong>usuarios</strong> como de <strong>empleados</strong>, incluyendo funcionalidades como autenticación, validación de datos y generación de <strong>reportes dinámicos</strong>.
              </p>
              <p>
                El sistema está enfocado en la <strong>organización eficiente de información</strong>, con una interfaz simple y funcional. Utilicé plantillas HTML con Jinja2, integré Bootstrap para el diseño responsivo y MySQL como base de datos.
              </p>
            </div>
          `;
        }
      } else if (mediaType === 'pdf') {
        modalContent.innerHTML = `
          <iframe class="pdf-viewer" src="${mediaSrc}"></iframe>
          <div class="jm-modal-section">
            <h3>Importancia:</h3>
            <p>Con una sólida trayectoria en diseño gráfico, he desarrollado un enfoque centrado en la experiencia del usuario y la comunicación visual efectiva. Esta formación ha sido clave para potenciar mis proyectos en desarrollo de software y análisis de datos, permitiéndome crear interfaces intuitivas, visualizaciones claras y soluciones que combinan funcionalidad con diseño estético.</p>
          </div>
        `;
      } else if (mediaType === 'tableau') {
        // Proyecto 7 con imagen de internet
        modalContent.innerHTML = `
          <div class="tableau-container">
            <div class='tableauPlaceholder' id='viz${Date.now()}' style='position: relative'>
              <noscript>
                <a href='#'>
                  <img alt='Dashboard' src='https://public.tableau.com/static/images/${mediaSrc}/1_rss.png' style='border: none' />
                </a>
              </noscript>
              <object class='tableauViz' style='display:none;'>
                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='' />
                <param name='name' value='${mediaSrc}' />
                <param name='tabs' value='no' />
                <param name='toolbar' value='yes' />
                <param name='static_image' value='https://public.tableau.com/static/images/${mediaSrc}/1.png' />
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
                <param name='language' value='es-ES' />
              </object>
            </div>
          </div>
          <div class="jm-modal-section">
            <h3>Descripción del Dashboard</h3>
            <div class="jm-modal-image">
              <img src="../static/imagenes/proyecto 2.png" alt="Dashboard de terremotos" style="max-width: 100%; margin: 1rem 0; border-radius: 8px;">
            </div>
          </div>
        `;

        setTimeout(() => {
          const divElement = document.querySelector('.tableau-container .tableauPlaceholder');
          const vizElement = divElement.getElementsByTagName('object')[0];

          if (divElement.offsetWidth > 800) {
            vizElement.style.minWidth = '420px';
            vizElement.style.maxWidth = '650px';
            vizElement.style.width = '100%';
            vizElement.style.minHeight = '587px';
            vizElement.style.maxHeight = '887px';
            vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
          } else if (divElement.offsetWidth > 500) {
            vizElement.style.minWidth = '420px';
            vizElement.style.maxWidth = '650px';
            vizElement.style.width = '100%';
            vizElement.style.minHeight = '587px';
            vizElement.style.maxHeight = '887px';
            vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
          } else {
            vizElement.style.width = '100%';
            vizElement.style.height = '1127px';
          }

          const scriptElement = document.createElement('script');
          scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
          vizElement.parentNode.insertBefore(scriptElement, vizElement);
        }, 100);
      } else {
        modalContent.innerHTML = `
          <div class="jm-modal-section">
            <h3>Tecnologías Utilizadas</h3>
            <ul class="jm-tech-list">
              ${tech.split(', ').map(item => `<li><span class="jm-tech-icon">🔹</span> ${item}</li>`).join('')}
            </ul>
          </div>
          <div class="jm-modal-section">
            <h3>Características Principales</h3>
            <ul class="jm-features-list">
              ${features.split(', ').map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="jm-modal-section">
            <h3>Desafíos y Soluciones</h3>
            <p>${challenges}</p>
          </div>
        `;
      }

      // Mostrar modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // 5. Cerrar modal
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Cerrar al hacer clic fuera del modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});
