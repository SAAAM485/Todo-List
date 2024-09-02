export default function clearPage() {
  const mainContainer = document.querySelector(".mainContainer");
  const cardContainer = document.querySelector(".cardContainer");
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.lastChild);
  }
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.lastChild);
  }
}
