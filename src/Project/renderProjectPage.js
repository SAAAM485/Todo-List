import clearPage from '../clearPage.js';
import { projectLibrary } from './projectLibrary.js';
import projectTodoDialog from './projectTodoDialog.js';
import createTodoCard from '../Todo/createTodoCard.js';

export default function renderProjectPage(index = projectLibrary.length - 1) {
    clearPage()
    const mainContainer = document.querySelector('.mainContainer');
    const projectTitle = document.createElement('div');
    const projectDescription = document.createElement('div');
    const projectDueDate = document.createElement('div');
    const projectToDate = document.createElement('div');
    const projectPriority = document.createElement('div');
    const addTodo = document.createElement('button');
    const editBtn = document.createElement('button')
    const delBtn = document.createElement('button')

    projectTitle.textContent = projectLibrary[index][0].title;
    projectDescription.textContent = projectLibrary[index][0].description;
    projectDueDate.textContent = projectLibrary[index][0].dueDate;
    projectToDate.textContent = projectLibrary[index][0].toDate;
    projectPriority.textContent = projectLibrary[index][0].priority;
    editBtn.textContent = 'Edit';
    delBtn.textContent = 'Delete';
    addTodo.textContent = '+';

    addTodo.addEventListener('click', () => {
        projectTodoDialog(index);
    });

    mainContainer.appendChild(projectTitle);
    mainContainer.appendChild(projectDescription);
    mainContainer.appendChild(projectDueDate);
    mainContainer.appendChild(projectToDate);
    mainContainer.appendChild(projectPriority);
    mainContainer.appendChild(editBtn);
    mainContainer.appendChild(delBtn);
    mainContainer.appendChild(addTodo);

    for (let i = 1; i < projectLibrary[index].length; i++) {
        const todo = projectLibrary[index][i];
        createTodoCard(todo.title, todo.description, todo.dueDate, todo.toDate, todo.priority);
    }
};