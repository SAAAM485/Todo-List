export default function renderSortMethod(method) {
  const sortMethod = document.createElement("select");
  const byCreate = document.createElement("option");
  const byDate = document.createElement("option");
  const byPrio = document.createElement("option");

  byCreate.value = "bycreate";
  byCreate.textContent = "Sort By Created Date";
  byDate.value = "bydate";
  byDate.textContent = "Sort By Date";
  byPrio.value = "byprio";
  byPrio.textContent = "Sort By Priority";

  if (method == "bycreate") {
    byCreate.selected = true;
  } else if (method == "bydate") {
    byDate.selected = true;
  } else {
    byPrio.selected = true;
  }

  sortMethod.appendChild(byCreate);
  sortMethod.appendChild(byDate);
  sortMethod.appendChild(byPrio);

  return sortMethod;
}
