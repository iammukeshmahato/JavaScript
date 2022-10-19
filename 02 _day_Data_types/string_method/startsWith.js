// startsWith(): it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// it is case sensitive

// string.startsWith(substring)

let string = 'Love is the best thing in this world'
console.log(string.startsWith('Love')) // true
console.log(string.startsWith('love')) // false
console.log(string.startsWith('Love is')) // true

let country = 'Nepal'
console.log(country.startsWith('nep')) // false
console.log(country.startsWith('Nep')) // true
console.log(country.startsWith('Nepal')) //  true
