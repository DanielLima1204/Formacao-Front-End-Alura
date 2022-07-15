function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);
  if(elemento != null && elemento.localName === 'audio') {
      elemento.play();
  } else {
      alert('Elemento Inválido');
  }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  console.log(contador)
  
  tecla.onkeydown = function (event) { // função atrelada a um evento tem o objeto "event"
    console.log(event.code)
    if(event.code == 'Space' || event.code == 'Enter') {
      tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}