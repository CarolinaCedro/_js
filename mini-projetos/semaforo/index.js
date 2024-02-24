const img = document.querySelector("#img")


document.querySelector("#red").addEventListener("click", () => {
    img.setAttribute("src","./img/vermelho.png")
})

document.querySelector("#yellow").addEventListener("click", () => {
    img.setAttribute("src","./img/amarelo.png")
})

document.querySelector("#green").addEventListener("click", () => {
    img.setAttribute("src","./img/verde.png")
})

document.querySelector("#automatic").addEventListener("click", () => {
    img.setAttribute("src","./img/desligado.png")
})



