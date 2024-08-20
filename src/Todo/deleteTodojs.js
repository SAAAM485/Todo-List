import { todoLibrary } from './todoLibrary';

export default function deleteTodo(index) {
    todoLibrary.splice(index, 1);
};