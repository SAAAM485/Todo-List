import addProjectHandler from "./addProject.js";

export default function projectDiolog() {
  const projectDialog = document.querySelector("dialog");
  const dialogTitle = document.querySelector("h1");
  dialogTitle.textContent = "Please Enter The Project Info";
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
  addBtn.addEventListener("click", addProjectHandler, true);
}
