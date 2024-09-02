import { projectLibrary } from "../Project/projectLibrary.js";
import Todo from "./todo.js";
import getLocalStorage from "../getLocalStorage.js";

const todoLibrary = getLocalStorage().todoLibrary;

function updateProjectTodoLibrary(
  index,
  title,
  description,
  date,
  dueDate,
  toDate,
  priority,
) {
  let todo = new Todo(title, description, date, dueDate, toDate, priority);
  projectLibrary[index].todos.push(todo);
  localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
}

function editProjectTodoLibrary(
  projectIndex,
  todoIndex,
  title,
  description,
  date,
  dueDate,
  toDate,
  priority,
  done,
) {
  let todo = new Todo(
    title,
    description,
    date,
    dueDate,
    toDate,
    priority,
    done,
  );
  projectLibrary[projectIndex].todos.splice(todoIndex, 1, todo);
  localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
}

function updateTodoLibrary(
  title,
  description,
  date,
  dueDate,
  toDate,
  priority,
) {
  let todo = new Todo(title, description, date, dueDate, toDate, priority);
  todoLibrary.push(todo);
  localStorage.setItem("todoLibrary", JSON.stringify(todoLibrary));
}

function editTodoLibrary(
  index,
  title,
  description,
  date,
  dueDate,
  toDate,
  priority,
  done,
) {
  let todo = new Todo(
    title,
    description,
    date,
    dueDate,
    toDate,
    priority,
    done,
  );
  todoLibrary.splice(index, 1, todo);
  localStorage.setItem("todoLibrary", JSON.stringify(todoLibrary));
}

export {
  todoLibrary,
  updateTodoLibrary,
  updateProjectTodoLibrary,
  editTodoLibrary,
  editProjectTodoLibrary,
};
