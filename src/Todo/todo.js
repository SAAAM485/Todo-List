const Todo = function (
  title,
  description,
  date,
  dueDate,
  toDate,
  priority,
  done = false,
) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.dueDate = dueDate;
  this.toDate = toDate;
  this.priority = priority;
  this.done = done;
};

export default Todo;
