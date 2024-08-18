export default class Projet {
    constructor(img, title, desc, task, categorie, date, link, id) {
        this.img = img;
        this.title = title;
        this.desc = desc;
        this.task = task;
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
        const titleHtml = document.createElement('h3');
        const taskHtml = document.createElement('p');
        const dateHtml = document.createElement('p');
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
                } else if (selectedTheme === 'color') {
                    cardHtml.className = 'div-projet theme-color';
                    cardInfoHtml.className = 'div-info theme-color';
                    imgHtml.className = 'img-projet theme-color';
                } else if (selectedTheme === 'dark') {
                    cardHtml.className = 'div-projet theme-dark';
                    cardInfoHtml.className = 'div-info theme-dark';
                    imgHtml.className = 'img-projet theme-dark';
                }
            });
        });
        
        /* titleHtml.classList.add('');
        taskHtml.classList.add('');
        dateHtml.classList.add('');*/
        btnMore.classList.add('btn-secondary');  

        titleHtml.textContent = this.title;
        taskHtml.textContent = this.task;
        dateHtml.textContent = this.date;
        btnMore.textContent = 'En savoir plus';

        btnMore.addEventListener('click', () => {
            dialogContentHtml.innerHTML = '';
            dialogContentHtml.setAttribute('data-index', index);
            dialogContentHtml.appendChild(this.toDetailHtml());
        })

        cardHtml.appendChild(cardInfoHtml);
        cardHtml.appendChild(imgHtml);
        cardInfoHtml.appendChild(titleHtml);
        cardInfoHtml.appendChild(taskHtml);
        cardInfoHtml.appendChild(dateHtml);
        cardInfoHtml.appendChild(btnMore);

        return cardHtml;
    }

    toDetailHtml() {
        const detailHtml = document.createElement('div');
        const detailContentHtml = document.createElement('div');
        const titleHtml = document.createElement('h3');
        const descHtml = document.createElement('p');
        const linkHtml = document.createElement('a');

        detailHtml.classList.add('card-detail');
        detailContentHtml.classList.add('project-details-container');

        linkHtml.setAttribute('href', this.link);

        titleHtml.textContent = this.title;
        descHtml.textContent = this.desc;
        linkHtml.textContent = 'Visitez';

        detailHtml.appendChild(detailContentHtml);
        detailContentHtml.appendChild(titleHtml);
        detailContentHtml.appendChild(descHtml);
        detailContentHtml.appendChild(linkHtml);

        return detailHtml;
    }

}
