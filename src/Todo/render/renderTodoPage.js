
import clearPage from '../../clearPage';
import createCards from '../createCards';
import renderSortMethod from './renderSortMethod';
import { todoLibrary } from '../todoLibrary';
import todosSortedByDate from '../sort/todosSortedByDate';
import todosSortedByPrio from '../sort/todoSortedByPrio';
import deleteTodo from '../deleteTodojs';

export default function renderTodoPage(todoArr = todoLibrary, method = 'bycreate') {
    clearPage(); 
    renderSortMethod(method);

    todoArr.forEach((todo, index) => {
        let card = createCards(todo.title, todo.description, todo.dueDate, todo.toDate, todo.priority);
        card.delBtn.addEventListener('click', () => {
            deleteTodo(index);
            renderTodoPage(todoArr, method);
        });
        card.editBtn.addEventListener('click', () => {

        });
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