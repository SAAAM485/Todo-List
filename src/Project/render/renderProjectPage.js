import clearPage from "../../clearPage.js";
import { projectLibrary } from "../projectLibrary.js";
import projectTodoDialog from "../projectTodoDialog.js";
import createCards from "../../Todo/createCards.js";
import renderSortMethod from "../../Todo/render/renderSortMethod.js";
import deleteProject from "../edit_delete/deleteProject.js";
import renderProjects from "./renderProjects.js";
import renderProjectBar from "./renderProjectBar.js";
import deleteProjectTodo from "../edit_delete/deleteProjectTodo.js";
import { projectTodoSortMethodChanged } from "../sort/projectTodoSortMethod.js";
import { editProject } from "../edit_delete/editProject.js";
import editProjectDialog from "../edit_delete/editProjectDialog.js";
import { editProjectTodo } from "../edit_delete/editProjectTodo.js";
import editProjectTodoDialog from "../edit_delete/editProjectTodoDialog.js";

export default function renderProjectPage(
    index = projectLibrary.length - 1,
    sort = projectLibrary[index].todos,
    method = "bycreate"
) {
    clearPage();
    const mainContainer = document.querySelector(".mainContainer");
    const projectTitle = document.createElement("div");
    const projectDescription = document.createElement("div");
    const projectDueDate = document.createElement("div");
    const projectToDate = document.createElement("div");
    const projectPriority = document.createElement("div");
    const doneBtn = document.createElement("button");
    const addTodo = document.createElement("button");
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    projectTitle.textContent = projectLibrary[index].title;
    projectDescription.textContent = projectLibrary[index].description;
    projectDueDate.textContent = projectLibrary[index].dueDate;
    projectToDate.textContent = projectLibrary[index].toDate;
    projectPriority.textContent = projectLibrary[index].priority;
    doneBtn.textContent = "Done";
    editBtn.textContent = "Edit";
    delBtn.textContent = "Delete";
    addTodo.textContent = "+";

    doneBtn.addEventListener("click", () => {
        projectLibrary[index].done = true;
        sort.forEach((todo) => {
            todo.done = true;
        });
    });
    addTodo.addEventListener("click", () => {
        projectTodoDialog(index);
    });
    delBtn.addEventListener("click", () => {
        deleteProject(index);
        renderProjectBar();
        renderProjects();
    });

    editBtn.addEventListener("click", () => {
        editProject(index);
        editProjectDialog(index, method);
    });

    mainContainer.appendChild(projectTitle);
    mainContainer.appendChild(projectDescription);
    mainContainer.appendChild(projectDueDate);
    mainContainer.appendChild(projectToDate);
    mainContainer.appendChild(projectPriority);
    mainContainer.appendChild(doneBtn);
    mainContainer.appendChild(editBtn);
    mainContainer.appendChild(delBtn);
    mainContainer.appendChild(addTodo);

    renderSortMethod(method);

    if (sort !== undefined) {
        sort.forEach((todo, sortIndex) => {
            let card = createCards(
                todo.title,
                todo.description,
                todo.dueDate,
                todo.toDate,
                todo.priority
            );
            card.doneBtn.addEventListener("click", () => {
                sort[sortIndex].todos.forEach((todo) => {
                    todo.done = true;
                });
            });
            card.delBtn.addEventListener("click", () => {
                deleteProjectTodo(sort, sortIndex);
                renderProjectPage(index, sort, method);
            });
            card.editBtn.addEventListener("click", () => {
                editProjectTodo(sort, sortIndex);
                editProjectTodoDialog(index, sort, sortIndex);
                renderProjectBar();
                renderProjectPage(index);
            });
        });
    }

    projectTodoSortMethodChanged();
}
