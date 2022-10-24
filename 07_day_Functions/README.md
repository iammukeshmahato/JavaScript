# Functions In JavaScript

-  [Function Declaration](#function-declaration)
-  [Function without a parameter and retrun](#function-without-a-parameter-and-retrun)
-  [Function with a parameter](#function-with-a-parameter)
-  [Function retruning value](#function-retruning-value)
-  [Function with two parameters](#function-with-two-parameters)
-  [Function with many parameters](#function-with-many-parameters)
-  [Function with unlimited number of parameters](#function-with-unlimited-number-of-parameters)
   -  [Unlimited number of parameters in regular function](#unlimited-number-of-parameters-in-regular-function)
   -  [Unlimited number of parameters in arrow function](#unlimited-number-of-parameters-in-arrow-function)
-  [Anonymous Function](#anonymous-function)
-  [Function Expression](#function-expression)
-  [Self Invoking Functions](#self-invoking-functions)
-  [Arrow Function](#arrow-function)
-  [Function with default parameters](#function-with-default-parameters)

A function is a reusable block of code or programming statements designed to perform a certain task.
A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter. If a function take a parameter it will be called with argument. A function can also take a default parameter. To store a data to a function, a function has to return certain data types. To get the value we call or invoke a function.
Function makes code:

-  clean and easy to read
-  reusable
-  easy to test

### Function Declaration

```js
// declaring a function without a parameter
function myFunction() {
   // code
}

myFunction(); // calling function by its name and with parantheses
```

### Function without a parameter and retrun

Function can be declared without a parameter and return value.

#### Example:

```js
// function without parameter
function square() {
   let num = 5;
   let sq = num * num;
   console.log(sq);
}

square(); // 25
```

### Function with a parameter

In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

#### Example:

```js
function square(num) {
   let sq = num * num;
   console.log(sq);
}

square(4); // 16
```

### Function retruning value

Function can also return value.

#### Example:

```js
function myName() {
   let fname = "Mukesh";
   let lname = "Mahato";
   let fullName = `${fname} ${lname}`;
   return fullName;
}
console.log(myName()); // Mukesh Mahato
```

### Function with two parameters

```js
// syntax
function functionName(param1, param2{
   // code
}
```

#### Example:

```js
function sumOfTwo(num1, num2) {
   let sum = num1 + num2;
   return sum;
}
console.log(sumOfTwo(5, 6)); // 11
```

### Function with many parameters

```js
// function with multiple parameters
function functionName(parm1, parm2, parm3,...){
  //code
}

functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
```

Arguments should be passed as array.

```js
function multipleParam(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      sum += element;
   }
   return sum;
}
const nummbers = [1, 2, 3, 4, 5];
console.log(multipleParam(nummbers));
```

### Function with unlimited number of parameters

Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments. The way we do it has a significant difference between a function declaration(regular function) and arrow function. Let us see examples both in function declaration and arrow function.

#### Unlimited number of parameters in regular function

A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

```js
// Let us access the arguments object
​
function sumAllNums() {
 console.log(arguments)
}
```

#### Example:

```js
function sumAllNums() {
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
      const element = arguments[i];
      sum += element;
   }
   return sum;
}

console.log(sumAllNums(1, 2, 4)); // 7
console.log(sumAllNums(5, 4, 6, 8, 9)); // 32
console.log(sumAllNums(5, 4, 6, 8, 9, 12, 3, 4, 6)); // 57
```

#### Unlimited number of parameters in arrow function

Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name. Any thing we passed as argument in the function can be accessed as array in the arrow function. Let us see an example

```js
// Let us access the arguments object
​
const sumAllNums = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}

```

#### Example:

```js
const sumAllNumss = (...param) => {
   let sum = 0;
   for (let i = 0; i < param.length; i++) {
      const element = param[i];
      sum += element;
   }
   return sum;
};

console.log(sumAllNumss(1, 2, 3)); // 6
console.log(sumAllNumss(1, 2, 3, 4, 5)); // 15
console.log(sumAllNumss(1, 2, 3, 4, 5, 6, 7, 8)); // 36
```

### Anonymous Function

A function without name is called Anonymous Function. It is stored in a variable.

```js
const AnonymousFunction = function () {
   console.log("This is an Anonymous Function.");
};
AnonymousFunction();

// This is an Anonymous Function.
```

### Function Expression

Function Expression allows us to create an anonymous function which doesn’t have any function name which is the main difference between Function Expression and Function Declaration. A function expression can be used as an IIFE (Immediately Invoked Function Expression)which runs as soon as it is defined. A function expression has to be stored in a variable and can be accessed using variableName. With the ES6 features introducing Arrow Function, it becomes more easier to declare function expression.

```js
// Function expression
const square = function (n) {
   return n * n;
};

console.log(square(2)); // -> 4
```

### Self Invoking Functions

Self invoking functions are anonymous functions which do not need to be called to return a value.

```js
(function (n) {
   console.log(n * n);
})(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below
```

```js
let squaredNum = (function (n) {
return n \* n;
})(10);

console.log(squaredNum);

```

```js
(function (n) {
   console.log(`square of ${n} = ${n * n}`);
})(10); // 100
```

### Arrow Function

Arrow function is an short hand to write a function, however function declaration and arrow function have some minor differences.

Arrow function uses arrow instead of the keyword _function_ to declare a function. Let us see both function declaration and arrow function.

```js
// function declaration
function square(n) {
   return n * n;
}

square(5); // 25
```

```js
// Arrow Function
const square = (n) => n * n;

console.log(square(5)); // 25
```

If there is more than one parameter, we should use paranthesis.

```js
const sum = (a, b) => a + b;
console.log(sum(5, 6)); // 11
```

It there is more than one return statement we use braces.

```js
const printName = (fname, lname) => {
   let fullname = fname + " " + lname;
   console.log(fullname);
};

printName("Mukesh", "Mahato"); // Mukesh Mahato
```

### Function with default parameters

Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

```js
// syntax
// Declaring a function
function functionName(param = value) {
   //codes
}

// Calling function
functionName();
functionName(args);
```

#### Example:

```js
function greet(name = "Mukesh") {
   console.log(`Welcome ${name}`);
}

greet(); // Welcome Mukesh
greet("Ram"); // Welcome Ram
```

Above code using arrow function

```js
const greeting = (name = "Alexa") => console.log(`Welcome ${name}`);
greeting();
greeting("Maya");
```
