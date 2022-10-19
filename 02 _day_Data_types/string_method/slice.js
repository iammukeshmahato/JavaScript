// slice(start, end) is used to extracts a part of a string

let str = "hello world";
console.log(str.slice(1,5));    // starts from 1th index and extract to (endpoint - 1) i.e 5-1 = 4th index, 
// ello

// if there is no end point specified then it will extract from start point to the last character of the string
console.log(str.slice(3,));     // lo world

// negative start point gives the character from the last of the string
console.log(str.slice(-5));     // world

// if a parameter is negative, the position is counted from the end of the string
str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);
console.log(part);