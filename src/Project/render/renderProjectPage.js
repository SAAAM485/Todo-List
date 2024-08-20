import clearPage from '../../clearPage.js';
import { projectLibrary } from '../projectLibrary.js';
import projectTodoDialog from '../projectTodoDialog.js';
import createCards from '../../Todo/createCards.js';
import renderSortMethod from '../../Todo/render/renderSortMethod.js';
import projectTodosSortedByDate from '../sort/projectTodosSortedByDate.js';
import projectTodosSortedByPrio from '../sort/projectTodosSortedByDate.js';
import deleteProject from '../deleteProject.js';
import renderProjects from './renderProjects.js';
import renderProjectBar from './renderProjectBar.js';
import deleteProjectTodo from '../deleteProjectTodo.js';

export default function renderProjectPage(index = projectLibrary.length - 1, method = 'bycreate') {
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

    delBtn.addEventListener('click', () => {
        deleteProject(index);
        renderProjectBar();
        renderProjects();
    });

    projectTitle.textContent = projectLibrary[index].title;
    projectDescription.textContent = projectLibrary[index].description;
    projectDueDate.textContent = projectLibrary[index].dueDate;
    projectToDate.textContent = projectLibrary[index].toDate;
    projectPriority.textContent = projectLibrary[index].priority;
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

    renderSortMethod(method);

    const sort = projectLibrary[index].todos;

    sort.forEach((todo, sortIndex) => {
        let card = createCards(todo.title, todo.description, todo.dueDate, todo.toDate, todo.priority);
        card.delBtn.addEventListener('click', () => {
            deleteProjectTodo(sort, sortIndex);
            renderProjectPage(index, sort, method);
        });
        card.editBtn.addEventListener('click', () => {

        });
    });

    const sortMethod = document.querySelector('select');
    sortMethod.addEventListener('change', () => {
        if (sortMethod.value == 'bycreate') {
            renderProjectPage(index, sort);
        } else if (sortMethod.value == 'bydate') {
            renderProjectPage(index, projectTodosSortedByDate(index), 'bydate')
        } else {
            renderProjectPage(index, projectTodosSortedByPrio(index), 'byprio')
        }
    });
};