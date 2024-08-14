import {projectLibrary, updateProjectLibrary} from './projectLibrary.js';

export default function addProjectHandler(event) {
    event.preventDefault();
    const dialog = document.querySelector('dialog');
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#due_date').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;;
    dialog.close();
    console.log(title);
    updateProjectLibrary(title, description, dueDate, priority)
}