// includes() methods takes a substring as argument and returns true if the substring exits in the string and false it it doesn't exist.
// it is case sensitive

// string.includes(substring) <- true or false

let string = "i am learning JavaScript";
console.log(string.includes('am'));     // true
console.log(string.includes('Am'));     // false
console.log(string.includes('learn'));     // true
console.log(string.includes('Learn'));     // false
console.log(string.includes('learning'));     // true
console.log(string.includes('java'));     // false
console.log(string.includes('Java'));     // true