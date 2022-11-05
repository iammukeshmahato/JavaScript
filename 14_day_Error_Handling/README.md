# Error Handling In Javascript

## Error Handling

JavaScript is a loosely-typed language. Some times we shall get a runtime error when we try to access an undefined variable or call undefined function etc.

JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block.

```js
// syntax

try {
   // code that may throw an error
} catch (err) {
   // code to be executed if an error occurs
} finally {
   // code to be executed regardless of an error occurs or not
}
```

**try**: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

**catch**: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

**finally**: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.

### Example:

```js
try {
   let lastName = "Mahato";
   let fullName = firstName + " " + lastName;
} catch (error) {
   console.log(error);
}
```

```sh
ReferenceError: firstName is not defined
     at error.js:5:20
```

```js
try {
   let lastName = "Mahato";
   let fullName = firstName + " " + lastName;
} catch (error) {
   console.log(error);
} finally {
   console.log(
      "in any condition, statements in finally block will be executed"
   );
}
```

```sh
ReferenceError: firstName is not defined
    at error.js:20:20
in any condition, statements in finally block will be executed
```

**Note:** The catch block take a parameter. We must pass the paramater. it is common to pass e, err or error as a parameter to the catch block. The parameter is an object and it has `name` and `message` keys.

```js
try {
   let lastName = "Mahato";
   let fullName = firstName + " " + lastName;
} catch (error) {
   console.log("name of error: ", error.name);
   console.log("error message: ", error.message);
} finally {
   console.log(
      "in any condition, statements in finally block will be executed"
   );
}
```

```sh
name of error:  ReferenceError
error message:  firstName is not defined
in any condition, statements in finally block will be executed
```

### throw

the throw statement allows us to create a custom error. We can through a string, number, boolean or an object. Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception. Each of the following throws an exception:

```js
throw "Error2"; // generates an exception with a string value
throw 42; // generates an exception with the value 42
throw true; // generates an exception with the value true
throw new Error("Required"); // generates an error object with the message of Required
```

```js
function throwError() {
   let errMsg;
   let x = prompt("Enter a number: ");
   try {
      if (x == "") throw "Empty";
      if (isNaN(x)) throw `${x} is not a number.`;
      x = Number(x);
      if (x < 5) throw "small value";
      if (x > 10) throw "big value";
   } catch (error) {
      console.log(error);
   }
}

throwError();
```

### Error Types

#### 1. ReferenceError:

An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.

```js
console.log(xyz);
```

```js
Uncaught ReferenceError: xyz is not defined
    at error.js:66:13
```

#### 2. SyntaxError:

A syntax error has occurred

```js
console.log("hello world');
```

```js
Uncaught SyntaxError: Invalid or unexpected token (at error.js:70:13)
```

#### 3. TypeError:

A type error has occurred

```js
let num = 10;
console.log(num.toLowerCase());
```

```js
error.js:75 Uncaught TypeError: num.toLowerCase is not a function
    at error.js:75:17
```

These are some of the common error we may face when we write code. Understanding errors can help us to know what mistakes we made and it will help us to debug our code fast.
