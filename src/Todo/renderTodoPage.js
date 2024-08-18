
import clearPage from '../clearPage';
import createTodoCard from './createTodoCard';
import { todoLibrary } from './todoLibrary';

export default function renderTodoPage() {
    clearPage();
    todoLibrary.forEach(todo => {
        createTodoCard(todo.title, todo.description, todo.dueDate, todo.toDate, todo.priority);
    });
};