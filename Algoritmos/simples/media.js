let num1 = prompt("Entre com o primeiro numero: ")
let value01 = parseFloat(num1)
let num2 = prompt("Entre com o segundo numero: ")
let value02 = parseFloat(num2)
let num3 = prompt("Entre com o terceiro numero: ")
let value03 = parseFloat(num3)


alert(media(value01, value02, value03))


function media(number01, number02, number03) {
    return ((number01 + number02 + number03) / 2)
}
