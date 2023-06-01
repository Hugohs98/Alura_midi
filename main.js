function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();console.log('Elemento não encontrado');
    } else {
        console.log('Elemento não encontrado');
        }
    }

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
        
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (e) {
        if (e.code == 'Space' || e.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
