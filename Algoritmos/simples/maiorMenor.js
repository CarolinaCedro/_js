//Escreva um programa que receba um conjunto de números e exiba o maior e o menor deles.

const n1 = prompt("Primeiro número: ")
const value01 = parseInt(n1)

const n2 = prompt("Segundo número: ")
const value02 = parseInt(n2)

const n3 = prompt("Terceiro número: ")
const value03 = parseInt(n3)

const n4 = prompt("Quarto número: ")
const value4 = parseInt(n4)

maiorMenor(value01, value02, value03, value4)


function maiorMenor(value01, value02, value03, value04) {
    const arrayConvert = [value01, value02, value03, value04]
    console.log(arrayConvert)
    let maior = 0
    let menor = arrayConvert[arrayConvert.length - 1]
    for (let i = arrayConvert.length - 1; i >= 0; i--) {


        if (arrayConvert[i] > maior) {
            maior = arrayConvert[i]
        }

        if (arrayConvert[i] < menor) {
            menor = arrayConvert[i]
        }
    }

    console.log("maior", maior)
    console.log("menor", menor)

}
