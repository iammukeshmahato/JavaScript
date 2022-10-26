console.log("--------------------------");
console.log("\tExercise: Level 2");
console.log("--------------------------\n");

const { countries } = require('./data/countries_data.js');
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
let totalPrice = products.map(product => product.price).filter(price => price > 0).reduce((total, current) => total + current);

console.log(`Total Price = ${totalPrice}`);     // 27

// Q.2      // not solved

totalPrice = products.reduce((acc, obj) => {
    if (obj.price > 0) {
        return acc += obj.price
    } else
        return acc += 0
}, 0);

console.log(totalPrice);

// Q.3

function categorizeCountries(arr) {

    // first filter the countries having the following match and then mapping the data to get only name of the countries.
    const newArr = arr.filter(elem => {
        return elem.name.includes("land") || elem.name.includes("ia") || elem.name.includes("island") || elem.name.includes("stan");
    }).map(elem => elem.name);

    return newArr
}

console.log(categorizeCountries(countries));

// Q.4      // Not solved

console.log("Q.4 Not Solved");

function startingNameAndLength(arr) {
    const count = arr.reduce((acc, { name }) => {
        let firstChar = name[0];
        acc[firstChar] = (acc[firstChar] || 0) + 1;
        return acc;

    }, {})

    return Object
        .keys(count)
        .sort()
        .map(letter => ({ letter, count: count[letter] }));
}

console.log(startingNameAndLength(countries));

// console.log(countries.reduce((acc, { name }) => {
//     const firstChar = name[0];
//     acc[firstChar] = acc[firstChar];
//     acc[firstChar] = (acc[firstChar] || 0) + 1;
//     return acc
// }, {}));

// Q.5
function getFirstTenCountries(arr, len = 10) {
    // const newArr = new Array(len);
    const newArr = [];
    for (let i = 0; i < len; i++) {
        newArr.push(arr[i].name);
    }
    return newArr;
}

console.log(getFirstTenCountries(countries));

// Q.6

function getLastTenCountries(arr, len = 10) {
    // const newArr = new Array(len);
    const newArr = [];
    // for (let i = arr.length - 1, count = 0; count < len; i--, count++) {
    //     newArr.push(arr[i].name);
    // }
    for (let i = arr.length - 1; i >= arr.length - len; i--) {
        newArr.push(arr[i].name);
    }
    return newArr;
}

console.log(getLastTenCountries(countries));

// Q.7      // not solved

console.log("Q.7 Not Solved");

function getInitialCount(arr) {
    // reduce iterates for each element
    // getting name key of object using destructing i.e {name}

    const dataArr = arr.reduce((acc, { name }) => {

        let char = name[0];         // getting first character of the Country Name

        // acc is an object
        // acc[char] creates key of first character of country name: like Nepal => N:NaN;
        // (acc[char] || 0) check in the key does have any value or not if not it returns 0 else return the value
        // (5||0) returns 5;
        // after getting the value it add 1, for the same character.

        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, []);

    return Object
        .keys(dataArr)      // return the keys of the object       ['A', 'Å', 'B', 'U' ...]
        .sort()             // sort the key array                  ['A', 'B', 'C', 'D', 'E', 'F', ...]
        .map(elem => ({ char: elem, len: dataArr[elem] }))         // map dataArray in the given pattern i.e [{char: 'A', len: 1}, ...]
}

console.log(getInitialCount(countries));