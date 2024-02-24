const lampadaImgSrc = document.getElementById("lampadaImg")
const btnAcender = document.querySelector("#acender")
const btnDesligar = document.querySelector("#apagar")


btnAcender.addEventListener('click', () => {
    lampadaImgSrc.setAttribute("src", "./img/ligada.jpg")
})

btnDesligar.addEventListener('click', () => {
    lampadaImgSrc.setAttribute("src", "./img/desligada.jpg")
})

lampadaImgSrc.addEventListener('mouseover', () => {
    lampadaImgSrc.setAttribute("src", "./img/desligada.jpg")
})

lampadaImgSrc.addEventListener('mouseout', () => {
    lampadaImgSrc.setAttribute("src", "./img/ligada.jpg")
})


let clickCount = 0;

lampadaImgSrc.addEventListener('dblclick', () => {

    lampadaImgSrc.setAttribute("src", "./img/quebrada.jpg");

});



