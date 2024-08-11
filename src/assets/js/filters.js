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
            
            // Parcourir tous les filtres pour trouver ceux qui sont cochés
            filters.forEach(filter => {
                if (filter.checked) {
                    activeFilters.push(filter.getAttribute('data-filter'));
                }
            });

            // Parcourir tous les projets pour afficher ou masquer selon les filtres actifs
            projets.forEach(projet => {
                const projetCategories = projet.getAttribute('data-filter').split(' ');
                let isMatch = true;

                // Vérifier si le projet correspond à tous les filtres actifs
                activeFilters.forEach(filter => {
                    if (!projetCategories.includes(filter)) {
                        isMatch = false;
                    }
                });

                // Afficher ou masquer le projet
                if (isMatch || activeFilters.length === 0) {
                    projet.style.display = '';
                } else {
                    projet.style.display = 'none';
                }
            });
        });
    });
});
