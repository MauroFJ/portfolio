const span = document.querySelector('.span');

function showText() {
  const textElement = this.previousElementSibling;
  textElement.classList.toggle('active');

  if (textElement.classList.contains('active')) {
    this.innerHTML = 'Ver menos...';
  } else {
    this.innerHTML = 'Ver mais...';
  }
}

span.addEventListener('click', showText);
