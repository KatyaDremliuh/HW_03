const prev = document.getElementById("btn-prev");
const next = document.getElementById("btn-next");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

const activeSlide = (n) => {
  for (const slide of slides) {
    slide.classList.remove("active");
  }

  slides[n].classList.add("active");
};

const activeDot = (n) => {
  for (const dot of dots) {
    dot.classList.remove("active");
  }

  dots[n].classList.add("active");
};

const prepareCurrentSlide = (idx) => {
  activeSlide(idx);
  activeDot(idx);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
    stopAutoplay();
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

let autoplayInterval = null;
function startAutoplay() {
  if (!autoplayInterval) {
    autoplayInterval = setInterval(nextSlide, 1000);
  }
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = null;
}

startAutoplay();
