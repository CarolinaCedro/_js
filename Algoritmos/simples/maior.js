//* Crie um programa que receba dois números e exiba o maior entre eles.

const num1 = prompt("Entre com 1 numero: ")
const first = parseInt(num1)

const num2 = prompt("Entre com o 2 numero: ")
const second = parseInt(num2)

const maior = num1 > num2 ? `O numero maior é : ${num1}` : `O numero maior é : ${num2}`

alert(maior)



