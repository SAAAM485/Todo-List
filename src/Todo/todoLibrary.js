import { projectLibrary } from "../Project/projectLibrary.js";
import Todo from "./todo.js";

const todoLibrary = [];

function updateProjectTodoLibrary(index, title, description, dueDate, toDate, priority) {
    let todo = new Todo(title, description, dueDate, toDate, priority);
    projectLibrary[index].push(todo);
}

function updateTodoLibrary(title, description, dueDate, toDate, priority) {
    let todo = new Todo(title, description, dueDate, toDate, priority);
    todoLibrary.push(todo);
}

export { todoLibrary, updateTodoLibrary, updateProjectTodoLibrary };