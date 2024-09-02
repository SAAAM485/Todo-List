const Project = function (
  title,
  description,
  date,
  dueDate,
  toDate,
  priority,
  todos = [],
  done = false,
) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.dueDate = dueDate;
  this.toDate = toDate;
  this.priority = priority;
  this.todos = todos;
  this.done = done;
};

export default Project;
