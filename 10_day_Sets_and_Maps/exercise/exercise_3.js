console.log("--------------------------");
console.log("\tExercise: Level 3");
console.log("--------------------------\n");

var { countries } = require('./data/countries_data');

// Q.1
const langs = [];
for (const country of countries) {
    country.languages.forEach(elem => {
        langs.push(elem);
    });
}

const totalLangs = new Set(langs);
console.log(`There ara ${totalLangs.size} languages`);  // There ara 112 languages

// Q.2
function mostSpokenLanguages(arr, len = 10) {
    const languages = [];
    const language_count = [];

    // extracting all languages in a single array
    arr.forEach(country => {
        for (const lang of country.languages) {
            languages.push(lang);
        }
    });

    // creating the set of languages
    const unique_lang = new Set(languages);

    // creating an empty array, to stores the object of langs and count.
    const counts = [];

    // storing the lang and count in the counts[].
    for (const lang of unique_lang) {
        const filtered_lang = languages.filter(elem => elem === lang);
        counts.push({ lang, count: filtered_lang.length });
    }

    // since counts is an array of object, we cannot use sort().
    // so first converting it into array of arrays

    return counts.map(elem => ([elem.lang, elem.count]))
        .sort((a, b) => a[1] - b[1])    // after mapping, sorting based on the count of langs
        .reverse()      // reversing to get highest count in top
        .slice(0, len)      // slicing to get desigred number of output
        .map(elem => ({ lang: elem[0], count: elem[1] }));     // mapping   again to get outputs in the form of array of objects
}

console.log(mostSpokenLanguages(countries, 10));
