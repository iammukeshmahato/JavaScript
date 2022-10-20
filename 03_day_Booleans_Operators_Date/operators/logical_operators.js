// && Logical AND
// returns true if all condition is true otherwise returns false

let check = 5 > 4 && 5 < 9;
console.log(check);     // true && true -> true

check = 5 > 4 && 5 < 4;
console.log(check);     // true && false -> false

check = 8 < 4 && 5 > 4;
console.log(check);     // false && true -> false

check = 5 == 4 && 5 > 9;
console.log(check);     // false && false -> false

// || Pipe operator logical OR 
// returns true if anyone condition is true and returns false if all the conditions are false

check = 5 > 4 || 5 < 9;
console.log(check);     // true || true -> true

check = 5 > 4 || 5 < 4;
console.log(check);     // true || false -> true

check = 8 < 4 || 5 > 4;
console.log(check);     // false || true -> true

check = 5 == 4 || 5 > 9;
console.log(check);     // false || false -> false

// ! Negation operator logical NOT 
// returns true if condition is false and returns false if condition are true

check = 5 > 4
console.log(check);         // true
console.log(!check);        // false

let isLightOn = true;
console.log(!isLightOn);        // false

let isHoliday = false;
console.log(!isHoliday);        // true