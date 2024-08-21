import { updateProjectTodoLibrary } from "../Todo/todoLibrary";
import { format, formatDistanceToNow } from "date-fns";

export default function addProjectTodoHandler(event, index) {
    event.preventDefault();
    const dialog = document.querySelector("dialog");
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#due_date").value;
    const dueDate = format(date, "MMM dd y");
    const toDate = `${formatDistanceToNow(dueDate)} left`;
    const priority = document.querySelector(
        'input[name="priority"]:checked'
    ).value;
    dialog.close();
    updateProjectTodoLibrary(
        index,
        title,
        description,
        date,
        dueDate,
        toDate,
        priority
    );
}
