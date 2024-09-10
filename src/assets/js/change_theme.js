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
const body = document.querySelector('body');


function changeTheme(oldThemes, newTheme) {
    elementsToTheme.forEach(element => {
        oldThemes.split(' ').forEach(oldTheme => {
            element.classList.remove(oldTheme);
        });
        element.classList.add(newTheme);
    });
}

function fadeOutBodyAndChangeTheme(selectedTheme) {
    body.classList.remove('animate__fadeIn');
    body.classList.add('animate__fadeOut');
    header.classList.add('animate__fadeOutUpBig');


    body.addEventListener('animationend', () => {
        body.classList.remove('animate__fadeOut');
        header.classList.remove('animate__fadeOutUpBig');
        body.classList.add('animate__fadeIn');
        
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

        imgBanner2.addEventListener('mouseover', () => {
            imgBanner.style.opacity = 0;
            imgBanner2.style.opacity = 1;
        });

        imgBanner2.addEventListener('mouseout', () => {
            imgBanner.style.opacity = 1;
            imgBanner2.style.opacity = 0;
        });

    }, { once: true });
}


themeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedTheme = radio.value;
        fadeOutBodyAndChangeTheme(selectedTheme);
    });
});


