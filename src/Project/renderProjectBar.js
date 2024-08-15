import clearProjectBar from './clearProjectBar.js';
import { projectLibrary, updateProjectLibrary } from './projectLibrary.js';
import renderProjectPage from './renderProjectPage.js';


export default function renderProjectBar() {
    clearProjectBar();
    const projectBar = document.querySelector('.projectBar');
    projectLibrary.forEach(project => {
        const createProjectList = document.createElement('li');
        const createProjectBtn = document.createElement('button');
        createProjectBtn.textContent = project.title;
        projectBar.appendChild(createProjectList);
        createProjectList.appendChild(createProjectBtn);
        createProjectBtn.addEventListener('click', (event) => {
            renderProjectPage(event.target.textContent);
        });
    });
};