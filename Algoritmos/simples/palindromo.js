//Implemente um programa que verifique se uma palavra é um palíndromo.

let palavra = prompt("Entre com uma palavra para verificar se ele é um palídromo")
palavra.trim()

let value = []
value = palavra.split('')

let palavraInvertida = ''

for (let i = value.length - 1; i >= 0; i--) {
    palavraInvertida += value[i]
}

console.log("é uma palavra palidroma: ", verify(palavra, palavraInvertida))
console.log(palavra)
console.log(palavraInvertida)


function verify(palavra, palavraInvertida) {
    if (palavraInvertida === palavra) {
        return true
    }
    return false
}
