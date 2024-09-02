import { compareAsc } from "date-fns";
import { projectLibrary } from "../projectLibrary";

export default function projectTodosSortedByDate(index) {
  function myCompareAsc(a, b) {
    return compareAsc(a.date, b.date);
  }
  const projectTodosSortedByDate =
    projectLibrary[index].todos.toSorted(myCompareAsc);
  return projectTodosSortedByDate;
}
