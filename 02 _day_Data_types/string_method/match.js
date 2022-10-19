// match(): it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

// string.match(substring) <- returns the index

let string = "i love JavaScript";
let patternOne = /love/;
let patternTwo = /love/gi;  // g for global, i for case insensitivity
console.log(string.match(patternOne));     // 2

string = "i love JavaScript. if you do not love javascript what else can youl love";
console.log(string.match(patternTwo));

/* output
    [ 'love', index: 2, input: 'i love JavaScript', groups: undefined ]
    [ 'love', 'love', 'love' ]
*/

