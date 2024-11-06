import Slider from "./slider";

document.addEventListener("DOMContentLoaded", () => {
  const slider = new Slider();

  const filterIcon = document.querySelector(".filter-icon");
  const filtersDiv = document.querySelector(".filters");
  const projets = document.querySelectorAll(".div-projet");
  const filters = document.querySelectorAll(".checkbox-filter");

  filterIcon.addEventListener("click", () => {
    filtersDiv.classList.toggle("hidden");
  });

  filters.forEach((filter) => {
    filter.addEventListener("change", () => {
      let activeFilters = [];

      filters.forEach((filter) => {
        if (filter.checked) {
          activeFilters.push(filter.getAttribute("data-filter"));
        }
      });

      projets.forEach((projet) => {
        const projetCategories = projet.getAttribute("data-filter").split(" ");

        if (activeFilters.length === 0) {
          projet.style.display = "";
        } else {
          const isMatch = activeFilters.some((filter) =>
            projetCategories.includes(filter)
          );

          projet.style.display = isMatch ? "" : "none";
        }
      });

      slider.updateSlides();
      slider.hideBtns();
    });
  });
});
