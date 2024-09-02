import { projectLibrary, editProjectLibrary } from "../projectLibrary";
import { format, formatDistanceToNow } from "date-fns";

function editProject(index) {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#due_date");
  const p1 = document.querySelector('input[value = "p1"]');
  const p2 = document.querySelector('input[value = "p2"]');
  const p3 = document.querySelector('input[value = "p3"]');
  const checkedPrio = projectLibrary[index].priority;
  title.value = projectLibrary[index].title;
  description.value = projectLibrary[index].description;
  dueDate.value = projectLibrary[index].date;
  if (checkedPrio == "p1") {
    p1.checked = true;
  } else if (checkedPrio == "p2") {
    p2.checked = true;
  } else {
    p3.checked = true;
  }
}

function editProjectAddHandler(event, index) {
  event.preventDefault();
  const dialog = document.querySelector("dialog");
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const date = document.querySelector("#due_date").value;
  const dueDate = format(date, "MMM dd y");
  const toDate = `${formatDistanceToNow(dueDate)} left`;
  const priority = document.querySelector(
    'input[name="priority"]:checked',
  ).value;
  const todos = projectLibrary[index].todos;
  const done = projectLibrary[index].done;

  dialog.close();
  editProjectLibrary(
    index,
    title,
    description,
    date,
    dueDate,
    toDate,
    priority,
    todos,
    done,
  );
}

export { editProject, editProjectAddHandler };
