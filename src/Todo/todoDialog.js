import addTodoHandler from './addTodo.js';
import renderTodoPage from './renderTodoPage.js';

export default function todoDiolog() {
    const todoDialog = document.querySelector('dialog');
    const dialogTitle = document.querySelector('h1');
    dialogTitle.textContent = 'Please Enter The Todo Info'
    todoDialog.showModal();

    const addBtn = document.querySelector('#add_btn');
    addBtn.addEventListener('click', (event) => {
        addTodoHandler(event);
        renderTodoPage();
    }, { once: true });
};