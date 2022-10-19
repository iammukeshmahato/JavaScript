// split() is uset to split the string at specified place
// it returns an array

let string = "today is 2 days of JavaScript";
console.log(string.split());    // ["today is 2 days of JavaScript"]
console.log(string.split(' ')); // [ 'today', 'is', '2', 'days', 'of', 'JavaScript' ]

let fname = "Mukesh";
console.log(fname.split());     // ["Mukesh"]
console.log(fname.split(''));     // [ 'M', 'u', 'k', 'e', 's', 'h' ]

let countries = "nepal, india, china, pakistan";
console.log(countries.split(","));  // [ 'nepal', ' india', ' china', ' pakistan' ]
console.log(countries.split(", "));  // [ 'nepal', ' india', ' china', ' pakistan' ]