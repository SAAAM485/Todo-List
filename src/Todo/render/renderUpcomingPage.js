import clearPage from "../../clearPage";
import createCards from "../createCards";
import deleteTodo from "../edit_delete/deleteTodo.js";
import { editTodo } from "../edit_delete/editTodo.js";
import editTodoDialog from "../edit_delete/editTodoDialog.js";
import upcomingSorted from "../sort/upcomingSorted.js";

export default function renderUpcomingPage(todoArr = upcomingSorted()) {
  clearPage();

  todoArr.forEach((todo, index) => {
    let card = createCards(
      todo.title,
      todo.description,
      todo.dueDate,
      todo.toDate,
      todo.priority,
    );
    card.doneBtn.addEventListener("click", () => {
      const ogIndex = todoLibrary.findIndex(
        (thisTodo) => thisTodo.title === todo.title,
      );
      todoLibrary[ogIndex].done = true;
    });
    card.delBtn.addEventListener("click", () => {
      deleteTodo(todoArr, index);
      renderUpcomingPage();
    });
    card.editBtn.addEventListener("click", () => {
      editTodo(todoArr, index);
      editTodoDialog(todoArr, index);
      renderUpcomingPage();
    });
  });
}
