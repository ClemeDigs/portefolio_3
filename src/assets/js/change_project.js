const projectsDetails = document.querySelectorAll('.card-detail');
const btnsNext = document.querySelectorAll('.btn-next');
const btnsPrevious = document.querySelectorAll('.btn-previous');
const modalsContents = document.querySelectorAll('.project-details-container'); 

let currentIndex = 0;

btnsNext.forEach(btnNext => {
    
    btnNext.addEventListener('click', () => {
        console.log(projectsDetails.length);
        currentIndex = (currentIndex + 1);
        console.log(currentIndex);
        updateModalContent(currentIndex);
    });
});


btnsPrevious.forEach(btnPrevious => {
    btnPrevious.addEventListener('click', () => {
        currentIndex = (currentIndex - 1);
        updateModalContent(currentIndex);
    });
});


function updateModalContent() {
    projectsDetails.forEach(projectDetail => {
        projectDetail.innerHtml = projectDetail[currentIndex];
    })
}
