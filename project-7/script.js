const slider = document.querySelector(".slider");
const sliderControls = document.querySelector(".slider-controls");
const sliderPrevOneBtn = document.querySelector(".slider-control--prev-one");
const sliderPrevThreeBtn = document.querySelector(
  ".slider-control--prev-three"
);
const sliderNextOneBtn = document.querySelector(".slider-control--next-one");
const sliderNextThreeBtn = document.querySelector(
  ".slider-control--next-three"
);

const slideWidth = slider.offsetWidth;
const totalSlides = slider.children.length;

let currentSlide = 0;

function updateSliderPosition() {
  slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function moveSlider(direction, count) {
  if (direction === "prev") {
    currentSlide = Math.max(currentSlide - count, 0);
  } else {
    currentSlide = Math.min(currentSlide + count, totalSlides - 1);
  }

  updateSliderPosition();
}

function init() {
  updateSliderPosition();

  sliderPrevOneBtn.addEventListener("click", () => moveSlider("prev", 1));
  sliderPrevThreeBtn.addEventListener("click", () => moveSlider("prev", 3));
  sliderNextOneBtn.addEventListener("click", () => moveSlider("next", 1));
  sliderNextThreeBtn.addEventListener("click", () => moveSlider("next", 3));
}

init();
