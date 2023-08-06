"use strict"


let count = 0
const valueView = document.querySelector("#value")
valueView.textContent = count

group.addEventListener('click', (element) => {
    const {target} = element
    switch (target.id) {
        case "increment":
            count++
            break
        case "reset":
            count = 0;
            break
        case "decrement":
            if (count !== 0) {
                count--;
            }
    }
    valueView.textContent = count
})



