import addProjectHandler from './addProject.js';
import renderProjectBar from './render/renderProjectBar.js';
import renderProjectPage from './render/renderProjectPage.js';

export default function projectDiolog() {
    const projectDialog = document.querySelector('dialog');
    const dialogTitle = document.querySelector('h1');
    const dialogForm = document.querySelector('form');
    dialogTitle.textContent = 'Please Enter The Project Info';
    const dateInput = document.querySelector('input[name="due_date"]');
    const now = new Date(Date.now()).toISOString().split('T')[0].toLocaleString([], {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    dateInput.min = now;
    dateInput.max = "";
    projectDialog.showModal();

    const addBtn = document.querySelector('#add_btn');
    addBtn.addEventListener('click', (event) => {
        addProjectHandler(event);
        renderProjectBar();
        renderProjectPage();
        dialogForm.reset();
    }, { once: true });
};