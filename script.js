const span = document.querySelector('.span');
const btn = document.querySelector('.btn');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const proj2 = document.querySelector('.projeto2');



function showText() {
  const textElement = this.previousElementSibling;
  textElement.classList.toggle('active');

  if (textElement.classList.contains('active')) {
    this.innerHTML = 'Ver menos...';
  } else {
    this.innerHTML = 'Ver mais...';
  }
}

function showPreview () {
  const preview = document.querySelector('iframe');

  preview.classList.add('active');
  this.classList.add('remove')

}

function nextSlide() {
  const slider = document.querySelector('.image');
  const posicao = proj2.getBoundingClientRect();

  const larguraTela = window.innerWidth;
  const margin = (posicao.left) - (larguraTela) / 2 + (posicao.width / 2);;
  console.log(posicao.left)
  console.log(posicao.width)

  slider.style.transform = `translate3d(${-margin}px,0px,0px)`
}

function prevSlide () {
  
}

span.addEventListener('click', showText);
btn.addEventListener('click', showPreview);
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)


