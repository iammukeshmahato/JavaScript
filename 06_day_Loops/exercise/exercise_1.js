// // Q.1
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let count = 0;
// while (count <= 10) {
//     console.log(count);
//     count++;
// }

// count = 0;
// do {
//     console.log(count);
//     count++;
// } while (count <= 10);

// // Q.2
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// count = 10;
// while (count >= 0) {
//     console.log(count);
//     count--;
// }

// count = 10;
// do {
//     console.log(count);
//     count--;
// } while (count >= 0);

// // Q.3
// // const n = prompt("Enter any number", 10);
// const n = 5;
// for (let i = 0; i <= n; i++) {
//     console.log(i);
// }

// // Q.4
// for (let i = 1; i <= n; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "#";
//         console.log(pattern);
//     }
//     console.log();
// }

// // Q.5
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} * ${i} = ${i * i}`);
// }

// // Q.6
// console.log(`i\ti^2\ti^3`);
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}\t${i * i}\t${i * i * i}`);
// }

// // Q.7
// for (let i = 0; i <= 100; i++) {
//     if (i%2==0) {  
//         console.log(`${i}`);
//     }
// }

// // Q.8
// for (let i = 0; i <= 100; i++) {
//     if (i%2!=0) {  
//         console.log(`${i}`);
//     }
// }

// Q.9
let prime = "";
for (let i = 1; i <= 100; i++) {
    let count = 0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 0) {
        prime += i + " "
    }
}
console.log(prime);

// Q.10
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// Q.11
let oddSum = 0;
let evenSum = 0;
for (let i = 0; i <= 100; i++) {
    i % 2 == 0 ? evenSum += i : oddSum += i;
}
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`);

// Q.12
oddSum = 0;
evenSum = 0;
for (let i = 0; i <= 100; i++) {
    i % 2 == 0 ? evenSum += i : oddSum += i;
}
let sumArr = [evenSum, oddSum]
console.log(sumArr);        // [ 2550, 2500 ]

// Q.13
const randArr = [];
for (let i = 0; i <= 5; i++) {
    randArr.push(Math.floor(Math.random() * 100))
}
console.log(randArr);

// Q.14
const uniqueRandArr = [];
for (let i = 0; i <= 5; i++) {
    let elemToPush = Math.floor(Math.random() * 100);
    let isUnique = true;

    // this is comparing every element with the element in the array, if matched the isUnique is set to false and then that element won't be pushed into the array.
    for (const x of uniqueRandArr) {
        if (x == elemToPush) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        uniqueRandArr.push(elemToPush);
    }
}
console.log(uniqueRandArr);

// Q.15
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const capAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "1234567890";
// const symbol = "!@#$%^&*()_+=-";

let arr = [alphabet, capAlph, num];
// let arr = [alphabet, capAlph, num, symbol];
let len = 6;
let str = "";

for (let i = 0; i < len; i++) {
    // getting random index from 0-2 since we have 3 dataset.
    let index = Math.floor(Math.random() * 3);

    // based on random index selecting dataset from arr and getting the length of the character in corresponding element.
    let selectedArrLen = arr[index].length;

    // randomly selecting character of particularly element of arr.
    str += arr[index].charAt(Math.floor(Math.random() * selectedArrLen));
}
console.log(str);