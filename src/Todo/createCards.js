export default function createCards(
  title,
  description,
  dueDate,
  toDate,
  priority,
  done,
) {
  const cardContainer = document.querySelector(".cardContainer");
  const cardDiv = document.createElement("div");
  const cardTitle = document.createElement("div");
  const cardDescription = document.createElement("div");
  const cardDueDate = document.createElement("div");
  const cardToDate = document.createElement("div");
  const cardPriority = document.createElement("div");
  const doneBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  cardTitle.textContent = title;
  cardDescription.textContent = description;
  cardDueDate.textContent = dueDate;
  cardToDate.textContent = toDate;
  cardPriority.textContent = priority;
  doneBtn.textContent = "Done";
  editBtn.textContent = "Edit";
  delBtn.textContent = "Delete";
  cardDiv.classList.add("card");
  if (done === true) {
    cardDiv.classList.add("done");
    editBtn.disabled = true;
    doneBtn.disabled = true;
  }

  cardDiv.appendChild(cardTitle);
  cardDiv.appendChild(cardDescription);
  cardDiv.appendChild(cardDueDate);
  cardDiv.appendChild(cardToDate);
  cardDiv.appendChild(cardPriority);
  cardDiv.appendChild(doneBtn);
  cardDiv.appendChild(editBtn);
  cardDiv.appendChild(delBtn);
  cardContainer.appendChild(cardDiv);

  return { doneBtn, delBtn, editBtn, cardDiv };
}
