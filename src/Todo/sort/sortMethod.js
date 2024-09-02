import renderTodoPage from "../render/renderTodoPage.js";
import todosSortedByDate from "../sort/todosSortedByDate";
import todosSortedByPrio from "../sort/todoSortedByPrio";

function sortMethodChanged() {
  const sortMethod = document.querySelector("select");
  sortMethod.addEventListener("change", () => {
    if (sortMethod.value == "bycreate") {
      renderTodoPage();
    } else if (sortMethod.value == "bydate") {
      renderTodoPage(todosSortedByDate(), "bydate");
    } else {
      renderTodoPage(todosSortedByPrio(), "byprio");
    }
  });
}

function sortMethod() {
  const sortMethod = document.querySelector("select");
  if (sortMethod.value == "bycreate") {
    renderTodoPage();
  } else if (sortMethod.value == "bydate") {
    renderTodoPage(todosSortedByDate(), "bydate");
  } else {
    renderTodoPage(todosSortedByPrio(), "byprio");
  }
}

export { sortMethodChanged, sortMethod };
