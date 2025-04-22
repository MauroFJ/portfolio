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

class BlurAndPreview {
  constructor(span, button, slider) {
    this.span = document.querySelector(span);
    this.button = button;
    this.slider = document.querySelector(slider);
    this.slides = this.slider.querySelectorAll('.allProj');
  }

  showText() {
    const textElement = this.span.previousElementSibling;

    textElement.classList.toggle('active');

    if (textElement.classList.contains('active')) {
      this.span.innerHTML = 'Ver menos...';
    } else {
      this.span.innerHTML = 'Ver mais...';
    }
  }

  showPreview(event) {
    event.target.classList.add('remove');

    const clickedSlide = event.target.closest('.allProj');
    clickedSlide.classList.add('active');
  }

  addEvents() {
    this.span.addEventListener('click', this.showText.bind(this));

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
      button.addEventListener('click', this.showPreview.bind(this));
    });
  }
}

const blurAndPreview = new BlurAndPreview('.span', '.btn', '.image');
blurAndPreview.addEvents();

const menu = document.querySelector('.menu-toggle')

menu.addEventListener('click', function(){
  this.nextElementSibling.classList.toggle('active');
})