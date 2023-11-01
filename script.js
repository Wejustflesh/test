// Получаем кнопку меню и меню-контент
const menuButton = document.querySelector('.menu-button');
const menuContent = document.querySelector('.menu-content');

// Добавляем обработчик клика по кнопке меню
menuButton.addEventListener('click', () => {
  // По клику меняем стили меню-контента или добавляем/удаляем классы
  if (menuContent.style.display === 'block') {
    menuContent.style.display = 'none';
  } else {
    menuContent.style.display = 'block';
  }
});
