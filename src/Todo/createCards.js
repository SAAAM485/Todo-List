import { todoLibrary } from "./todoLibrary";

export default function createCards(title, description, dueDate, toDate, priority) {
    const mainContainer = document.querySelector('.mainContainer');
    const card = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardDescription = document.createElement('div');
    const cardDueDate = document.createElement('div');
    const cardToDate = document.createElement('div');
    const cardPriority = document.createElement('div');
    const editBtn = document.createElement('button')
    const delBtn = document.createElement('button')

    cardTitle.textContent = title;
    cardDescription.textContent = description;
    cardDueDate.textContent = dueDate;
    cardToDate.textContent = toDate;
    cardPriority.textContent = priority;
    editBtn.textContent = 'Edit';
    delBtn.textContent = 'Delete';

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardDueDate);
    card.appendChild(cardToDate);
    card.appendChild(cardPriority);
    card.appendChild(editBtn);
    card.appendChild(delBtn);
    mainContainer.appendChild(card);

    return { delBtn, editBtn };
};