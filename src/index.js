import projectDiolog from './Project/projectDialog';
import './style.css';
import todoDiolog from './Todo/todoDialog';

function RenderUI() {
    const dialog = document.querySelector('dialog');
    const cancelBtn = document.querySelector('#cancel_btn');
    cancelBtn.addEventListener('click', () => dialog.close());
}

function listeners() {
    const dialog = document.querySelector('dialog');
    const cancelBtn = document.querySelector('#cancel_btn');
    cancelBtn.addEventListener('click', () => dialog.close());

    const StartProjectBtn = document.querySelector('#startProject');
    StartProjectBtn.addEventListener('click', projectDiolog);

    const addTodoBtn = document.querySelector('#addTodo');
    addTodoBtn.addEventListener('click', todoDiolog);
}

listeners();