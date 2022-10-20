# Booleans

A boolean data type represents one of the two values: true or false. Boolean value is either true or false. The use of these data types will be clear when we start comparision operator. Any comparisons return a boolean value which is either true or false.

Example:

```js
let isDay = false;
let isSunny = false;
let isLightOn = true;
let isMarried = false;
let isMinor = false;
let isTrue = 4 > 3; // false
let isEqual = 4 == 4; // true
```

## Truthy Values

-  All numbers(positive and negative) are truthy except zero
-  All strings are truthy except an empty string ('')
-  The boolean True

### Falsy values

-  0
-  0n
-  null
-  undefined
-  NaN
-  the boolean false
-  '', "", ``, empty string

## Undefined

If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.

```js
let name;
console.log(name); // undefined
```

## Null

```js
let empty = null;
console.log(empty); // null
```

## Operators

An operator is a symbol that is used to perform some action on one, two or three operands.

### Assignment Operators

An equal sign in JavaScript is an assignment operator. It is used to assign value to a variable.

```js
let num = 10;
let name = "Mukesh";
```

### Arithmetic Operators

Arithmetic operators are mathematical operators.

-  Addition(+): a + b
-  Subtraction(-): a - b
-  Multiplication(_): a _ b
-  Division(/): a / b
-  Modulus(%): a % b
-  Exponential(**): a ** b

```js
let num1 = 6;
let num2 = 5;
let sum = num1 + num2;
let diff = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let remainder = num1 % num2;
let powerOf = num1 ** num2;

console.log("Sum = ", sum); // 11
console.log("Diff = ", diff); // 1
console.log("Mul = ", mul); // 30
console.log("Div = ", div); // 1.2
console.log("Remainder = ", remainder); // 1
console.log("Power = ", powerOf); // 7776
```

### Comparison Operators

Comparison operators are used to comparing the operands. The outcome of using these operator is a `boolean` value.

![comparison operator](./images/comparison_operators.png)

#### Examples

```js
console.log(5 == 5); // true
console.log("5" === 5); // false
console.log(4 != 5); // true
console.log(5 > 5); // false
console.log(5 < 5); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true

console.log(0 == false); // true
console.log(1 == false); // false

console.log(" " == false); // true
console.log(0 == ""); // true
console.log(0 == " "); // true
```

### Logical Operator

The logical operators operate on Boolean operand(s) and results the value as true or false. The following symbols are the common logical operators:

-  && (ampersand) Logical AND
-  || (Pipe) Logical OR
-  ! (Negation) Logical NOT

The `&&` operator returns true only if all the conditions are true. The `||` operator return false if all the conditions are false. The `!` operator negates the true to false and facle to true.

```js
// && - Logical AND operator examples

let check = 5 > 4 && 5 < 9;
console.log(check); // true && true -> true

check = 5 > 4 && 5 < 4;
console.log(check); // true && false -> false

check = 8 < 4 && 5 > 4;
console.log(check); // false && true -> false

check = 5 == 4 && 5 > 9;
console.log(check); // false && false -> false

// || - logical OR operator examples

check = 5 > 4 || 5 < 9;
console.log(check); // true || true -> true

check = 5 > 4 || 5 < 4;
console.log(check); // true || false -> true

check = 8 < 4 || 5 > 4;
console.log(check); // false || true -> true

check = 5 == 4 || 5 > 9;
console.log(check); // false || false -> false

// ! - logical NOT operator examples

check = 5 > 4;
console.log(check); // true
console.log(!check); // false

let isLightOn = true;
console.log(!isLightOn); // false

let isHoliday = false;
console.log(!isHoliday); // true
```

### Increment Operator

In JavaScript we use the increment operator to increase a value of variable and stored in the same variable. The increment could be pre or post increment. Let us see each of them:

1. Pre-Increment

```js
let count = 0;
console.log(++count); // 1
console.log(count); // 1
```

2. Post-Increment

```js
let count = 0;
console.log(count++); // 0
console.log(count); // 1
```

### Decrement Operator

In JavaScript we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement. Let us see each of them

1. Pre-Decrement

```js
let count = 0;
console.log(--count); // -1
console.log(count); // -1
```

2. Post-Decrement

```js
let count = 0;
console.log(count--); // 0
console.log(count); // -1
```

### Ternary Operator

It is a simple form of writing an `if...else` condition.

### syntax:

```js
condition ? true : fasle;
```

Examples:

```js
let isLightOn = true;
isLightOn ? console.log("Light is ON") : console.log("light is OFF");

isLightOn = false;
isLightOn ? console.log("Light is ON") : console.log("light is OFF");
```

```js
Light is ON
Light is OFF
```

```js
let number = 13;
number > 0
   ? console.log(`${number} is positive number.`)
   : console.log(`${number} is negative number.`);

number = -13;
number > 0
   ? console.log(`${number} is positive number.`)
   : console.log(`${number} is negative number.`);
```

```js
13 is positive number.
-13 is negative number.
```

## Window Method

### Window `alert()` method

The window `alert()` method is used to display an alert message in the browser.

```js
window.alert("Hi, This is an alert.");
alert("Hi, This also an alert without window object");
```

### Window `prompt()` method

The window `prompt()` method is used to display a prompt box with an input field.

```js
prompt("Required text", "optional text");
```

### Window `confirm()` method

The `confirm()` method displays a dialog box with a specified message, along with an OK and a Cancel button.

```js
let areYouSure = confirm("Are you sure want to delete ?");
console.log(areYouSure); // return true or false based on button clicked by user
```

## Date Object

```js
// creating a date object
let now = new Date();
console.log(now); // Wed Oct 19 2022 15:25:12 GMT+0545 (Nepal Time)

console.log(now.getFullYear()); // 2022
console.log(now.getMonth()); // 9 <- 9 for october because index starts with 0
console.log(now.getDate()); // 19
console.log(now.getDay()); // 3 <- 3 for wednesday because array index starts with 0
console.log(now.getHours()); // 15 <- return in 24hrs
console.log(now.getMinutes()); // 29
console.log(now.getSeconds()); // 39
console.log(now.getTime()); // 1666172750066 <- this is the number of seconds passed from January 1, 1970 to Wed Oct 19 2022 15:25:12
```
