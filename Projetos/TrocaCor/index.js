"use strict"

const getH1 = document.querySelector('h1')

//Mudando style h1
getH1.style.color = 'pink'
setInterval(() => {
    if (getH1.style.color === 'pink') {
        getH1.style.color = 'red'
    } else {
        getH1.style.color = 'pink'
    }

}, 2000)

//Mudando cores dos quadrados

const blocos = document.querySelector("#blocos")

blocos.addEventListener('click', (element) => {
    const {target} = element

    switch (target.id) {
        case 'blue':
            const blue = document.querySelector('#blue')
            blue.addEventListener('mouseover', () => {
                blue.style.background = 'white'
                blue.style.border = '1px solid red'
            })
            blue.style.background = 'blue'
            blue.style.border = 'none'
            break
        case 'pink':
            const pink = document.querySelector('#pink')
            pink.addEventListener('mouseover', () => {
                pink.style.background = 'white'
                pink.style.border = '1px solid red'
            })
            pink.style.background = 'pink'
            pink.style.border = 'none'
            break
        case 'orange':
            const orange = document.querySelector('#orange')
            orange.addEventListener('mouseover', () => {
                orange.style.background = 'white'
                orange.style.border = '1px solid red'
            })
            orange.style.background = 'orange'
            orange.style.border = 'none'
            break
    }


})




