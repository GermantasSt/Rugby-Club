const $ = searchItem => document.querySelector(searchItem);
const burger = $('.mobile-menu');
const burgerMenu = $('.nav-menu');
const meniu = $('.menu');


burger.addEventListener('click', () => {
  // burger.classList.toggle('active');
  // burgerMenu.classList.toggle('active');
  meniu.classList.toggle('active');
});
