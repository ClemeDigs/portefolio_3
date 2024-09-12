import projets from "./projets";

const projetsGrid = document.querySelector('.projets-grid');

projets.forEach((projet, index) => {
    projetsGrid.appendChild(projet.toGridHtml(index));
})