// [] can be used to access the character of the string
// it makes string looks like an array (but actully they are not)

let str = "hello world";
console.log(str[6]);    // w

console.log(str[17]);   // undefined because character is not found at index 17

// It is only used to read the char from the string 
// we cannot assign value by this

str[17] = "M";  // error
console.log(str[17]);   // undefined