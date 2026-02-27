import { isCountryFavorite } from "./localStorageService.js";

const getCountries = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const allCountries = await getCountries();
console.log(allCountries);

const allCountriesData = {};
await allCountries.forEach((country) => {
    allCountriesData[country.name.common] = country;
});

const allCountriesNames = new Set(allCountries.map((country) => country.name.common));
let namesOfShownCountries = [...allCountriesNames];

const resetShownCountries = () => {
    namesOfShownCountries = [...allCountriesNames];
};

const setShownCountries = (countries) => {
    console.log("Been in setShownCountries");
    namesOfShownCountries = countries;
};

const searchCountry = (country, showFavorites = false) => {
    const countryName = country.toLowerCase();

    const filteredCountries = allCountries
        .filter((word) => {
            const wordLower = word.name.common.toLowerCase();
            if (showFavorites) {
                console.log(
                    "IN FAVORITES FILTERING",
                    wordLower.includes(countryName) && isCountryFavorite(word.name.common)
                );

                return wordLower.includes(countryName) && isCountryFavorite(word.name.common);
            } else {
                return wordLower.includes(countryName);
            }
        })
        .map((country) => country.name.common);

    console.log("Been in searchCountry", filteredCountries);

    return filteredCountries;
};

const sortCountries = (countries, type, by = "name") => {
    const sortByMap = {
        name: (countryData) => countryData.name.common.toLowerCase(),
        region: (countryData) => countryData.region.toLowerCase(),
        population: (countryData) => +countryData.population,
    };

    // If the result returns an undefined value break out of the function and return.
    if (!sortByMap[by] && by !== "without") {
        console.log("by = ", by);
        console.log("sortByMap[by] = ", sortByMap[by]);
        return;
    }

    if (by === "without") {
        namesOfShownCountries = [...countries];
        return namesOfShownCountries;
    }

    console.log("Before Sorting\n", namesOfShownCountries);

    namesOfShownCountries = [...countries]
        // The sort method is a destructive method,
        // hence why we use a shallow copy of allCountries array.
        .sort((curr, next) => {
            // Getting the actual object that contains all of the data from the allCountriesData map.
            const currValue = sortByMap[by](allCountriesData[curr]);
            const nextValue = sortByMap[by](allCountriesData[next]);

            // If statement is true the next value switch places with the current value.
            // When the currentValue and nextValue are of type string,
            // the comparison is done by dictionary-like order (lexicographically).
            // NOTE: This if statements are telling the sort method how to rearrange the array,
            //       based on this logic and result values:
            //       1 -> next value needs to go before the current value.
            //       -1 -> next value needs to go after the current value.
            //       0 -> order does not change.
            if (type === "asc") return currValue > nextValue ? 1 : currValue < nextValue ? -1 : 0;
            if (type === "desc") return currValue < nextValue ? 1 : currValue > nextValue ? -1 : 0;

            // No sorting.
            return 0;
        });

    console.log("After Sorting:");
    namesOfShownCountries.forEach((country) => {
        const countryData = allCountries.filter((c) => c.name.common === country)[0];
        console.log("Name:", country, "Population:", countryData.population);
    });

    return namesOfShownCountries;
};

export {
    allCountries,
    namesOfShownCountries,
    searchCountry,
    resetShownCountries,
    setShownCountries,
    sortCountries,
};
