import addProjectHandler from './addProject.js';
import renderProjectBar from './renderProjectBar.js';
import renderProjectPage from './renderProjectPage.js';

export default function projectDiolog() {
    const projectDialog = document.querySelector('dialog');
    const dialogTitle = document.querySelector('h1');
    dialogTitle.textContent = 'Please Enter The Project Info'
    projectDialog.showModal();

    const addBtn = document.querySelector('#add_btn');
    addBtn.addEventListener('click', (event) => {
        addProjectHandler(event);
        renderProjectBar();
        renderProjectPage();
    }, { once: true });
};