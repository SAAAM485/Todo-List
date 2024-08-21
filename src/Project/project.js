const Project = function (title, description, date, dueDate, toDate, priority, todos = []) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.dueDate = dueDate;
    this.toDate = toDate;
    this.priority = priority;
    this.todos = todos;
};

export default Project;
