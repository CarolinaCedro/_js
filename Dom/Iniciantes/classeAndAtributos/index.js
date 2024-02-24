//Classes e atributos

//ClassList
/*
* Retorna uma lista com classes do elemento. Permite adicionar, remover e verificar se contém.
* */

const item = document.querySelector(".item");

console.log(item)
item.classList.add('teste', 'azul');
console.log(item.classList.contains('teste'))
item.classList.remove('azul')
item.classList.toggle('ativo')


//atributes
/*
* Retorna uma array-like com atributos do elemento
* */

const animais = document.querySelector('.animais')

console.log(animais)
console.log(animais.attributes)
console.log(animais.attributes[0].value)


//getAttribute set Attribute
/*
* Métodos que retornam ou definem de acordo com o atributo selecionado
* */

const img = document.querySelector('img');
console.log(img)
const getImage = img.getAttribute('src'); // valor do src
console.log(getImage)
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
console.log(img)
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

//É muito comum métodos de get e set;


//READ ONLY VS WRITABLE

/*
* Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.
* */

const animaisread = document.querySelector('.animais');
console.log(animaisread)

animaisread.className; // string com o nome das classes
animaisread.className = 'azul'; // substitui completamente a string
animaisread.className += ' vermelho'; // adiciona vermelho à string

animaisread.attributes = 'class="ativo"'; // não funciona, read-only


//Exercicio

// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll('.menu .item')
// console.log(menu)

menu.forEach((item) => {
    item.classList.add('ativo')
})
console.log("aquii o menu", menu)


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const menuRemove = document.querySelectorAll('.menu .item')
console.log(menu)

menuRemove.forEach((item, index) => {
    if (index !== 0) {
        console.log("index: ", index)
        item.classList.remove('ativo')
    }
})

console.log("lista dos itens: ", menu)


// Verifique se as imagens possuem o atributo alt

function imgExercise() {


    const img = document.querySelector('img');
    console.log(img)
    //remove alt

    // img.removeAttribute('alt')

    if (img.hasAttribute('alt')) {
        console.log('tem alt')
    } else {
        console.log("não tem alt")
    }

}

imgExercise()




