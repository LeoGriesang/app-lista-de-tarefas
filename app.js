const cadastrar = document.querySelector('#cadastrar');
const inputCadastrar = document.querySelector('#nova-tarefa');
const list = document.querySelector('#list');
const localStorageKey = 'lista-de-tarefas';

cadastrar.addEventListener('click', novaTask);

function novaTask() {
    // validacao
    if (!inputCadastrar.value) {
        alert('Digite algo para inserir em sua lista')
    }
    else {
        const values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        values.push({
            name: inputCadastrar.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values));
        mostrarNaTela();
    }
}

function deleteTask(task) {
    const values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = values.findIndex(x => x.name == task)
    values.splice(index,1)
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    mostrarNaTela();
}

function mostrarNaTela() {
    const values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    list.innerHTML = '';
    for(let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']}<img src="img/Vector.svg" id="check" onclick="deleteTask('${values[i]['name']}')"></img></li>`
    }
}
mostrarNaTela()