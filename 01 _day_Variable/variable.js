// run this file using 'node' or check the developer console of index.html

console.log("Hello World");

// 4 ways to declare a JavaScript variable
// using let
// using var
// using const
// using nothing

// How to create variables

let x;  //variables defined with let cannot be redeclared
var y;  //variables defined with let can be redeclared

// how to use variables

// let x = 6;   //error
x = 6;

// var y = 8;  //no error
y = 8;

let z = x + y;
console.log(z);

// 'let' has block scope
{
    let x = 5;
    console.log("value of x inside block: ", x);    // value of x inside block:  5
}
console.log("value of x outside block: ", x);   // value of x outside block:  6

// 'var' can not have block scope

var m = 5;
console.log("value of m before block: ", m);   // value of m before block:  5
{
    var m = 50
    console.log("value of m inside block: ", m);   // value of m inside block:  50
}
console.log("value of m outside block: ", m);   // value of m outside block:  50

// veriable declared with 'const' cannot be reassigned

const pi = 3.14;
// pi = 3.1415;    //gives an error
// pi = 5 + 3.1415;    //also gives an error
console.log(pi);

// 'const' variables must be assigned when declared
const g = 6.672;    //correct

// wrong
// const g;
// g = 6.672;

// using nothing
a = 5;
b = 6;
c = a + b;
console.log("sum = ",c);

// If we don't assign value to the variable, it will be logged as undefined.
let n;
console.log("value of n ", n);
// value of a  undefined