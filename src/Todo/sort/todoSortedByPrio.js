import { todoLibrary } from "../todoLibrary";

export default function todosSortedByPrio() {
  function comparePrio(a, b) {
    if (a.priority < b.priority) {
      return -1;
    }
    if (a.priority > b.priority) {
      return 1;
    }
    return 0;
  }
  const todosSortedByPrio = todoLibrary.toSorted(comparePrio);
  return todosSortedByPrio;
}
