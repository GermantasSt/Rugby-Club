const $ = searchItem => document.querySelector(searchItem);
const burger = $('.mobile-menu');
const burgerMenu = $('.nav-menu');
const meniu = $('.menu');

const imageArray = [];
let activeImage = 0;

burger.addEventListener('click', () => {
  // burger.classList.toggle('active');
  // burgerMenu.classList.toggle('active');
  meniu.classList.toggle('active');
});

function removeImage() {
  const lightBoxElement = document.querySelector('.visibleImage');
  document.body.removeChild(lightBoxElement);
}


function drawLightBox() {
  const lightBoxElement = document.createElement('div');
  const lightImage = document.createElement('img');
  lightImage.src = imageArray[activeImage];
  lightBoxElement.appendChild(lightImage);
  document.body.appendChild(lightBoxElement);
  lightBoxElement.classList.add('visibleImage');
  lightBoxElement.addEventListener('click', () => removeImage());
  const prevArrow = document.createElement('span');
  const nextArrow = document.createElement('span');
  lightBoxElement.appendChild(prevArrow);
  lightBoxElement.appendChild(nextArrow);
  prevArrow.classList.add('prev');
  nextArrow.classList.add('next');
  prevArrow.addEventListener("click", (event) => {
    event.stopPropagation();
    const newIndex = (activeImage <= 0 ? imageArray.length: activeImage) - 1;
    lightImage.src = imageArray[newIndex];
    activeImage = newIndex;
  });
  nextArrow.addEventListener("click", (event) => {
    event.stopPropagation();
    const newIndex = activeImage >= imageArray.length - 1 ? 0: activeImage + 1;
    lightImage.src = imageArray[newIndex];
    activeImage = newIndex;
  });
}

function lightbox() {
  const selectedImages = document.querySelectorAll('.gallery img');
  selectedImages.forEach((image, index) => {
    image.addEventListener('click', () => { 
      activeImage = index;
      drawLightBox();
    });
    imageArray.push(image.src);
  });

}
window.addEventListener('load', () => {
  lightbox();
});
