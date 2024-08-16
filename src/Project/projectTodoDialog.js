import addProjectTodoHandler from './addProjectTodo.js';
import { projectLibrary } from './projectLibrary.js';
import renderProjectPage from './renderProjectPage.js';

export default function projectTodoDialog(index) {
    const todoDialog = document.querySelector('dialog');
    const dialogTitle = document.querySelector('h1');
    dialogTitle.textContent = `Please Enter The Todo Info Of ${projectLibrary[index][0].title}`
    todoDialog.showModal();


    const addBtn = document.querySelector('#add_btn');
    addBtn.addEventListener('click', (event) => {
        addProjectTodoHandler(event, index);
        renderProjectPage();
    }, { once: true });
};