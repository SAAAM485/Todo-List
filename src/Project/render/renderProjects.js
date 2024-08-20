import { projectLibrary } from '../projectLibrary';
import createCards from '../../Todo/createCards';
import deleteProject from '../deleteProject';
import renderProjectBar from './renderProjectBar';
import clearPage from '../../clearPage';

export default function renderProjects() {
    clearPage();
    projectLibrary.forEach((project, index) => {
        let card = createCards(project.title, project.description, project.dueDate, project.toDate, project.priority);
        card.delBtn.addEventListener('click', () => {
            deleteProject(index);
            renderProjectBar();
            renderProjects();
        });
        card.editBtn.addEventListener('click', () => {

        });
    });
};