import { updateTodoLibrary } from "./todoLibrary";

export default function addTodoHandler(event) {
    event.preventDefault();
    const dialog = document.querySelector('dialog');
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#due_date').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;;
    dialog.close();
    updateTodoLibrary(title, description, dueDate, priority)
};