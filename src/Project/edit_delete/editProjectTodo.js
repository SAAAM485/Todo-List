import { projectLibrary } from "../projectLibrary";
import { editProjectTodoLibrary } from "../../Todo/todoLibrary.js";
import { format, formatDistanceToNow } from "date-fns";

function editProjectTodo(sort, sortIndex) {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#due_date");
  const p1 = document.querySelector('input[value = "p1"]');
  const p2 = document.querySelector('input[value = "p2"]');
  const p3 = document.querySelector('input[value = "p3"]');
  const checkedPrio = sort[sortIndex].priority;
  title.value = sort[sortIndex].title;
  description.value = sort[sortIndex].description;
  dueDate.value = sort[sortIndex].date;
  if (checkedPrio == "p1") {
    p1.checked = true;
  } else if (checkedPrio == "p2") {
    p2.checked = true;
  } else {
    p3.checked = true;
  }
}

function editProjectTodoAddHandler(event, index, sort, sortIndex) {
  event.preventDefault();
  const ogIndex = projectLibrary[index].todos.findIndex(
    (todo) => todo.title === sort[sortIndex].title,
  );
  const dialog = document.querySelector("dialog");
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const date = document.querySelector("#due_date").value;
  const dueDate = format(date, "MMM dd y");
  const toDate = `${formatDistanceToNow(dueDate)} left`;
  const priority = document.querySelector(
    'input[name="priority"]:checked',
  ).value;
  const done = sort[sortIndex].done;

  dialog.close();
  editProjectTodoLibrary(
    index,
    ogIndex,
    title,
    description,
    date,
    dueDate,
    toDate,
    priority,
    done,
  );
}

export { editProjectTodo, editProjectTodoAddHandler };
