const PI = Math.PI      // give the value of PI from Math object
console.log(PI);

console.log(Math.round(PI));    // round the value to the nearest value
console.log(Math.floor(PI));    // 	Returns rounded down to its nearest integer
console.log(Math.ceil(PI));     // 	Returns x rounded up to its nearest integer
console.log(Math.min(5, 1, 0, -5, 10, 12));     // return the minimum value from the list
console.log(Math.max(5, 1, 0, -5, 10, 12));     // return the maximum value from the list

const randomNumber = Math.random();     //generate random number between 0 - 1 
console.log(randomNumber);

// let generate random number between 0 and 10
rand10 = Math.random() * 10
rand10 = Math.floor(rand10)
console.log(rand10);
// this will never print 10, because we are multiplying by 10 and using math.floor()

// let generate random number between 0 and 10
rand10 = Math.random() * 10
rand10 = Math.floor(rand10) + 1
console.log(rand10);        //this will print 10 also

// Absolute value  -> Math.abs()
console.log(Math.abs(-10));
console.log(Math.abs(-9));
console.log(Math.abs(9));

// Square root
console.log(Math.sqrt(25));
console.log(Math.sqrt(5));

// Power
console.log(Math.pow(2, 3));     // 2^3 = 8
console.log(Math.pow(2, 6));     // 2^6 = 64

// Logarithm
//Returns logarithm of base E of x, Math.log(x)
console.log(Math.log(2)) // 0.6931471805599453
console.log(Math.log(10)) // 2.302585092994046

console.log(Math.log2(2)) // return the logarithm of number of base 2
console.log(Math.log10(10)) // return the logarithm of number of base 2

// Trigonometry -> angle in radian
console.log(Math.sin(0))
console.log(Math.sin(30))
console.log(Math.cos(0))
console.log(Math.cos(60))


// Math.trunc(x)
console.log(Math.sign(10.345));    // return 1 if the number is positive
console.log(Math.sign(-10.345));    /// return -1 if the number is negative
console.log(Math.sign(null));    /// return 0 if the number is null
