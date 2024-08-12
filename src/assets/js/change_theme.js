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

btnSwitchTheme.addEventListener('click', () => {
    imgBanner.style.opacity = 0;

    setTimeout(() => {
        // Déterminer quel thème appliquer et changer les classes
        if (document.body.classList.contains('theme-color')) {
            changeTheme('theme-color', 'theme-dark');
            imgBanner.setAttribute('src', imgFemmeDark);
            imgBanner2.setAttribute('src', imgFemmeDark2);
            applyAnimations('fadeOutUp', 'slideOutRight');
        } else if (document.body.classList.contains('theme-dark')) {
            changeTheme('theme-dark', 'theme-classic');
            imgBanner.setAttribute('src', imgFemmeClassic);
            imgBanner2.setAttribute('src', imgFemmeClassic);
            removeAnimations();
        } else {
            changeTheme('theme-classic', 'theme-color');
            imgBanner.setAttribute('src', imgFemmeColor);
            imgBanner2.setAttribute('src', imgFemmeColor2);
            applyAnimations('fadeOutUp', 'slideOutRight');
        }
        imgBanner.style.opacity = 1;
    }, 1000);
});

function changeTheme(oldTheme, newTheme) {
    elementsToTheme.forEach(element => {
        element.classList.remove(oldTheme);
        element.classList.add(newTheme);
    });
}

function applyAnimations(headerAnimation, projetsAnimation) {
    header.classList.add('animate__animated', `animate__${headerAnimation}`);
    mesProjets.classList.add('animate__animated', `animate__${projetsAnimation}`);
}

function removeAnimations() {
    header.classList.remove('animate__fadeOutUp', 'animate__slideInDown');
    mesProjets.classList.remove('animate__slideOutRight', 'animate__slideInRight');
}

header.addEventListener('animationend', () => {
    header.classList.remove('animate__fadeOutUp');
    header.classList.add('animate__slideInDown');
});

mesProjets.addEventListener('animationend', () => {
    mesProjets.classList.remove('animate__slideOutRight');
    mesProjets.classList.add('animate__slideInRight');
});

imgBanner2.addEventListener('mouseover', () => {
    imgBanner.style.opacity = 0;
    imgBanner2.style.opacity = 1;
});

imgBanner2.addEventListener('mouseout', () => {
    imgBanner.style.opacity = 1;
    imgBanner2.style.opacity = 0;
});
