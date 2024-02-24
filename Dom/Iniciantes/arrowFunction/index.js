const listaIds = document.querySelectorAll(".item");
console.log(listaIds)

//criando uma function// arrow function
//no metodo for each devemos passar uma função de anonima, ela pode contar alguns itens no corpo da sua requisição como:
// item : item de cada array
//index: posição do item no nodeList
//arr: que é passagem do proprio nodelist


//percorre a lista de id retornando seu elemento,index,e node list
// listaIds.forEach(function (item, index, arr) {
//     console.log(item, index, arr)
// })


//foreach e array
/*
* forEach é um método de array.alguns objetos array-like possuem este método.
* Caso não possua, o ideal é transformá-los em uma array
* */

//Nesse caso ao transformarmos em um array conseguimos ter acesso a metodos de array no elemento
//transformado.

const itens = document.getElementsByClassName('animais')
console.log("assim vem os itens de nodeList", itens)
const itensArray = Array.from(itens);
console.log("assim vem os itens transformados em um array", itensArray)
console.log(itensArray.pop())
console.log("lista", itensArray)


//Arrow-Function
/*
* Sintaxe curta em relacão a function expression. Basta remover a palavra chave function
* e adicionar a fat arrow => após os argumentos.
* */

//Vamos pegar todos os animais e percorrer cada um deles trazendo o nome dos animais

const animais = document.querySelectorAll('.animais')

//aqui percorremos o nodelist e trazendo o nome de cada elemento dentro do html.
animais.forEach((item, index) => {
    console.log("nome do animal é: ", item.innerHTML)
})


//Return

/*
* É possível omitir as chaves {} para uma função que retorna uma linha
* */

let number = [1, 2, 4, 7, 8];
number.forEach((item) => console.log(item += item))





