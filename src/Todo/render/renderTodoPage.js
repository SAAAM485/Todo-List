
import clearPage from '../../clearPage';
import createTodoCard from '../createTodoCard';
import renderSortMethod from './renderSortMethod';
import { todoLibrary } from '../todoLibrary';
import todosSortedByDate from '../sort/todosSortedByDate';
import todosSortedByPrio from '../sort/todoSortedByPrio';

export default function renderTodoPage(todoArr = todoLibrary, method = 'bycreate') {
    clearPage(); 
    renderSortMethod(method);

    todoArr.forEach(todo => {
        createTodoCard(todo.title, todo.description, todo.dueDate, todo.toDate, todo.priority);
    });
    const sortMethod = document.querySelector('select');
    sortMethod.addEventListener('change', () => {
        if (sortMethod.value == 'bycreate') {
            renderTodoPage();
        } else if (sortMethod.value == 'bydate') {
            renderTodoPage(todosSortedByDate(), 'bydate')
        } else {
            renderTodoPage(todosSortedByPrio(), 'byprio')
        }
    });
};