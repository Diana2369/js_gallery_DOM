'use strict';

const thumbsList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbsList.addEventListener('click', (event) => {
  event.preventDefault();

  let target = event.target;

  if (target.tagName.toLowerCase() === 'img') {
    target = target.closest('a');
  }

  if (target.tagName.toLowerCase() === 'a') {
    const newSrc = target.getAttribute('href');
    largeImg.setAttribute('src', newSrc);
  }
});
