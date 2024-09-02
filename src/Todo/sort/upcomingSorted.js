import { todoLibrary } from "../todoLibrary";
import { isBefore } from "date-fns";
import todosSortedByDate from "./todosSortedByDate";

export default function upcomingSorted() {
  function twoWeeks(todo) {
    const currentTime = new Date();
    return isBefore(todo.date, currentTime.setDate(currentTime.getDate() + 14));
  }
  const sortedByDate = todosSortedByDate();
  const upcomingSorted = sortedByDate.filter(twoWeeks);
  return upcomingSorted;
}
