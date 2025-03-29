const span = document.querySelector('.span');
const btn = document.querySelector('.btn');
const next = document.querySelector('.next');

const body = document.querySelector('body')

const prev = document.querySelector('.prev');

const proj2 = document.querySelector('.projeto2');

// --------------------------------------------------------------------------
// const projetos = document.querySelectorAll('.projetos')

const projeto1 = document.querySelector('.projeto1')
const projeto2 = document.querySelector('.projeto2')
const projeto3 = document.querySelector('.projeto3')

// const projetosArray = Array.from(document.querySelectorAll('.projetos'));


const projetosArray = [projeto1,projeto2,projeto3]

projetosArray.forEach((item,index) => {

console.log(item,index)
 
})

// --------------------------------------------------------------------------

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

// function nextSlide() {
//   const slider = document.querySelector('.image');
//   const posicao = proj2.getBoundingClientRect();

//   const larguraTela = window.innerWidth;
//   const margin = (posicao.left) - (larguraTela) / 2 + (posicao.width / 2);;

//   slider.style.transform = `translate3d(${-margin}px,0px,0px)`
// }

function nextSlide() {
  const slider = document.querySelector('.image');
  // const posicao = proj2.getBoundingClientRect();
  posicao = projetosArray;
  posicao.forEach((item,index)=> {
    item.getBoundingClientRect();
  })
  console.log(posicao.left)

  const larguraTela = window.innerWidth;
  const margin = (posicao.left) - (larguraTela) / 2 + (posicao.width / 2);;

  slider.style.transform = `translate3d(${-margin}px,0px,0px)`
}

function prevSlide () {
  body.style.background = 'aqua'

  projetosArray[0].classList.toggle('active');

  const slider = document.querySelector('.image');
  slider.style.transform = `translate3d(0px,0px,0px)`

  console.log(projetosArray[0])
  console.log('teste')
}

span.addEventListener('click', showText);
btn.addEventListener('click', showPreview);
next.addEventListener('click', nextSlide);

prev.addEventListener('click', prevSlide)


