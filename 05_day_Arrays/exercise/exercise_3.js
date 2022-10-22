const { countries } = require('./data/countries');

// Q.1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);

console.log(`Median = ${ages.length % 2 == 0 ? ((ages[ages.length / 2] + ages[ages.length / 2 + 1]) / 2) : console.log(ages.length)}`);

let sum = 0;
ages.map(age => {
    sum += age;
})
let avg = sum / ages.length
console.log(avg);

console.log(ages[ages.length - 1] - ages[0]);
let min = ages.sort()[0];
let max = ages.sort()[ages.length - 1];
console.log(`The average = ${avg} and Min = ${min}`);
console.log(`The average = ${avg} and max = ${max}`);
console.log(`The average greater than min by ${Math.abs(avg - min)}`);
console.log(`The average smaller than max by ${Math.abs(avg - max)}`);

console.log(countries.slice(0, 10));

// Q.2
let middleCountry = countries.length % 2 == 0 ? countries[countries.length / 2] : countries[(countries.length + 1) / 2];
console.log(middleCountry);

// Q.3
let firstHalf = countries.length % 2 == 0 ? countries.slice(0, countries.length / 2) : countries.slice(0, (countries.length + 1) / 2);
console.log(firstHalf.length);
// console.log(firstHalf);

let secondHalf = countries.length % 2 == 0 ? countries.slice(countries.length / 2) : countries.slice((countries.length + 1) / 2);
console.log(secondHalf.length);
// console.log(secondHalf);