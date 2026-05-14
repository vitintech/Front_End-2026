const textInput = document.getElementById("taskInput");
const textList = document.getElementById("taskList");

function addTask() {
  const temTexto = textInput.value.trim();

  if (temTexto !== '') {
    const TaskToAdd = document.createElement('li');

    TaskToAdd.innerHTML = `
      <span>${temTexto}</span>

      <button onclick="concluir(this)"> Concluir </button>
      <button onclick="remover(this)"> Remover </button>
      <button onclick="editar(this)"> Editar </button>
    `;
    textList.appendChild(TaskToAdd);

    textInput.value = '';
  }
}

function remover(button) {

    const itemToRemove = button.parentElement;
        textList.removeChild(itemToRemove);
}

function concluir(button) {
    const item = button.parentElement;
        item.classList.toggle("completed");
}

function editar(button) {
    const item = button.parentElement;
    const textoDaTask = item.querySelector("span");

    const novoTexto = prompt("Digite um novo texto:", textoDaTask.textContent);

    if (novoTexto !== null && novoTexto.trim() !== "") {
        textoDaTask.textContent = novoTexto;
    }
}