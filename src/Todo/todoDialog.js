import addTodoHandler from './addTodo.js';
import renderTodoPage from './render/renderTodoPage.js';

export default function todoDiolog() {
    const todoDialog = document.querySelector('dialog');
    const dialogTitle = document.querySelector('h1');
    dialogTitle.textContent = 'Please Enter The Todo Info';
    const dateInput = document.querySelector('input[name="due_date"]');
    const now = new Date(Date.now()).toISOString().split('T')[0].toLocaleString([], {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    dateInput.min = now;
    todoDialog.showModal();

    const addBtn = document.querySelector('#add_btn');
    addBtn.addEventListener('click', (event) => {
        addTodoHandler(event);
        renderTodoPage();
    }, { once: true });
};