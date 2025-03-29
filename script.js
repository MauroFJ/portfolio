const span = document.querySelector('.span');
const btn = document.querySelector('.btn');

class Slide {
  constructor(slider, next, prev) {
    this.slider = document.querySelector(slider);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slides = this.slider.querySelectorAll('.allProj');
    this.totalSlides = this.slides.length;
    this.currentIndex = 1;
  }

  centerSlide() {
    const selectedSlide = this.slides[this.currentIndex];
    const slideCenter =
      selectedSlide.offsetLeft + selectedSlide.offsetWidth / 2;
    const viewportCenter = window.innerWidth / 2;
    const offset = viewportCenter - slideCenter;

    this.slider.style.transform = `translate3d(${offset}px, 0, 0)`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.centerSlide();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.centerSlide();
  }

  onClick() {
    this.next.addEventListener('click', this.nextSlide.bind(this));
    this.prev.addEventListener('click', this.prevSlide.bind(this));
  }
}

const slide = new Slide('.image', '.next', '.prev');
slide.centerSlide();
slide.onClick();

function showText() {
  const textElement = this.previousElementSibling;
  textElement.classList.toggle('active');

  if (textElement.classList.contains('active')) {
    this.innerHTML = 'Ver menos...';
  } else {
    this.innerHTML = 'Ver mais...';
  }
}

function showPreview() {
  const preview = document.querySelector('iframe');

  preview.classList.add('active');
  this.classList.add('remove');
}

span.addEventListener('click', showText);
btn.addEventListener('click', showPreview);
