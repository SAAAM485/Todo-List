import { editTodoAddHandler } from "./editTodo.js";
import { sortMethod } from "../sort/sortMethod.js";

export default function editTodoDialog(todoArr, index) {
  const todoDialog = document.querySelector("dialog");
  const dialogTitle = document.querySelector("h1");
  const dialogForm = document.querySelector("form");
  dialogTitle.textContent = `Please Edit The ${todoArr[index].title} Todo Info`;
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
  dateInput.max = "";
  todoDialog.className = "todoDialog";
  todoDialog.showModal();

  const addBtn = document.querySelector("#add_btn");
  addBtn.addEventListener(
    "click",
    (event) => {
      editTodoAddHandler(event, todoArr, index);
      dialogForm.reset();
    },
    { once: true },
  );
}
