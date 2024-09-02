import { updateProjectLibrary } from "./projectLibrary.js";
import { format, formatDistanceToNow } from "date-fns";
import renderProjectBar from "./render/renderProjectBar.js";
import renderProjectPage from "./render/renderProjectPage.js";
import { projectLibrary } from "./projectLibrary.js";

export default function addProjectHandler(event) {
  event.preventDefault();
  const addBtn = document.querySelector("#add_btn");
  const dialog = document.querySelector("dialog");
  const dialogForm = document.querySelector("form");
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const date = document.querySelector("#due_date").value;
  const priority = document.querySelector('input[name="priority"]:checked');
  const cancelBtn = document.querySelector("#cancel_btn");
  cancelBtn.addEventListener("click", () => {
    addBtn.removeEventListener("click", addProjectHandler, true);
  });

  if (
    dialog !== "" &&
    title !== "" &&
    description !== "" &&
    date !== "" &&
    priority !== null
  ) {
    const dueDate = format(date, "MMM dd y");
    const toDate = `${formatDistanceToNow(dueDate)} left`;
    const priorityValue = priority.value;

    updateProjectLibrary(
      title,
      description,
      date,
      dueDate,
      toDate,
      priorityValue,
    );

    renderProjectBar();
    renderProjectPage();

    addBtn.removeEventListener("click", addProjectHandler, true);

    dialog.close();
    dialogForm.reset();
  } else {
    alert("Fields must be filled out");
    return;
  }
}
