import addProjectTodoHandler from "./addProjectTodo.js";
import { projectLibrary } from "./projectLibrary.js";

export default function projectTodoDialog(index) {
  const todoDialog = document.querySelector("dialog");
  todoDialog.dataset.index = index;
  const dialogTitle = document.querySelector("h1");
  dialogTitle.textContent = `Please Enter The Todo Info Of ${projectLibrary[index].title}`;
  const dateInput = document.querySelector('input[name="due_date"]');
  const now = new Date(Date.now())
    .toISOString()
    .split("T")[0]
    .toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  dateInput.min = now;
  dateInput.max = projectLibrary[index].date;
  todoDialog.className = "projectTodoDialog";
  todoDialog.showModal();

  const addBtn = document.querySelector("#add_btn");
  addBtn.addEventListener("click", addProjectTodoHandler, true);
}
