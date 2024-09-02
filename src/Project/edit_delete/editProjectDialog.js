import { projectLibrary } from "../projectLibrary";
import { editProjectAddHandler } from "./editProject";
import renderProjectBar from "../render/renderProjectBar";
import renderProjectPage from "../render/renderProjectPage";

export default function editProjectDialog(index) {
  const projectDialog = document.querySelector("dialog");
  const dialogTitle = document.querySelector("h1");
  const dialogForm = document.querySelector("form");
  dialogTitle.textContent = `Please Edit The ${projectLibrary[index].title} Project Info`;
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
  projectDialog.className = "projectDialog";
  projectDialog.showModal();

  const addBtn = document.querySelector("#add_btn");
  addBtn.addEventListener(
    "click",
    (event) => {
      editProjectAddHandler(event, index);
      renderProjectBar();
      renderProjectPage(index);
      dialogForm.reset();
    },
    { once: true },
  );
}
