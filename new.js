const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');

let currentSlide = 0;
const slideWidth = slides.offsetWidth;

prevButton.addEventListener('click', function() {
  currentSlide--;
  slides.style.left = -currentSlide * slideWidth + 'px';
});

nextButton.addEventListener('click', function() {
  currentSlide++;
  slides.style.left = -currentSlide * slideWidth + 'px';
});
