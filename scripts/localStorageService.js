const createFavoriteCountriesArray = () => {
    const favoriteCountries = JSON.parse(localStorage.getItem("favoriteCountries"));

    // If there are no favorite countries array in the local storage.
    // Create an empty array.
    if (!favoriteCountries || !Array.isArray(favoriteCountries)) {
        const emptyArray = [];
        localStorage.setItem("favoriteCountries", JSON.stringify(emptyArray));
    }
};

createFavoriteCountriesArray();

const saveToFavorite = (countryName) => {
    const favoriteCountries = JSON.parse(localStorage.getItem("favoriteCountries"));

    // If there are favorite countries array in the local storage.
    if (favoriteCountries) {
        // Updating the array.
        favoriteCountries.push(countryName);
        // Saving the updated array to the local storage.
        localStorage.setItem("favoriteCountries", JSON.stringify(favoriteCountries));
    }
};

const removeFromFavorite = (countryName) => {
    const favoriteCountries = JSON.parse(localStorage.getItem("favoriteCountries"));

    // If there are favorite countries array in the local storage.
    if (favoriteCountries) {
        // Updating the array.
        const updatedFavoriteCountries = favoriteCountries.filter(
            (country) => country !== countryName
        );
        // Saving the updated array to the local storage.
        localStorage.setItem("favoriteCountries", JSON.stringify(updatedFavoriteCountries));
    }
};

const isCountryFavorite = (countryName) => {
    const favoriteCountries = JSON.parse(localStorage.getItem("favoriteCountries"));

    // If there are favorite countries array in the local storage.
    if (favoriteCountries) {
        return favoriteCountries.includes(countryName);
    }
};

const isFavoriteCountriesListEmpty = () => {
    const favoriteCountries = JSON.parse(localStorage.getItem("favoriteCountries"));

    // If there are favorite countries array in the local storage.
    if (favoriteCountries) {
        return favoriteCountries.length === 0;
    }

    return false;
};

export { saveToFavorite, removeFromFavorite, isCountryFavorite, isFavoriteCountriesListEmpty };
