import { todoLibrary } from "../todoLibrary";

export default function deleteTodo(todoArr, index) {
  const ogIndex = todoLibrary.findIndex(
    (todo) => todo.title === todoArr[index].title,
  );
  todoLibrary.splice(ogIndex, 1);
}
