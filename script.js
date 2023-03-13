const sliderImages = document.querySelector(".slider-images");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");

let count = 0;

sliderPrev.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 2;
  }
  sliderImages.style.transform = `translateX(-${count * 100}%)`;
});

sliderNext.addEventListener("click", () => {
  count++;
  if (count > 2) {
    count = 0;
  }
  sliderImages.style.transform = `translateX(-${count * 100}%)`;
});
