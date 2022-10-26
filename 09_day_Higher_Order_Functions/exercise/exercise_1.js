console.log("--------------------------");
console.log("\tExercise: Level 1");
console.log("--------------------------\n");

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Q.1
// forEach() is used to execute the same code on every element in an Array.
// map() is used to execute the same code on evey element in an array and returns a new array with the updated elements.
// filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.
// reduce() it returns single value after performing some function on all elements of the array

// Q.2
let sum = 0;

// callback function
function sumArr(num) {
    return sum += num;
}

// let arr = [5, 6, 4, 7, 4];
numbers.forEach(sumArr);
console.log(sum);   // 55

// for map()

function AddFive(elem) {
    return elem = elem + 5;
}

// arr = [1, 2, 3, 4, 5];
const fiveAddedArr = numbers.map(AddFive);
console.log(fiveAddedArr);      // [6,  7,  8,  9, 10, 11, 12, 13, 14, 15]

// for filter()

function elemGreaterThanFive(elem) {
    return elem > 5
}
// arr = [1, 2, 3, 4, 5, 6, 7, 4, 9];
const num_greater_than_five = numbers.filter(elemGreaterThanFive);
console.log(num_greater_than_five);     // [ 6, 7, 8, 9, 10 ]

// for reduce()

function reduce(total, current) {
    return total = total - current;
}

// arr = [6, 7, 9];
console.log(numbers.reduce(reduce, 25));          // 25-1-2-3-4-5-6-7-8-9-10 = -30
console.log(numbers.reduce(reduce, 5));          // 5-1-2-3-4-5-6-7-8-9-10 = -50
console.log(numbers.reduce(reduce));            // 1-2-3-4-5-6-7-8-9-10 = -53
console.log(numbers.reduce(reduce, 0));        // 0-1-2-3-4-5-6-7-8-9-10 = -55



// Q.3
countries.forEach(country => console.log(country));

console.log();  // for line break

// Q.4
names.forEach(name => console.log(name));

console.log();  // for line break

// Q.5
numbers.forEach(num => console.log(num))

// Q.6
const countriesUpper = countries.map(country => country.toUpperCase());

console.log(countriesUpper);      //  [ 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND' ]

// Q.7
const countriesNameLength = countries.map(name => name.length);
console.log(countriesNameLength);   // [ 7, 6, 7, 6, 7 ]

// Q.8
const square_numbers = numbers.map(num => num * num);
console.log(square_numbers);        // [1,  4,  9, 16,  25, 36, 49, 64, 81, 100]

// Q.9
const upperName = names.map(name => name.toUpperCase());
console.log(upperName);     // [ 'ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK' ]

// Q.10
const prices = products.map(product => product.price);
console.log(prices);    // [ 3, 6, ' ', 8, 10, '' ]

// Q.11
const countries_with_land = countries.filter(country => country.includes("land"));
console.log(countries_with_land);   // [ 'Finland' ]

// Q.12
const countriesName_with_six_char = countries.filter(country => country.length == 6)
console.log(countriesName_with_six_char);   // [ 'Sweden', 'Norway' ]

// Q.13
const countriesName_with_six_char_or_more = countries.filter(country => country.length >= 6)
console.log(countriesName_with_six_char_or_more);   // [ 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand' ]

// Q.14
const countriesName_stars_with_E = countries.filter(country => country.startsWith("E"));
console.log(countriesName_stars_with_E);    // []

// Q.15     // not solved
const prices_with_value = products.filter(product => product.price > 0)
console.log(prices_with_value);

// Q.16
function getStringLists(arr) {
    if (arr.every(elem => typeof elem === "string"))
        return arr
    else
        return "Not a string array";
}
let arr = ["a", "b", "c"];
console.log(getStringLists(arr));   // [ 'a', 'b', 'c' ]

arr = ["a", "b", "c", 4];
console.log(getStringLists(arr));   // Not a string array

// Q.17
let totalSum = numbers.reduce((total, first) => total + first, 0)
console.log(totalSum);    // 55

// Q.18
let output = countries.reduce((str, name) => {
    if (name == countries[countries.length - 2])
        return str.concat(name, " and ");
    else if (name == countries[countries.length - 1])
        return str.concat(name, " are north European countries");
    else
        return str.concat(name, ", ");
}, "");
console.log(output);    // Finland, Sweden, Denmark, Norway and IceLand are north European countries

// Q.19
// The Array.some() method in JavaScript is used to check whether at least one of the elements of the array satisfies the given condition or not.
// The Array.every() method in JavaScript is used to check whether at all the elements of the array satisfies the given condition or not.

// Q.20
let isName_with_seven_or_more_char = names.some(name => name.length >= 7);
console.log(isName_with_seven_or_more_char);  // true

// Q.21
let isCountryContainsWordLand = countries.every(con => con.includes("land"));
console.log(isCountryContainsWordLand);     // false because all the elements not contains 'land'

// Q.22
// find() -> return the element of the match 
// findIndex() -> return the index of the match 

// Q.23
let sixLetters = countries.find(country => country.length == 6);
console.log(sixLetters);    // Sweden - it is the first element which match the given condition

// Q.24
let indexOfSixLetters = countries.findIndex(country => country.length == 6);
console.log(indexOfSixLetters);    // 1 - it is the index of the element which match the given condition

// Q.25
let indexOfNorway = countries.findIndex(elem => elem === "Norway");
console.log(indexOfNorway);     // 3 - index of Norway in the countries array

indexOfNorway = countries.findIndex(elem => elem === "norway");
console.log(indexOfNorway);     // -1

// Q.26
indexOfNorway = countries.findIndex(elem => elem === "Russia");
console.log(indexOfNorway);     // -1 because Russia does not exist in countries array
