console.log("--------------------------");
console.log("\tExercise: Level 2");
console.log("--------------------------\n");

// Q.1  Not solved
console.log("Q.1 Not Solved");
// function solveLinEquation(a, b, c) {
//     let linEq = `${a}x + ${b}y + ${c}`;
//     return linEq;
// }
// console.log(solveLinEquation(4, 5, 6));

// Q.2 not solved
console.log("Q.2 Not Solved");

// Q.3
function printArray(arr) {
    // arr.forEach(elem => {
    //     console.log(elem);
    // });
    for (const elem of arr) {
        console.log(elem);
    }
}
printArray(["Mukesh", 21, true, "Male"]);

// Q.4
function showDateTime() {
    let date = new Date();
    let dd = addZero(date.getDate());
    let mm = addZero(date.getMonth());
    let yy = addZero(date.getFullYear());
    let hh = addZero(date.getHours());
    let min = addZero(date.getMinutes());
    console.log(`${mm}/${dd}/${yy} ${hh}:${min}`);
}
function addZero(digit) {
    if (digit < 10)
        return `0${digit}`;
    else
        return digit;
}
showDateTime();

// Q.5
function swapValues(val1, val2) {
    let temp = val1;
    val1 = val2;
    val2 = temp;
    console.log(`x => ${val1}, y => ${val2}`);
}
swapValues(5, 6);

// Q.6
function reverseArray(arr) {
    let temp = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        temp.push(element);
    }
    arr = temp;
    console.log(arr);
    // return arr;
}
let arr = [1, 2, 3, 4, 5]
reverseArray(arr)

// Q.7
function capitalizeArray(arr) {
    arr.forEach((elem, index) => {
        arr[index] = elem.toUpperCase();
    });
    console.log(arr);
}
capitalizeArray(["ram", "shyam", "mohan", "Hari"])

// Q.8
function addItem(arr, item) {
    arr.push(item);
    return arr;
}
let myArr = [];
myArr = addItem(myArr, "Alexa");
myArr = addItem(myArr, "Alexa 2");

console.log(myArr);

// Q.9
function removeItem(arr, index) {
    arr.splice(index, 1);
    return arr;
}

myArr = ["1", "2", "3", "4", "5"];
myArr = removeItem(myArr, 0);
console.log(myArr);

// Q.10
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNumbers(10));      // 55

// Q.11
function sumOfOdds(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) sum += i;
    }
    return sum;
}

console.log(sumOfOdds(10));      // 30


// Q.12
function sumOfEven(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 != 0) sum += i;
    }
    return sum;
}

console.log(sumOfEven(10));      // 25

// Q.13
function evensAndOdds(number) {
    let evenCount = 0;
    let oddCount = 0;
    let iteration = 0;
    while (iteration <= number) {
        if (iteration % 2 == 0) evenCount++;
        else if (iteration % 2 != 2) oddCount++;
        iteration++;
    }
    console.log(`The number of odds are ${oddCount}`);
    console.log(`The number of evens are ${evenCount}`);
}
evensAndOdds(100);

// Q.14
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(1, 2, 3));    // 6
console.log(sum(1, 2, 3, 4));    // 10
console.log(sum(1, 2, 3, 4, 5, 6, 7));    // 28

// Q.15
function randomUserIp() {
    // 192.0.0.0 - 192.255.255.255
    console.log(`${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`);
}
randomUserIp();

// Q.16
function randomMacAddress() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    console.log(`${hex[Math.floor(Math.random() * 16)]}${hex[Math.floor(Math.random() * 16)]}:${hex[Math.floor(Math.random() * 16)]}${hex[Math.floor(Math.random() * 16)]}:${hex[Math.floor(Math.random() * 16)]}${hex[Math.floor(Math.random() * 16)]}:${hex[Math.floor(Math.random() * 16)]}${hex[Math.floor(Math.random() * 16)]} `);
}
randomMacAddress()

// Q.17
function randomHexaNumberGenerator() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

    let num = "#";
    for (let i = 0; i < 6; i++) {
        num += hex[Math.floor(Math.random() * 16)];
    }
    return num;
}
console.log(randomHexaNumberGenerator());

// Q.18
function userIdGenerator() {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphSmall = "abcdefghijklmnopqrstuvwxyz";
    const sets = [num, alph, alphSmall];
    const lengthOfSets = 3;
    const lengthOfId = 7;
    let ID = "";

    for (let i = 0; i < lengthOfId; i++) {
        let setToBeSelected = Math.floor(Math.random() * lengthOfSets);
        let index = Math.floor(Math.random() * sets[setToBeSelected].length);
        ID += sets[setToBeSelected][index];
    }
    return ID;
}

console.log("ID = " + userIdGenerator());