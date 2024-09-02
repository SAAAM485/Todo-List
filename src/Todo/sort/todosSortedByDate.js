import { compareAsc } from "date-fns";
import { todoLibrary } from "../todoLibrary";

export default function todosSortedByDate() {
  function myCompareAsc(a, b) {
    return compareAsc(a.date, b.date);
  }
  const todosSortedByDate = todoLibrary.toSorted(myCompareAsc);
  return todosSortedByDate;
}
