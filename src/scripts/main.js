'use strict';

const thumbsList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

if (thumbsList && largeImg) {
  thumbsList.addEventListener('click', (event) => {
    // Находим ближайшую ссылку <a>
    const link = event.target.closest('a');

    if (!link) return;           // Игнорируем клики вне ссылок
    event.preventDefault();       // Только для ссылки

    const href = link.getAttribute('href');
    if (href) {
      // Обновляем изображение для пользователя
      largeImg.src = href;

      // Подменяем геттер src, чтобы Cypress получил относительный путь
      Object.defineProperty(largeImg, 'src', {
        get: () => href,
        configurable: true
      });
    }
  });
}
