function applyTheme(element, selectedTheme) {
    element.classList.remove('theme-classic', 'theme-color', 'theme-dark');

    if (selectedTheme === 'classic') {
        element.classList.add('theme-classic');
    } else if (selectedTheme === 'color') {
        element.classList.add('theme-color');
    } else if (selectedTheme === 'dark') {
        element.classList.add('theme-dark');
    }
}

const themeRadios = document.querySelectorAll('input[name="btn-switch-theme"]');
themeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedTheme = radio.value;

        const elementsToTheme = document.querySelectorAll('.theme-classic, .theme-color, .theme-dark');
        elementsToTheme.forEach(element => {
            applyTheme(element, selectedTheme);
        });
    });
});


export default class Projet {
    constructor(img, title, desc, task, detail, categorie, date, link, id) {
        this.img = img;
        this.title = title;
        this.desc = desc;
        this.task = task;
        this.detail = detail;
        this.categorie = categorie;
        this.date = date;
        this.link = link;
        this.id = id;
    }

    toGridHtml(index){
        const dialogContentHtml = document.querySelector('#dialog-projets .dialog-content');
        const cardHtml = document.createElement('div');
        const cardInfoHtml = document.createElement('div');
        const imgHtml = document.createElement('img');
        const infoProjet = document.createElement('div');
        const titleHtml = document.createElement('h3');
        const taskHtml = document.createElement('p');
        const descHtml = document.createElement('p');
        const dateHtml = document.createElement('p');
        const iconeFleche = document.createElement('i');
        const btnMore = document.createElement('button');

        cardHtml.setAttribute('data-filter', this.categorie.join(' '));
        imgHtml.setAttribute('src', this.img);
        imgHtml.setAttribute('alt', this.title);
        btnMore.setAttribute('data-dialog', '#dialog-projets');

        cardHtml.className = 'div-projet theme-classic';
        cardInfoHtml.className = 'div-info theme-classic';
        imgHtml.className = 'img-projet theme-classic';

        infoProjet.className = 'info-projet theme-classic';
        titleHtml.className = 'card-title theme-classic';
        taskHtml.className = 'card-task theme-classic';
        dateHtml.className = 'card-date theme-classic';
        btnMore.className = 'btn-secondary btn-info theme-classic';
        iconeFleche.className = 'fa-solid fa-arrow-right';

        titleHtml.textContent = this.title;
        taskHtml.textContent = this.task;
        descHtml.textContent = this.desc;
        dateHtml.textContent = this.date;
        btnMore.textContent = 'En savoir plus ';

        btnMore.addEventListener('click', () => {
            dialogContentHtml.innerHTML = '';
            dialogContentHtml.setAttribute('data-index', index);
            dialogContentHtml.appendChild(this.toDetailHtml());
        });

        cardHtml.appendChild(cardInfoHtml);
        cardHtml.appendChild(imgHtml);
        cardInfoHtml.appendChild(infoProjet);
        infoProjet.appendChild(titleHtml);
        infoProjet.appendChild(taskHtml);
        infoProjet.appendChild(descHtml);
        infoProjet.appendChild(dateHtml);
        cardInfoHtml.appendChild(btnMore);
        btnMore.appendChild(iconeFleche);

        return cardHtml;
    }


    toDetailHtml() {
        const detailHtml = document.createElement('div');
        const detailContentHtml = document.createElement('div');
        const imgHtml = document.createElement('img');
        const titleHtml = document.createElement('h3');
        const detailTextHtml = document.createElement('ul');
        this.detail.forEach(pointDetail => {
            const li = document.createElement('li');
            li.textContent = pointDetail;
            detailTextHtml.appendChild(li);
        });
        const iconeFleche = document.createElement('i');
        const linkHtml = document.createElement('a');

        imgHtml.setAttribute('src', this.img);
        imgHtml.setAttribute('alt', this.title);
        linkHtml.setAttribute('href', this.link);
        linkHtml.setAttribute('target', '_blank');
        
        detailHtml.classList.add('card-detail');
        detailContentHtml.classList.add('project-details-container');
        detailTextHtml.classList.add('list-details');
        iconeFleche.className = 'fa-solid fa-arrow-right';
        linkHtml.className = 'link-visitez theme-classic'
        imgHtml.className = 'img-modale-projet theme-classic';
    
        const selectedTheme = document.querySelector('input[name="btn-switch-theme"]:checked').value;
        applyTheme(imgHtml, selectedTheme);
        applyTheme(detailHtml, selectedTheme);
        applyTheme(detailContentHtml, selectedTheme);
    
        titleHtml.textContent = this.title;
        linkHtml.textContent = 'Visitez';
    
        detailHtml.appendChild(detailContentHtml);
        detailContentHtml.appendChild(imgHtml);
        detailContentHtml.appendChild(titleHtml);
        detailContentHtml.appendChild(detailTextHtml);
        detailContentHtml.appendChild(linkHtml);
        linkHtml.appendChild(iconeFleche);
    
        return detailHtml;
    }
}

