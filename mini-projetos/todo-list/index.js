const taskInput = document.getElementById("taskInput");
const taskList = document.querySelector("#taskList");

function addTaskToList() {
    const task = taskInput.value.trim();

    if (task !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn-delete")
        deleteButton.textContent = " Excluir";
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });
        listItem.appendChild(deleteButton);

        listItem.addEventListener("click", () => {
            console.log("clicando")
            listItem.style.textDecoration = "line-through"
            // const btnDel = document.querySelector(".btn-delete")
            // btnDel.classList.add("disabled")
        })


        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}

document.querySelector("button").addEventListener("click", addTaskToList); // Adiciona um ouvinte de evento ao botão para adicionar tarefa ao ser clicado
