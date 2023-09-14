const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const fullList = document.querySelector(".list-tasks")

//para criar lista
let itemsList = []

//função para enviar o input para a lista
function addNewTask() {
  itemsList.push(input.value)
  input.value = ""

  showTasks()
}

function showTasks() {
  let newLi = ""
  itemsList.forEach((task, index) => {
  newLi = newLi +
      `
      <li class="task">
        <p>${task}</p>
        <img class="lixo" src="../IMG/trash.svg" onclick="deleteItem(${index})" alt="Imagem-Lixo">
      </li>
      `
})
    fullList.innerHTML = newLi
}

function deleteItem(index) {
  itemsList.splice(index, 1)
  showTasks()
}



button.addEventListener("click", addNewTask )
