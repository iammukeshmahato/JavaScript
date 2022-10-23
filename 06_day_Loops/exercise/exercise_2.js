// Q.1
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const capAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "1234567890";
let arr = [alphabet, capAlph, num];
let len = 12 + (Math.floor(Math.random() * 10) + 1);
let str = "";

for (let i = 0; i < len; i++) {
    // getting random index from 0-2 since we have 3 dataset.
    let index = Math.floor(Math.random() * 3);

    // based on random index selecting dataset from arr and getting the length of the character in corresponding element.
    let selectedArrLen = arr[index].length;

    // randomly selecting character of particularly element of arr.
    str += arr[index].charAt(Math.floor(Math.random() * selectedArrLen));
}
console.log(str);

// Q.2
let hexNum = "#";
let hexRef = "1234567890abcdef";
for (let i = 0; i < 6; i++) {
    hexNum += hexRef[Math.floor(Math.random() * 16)];
}
console.log(hexNum);

// Q.3
let color = "";
color += `rbg(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
console.log(color);

// Q.4
// Approach 1
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
const newCountries = [];
for (const country of countries) {
    newCountries.push(country.toUpperCase());
}
// console.log(newCountries);

// Approach 2 - modifying original array
// for (const i in countries) {
// countries[i] = countries[i].toUpperCase();
// }
// console.log(countries);

// Q.5
let countriesLength = [];
for (const country of countries) {
    countriesLength.push(country.length);
}

console.log(countriesLength);

// Q.6
let newArr = [];
for (const country of countries) {
    let tempArr = [country, country.slice(0, 3).toUpperCase(), country.length];
    newArr.push(tempArr);
}
console.log(newArr);

// Q.7
const countriesData = require('./data/countries');
const countriesWithLand = [];
for (const country of countriesData.countries) {
    if (country.includes("land")) {
        countriesWithLand.push(country);
    }
}

countriesWithLand.length > 0 ? console.log(countriesWithLand) : console.log(countriesData.countries);

// Q.8
countriesWithIA = [];
for (const country of countriesData.countries) {
    if (country.endsWith("ia")) {
        countriesWithIA.push(country);
    }
}
countriesWithIA.length > 0 ? console.log(countriesWithIA) : console.log(countriesData.countries);

// Q.9
countryWithHighestChar = "";
let largest = countriesData.countries[0].length;
for (const country of countriesData.countries) {
    if (country.length > largest) {
        largest = country.length;
        // countriesWithIA.push(country);
        countryWithHighestChar = country;
    }
}
console.log(countryWithHighestChar);

// Q.10
countriesWithFiveChar = [];
for (const country of countriesData.countries) {
    if (country.length == 5) {
        countriesWithFiveChar.push(country)
    }
}
console.log(countriesWithFiveChar);

// Q.11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

webTechWithHighestChar = "";
largest = webTechs[0].length;
for (const tech of webTechs) {
    if (tech.length > largest) {
        largest = tech.length
        webTechWithHighestChar = tech;
    }
}
console.log(webTechWithHighestChar);


// Q.12
const techWithLength = [];
for (const tech of webTechs) {
    let tempArr = [tech, tech.length];
    techWithLength.push(tempArr)
}
console.log(techWithLength);

// Q.13
const mernStack = ["MongoDB", "Express", "React", "Node"];
console.log(mernStack);
let acronym = "";
for (const tech of mernStack) {
    acronym += tech[0];
}
console.log(acronym);

// Q.14
for (const tech of webTechs) {
    console.log(tech);
}

// Q.15
const fruits = ['banana', 'orange', 'mango', 'lemon'];
// not solved

// Q.16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
console.log(fullStack);
for (const tech of fullStack) {
    Array.isArray(tech) ?
        tech.forEach(elem => {
            console.log(elem);
        }) : console.log(tech);
}