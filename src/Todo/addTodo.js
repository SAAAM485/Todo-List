import { updateTodoLibrary } from "./todoLibrary";
import { format, formatDistanceToNow } from 'date-fns';

export default function addTodoHandler(event) {
    event.preventDefault();
    const dialog = document.querySelector('dialog');
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = format(document.querySelector('#due_date').value, 'MMM dd y');
    const toDate = `${formatDistanceToNow(dueDate)} left`;
    const priority = document.querySelector('input[name="priority"]:checked').value;;
    dialog.close();
    updateTodoLibrary(title, description, dueDate, toDate, priority)
};