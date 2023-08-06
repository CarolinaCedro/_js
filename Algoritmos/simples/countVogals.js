//Escreva um programa que conte a quantidade de vogais em uma string.

let palavra = prompt("Entre com uma palavra: ")
palavra.trim()

let arrayConvertion = []

arrayConvertion = palavra.split('')

let count = 0

for (let i = 0; i < arrayConvertion.length; i++) {
    if (arrayConvertion[i] === "a" || arrayConvertion[i] === "e" || arrayConvertion[i] === "i" || arrayConvertion[i] === "o" || arrayConvertion[i] === "u") {
        count++
    }
}

console.log("A Qtde de vogais na palavra em questão é um total de: ", count)
