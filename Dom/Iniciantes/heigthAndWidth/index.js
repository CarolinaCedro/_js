//HEIGHT E WIDTH

/*
* Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
* */

const section = document.querySelector('.menu');

const HP = section.clientHeight; // height + padding
console.log(section.clientHeight)
const HPB = section.offsetHeight; // height + padding + border
console.log(HPB)
const HT = section.scrollHeight; // height total, mesmo dentro de scroll
console.log(HT)


//OFFSETTOP E OFFSETLEFT

const position = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
console.log(position.offsetTop);

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
console.log(position.offsetLeft)


//GETBOUNDINGCLIENTRECT()

/*
*Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
* */

const animals = document.querySelector('.animais');

const rect = animals.getBoundingClientRect();
console.log("height do elemento: ", rect.height)
console.log("width do elemento: ", rect.width)
console.log("distância entre o topo do elemento e o scroll: ", rect.top)


//WINDOW

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if (window.innerWidth < 600) {
    console.log("tamanho da tela: ", window.innerWidth)
    console.log('Tela menor que 600px');
}


