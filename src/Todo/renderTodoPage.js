import createTodoCard from './createTodoCard';
import { todoLibrary } from './todoLibrary';

export default function renderTodoPage() {
    todoLibrary.forEach(todo => {
        createTodoCard(todo.title, todo.description, todo.dueDate, todo.priority);
    });
};