// Q.1
let firstName = "Mukesh";
let lastName = "Mahato";
let country = "Nepal";
let city = "Lahan";
let age = 21;
let isMarried = false;
let year = 2022;
console.log(`${firstName} => ${typeof firstName}`);
console.log(`${lastName} => ${typeof lastName}`);
console.log(`${country} => ${typeof country}`);
console.log(`${city} => ${typeof city}`);
console.log(`${age} => ${typeof age}`);
console.log(`${isMarried} => ${typeof isMarried}`);
console.log(`${year} => ${typeof year}`);

// Q.2
console.log(`is '10' equals to 10 => ${'10' === 10}`);

// Q.3
console.log(`${parseInt('9.8') == 10}`);

// Q.4 - i
console.log(4 == 4);
console.log(4 != 5);
console.log(null == undefined);

// Q.4 - ii
console.log(0 == 4);
console.log(5 === '5');
console.log(0 == true);

// Q.5
console.log(4 > 3);        // true
console.log(4 >= 3 );      // true
console.log(4 < 3 );       // false
console.log(4 <= 3);       // false
console.log(4 == 4);       // true
console.log(4 === 4);      // true
console.log(4 != 4 );      // false
console.log(4 !== 4);      // false
console.log(4 != '4');     // false
console.log(4 == '4');     // true
console.log(4 === '4');        // fasle

console.log(`${("python").length != ("jargon").length}`);

// Q.6
console.log(4 > 3 && 10 < 12);         // true
console.log(4 > 3 && 10 > 12);         // false
console.log(4 > 3 || 10 < 12);        // true
console.log(4 > 3 || 10 > 12);         // true
console.log(!(4 > 3));         // false
console.log(!(4 < 3));         // true
console.log(!(false));         // true
console.log(!(4 > 3 && 10 < 12));          // false
console.log(!(4 > 3 && 10 > 12));          // true
console.log(!(4 === '4'));         // true
console.log(`${!(("python".includes("on")) && ("dragon".includes("on")))}`);

// Q.7
let date = new Date();
console.log(`year = ${date.getFullYear()}`);        // 2022
console.log(`month = ${date.getMonth()}`);      // 9
console.log(`date = ${date.getDate()}`);        // 19
console.log(`day = ${date.getDay()}`);      // 3
console.log(`hour = ${date.getHours()}`);       // 18
console.log(`minute = ${date.getMinutes()}`);       // 45
console.log(`seconds from 1st jan 1970 to now = ${date.getTime()}`);        // 1666184416473