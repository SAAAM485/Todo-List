import projectDiolog from "./Project/projectDialog";
import "./style.css";
import todoDiolog from "./Todo/todoDialog";
import renderTodoPage from "./Todo/render/renderTodoPage";
import renderUpcomingPage from "./Todo/render/renderUpcomingPage";
import { updateProjectLibrary } from "./Project/projectLibrary";
import { format, formatDistanceToNow } from "date-fns";
import { updateProjectTodoLibrary } from "./Todo/todoLibrary";
import renderProjectBar from "./Project/render/renderProjectBar";
import renderProjectPage from "./Project/render/renderProjectPage";
import renderProjects from "./Project/render/renderProjects";

function example() {
  const exampleDate = new Date();
  const twoWeeks = new Date(exampleDate.setDate(exampleDate.getDate() + 14))
    .toISOString()
    .split("T")[0]
    .toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  const oneWeek = new Date(exampleDate.setDate(exampleDate.getDate() - 7))
    .toISOString()
    .split("T")[0]
    .toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  updateProjectLibrary(
    "Example",
    "You can put the description of your project here.",
    twoWeeks,
    format(twoWeeks, "MMM dd y"),
    `${formatDistanceToNow(format(twoWeeks, "MMM dd y"))} left`,
    "p2",
  );
  updateProjectTodoLibrary(
    0,
    "Example",
    "You can put the description of your project's todo here.",
    oneWeek,
    format(oneWeek, "MMM dd y"),
    `${formatDistanceToNow(format(oneWeek, "MMM dd y"))} left`,
    "p1",
  );
  renderProjectBar();
  renderProjectPage();
}

function listeners() {
  const dialog = document.querySelector("dialog");
  const dialogForm = document.querySelector("form");
  const cancelBtn = document.querySelector("#cancel_btn");
  cancelBtn.addEventListener("click", () => {
    dialog.close();
    dialogForm.reset();
  });

  const StartProjectBtn = document.querySelector("#startProject");
  StartProjectBtn.addEventListener("click", projectDiolog);

  const addTodoBtn = document.querySelector("#addTodo");
  addTodoBtn.addEventListener("click", todoDiolog);

  const todos = document.querySelector("#todos");
  todos.addEventListener("click", () => {
    renderTodoPage();
  });

  const upcoming = document.querySelector("#upcoming");
  upcoming.addEventListener("click", () => {
    renderUpcomingPage();
  });
}

listeners();

if (
  !localStorage.getItem("projectLibrary") &&
  !localStorage.getItem("todoLibrary")
) {
  example();
} else {
  renderProjectBar();
  renderProjects();
}
