import clearPage from '../clearPage.js';
import { projectLibrary } from './projectLibrary.js';

export default function renderProjectPage(title = projectLibrary[projectLibrary.length - 1].title) {
    clearPage()
    const mainContainer = document.querySelector('.mainContainer');
    const projectTitle = document.createElement('div');
    const projectDescription = document.createElement('div');
    const projectDueDate = document.createElement('div');
    const projectPriority = document.createElement('div');
    const addTodo = document.createElement('button');
    const editBtn = document.createElement('button')
    const delBtn = document.createElement('button')
    const index = projectLibrary.findIndex(x => x.title === title);

    projectTitle.textContent = title;
    projectDescription.textContent = projectLibrary[index].description;
    projectDueDate.textContent = projectLibrary[index].dueDate;
    projectPriority.textContent = projectLibrary[index].priority;
    editBtn.textContent = 'Edit';
    delBtn.textContent = 'Delete';
    addTodo.textContent = '+';

    mainContainer.appendChild(projectTitle);
    mainContainer.appendChild(projectDescription);
    mainContainer.appendChild(projectDueDate);
    mainContainer.appendChild(projectPriority);
    mainContainer.appendChild(editBtn);
    mainContainer.appendChild(delBtn);
    mainContainer.appendChild(addTodo);

    for (let i = 1; i < projectLibrary[index].length; i++) {
        const todo = projectLibrary[index][i];

    }
};