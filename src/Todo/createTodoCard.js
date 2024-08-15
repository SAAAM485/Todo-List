export default function createTodoCard(title, description, dueDate, priority) {
    const mainContainer = document.querySelector('.mainContainer');
    const todoCard = document.createElement('div');
    const todoTitle = document.createElement('div');
    const todoDescription = document.createElement('div');
    const todoDueDate = document.createElement('div');
    const todoPriority = document.createElement('div');
    const editBtn = document.createElement('button')
    const delBtn = document.createElement('button')

    todoTitle.textContent = title;
    todoDescription.textContent = description;
    todoDueDate.textContent = dueDate;
    todoPriority.textContent = priority;
    editBtn.textContent = 'Edit';
    delBtn.textContent = 'Delete';

    todoCard.appendChild(todoTitle);
    todoCard.appendChild(todoDescription);
    todoCard.appendChild(todoDueDate);
    todoCard.appendChild(todoPriority);
    todoCard.appendChild(editBtn);
    todoCard.appendChild(delBtn);
    mainContainer.appendChild(todoCard);
};