document.addEventListener('DOMContentLoaded', function() {
    // Obtener la URL desde la variable inyectada en el HTML
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementById("closeModal");
    var toggleDarkMode = document.getElementById("toggle-mode");
  
    // Detectar el modo claro/oscuro y aplicar los estilos al modal
    function detectarModo() {
      var isDarkMode = document.body.classList.contains('darkmode'); // Verifica si 'darkmode' está presente en el body
      if (isDarkMode) {
        modal.classList.add("modal-dark");
        toggleDarkMode.classList.add('active');
      } else {
        modal.classList.remove("modal-dark");
        toggleDarkMode.classList.remove('active');
      }
    }
  
    // Ejecutar la función para detectar el modo
    detectarModo();
  
    // Cuando el usuario hace clic en el botón, abre el modal y carga el contenido
    btn.onclick = function() {
      // Abre el modal
      modal.style.display = "block";
  
      // Cargar el contenido de sobre_mi.html usando AJAX
      fetch(sobreMiUrl)  // Usar la variable con la URL correcta
        .then(response => response.text())  // Procesar la respuesta como texto
        .then(data => {
          // Insertar el contenido de sobre_mi.html en el modal
          document.getElementById("modalContent").innerHTML = data;
        })
        .catch(error => {
          console.error('Error cargando la página sobre_mi.html:', error);
        });
  
      // Detectar el modo después de que el modal se muestre
      detectarModo();
    }
  
    // Cuando el usuario hace clic en <span> (x), cierra el modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // Cuando el usuario hace clic fuera del modal, lo cierra
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    // Agregar el evento al botón de toggle para cambiar entre los modos claro/oscuro
    toggleDarkMode.onclick = function() {
      document.body.classList.toggle('darkmode'); // Alterna la clase darkmode en el body
      detectarModo(); // Vuelve a aplicar los estilos correspondientes según el modo
    }
  });
  