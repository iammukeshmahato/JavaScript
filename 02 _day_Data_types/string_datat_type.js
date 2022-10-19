let fname = 'Mukesh';   // Single Quotes
let lname = "Mahato";  // Double Quotes
console.log(fname);
console.log(lname);

// single quotes in doulble quotes
let fullName = "Mukesh 'Mahato' ";
console.log(fullName);


// double quotes in single quotes
fullName ='"Mukesh "Mahato" ';
console.log(fullName);

// Escape Character
console.log("Hi it\'s me mukesh.");     // \' returns '
console.log("Hi it\'s me mukesh. i am learning \"JavaScript\".");     // \" returns 
console.log("\\\" is used to insert double quotes");     // \" returns 

console.log("\\n is used to create new line.\nthis is new line.");
console.log("\\t is used to give a tab space like \t this..");
console.log("\\v is used to give a vartical tabulator like \v this...");

// creating string using String Object.
let myNewString = new String("This is new string");
console.log(myNewString);