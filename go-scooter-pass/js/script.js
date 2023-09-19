const SLIDE_WIDTH = 344;
const slides = document.querySelector('.slider__slides');
const slideList = document.querySelectorAll('.slider__slide');
const buttonPrev = document.querySelector('.slider__button--prev');
const buttonNext = document.querySelector('.slider__button--next');

let currentSlide = '1';

const setSlideActive = () => {
  slides.style.transform = `translate3d(${- (currentSlide - 1) * SLIDE_WIDTH}px, 0, 0)`;
};

const buttonPrevClickHandler = () => {
  currentSlide--;
  buttonPrev.toggleAttribute('disabled', currentSlide <= 1);
  buttonNext.removeAttribute('disabled');
  setSlideActive();
};

const buttonNextClickHandler = () => {
  currentSlide++;
  buttonNext.toggleAttribute('disabled', currentSlide >= slideList.length);
  buttonPrev.removeAttribute('disabled');
  setSlideActive();
};

const init = () => {
  buttonPrev.addEventListener('click', buttonPrevClickHandler);
  buttonNext.addEventListener('click', buttonNextClickHandler);
};

init();