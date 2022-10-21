# Conditionals

Conditional statements allow us to decide a statement of code or a block of code to execute depending upon the given condition. These statements are also called selection statements or decision making statements. Java supports two conditional statements: if and switch.

#### Conditions can be implementing using the following ways:

-  if
-  if else
-  if else if else
-  switch
-  ternary operator

## The `if` Statement

This type of statements are used when we have to select a statement or a block of statements if certain condition is satisfied and take some other action if the condition is not satisfied.

```js
syntax;
if (condition) {
   // code
}
```

Example:

```js
let num = 5;
if (num > 0) {
   console.log(`${num} is a positive number`);
}
```

## The `if...else` Statement

When there is a need of executing a statement (or block) if a condition matches and another statement (or block) is to be executed otherwise, then we use if – else statement

```js
// syntax
if (condition) {
   // code
} else {
   // code
}
```

Example:

```js
let num = -5;
if (num > 0) {
   console.log(`${num} is a positive number`);
} else {
   console.log(`${num} is a negative number`);
}
// -5 is a negative number
```

## The `if...else if...else` Statement

If we have the situation where there are different actions that are executed depending upon different condition with same type of instance then if-else-if is useful. It is also called ladder if or ladder statement.

```js
// syntax
if (condition) {
   // code
} else if (condition) {
   // code
} else if (condition n) {
   // code
} else {
   // code
}
```

Example:

```js
num = "asdf";
if (num > 0) {
   console.log(`${num} is a positive number`);
} else if (num == 0) {
   console.log(`${num} is a Zero`);
} else if (num < 0) {
   console.log(`${num} is a negative number`);
} else {
   console.log(`${num} is a not a number`);
}
// asdf is a not a number
```

## The `Switch` Statement

Switch is an alternative for if else if else else. The switch statement starts with a switch keyword followed by a parenthesis and code block. Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value. The break statement is to terminate execution so the code execution does not go down after the condition is satisfied. The default block runs if all the cases don't satisfy the condition.

```js
// syntax
switch (key) {
   case 1:
      // code
      break;

   case 2:
      // code
      break;

   case n:
      // code
      break;

   default:
      // code
      break;
}
```

Example:

```js
let day = 5;
switch (day) {
   case 1:
      console.log("Today is Sunday");
      break;
   case 2:
      console.log("Today is Monday");
      break;
   case 3:
      console.log("Today is Tuesday");
      break;
   case 4:
      console.log("Today is Wednesday");
      break;
   case 5:
      console.log("Today is Thursday");
      break;
   case 6:
      console.log("Today is Friday");
      break;
   case 7:
      console.log("Today is Saturday");
      break;
   default:
      console.log("Invalid Input");
}
```

Example of Using conditions in case

```js
let input = 9;
// pass true as args in switch
switch (true) {
   case input > 0:
      console.log(`${input} is a positive number.`);
      break;
   case input < 0:
      console.log(`${input} is a negative number.`);
      break;
   case input == 0:
      console.log(`${input} is a Zero.`);
      break;

   default:
      console.log(`${input} is a not a number.`);
      break;
}
// 9 is a positive number.
```

## Ternary Operator

```js
// syntax
conditon ? true : false;
```

Example:

```js
let isSatuday = false;
isSatuday
   ? console.log("No classes today.")
   : console.log("There is class today");
// There is class today
```
