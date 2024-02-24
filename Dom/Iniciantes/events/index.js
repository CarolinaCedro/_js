//ADDEVENTLISTENER

/*
* Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que
* certo evento ocorrer neste elemento.
* */

const img = document.querySelector('img');
console.log(img)

img.addEventListener(('click'), (item) => {
    alert("pare de me cutucar")
})

//ATENÇÃO

//CALLBACK
/*
* É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função
* ao invés de passar diretamente uma função anônima
* */


function callbackParametro() {
    alert("pare de me cutucar com callback")
}

const imgWithCallback = document.querySelector('img')
// imgWithCallback.addEventListener("click", callbackParametro) //achei bem esquisito mas tá rs





//EVENT
//O primeiro parâmetro do callback é referente ao evento que ocorreu.

const foto = document.querySelector('img');

function callback(event) {
    console.log(event);
}

// foto.addEventListener('click', callback);

//PROPRIEDADES DO EVENT

const pic = document.querySelector('img');

function executarCallback(event) {
    const currentTarget = event.currentTarget; // this
    const target = event.target; // onde o clique ocorreu
    const type = event.type; // tipo de evento
    console.log(currentTarget, target, type);
}

pic.addEventListener('click', executarCallback);



