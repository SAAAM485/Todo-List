import renderProjectPage from "../render/renderProjectPage";
import projectTodosSortedByDate from "./projectTodosSortedByDate";
import projectTodosSortedByPrio from "./projectTodosSortedByPrio";

function projectTodoSortMethodChanged(index) {
  const sortMethod = document.querySelector("select");
  sortMethod.addEventListener("change", () => {
    if (sortMethod.value == "bycreate") {
      renderProjectPage(index);
    } else if (sortMethod.value == "bydate") {
      renderProjectPage(index, projectTodosSortedByDate(index), "bydate");
    } else {
      renderProjectPage(index, projectTodosSortedByPrio(index), "byprio");
    }
  });
}

function projectTodoSortMethod(index, sort) {
  const sortMethod = document.querySelector("select");

  if (sortMethod.value == "bycreate") {
    renderProjectPage(index, sort);
  } else if (sortMethod.value == "bydate") {
    renderProjectPage(index, projectTodosSortedByDate(index), "bydate");
  } else {
    renderProjectPage(index, projectTodosSortedByPrio(index), "byprio");
  }
}

export { projectTodoSortMethodChanged, projectTodoSortMethod };
