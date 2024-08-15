export default function clearPage() {
    const mainContainer = document.querySelector('.mainContainer');
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.lastChild);
    }
};