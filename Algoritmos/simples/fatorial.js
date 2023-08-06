//Crie um programa que calcule o fatorial de um número.

const number = prompt("Entre com um número: ")
const numberConvertFloat = parseFloat(number)

let fatorial = 1;

for (let i = numberConvertFloat; i > 1; i--) {
    fatorial *= i
    console.log(i)
}

console.log("fatorial",fatorial)


