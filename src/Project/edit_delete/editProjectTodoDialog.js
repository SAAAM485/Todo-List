import { editProjectTodoAddHandler } from "./editProjectTodo";
import { projectTodoSortMethod } from "../sort/projectTodoSortMethod";
import { projectLibrary } from "../projectLibrary";

export default function editProjectTodoDialog(index, sort, sortIndex) {
  const todoDialog = document.querySelector("dialog");
  const dialogTitle = document.querySelector("h1");
  const dialogForm = document.querySelector("form");
  dialogTitle.textContent = `Please Edit The ${sort[sortIndex].title} Project Todo Info`;
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
  addBtn.addEventListener(
    "click",
    (event) => {
      editProjectTodoAddHandler(event, index, sort, sortIndex);
      projectTodoSortMethod(index, sort);
      dialogForm.reset();
    },
    { once: true },
  );
}
