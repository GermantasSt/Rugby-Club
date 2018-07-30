const $ = searchItem => document.querySelector(searchItem);
const burger = $('.mobile-menu');
const burgerMenu = $('.nav-menu');
const meniu = $('.menu');

const imageArray = [];

burger.addEventListener('click', () => {
  // burger.classList.toggle('active');
  // burgerMenu.classList.toggle('active');
  meniu.classList.toggle('active');
});

function removeImage() {
  const lightBoxElement = document.querySelector('.visibleImage');
  document.body.removeChild(lightBoxElement);
}

function drawLightBox(index) {
  const lightBoxElement = document.createElement('div');
  const lightImage = document.createElement('img');
  lightImage.src = imageArray[index];
  lightBoxElement.appendChild(lightImage);
  document.body.appendChild(lightBoxElement);
  lightBoxElement.classList.add('visibleImage');
  lightBoxElement.addEventListener('click', () => removeImage());
}

function lightbox() {
  const selectedImages = document.querySelectorAll('.gallery img');
  selectedImages.forEach((image, index) => {
    image.addEventListener('click', () => drawLightBox(index));
    imageArray.push(image.src);
  });

}
window.addEventListener('load', () => {
  lightbox();
});
