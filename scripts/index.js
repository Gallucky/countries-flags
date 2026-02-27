import {
    allCountries,
    namesOfShownCountries,
    searchCountry,
    setShownCountries,
    sortCountries,
} from "./countriesService.js";

import {
    arrangeCountriesCards,
    reorderCountryCards,
    showAndHideMessageNoFavoriteCountries,
} from "./domService.js";

const searchInput = document.getElementById("search-input");
let filteredCountries = namesOfShownCountries;

const orderBy = document.getElementById("search-sort");
const orderType = document.getElementById("btn-sort");
const orderByOptions = orderBy.querySelectorAll(".select-option");

// By default, hide the sort type button.
orderType.style.display = "none";

const showFavoritesCheckBox = document.querySelector("#show-favorites > input");
let showFavorites = false;

// Updating based on the show favorites checkbox state.
showFavoritesCheckBox.addEventListener("change", () => {
    console.log("Show favorites changed from", showFavorites, "→", showFavoritesCheckBox.checked);
    showFavorites = showFavoritesCheckBox.checked;

    filteredCountries = searchCountry(searchInput.value, showFavorites);
    setShownCountries(filteredCountries);
    arrangeCountriesCards();

    // Reorder the country cards.
    sortCountries(filteredCountries, orderType.dataset.orderType, orderBy.dataset.value);
    reorderCountryCards();

    showAndHideMessageNoFavoriteCountries(showFavorites);
});

// Order by custom select element's options onclick event listener.
orderByOptions.forEach((option) => {
    option.onclick = (e) => {
        // Preventing the event from bubbling up to the custom select element.
        // This will prevent multiple event actions from happening together.
        e.stopPropagation();

        // Removing the selected class from all options.
        orderByOptions.forEach((option) => {
            option.classList.remove("selected");
        });

        // Adds the selected class to the selected option.
        option.classList.toggle("selected");

        // Closing the custom select element.
        orderBy.classList.remove("active");

        orderBy.querySelector(".select-value").innerText = option.innerText;
        orderBy.dataset.value = option.dataset.value;

        if (orderBy.dataset.value === "without") {
            orderType.style.display = "none";
        } else {
            orderType.style.display = "block";
        }

        console.log(
            "Here in index.js - order by options foreach in option.onclick clicked occurred!"
        );

        // Reorder the country cards.
        sortCountries(filteredCountries, orderType.dataset.orderType, orderBy.dataset.value);
        reorderCountryCards();
    };
});

// Search input event listener.
searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value;
    filteredCountries = searchCountry(searchValue, showFavorites);
    setShownCountries(filteredCountries);

    arrangeCountriesCards();

    console.log("orderBy:", orderBy);

    console.log("orderBy.dataset.value:", orderBy.dataset.value);
    console.log("orderType.dataset.orderType:", orderType.dataset.orderType);

    // Reorder the country cards.
    sortCountries(filteredCountries, orderType.dataset.orderType, orderBy.dataset.value);
    console.log("Found the following countries: ", filteredCountries);
    reorderCountryCards();
});
