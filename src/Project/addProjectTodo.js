import { updateProjectTodoLibrary } from "../Todo/todoLibrary";
import { format, formatDistanceToNow } from "date-fns";
import renderProjectPage from "./render/renderProjectPage.js";

export default function addProjectTodoHandler(event) {
    event.preventDefault();
    const addBtn = document.querySelector("#add_btn");
    const dialog = document.querySelector("dialog");
    const index = dialog.dataset.index;
    dialog.dataset.index = "";
    const dialogForm = document.querySelector("form");
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#due_date").value;
    const priority = document.querySelector('input[name="priority"]:checked');

    if (
        dialog !== "" &&
        title !== "" &&
        description !== "" &&
        date !== "" &&
        priority !== null
    ) {
        const dueDate = format(date, "MMM dd y");
        const toDate = `${formatDistanceToNow(dueDate)} left`;
        const priorityValue = document.querySelector(
            'input[name="priority"]:checked'
        ).value;

        updateProjectTodoLibrary(
            index,
            title,
            description,
            date,
            dueDate,
            toDate,
            priorityValue
        );

        renderProjectPage();

        addBtn.removeEventListener("click", addProjectTodoHandler, true);

        dialog.close();
        dialogForm.reset();
    }
}
