console.log("--------------------------");
console.log("\tExercise: Level 2");
console.log("--------------------------\n");

var a = [4, 5, 8, 9];
var b = [3, 4, 5, 7];

// Q.1
// A union B

const A = new Set(a);
const B = new Set(b);
var c = [...a, ...b];
const AB = new Set(c);

console.log(AB);    // Set(6) { 4, 5, 8, 9, 3, 7 }

// Q.2
//  a intersection b

var c = a.filter(elem => B.has(elem))
var C = new Set(c);
console.log(C);     // Set(2) { 4, 5 }

// Q.3
// a difference b

var c = a.filter(elem => !B.has(elem))
var C = new Set(c);
console.log(C);     // { 8, 9 }