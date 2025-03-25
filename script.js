const span = document.querySelector('.span');

function showText() {
  this.previousElementSibling.classList.toggle('active');
  
  if (this.classList.contains('active')) {
    this.innerHTML = 'Ver mais...'
  } else {
    this.innerHTML = 'Ver menos...'
  }
}

span.addEventListener('click', showText);