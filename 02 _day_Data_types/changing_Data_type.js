// converting one data type into another data type is called Casting.

// 1. String to Int
// parseInt()
// Number()
//  using plus sign (+)

let num = "100";
let intNum = parseInt(num);
console.log(typeof intNum, intNum);     // number 100

num = "100";
intNum = Number(num);
console.log(typeof intNum, intNum);     // number 100

num = "100";
intNum = + num;
console.log(typeof intNum, intNum);     // number 100

// if string is not a number
num = "100m";
intNum = + num;
console.log(typeof intNum, intNum);     // number NaN

// 2. String to float

// parseInt()
// Number()
//  using plus sign (+)

let num2 = "9.98";
let intNum2 = parseFloat(num2);
console.log(typeof intNum2, intNum2);     // num2ber 9.98

num2 = "5.67";
intNum2 = Number(num2);
console.log(typeof intNum2, intNum2);     // num2ber 5.67

num2 = "12.43";
intNum2 = + num2;
console.log(typeof intNum2, intNum2);     // num2ber 12.43

// if string is not a num2ber
num2 = "10.54a";
intNum2 = + num2;
console.log(typeof intNum2, intNum2);     // number NaN

// 3. float to int
// parseInt()

let num3 = 6.99;
console.log(num3);

let intNum3 = parseInt(num3)    
console.log(intNum3);   // 6    round to the integer number
