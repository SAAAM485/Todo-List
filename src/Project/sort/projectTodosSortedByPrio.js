import { projectLibrary } from "../projectLibrary";

export default function projectTodosSortedByPrio(index) {
  function comparePrio(a, b) {
    if (a.priority < b.priority) {
      return -1;
    }
    if (a.priority > b.priority) {
      return 1;
    }
    return 0;
  }
  const projectTodosSortedByPrio =
    projectLibrary[index].todos.toSorted(comparePrio);
  return projectTodosSortedByPrio;
}
