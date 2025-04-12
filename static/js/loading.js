// Obtenemos los elementos donde se muestra el porcentaje y la barra de progreso
let progressBar = document.getElementById('progress');
let percentageText = document.getElementById('loading-percentage');

// Lista de recursos que simularán ser cargados (puedes agregar más recursos aquí)
let resources = ['script.js', 'style.css']; // Lista de recursos
let resourcesLoaded = 0; // Contador de recursos cargados

// Función para actualizar la barra de progreso
function updateProgress(progress) {
  progressBar.style.width = progress + '%'; // Actualiza la barra
  percentageText.textContent = progress + '%'; // Actualiza el porcentaje
}

// Función para cargar recursos (simulada)
function loadResource(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onprogress = function (event) {
      if (event.lengthComputable) {
        let progress = (event.loaded / event.total) * 100;
        updateProgress(progress); // Actualiza la barra con el progreso real
      }
    };
    xhr.onload = function () {
      resolve();
    };
    xhr.onerror = function () {
      reject();
    };
    xhr.send();
  });
}

// Función para cargar todos los recursos y actualizar el progreso
async function loadResources() {
  // Activamos el modo oscuro mientras se cargan los recursos
  document.body.classList.add('dark-mode'); // Activa el modo oscuro en el body

  for (let i = 0; i < resources.length; i++) {
    await loadResource(resources[i]); // Carga cada recurso
    resourcesLoaded++;
    let progress = Math.round((resourcesLoaded / resources.length) * 100);
    updateProgress(progress); // Actualiza la barra después de cada recurso
  }

  // Cuando todos los recursos estén cargados, redirige a home.html
  setTimeout(() => {
  
    window.location.href = "/home"; // Redirige a la página de inicio
  }, 500);

     }
     

// Iniciamos la carga de los recursos
loadResources();
