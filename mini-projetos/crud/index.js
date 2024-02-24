let users = [
    {
        id: 1,
        name: "Ana Carolina Cedro",
        email: "carolemail@email.com"
    }
];

// Chama a função renderTable() após a definição do array users
renderTable();

function showForm(index) {
    if (index !== undefined) {
        editUser(index)
    }

    document.getElementById("formContainer").style.display = "block";
}

function hideForm() {
    document.getElementById("formContainer").style.display = "none";
}

function renderTable() {
    const tableBody = document.getElementById("myTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    users.forEach((user, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button class="btn" onclick="showForm(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteUser(${index})">Delete</button>
                </td>
            `;
    });
}

function addUser() {

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    if (name && email !== "") {

        let newUser = {
            id: users.length + 1,
            name: name,
            email: email
        };

        users.push(newUser);
        renderTable();
        clearInputs()

    } else {
        alert("Preencha todos os campos !!")
    }


}

function clearInputs() {
    document.querySelector("#name").value = '';
    document.querySelector("#email").value = '';
}

document.getElementById("add-new").addEventListener("click", addUser)

function editUser(index) {
    console.log(index)

    if (index >= 0 && index < users.length) {
        const user = users.splice(index)
        console.log("usuario", user)
        const newName = user[0].name
        const newEmail = user[0].email
        renderTable();
    } else {
        console.error("Índice inválido");
    }
}


function deleteUser(index) {

    const operacao = prompt("Deseja realmente excluir ? sim(s) não(n)")
    if (operacao === "s") {
        users.splice(index)
        renderTable()
    }

}


