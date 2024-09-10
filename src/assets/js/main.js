import "animate.css";
import WOW from "wow.js";
import Projet from "./Projet";
import projets from "./projets";
import "./handle_scroll";
import "./filters";
import "./change_theme";



new WOW().init();

const dialog = document.getElementById('dialog-projets');
const projetsGrid = document.querySelector('.projets-grid');
const dialogContentHtml = dialog.querySelector('.dialog-content');
const btnNext = dialog.querySelector('.btn-next');
const btnPrevious = dialog.querySelector('.btn-previous');

projets.forEach((projet, index) => {
    projetsGrid.appendChild(projet.toGridHtml(index));
})

btnNext.addEventListener('click', () => {
    let currentIndex = dialogContentHtml.getAttribute('data-index');
    if(currentIndex < projets.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    dialogContentHtml.setAttribute('data-index', currentIndex);
    dialogContentHtml.innerHTML = '';
    dialogContentHtml.appendChild(projets[currentIndex].toDetailHtml());
})

btnPrevious.addEventListener('click', () => {
    let currentIndex = dialogContentHtml.getAttribute('data-index');
    if(currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = projets.length -1;
    }
    dialogContentHtml.setAttribute('data-index', currentIndex);
    dialogContentHtml.innerHTML = '';
    dialogContentHtml.appendChild(projets[currentIndex].toDetailHtml());
})


