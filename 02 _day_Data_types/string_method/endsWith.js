// endsWith(): it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// it is case sensitive

// string.endsWith(substring)

let string = 'Love is the best thing in this world'
console.log(string.endsWith('world')) // true
console.log(string.endsWith('love')) // false
console.log(string.endsWith('in this world')) // true

let country = 'nepal'
console.log(country.endsWith('pal')) // true
console.log(country.endsWith('Pal')) // false
console.log(country.endsWith('al')) //  true
