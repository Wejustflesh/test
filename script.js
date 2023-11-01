const menuButton = document.querySelector('.menu-button');
const menuContent = document.querySelector('.menu-content');

menuButton.addEventListener('click', () => {
  menuContent.style.transform = 'scale(1)';
  menuContent.style.opacity = 1;
});
