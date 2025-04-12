const body = document.body;
const toggleButtons = [
  document.getElementById('toggle-mode'),
  document.getElementById('mobile-toggle-mode')
];

// Cargar modo desde localStorage
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
  body.classList.add('dark-mode');
  toggleButtons.forEach(btn => btn.innerHTML = '<i class="fas fa-sun"></i>');
} else {
  toggleButtons.forEach(btn => btn.innerHTML = '<i class="fas fa-moon"></i>');
}

// Evento para cambiar modo
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');

    // Actualiza íconos
    toggleButtons.forEach(btn => {
      btn.innerHTML = isDarkMode
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    });

    // Guarda preferencia
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  });
});

// Función para manejar botones activos
const desktopButtons = document.querySelectorAll('.menu-btn');
const mobileButtons = document.querySelectorAll('.mobile-menu a');

function setActiveButton(buttons, clickedBtn) {
  buttons.forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');
}

// Asignar evento a botones de escritorio
desktopButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    setActiveButton(desktopButtons, btn);
    localStorage.setItem('activeDesktopButton', index);
  });
});

// Asignar evento a botones móviles
mobileButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    setActiveButton(mobileButtons, btn);
    localStorage.setItem('activeMobileButton', index);
  });
});

// Restaurar botón activo desde localStorage
window.addEventListener('DOMContentLoaded', () => {
  const activeDesktop = localStorage.getItem('activeDesktopButton');
  const activeMobile = localStorage.getItem('activeMobileButton');

  if (activeDesktop !== null) {
    desktopButtons.forEach(btn => btn.classList.remove('active'));
    desktopButtons[activeDesktop]?.classList.add('active');
  } else {
    desktopButtons[0]?.classList.add('active'); // por defecto
  }

  if (activeMobile !== null) {
    mobileButtons.forEach(btn => btn.classList.remove('active'));
    mobileButtons[activeMobile]?.classList.add('active');
  } else {
    mobileButtons[0]?.classList.add('active'); // por defecto
  }
});

