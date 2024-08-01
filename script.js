document.addEventListener('DOMContentLoaded', () => {
  const darkModeElement = document.getElementById('dark-mode');
  const bodyElement = document.body;

  darkModeElement.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
  });
});
