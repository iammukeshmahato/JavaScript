// Q.1
// let base = prompt("Enter the base of triangel.");
// let height = prompt("Enter the height of triangel.");
// const area = (0.5 * base * height);
// alert(`The area of the triangle = ${area}`);

// Q.2
// let a = prompt("Enter the side a of triangel.");
// let b = prompt("Enter the side b of triangel.");
// let c = prompt("Enter the side c of triangel.");
// const perimeter = (parseInt(a) + parseInt(b) + parseInt(c));
// alert(`The area of the triangle = ${perimeter}`);

// Q.3 
// let length = parseInt(prompt("Enter the length of  rectange:"));
// let width = parseInt(prompt("Enter the width of  rectange:"));
// let area = length * width;
// let perimeter = 2*(length + width);
// alert(`The area of rectange = ${area}`)
// alert(`The perimeter of rectange = ${perimeter}`)

// Q.4
// let radius = parseInt(prompt("Enter the radius of  circle:"));
// let area = 2 * Math.PI * Math.pow(radius, 2);
// let perimeter = 2 * Math.PI * radius;
// alert(`The area of circle = ${area}`)
// alert(`The circumference of circle = ${perimeter}`)

// Q.5

// Q.6
x1 = 2;
y1 = 2;
x2 = 6;
y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log(`slope = ${slope}`);    // 2

// Q.10
let name = "mukesh";
name.length > 7 ? console.log("your name is long") : console.log("your name is short");

// Q.12
let myAge = 324;
let yourAge = 345;
myAge > yourAge ? console.log(`I am ${myAge - yourAge} years older than you`) : console.log(`you are ${yourAge - myAge} years older than me`);

// Q.15
let date = new Date('yyyy-mm-dd');
console.log(date);
