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

        const themeRadios = document.querySelectorAll('input[name="btn-switch-theme"]');

        themeRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                const selectedTheme = radio.value;

                if (selectedTheme === 'classic') {
                    cardHtml.className = 'div-projet theme-classic';
                    cardInfoHtml.className = 'div-info theme-classic';
                    imgHtml.className = 'img-projet theme-classic';
                    btnMore.className = 'btn-secondary btn-info theme-classic'
                } else if (selectedTheme === 'color') {
                    cardHtml.className = 'div-projet theme-color';
                    cardInfoHtml.className = 'div-info theme-color';
                    imgHtml.className = 'img-projet theme-color';
                    btnMore.className = 'btn-secondary btn-info theme-color'
                } else if (selectedTheme === 'dark') {
                    cardHtml.className = 'div-projet theme-dark';
                    cardInfoHtml.className = 'div-info theme-dark';
                    imgHtml.className = 'img-projet theme-dark';
                    btnMore.className = 'btn-secondary btn-info theme-dark'
                }
            });
        });
        
        infoProjet.className = 'info-projet theme-classic';
        titleHtml.className = 'card-title theme-classic';
        taskHtml.className = 'card-task theme-classic';
        dateHtml.className = 'card-date theme-classic';
        btnMore.className = 'btn-secondary btn-info theme-classic';
        iconeFleche.className = 'fa-solid fa-arrow-right';

        titleHtml.textContent = this.title;
        taskHtml.textContent = this.task;
        dateHtml.textContent = this.date;
        btnMore.textContent = 'En savoir plus ';

        btnMore.addEventListener('click', () => {
            dialogContentHtml.innerHTML = '';
            dialogContentHtml.setAttribute('data-index', index);
            dialogContentHtml.appendChild(this.toDetailHtml());
        })

        cardHtml.appendChild(cardInfoHtml);
        cardHtml.appendChild(imgHtml);
        cardInfoHtml.appendChild(infoProjet)
        infoProjet.appendChild(titleHtml);
        infoProjet.appendChild(taskHtml);
        infoProjet.appendChild(dateHtml);
        cardInfoHtml.appendChild(btnMore);
        btnMore.appendChild(iconeFleche);

        return cardHtml;
    }

    toDetailHtml() {
        const detailHtml = document.createElement('div');
        const detailContentHtml = document.createElement('div');
        const titleHtml = document.createElement('h3');
        const descHtml = document.createElement('p');
        const detailTextHtml = document.createElement('p');
        const linkHtml = document.createElement('a');

        detailHtml.classList.add('card-detail');
        detailContentHtml.classList.add('project-details-container');

        linkHtml.setAttribute('href', this.link);
        linkHtml.setAttribute('target', '_blank');

        titleHtml.textContent = this.title;
        descHtml.textContent = this.desc;
        detailTextHtml.textContent = this.detailTextHtml;
        linkHtml.textContent = 'Visitez';

        detailHtml.appendChild(detailContentHtml);
        detailContentHtml.appendChild(titleHtml);
        detailContentHtml.appendChild(descHtml);
        detailContentHtml.appendChild(detailTextHtml);
        detailContentHtml.appendChild(linkHtml);

        return detailHtml;
    }

}
