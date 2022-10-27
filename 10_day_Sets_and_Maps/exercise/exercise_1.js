console.log("--------------------------");
console.log("\tExercise: Level 1");
console.log("--------------------------\n");

var a = [4, 5, 8, 9]
var b = [3, 4, 5, 7]
var countries = ['Finland', 'Sweden', 'Norway']

// Q.1
const set = new Set();

// Q.2
const numSet = new Set();
for (let i = 1; i <= 10; i++) {
    numSet.add(i);
}
console.log(numSet);    // Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// Q.3
numSet.delete(1);
console.log(numSet);    // Set(9) { 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// Q.4
numSet.clear()
console.log(numSet);    // Set(0) {}

// Q.5
const tempArr = ['a', 'b', 'b', 'c', 'd', 'e', 'e', 'f', 'g', 'a', 'b'];
const setOfAlpha = new Set(tempArr);
console.log(setOfAlpha);    // Set(7) { 'a', 'b', 'c', 'd', 'e', 'f', 'g' }

// Q.6
const country_char = countries.map(elem => ([elem, elem.length]));
console.log(country_char);      // [ [ 'Finland', 7 ], [ 'Sweden', 6 ], [ 'Norway', 6 ] ]

const country = new Map(country_char);
console.log(country);   // Map(3) { 'Finland' => 7, 'Sweden' => 6, 'Norway' => 6 }