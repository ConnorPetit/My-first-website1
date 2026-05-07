const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;

/* Shows Current Slide */

function showSlide(index){

  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
}

/* Next button */

nextBtn.addEventListener('click', () => {

  currentSlide = (currentSlide + 1) % slides.length;

  showSlide(currentSlide);
});

/* Prev button */

prevBtn.addEventListener('click', () => {

  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  showSlide(currentSlide);
});

/*5 seconds */

setInterval(() => {

  currentSlide = (currentSlide + 1) % slides.length;

  showSlide(currentSlide);

}, 5000);
