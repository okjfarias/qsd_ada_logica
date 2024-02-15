let tarefas = [];

function adicionarTarefa() {
  const tarefaInput = document.getElementById("tarefaInput");
  const id = tarefas.length;
  tarefas.push({ id, tarefa: tarefaInput.value });
  tarefaInput.value = "";
  atualizarListaTarefas();
}

function editarTarefa(id) {
  const novaTarefa = prompt("Digite a nova tarefa");
  const tarefa = tarefas.find((t) => t.id === id);
  if (tarefa) {
    tarefa.tarefa = novaTarefa;
  }
  atualizarListaTarefas();
}

function removerTarefa(id) {
  const index = tarefas.findIndex((t) => t.id === id);
  if (index !== -1) {
    tarefas.splice(index, 1);
  }
  atualizarListaTarefas();
}

function obterTarefa() {
  const idInput = document.getElementById("idInput");
  const id = Number(idInput.value);
  const tarefa = tarefas.find((t) => t.id === id);
  if (tarefa) {
    alert("Tarefa: " + tarefa.tarefa);
  } else {
    alert("Tarefa não encontrada");
  }
  idInput.value = "";
}

function atualizarListaTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";
  for (let tarefa of tarefas) {
    const tarefaElemento = document.createElement("li");
    tarefaElemento.setAttribute("class", "list-group-item text-break");
    tarefaElemento.innerHTML =
      "<strong>ID: </strong>" +
      tarefa.id +
      "<br/><strong>Tarefa: </strong>" +
      tarefa.tarefa;
    listaTarefas.appendChild(tarefaElemento);
    tarefaElemento.appendChild(document.createElement("br"));

    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.setAttribute(
      "class",
      "btn btn-outline-primary btn-sm me-2 mt-2 rounded-2"
    );
    botaoEditar.onclick = function () {
      editarTarefa(tarefa.id);
    };
    tarefaElemento.appendChild(botaoEditar);

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.setAttribute(
      "class",
      "btn btn-outline-primary btn-sm mt-2 rounded-2"
    );
    botaoRemover.onclick = function () {
      removerTarefa(tarefa.id);
    };
    tarefaElemento.appendChild(botaoRemover);

    listaTarefas.appendChild(tarefaElemento);
  }
}
