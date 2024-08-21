import { todoLibrary } from "./todoLibrary";

export default function createCards(
    title,
    description,
    dueDate,
    toDate,
    priority
) {
    const mainContainer = document.querySelector(".mainContainer");
    const cardDiv = document.createElement("div");
    const cardTitle = document.createElement("div");
    const cardDescription = document.createElement("div");
    const cardDueDate = document.createElement("div");
    const cardToDate = document.createElement("div");
    const cardPriority = document.createElement("div");
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    cardTitle.textContent = title;
    cardDescription.textContent = description;
    cardDueDate.textContent = dueDate;
    cardToDate.textContent = toDate;
    cardPriority.textContent = priority;
    editBtn.textContent = "Edit";
    delBtn.textContent = "Delete";

    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardDescription);
    cardDiv.appendChild(cardDueDate);
    cardDiv.appendChild(cardToDate);
    cardDiv.appendChild(cardPriority);
    cardDiv.appendChild(editBtn);
    cardDiv.appendChild(delBtn);
    mainContainer.appendChild(cardDiv);

    return { delBtn, editBtn, cardDiv };
}
