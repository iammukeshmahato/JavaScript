// including the required data files
const { countries } = require('./data/countries.js');
const { webTechs } = require('./data/web_techs.js');

// Q.1
console.log(countries);
console.log(webTechs);

// Q.2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let replacedText = text.replace(/[\.\,]/g, "");
let words = replacedText.split(" ");
console.log(words)
console.log(words.length)

// Q.3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
console.log(shoppingCart);

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
console.log(shoppingCart);

console.log(shoppingCart.indexOf("Tea"));
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

// Q.4
countries.includes("Ethiopia") ? countries[countries.indexOf("Ethiopia")] = countries[countries.indexOf("Ethiopia")].toUpperCase() : countries.push("Ethiopia");

// Q.5
webTechs.includes("Sass") ? console.log("Sass is a CSS preprocess") : webTechs.push("Sass");
console.log(webTechs);

// Q.6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack)