import clearPage from "../../clearPage";
import createCards from "../createCards";
import renderSortMethod from "./renderSortMethod";
import { todoLibrary } from "../todoLibrary";
import deleteTodo from "../edit_delete/deleteTodo.js";
import { editTodo } from "../edit_delete/editTodo.js";
import editTodoDialog from "../edit_delete/editTodoDialog.js";
import { sortMethodChanged, sortMethod } from "../sort/sortMethod.js";

export default function renderTodoPage(
    todoArr = todoLibrary,
    method = "bycreate"
) {
    clearPage();
    renderSortMethod(method);

    todoArr.forEach((todo, index) => {
        let card = createCards(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.toDate,
            todo.priority
        );
        card.delBtn.addEventListener("click", () => {
            deleteTodo(todoArr, index);
            sortMethod();
        });
        card.editBtn.addEventListener("click", () => {
            editTodo(todoArr, index);
            editTodoDialog(todoArr, index, method);
        });
    });
    sortMethodChanged();
}
