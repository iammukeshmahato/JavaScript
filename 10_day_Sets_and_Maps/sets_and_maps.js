// Set  - is a collection of unique elements

// creating an empty set

const names = new Set();
console.log(names);     // Set(0) {}

// creating set from array

const languages = ['English', 'Finnish', 'English', 'French', 'Spanish', 'English', 'French']

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);    // Set(4) { 'English', 'Finnish', 'French', 'Spanish' }

// iterating through the sets
for (const languages of setOfLanguages) {
    console.log(languages);
}

// Adding an element to a set

console.log(names);     // Set(0) {}
names.add('Mukesh');
names.add('Ram');
names.add('Shyam');
names.add('Gita');

console.log(names.size);        // 4
console.log(names);        // Set(4) { 'Mukesh', 'Ram', 'Shyam', 'Gita' }

// using loop to add element to a set

const tempName = ['Ram', 'Shyam', 'Gita', 'Hari'];
const setOfNames = new Set();
for (const name of tempName) {
    setOfNames.add(name)
}
console.log(setOfNames);    // Set(4) { 'Ram', 'Shyam', 'Gita', 'Hari' }

// Deleting an element of a set

console.log(setOfNames.delete('Ram'));  // true
console.log(setOfNames);    // Set(3) { 'Shyam', 'Gita', 'Hari' }

// checking an element in the set
console.log(setOfNames.has('Ram'));     // false
console.log(setOfNames.has('Hari'));     // true

// Clearing the set - clear()
console.log(setOfNames);    // Set(3) { 'Shyam', 'Gita', 'Hari' }
setOfNames.clear()
console.log(setOfNames);    // Set(0) {}

// Union of sets
var a = [1, 2, 3, 4, 5]
var b = [3, 4, 5, 6]
var c = [...a, ...b]        // (...)spread operator is used to copy the element of one array into the another array with new memory location

console.log(c);     //[ 1, 2, 3, 4, 5, 3, 4, 5, 6]

var A = new Set(a);
var B = new Set(b);
var C = new Set(c);

console.log(C)      // Set(6) { 1, 2, 3, 4, 5, 6 }

// Intersection of sets
// it can be done using filter method

var a = [1, 2, 3, 4, 5];
var b = [3, 4, 5, 6];

var A = new Set(a);
var B = new Set(b);

var c = a.filter((elem) => B.has(elem));      // since filter method returns an array, it will be an array
var C = new Set(c)

console.log(C);     // Set(3) { 3, 4, 5 }

// Difference of a set
// difference of set A and set B (A\B) - Set A should not contain any elements of set B

var a = [1, 2, 3, 4, 5];
var b = [3, 4, 5, 6];

var A = new Set(a);
var B = new Set(b);

var c = a.filter((elem) => !B.has(elem));      // since filter method returns an array, it will be an array
var C = new Set(c)

console.log(C);     // Set(2) { 1, 2 }

// Map  - It is like Associative array in php
// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

// creating an empty Map

const map = new Map();
console.log(map);   // Map(0) {}

// creating map from array

countries = [
    ['Finland', 'Helsinki',],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
    ['Nepal', 'KTM']
]
const country_map = new Map(countries);
console.log(country_map);

// Map(4) {
//     'Finland' => 'Helsinki',
//      'Sweden' => 'Stockholm',
//      'Norway' => 'Oslo',
//      'Nepal' => 'KTM'
// }

console.log(country_map.size);  // 4

// Adding values to the map
// set() is used to add values to the map.

country_map.set('India', 'Delhi');
console.log(country_map);
console.log(country_map.size);  // 5

// Getting a value from map
// get() is used to get the value form map

console.log(country_map.get('India'));      // Delhi

// Checking key in Map
// has() is used to check for key in Map

console.log(country_map.has('India'));      // true
console.log(country_map.has('China'));      // false

// Getting all the values from the Map using loop

for (const country of country_map) {
    console.log(country);
}

for (const [country, city] of country_map) {
    console.log(country, city);
}
// OUTPUT

// Finland Helsinki
// Sweden Stockholm
// Norway Oslo
// Nepal KTM
// India Delhi

// creating map of food

const food = new Map();
food.set('Breakfast', ['momo', 'chaumin', 'burger', 'Pizza']);
food.set('Lunch', ['a', 'b', 'c']);
food.set('Dinner', ['x', 'y', 'z']);

console.log(food);

// Map(3) {
//     'Breakfast' => ['momo', 'chaumin', 'burger', 'Pizza'],
//     'Lunch' => ['a', 'b', 'c'],
//     'Dinner' => ['x', 'y', 'z']
// }

console.log(food.get('Breakfast'));     // [ 'momo', 'chaumin', 'burger', 'Pizza' ]

