console.log("--------------------------");
console.log("\tExercise: Level 1");
console.log("--------------------------\n");

// Q.1 
const { countries } = require('./data/countries_data');
// console.table(countries);
console.log('Q.2 [Not Solved]');
console.log('Q.3 [Not Solved]');

console.log("--------------------------");
console.log("\tExercise: Level 2");
console.log("--------------------------\n");

// Q.1

console.assert(10 > 2 * 10, "Failled");

// Q.2
console.warn("This is a warning message");

// Q.3
console.error("This is an error message");

console.log("--------------------------");
console.log("\tExercise: Level 3");
console.log("--------------------------\n");

// Q.1

console.time('while loop');
var i = 0;
console.log(countries.length);
while (i < countries.length) {
    console.log(countries[i]);
    i++;
}
console.timeEnd('while loop');      // while loop: 10.787ms

console.time('for loop');
var i = 1;
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
console.timeEnd('for loop');        // for loop: 10.18ms

console.time('forof loop');
for (const country of countries) {
    console.log(country);
}
console.timeEnd('forof loop');      // forof loop: 10.708ms

console.time('forEach loop');
countries.forEach(elem => {
    console.log(elem);
})
console.timeEnd('forEach loop');    // forEach loop: 10.26ms