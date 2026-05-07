const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;

/* SHOW CURRENT SLIDE */

function showSlide(index){

  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
}

/* NEXT BUTTON */

nextBtn.addEventListener('click', () => {

  currentSlide = (currentSlide + 1) % slides.length;

  showSlide(currentSlide);
});

/* PREVIOUS BUTTON */

prevBtn.addEventListener('click', () => {

  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  showSlide(currentSlide);
});

/* AUTO SLIDE EVERY 5 SECONDS */

setInterval(() => {

  currentSlide = (currentSlide + 1) % slides.length;

  showSlide(currentSlide);

}, 5000);
