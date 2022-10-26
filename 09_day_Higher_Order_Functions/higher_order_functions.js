// Callback
const myCallback = (n) => {
    return n ** 2;
}

console.log(myCallback(4));     //  16

function cube(myCallback, n) {
    return myCallback(n) * n;       // cube = n*n*n,
}

console.log(cube(myCallback, 5));   // 125

// Higher order function returning an other functions
const higherOrder = a => {
    const subHigher = b => {
        const sub = c => {
            return a + b + c;
        }
        return sub;
    }
    return subHigher;
}

console.log(higherOrder(1)(2)(3));      // 6

// const myNum = [1, 2, 3, 4, 5, 6, 7];
// const sumArr = arr => {
//     let sum = 0;

//     function sumElem(elem) {
//         sum += elem;
//     }

//     arr.forEach(sumElem);
//     return sum;
// }

// console.log(sumArr(myNum));     // 28


let myNum = [1, 2, 3, 4, 5, 6, 7];
const sumArr = (arr) => {
    let sum = 0;

    arr.forEach(function sumElem(elem) {
        sum += elem;
    });

    return sum;
};

console.log(sumArr(myNum)); // 28

// setInterval
function greet() {
    console.log("Hello");
}
let x = setInterval(greet, 1000);

clearInterval(x);       // used to stop the setInterval()

// setTimeout() -> execute a callback function after a delay.
function sayHi() {
    console.log("Hi");
}
setTimeout(sayHi, 2000);

function greetName(name = "Guest") {
    console.log(`Hello ${name}`);
}

setTimeout(greetName, 2000);    // Hello Guest
setTimeout(greetName, 2000, "Mukesh");    // Hello Mukesh
setTimeout(greetName, 2000, "Alexa");    // Hello Mukesh

// forEach
myNum = [1, 2, 3, 4, 5];
myNum.forEach((elem, index, arr) => {
    console.log(index, elem, arr);
})

// sum of numbers of array
let sum = 0;
myNum.forEach(elem => {
    sum += elem;
})
console.log(sum);   // 15


// map -> used to iterate an array

myNum.map((elem, index) => {
    console.log(`Element at index ${index} = ${elem}`);
})

let squareOfNumbers = myNum.map(elem => elem * elem);
console.log(squareOfNumbers);   // [ 1, 4, 9, 16, 25 ]


// filter -> filter out the items which certified the filtering condition
let numbers = [5, 1, 2, 9, 43, 0, 12, 54, 7, 9];
let numGreaterThanFive = numbers.filter(num => num > 5)
console.log(numGreaterThanFive);    // [ 9, 43, 12, 54, 7, 9 ]


// reduce -> 
function getSum(total, num) {
    return total + num;
}

numbers = [1, 2, 3, 4, 5];

sum = numbers.reduce(getSum, 0);

console.log(sum);       // 15


numbers = [1, 2, 3, 4, 5];
sum = numbers.reduce(getSum, 5); // since the initial is 5, the sum begain from 5 + 1, then 6 + 2, 8 + 3 ... soon
console.log(sum); // 20


// every -> check if all the elements are of same data type or not,
// it returns boolean

const names = ["Ram", "Shyam", "Hari", "Gita", "Mohan"];
const areAllString = names.every((name) => typeof name === "string");     // Are all strings?
console.log(areAllString);      // true

// const allFive = [5, 5, 5, 5, 5, '5'];
// const areAllFive = allFive.every(elem => elem === 5);
// console.log(areAllFive);    // false

const allFive = [5, 5, 5, 5, 5, '5'];
const areAllFive = allFive.every(elem => elem == 5);
console.log(areAllFive);    // true

// find -> used to find the element in an array, returns only first match

numbers = [5, 3, 8, 1, 9, 0];
const numGreaterThanNine = numbers.find(num => num > 1);
console.log(numGreaterThanNine);        // 5

// findIndex -> used to find the first index of the element which match the condition

console.log(numbers.findIndex(num => num > 1));     // 0 -> it is index of 5

// sort() -> used to arranges the array elements

console.log(numbers.sort());        // [ 0, 1, 3, 5, 8, 9 ]

console.log(names.sort());      // [ 'Gita', 'Hari', 'Mohan', 'Ram', 'Shyam' ]

const data = ['Ram', "Raam", "Rama"];
console.log(data.sort());   // [ 'Raam', 'Ram', 'Rama' ]

// sorting object Arrays

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
]

users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users) // sorted ascending based on ages