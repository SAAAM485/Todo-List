import { projectLibrary } from "../Project/projectLibrary.js";
import Todo from "./todo.js";

const todoLibrary = [];

function updateProjectTodoLibrary(
    index,
    title,
    description,
    date,
    dueDate,
    toDate,
    priority
) {
    let todo = new Todo(title, description, date, dueDate, toDate, priority);
    projectLibrary[index].todos.push(todo);
}

function updateTodoLibrary(
    title,
    description,
    date,
    dueDate,
    toDate,
    priority
) {
    let todo = new Todo(title, description, date, dueDate, toDate, priority);
    todoLibrary.push(todo);
}

function editTodoLibrary(
    index,
    title,
    description,
    date,
    dueDate,
    toDate,
    priority
) {
    let todo = new Todo(title, description, date, dueDate, toDate, priority);
    todoLibrary.splice(index, 1, todo);
}

export {
    todoLibrary,
    updateTodoLibrary,
    updateProjectTodoLibrary,
    editTodoLibrary,
};
