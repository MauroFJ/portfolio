const span = document.querySelector('.span');

function showText() {
  this.nextElementSibling.classList.toggle('active');
  
  if (this.classList.contains('active')) {
    span.innerHTML = 'Ver menos...'
  } else {
    span.innerHTML = 'Ver mais...'
  }
}

span.addEventListener('click', showText);