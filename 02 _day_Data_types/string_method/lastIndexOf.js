// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// returns -1 if match not found

// string.lastIndexOf("char")

let string = "this is me mukesh mahato mukesh";
console.log(string.lastIndexOf("mukesh"));   // 25
console.log(string.lastIndexOf("mahato"));   // 18
console.log(string.lastIndexOf("alexa"));   // -1

// lastIndexOf() methods accept a second parameter as the starting position for the search:
// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

console.log(string.lastIndexOf("mukesh", 15));  // 11 for the first match
console.log(string.lastIndexOf("mukesh", 25));  // 25 for the second match because search starts from 25th index