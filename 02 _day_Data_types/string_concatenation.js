let fname = "Mukesh";
let lname = "Mahato";
let space = " ";
let age = 21;
let country = "Nepal";
let city = "Lahan";
let lang = "JavaScript";

// concatenating using addition operator
let fullName = fname + space + lname;
console.log(fullName);

// concatenation using ES6
let info = 'I am ' + fullName + ".";
console.log(info);

// concatenation using Template Literals ES6
let info2 = `I am ${fullName}. I am ${age} years old. I live in ${city}, ${country}. I am currently learning ${lang}.`;
console.log(info2);