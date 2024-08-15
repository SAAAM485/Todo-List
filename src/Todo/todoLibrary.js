import { projectLibrary } from "../Project/projectLibrary.js";
import Todo from "./todo.js";

const todoLibrary = [];

function updateProjectTodoLibrary(index, title, description, dueDate, priority) {
    let todo = new Todo(title, description, dueDate, priority);
    projectLibraryLibrary[index].push(todo);
}

function updateTodoLibrary(title, description, dueDate, priority) {
    let todo = new Todo(title, description, dueDate, priority);
    todoLibrary.push(todo);
}

export { todoLibrary, updateTodoLibrary, updateProjectTodoLibrary };