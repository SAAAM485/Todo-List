import { updateTodoLibrary } from "./todoLibrary";
import { format, formatDistanceToNow } from 'date-fns';

export default function addTodoHandler(event) {
    event.preventDefault();
    const dialog = document.querySelector('dialog');
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const date = document.querySelector('#due_date').value;
    const dueDate = format(date, 'MMM dd y');
    const toDate = `${formatDistanceToNow(dueDate)} left`;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    
    dialog.close();
    updateTodoLibrary(title, description, date, dueDate, toDate, priority)
};