var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer cafe',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos() {
    listElement.innerHTML = '';
    
    for (todo of todos2) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkElement = document.createElement('a');

        linkElement = document.createElement('a');

        var pos = todos3.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.nodeValue;

    todos3.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos3.splice(pos, 1);
    renderTodos();
}