import projectDiolog from './projectDialog';
import './style.css';

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
}

listeners();