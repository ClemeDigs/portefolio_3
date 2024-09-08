import imgFemmeColor from '../img/femme-color.png';
import imgFemmeColor2 from '../img/femme-color-02.png';
import imgFemmeDark from '../img/femme-dark-01.png';
import imgFemmeDark2 from '../img/femme-dark-02.png';
import imgFemmeClassic from '../img/femme-classique.png';

const btnSwitchTheme = document.querySelector('.theme-switcher');
const imgBanner = document.querySelector('.img__banner');
const imgBanner2 = document.querySelector('.img__banner-2');
const elementsToTheme = document.querySelectorAll('body, body *');
const header = document.querySelector('header');
const mesProjets = document.querySelector('.mes-projets');
const themeRadios = document.querySelectorAll('input[name="btn-switch-theme"]');
const footerDark = document.querySelector('.footer-theme-dark');

// Fonction pour changer de thème en fonction de la valeur sélectionnée
function changeTheme(oldThemes, newTheme) {
    elementsToTheme.forEach(element => {
        // Supprimer chaque ancienne classe individuellement
        oldThemes.split(' ').forEach(oldTheme => {
            element.classList.remove(oldTheme);
        });
        // Ajouter la nouvelle classe
        element.classList.add(newTheme);
    });
}

// Écouter le changement de chaque radio et appliquer le thème sélectionné
themeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        // Déterminer quel thème appliquer en fonction de la valeur du bouton radio sélectionné
        const selectedTheme = radio.value;

        if (selectedTheme === 'color') {
            changeTheme('theme-dark theme-classic', 'theme-color');
            imgBanner.setAttribute('src', imgFemmeColor);
            imgBanner2.setAttribute('src', imgFemmeColor2);
            footerDark.classList.add('hidden');
        } else if (selectedTheme === 'dark') {
            changeTheme('theme-color theme-classic', 'theme-dark');
            imgBanner.setAttribute('src', imgFemmeDark);
            imgBanner2.setAttribute('src', imgFemmeDark2);
            footerDark.classList.remove('hidden');
        } else {
            changeTheme('theme-color theme-dark', 'theme-classic');
            imgBanner.setAttribute('src', imgFemmeClassic);
            imgBanner2.setAttribute('src', imgFemmeClassic);
            footerDark.classList.add('hidden');
        }
    });
});


imgBanner2.addEventListener('mouseover', () => {
    imgBanner.style.opacity = 0;
    imgBanner2.style.opacity = 1;
});

imgBanner2.addEventListener('mouseout', () => {
    imgBanner.style.opacity = 1;
    imgBanner2.style.opacity = 0;
});

