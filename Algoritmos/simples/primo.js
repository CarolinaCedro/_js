//Escreva um programa que verifique se um número é primo.

let num = prompt("Entre com um numero para a verificação: ")
const value = parseInt(num)
alert(`É um numero primo: ${primo(value)}`)


function primo(num) {
    return num > 1 && num % num === 0;
}
