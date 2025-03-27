const span = document.querySelector('.span');
const btn = document.querySelector('.btn');

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

span.addEventListener('click', showText);
btn.addEventListener('click', showPreview);

