import { updateProjectTodoLibrary } from '../Todo/todoLibrary';

export default function addProjectTodoHandler(event,index) {
    event.preventDefault();
    const dialog = document.querySelector('dialog');
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#due_date').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;;
    dialog.close();
    updateProjectTodoLibrary(index, title, description, dueDate, priority);
};