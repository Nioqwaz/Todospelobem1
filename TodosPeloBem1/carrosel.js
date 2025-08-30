const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
});
const toggleButton = document.getElementById('toggleDarkMode');
    let darkModeAtivo = false;

    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      darkModeAtivo = !darkModeAtivo;
      toggleButton.textContent = darkModeAtivo ? 'Desativar Modo Escuro' : 'Ativar Modo Escuro';
    });