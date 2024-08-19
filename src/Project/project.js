const Project = function (title, description, date, dueDate, toDate, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.dueDate = dueDate;
    this.toDate = toDate;
    this.priority = priority;
    this.todos = [];
};

export default Project;