import { editTodoLibrary, todoLibrary } from "../todoLibrary";
import { format, formatDistanceToNow } from "date-fns";

function editTodo(todoArr, index) {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#due_date");
  const p1 = document.querySelector('input[value = "p1"]');
  const p2 = document.querySelector('input[value = "p2"]');
  const p3 = document.querySelector('input[value = "p3"]');
  const checkedPrio = todoArr[index].priority;
  title.value = todoArr[index].title;
  description.value = todoArr[index].description;
  dueDate.value = todoArr[index].date;
  if (checkedPrio == "p1") {
    p1.checked = true;
  } else if (checkedPrio == "p2") {
    p2.checked = true;
  } else {
    p3.checked = true;
  }
}

function editTodoAddHandler(event, todoArr, index) {
  event.preventDefault();
  const ogIndex = todoLibrary.findIndex(
    (todo) => todo.title === todoArr[index].title,
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

  dialog.close();
  editTodoLibrary(ogIndex, title, description, date, dueDate, toDate, priority);
}

export { editTodo, editTodoAddHandler };
