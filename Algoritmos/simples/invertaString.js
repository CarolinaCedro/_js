//Crie um programa que inverta uma string (uma palavra).

let string = prompt("Entre com uma palavra")
let value = string.trim()

let stringInvertida = ['']
stringInvertida = value.split('')

let palavra = '';

for (let i = stringInvertida.length -1; i >= 0; i--) {
    palavra += stringInvertida[i]
}
//pode ser feita tb com reverse dos metodos do array

console.log("A palavra invertida: ", palavra)

