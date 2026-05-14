let currentIndex = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots span");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function changeSlide(step) {
  currentIndex += step;
  if (currentIndex >= slides.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  showSlide(currentIndex);
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

function autoSlide() {
  changeSlide(1);
  setTimeout(autoSlide, 5000); // change every 5 seconds
}

// Initialize
showSlide(currentIndex);
autoSlide();
