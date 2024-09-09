document.addEventListener('DOMContentLoaded', () => {
    const filterIcon = document.querySelector('.filter-icon');
    const filtersDiv = document.querySelector('.filters');
    const projets = document.querySelectorAll('.div-projet');
    const filters = document.querySelectorAll('.checkbox-filter');

    filterIcon.addEventListener('click', () => {
        filtersDiv.classList.toggle('hidden');
    });

    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            let activeFilters = [];

            // Trouver tous les filtres cochés
            filters.forEach(filter => {
                if (filter.checked) {
                    activeFilters.push(filter.getAttribute('data-filter'));
                }
            });

            // Afficher ou masquer les projets en fonction des filtres actifs
            projets.forEach(projet => {
                const projetCategories = projet.getAttribute('data-filter').split(' ');

                // Si aucun filtre n'est actif, afficher tous les projets
                if (activeFilters.length === 0) {
                    projet.style.display = '';
                    return;
                }

                // Si le projet correspond à au moins un filtre actif, l'afficher
                //some() permet de vérifier si au moins un élément d'un tableau répond à la condition donnée
                const isMatch = activeFilters.some(filter => projetCategories.includes(filter));

                if (isMatch) {
                    projet.style.display = '';
                } else {
                    projet.style.display = 'none';
                }
                
            });
        });
    });
});
