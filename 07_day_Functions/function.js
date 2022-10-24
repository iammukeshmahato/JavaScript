// function declaration
function square() {
    let num = 5;
    let sq = num * num;
    console.log(sq);
}
square()    // 25

// function with parameter
function squareWithParam(num) {
    let sq = num * num;
    console.log(sq);
}

squareWithParam(4)    // 16

// function with retun value
function myName() {
    let fname = "Mukesh";
    let lname = "Mahato";
    let fullName = `${fname} ${lname}`;
    return fullName;
}
console.log(myName());  // Mukesh Mahato

function sumOfTwo(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(sumOfTwo(5, 6)); // 11

// function with multiple paramaters

function multipleParam(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
    }
    return sum;
}
const nummbers = [1, 2, 3, 4, 5];
console.log(multipleParam(nummbers));

// function with unlimited number of parameters
function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum += element;
    }
    return sum;
}
console.log(sumAllNums(1, 2, 4));     // 7
console.log(sumAllNums(5, 4, 6, 8, 9));     // 32
console.log(sumAllNums(5, 4, 6, 8, 9, 12, 3, 4, 6));        // 57

// arrow function with unlimited number of parameters

const sumAllNumss = (...param) => {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        const element = param[i];
        sum += element;
    }
    return sum;
}

console.log(sumAllNumss(1, 2, 3));    // 6
console.log(sumAllNumss(1, 2, 3, 4, 5));    // 15
console.log(sumAllNumss(1, 2, 3, 4, 5, 6, 7, 8));  // 36

// Anonymous Function
const AnonymousFunction = function () {
    console.log("This is an Anonymous Function.");
}
AnonymousFunction();

// Function expression
const squareExp = function (n) {
    return n * n
}

console.log(squareExp(2)) // 4

// // self invoking function
// (function () {
//     console.log("I am self Self Invoking Functions");
// })();

// (function (n) {
//     console.log(`square of ${n} = ${n * n}`);
// })(10);     // 100

// Arrow Function
const arrowSquare = n => n * n
console.log(arrowSquare(5))   // 25

// 
const printName = (fname, lname) => {
    let fullname = fname + " " + lname;
    console.log(fullname);
}

printName("Mukesh", "Mahato");  // Mukesh Mahato

// function with default parameter
function greet(name = "Mukesh") {
    console.log(`Welcome ${name}`);
}
greet();    // Welcome Mukesh
greet("Ram");    // Welcome Ram

// Above code in arrow function
const greeting = (name = "Alexa") => console.log(`Welcome ${name}`);
greeting()
greeting("Maya")