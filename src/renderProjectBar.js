import clearProjectBar from './clearProjectBar.js';
import {projectLibrary, updateProjectLibrary } from './projectLibrary.js';


export default function renderProjectBar() {
    const projectBar = document.querySelector('.projectBar');
    clearProjectBar();
    projectLibrary.forEach(project => {
        const createProjectList = document.createElement('li');
        const createProjectBtn = document.createElement('button');
        createProjectBtn.textContent = project.title;
        projectBar.appendChild(createProjectList);
        createProjectList.appendChild(createProjectBtn);
    });
};