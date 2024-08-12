const themeStylesheet = document.getElementById('theme-stylesheet');
const btnPrevious = document.querySelector('.slider__btn--previous');
const btnNext = document.querySelector('.slider__btn--next');
const slides = document.querySelectorAll('.div-projet');
const slidesContainer = document.querySelector('.projets-grid');
const body = document.body;

let progressBar = document.querySelector('.progress__bar');
let currentSlideIndex = 0;
let intervalValue;

function changeProgress(){
    let progressValue = (currentSlideIndex + 1) / slides.length * 100;
    progressBar.style.width = progressValue + '%';
}

function updateSlidePosition() {
    const slideWidth = slides[0].offsetWidth;
    slidesContainer.scrollLeft = slideWidth * currentSlideIndex;
}

function nextSlide(){
    currentSlideIndex = Math.min(slides.length - 1, currentSlideIndex + 1);
    changeProgress();
    updateSlidePosition();
}

function previousSlide(){
    currentSlideIndex = Math.max(0, currentSlideIndex - 1);
    changeProgress();
    updateSlidePosition();
}

function hideBtns(){
    if (currentSlideIndex === 0){
        btnPrevious.classList.add('slider__btn--previous--hidden');
    } else {
        btnPrevious.classList.remove('slider__btn--previous--hidden');
    }

    if (currentSlideIndex === slides.length - 1){
        btnNext.classList.add('slider__btn--next--hidden');
    } else {
        btnNext.classList.remove('slider__btn--next--hidden');
    }
}

function changeSlide() {
    intervalValue = setInterval(() => {
        if (currentSlideIndex === slides.length - 1){
            currentSlideIndex = 0;
        } else {
            currentSlideIndex++;
        }
        updateSlidePosition();
        changeProgress();
        hideBtns();
    }, 3000);
}

hideBtns();

btnPrevious.addEventListener('click', () => {
    previousSlide();
    hideBtns();
});

btnNext.addEventListener('click', () => {
    nextSlide();
    hideBtns();
});

changeSlide();
