const btnSwitchTheme = document.querySelector('.theme-switcher');

function handleScroll() {
    const header = document.querySelector('body header');
    // const btnFlecheUp = document.getElementById('btn-up');
    const body = document.body;

    if (body.classList.contains('theme-color')) {
        if (document.documentElement.scrollTop > 100) {
            header.classList.add('minimized');
            // btnFlecheUp.classList.remove('hidden');
        } else {
            header.classList.remove('minimized');
            // btnFlecheUp.classList.add('hidden');
        }
    } else {
        header.classList.remove('minimized');
    }
}

window.onscroll = () => {
    handleScroll();
};

btnSwitchTheme.addEventListener('click', () => {
    handleScroll();
});
