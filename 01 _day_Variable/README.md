# Variables In JavaScript

## Variables in javascript can de declared in 4 ways

-  [By using ``let``](#by-using-let)
-  [By using ``var``](#by-using-var)
-  [By using ``const``](#by-using-const)
-  [without using anything](#without-using-anything)

## by using ``let``

```js
let x;
let y = 5;
let name = "Mukesh";

//variables defined with let cannot be redeclared
let x; //gives an error
```

> ``let`` have block scope.<br>
The variable declared with ``let`` inside a block cannot be used outside.

```js
{
   let x = 5;
   console.log("value of x inside block: ", x);
   // value of x inside block:  5
}
console.log("value of x outside block: ", x);
// Uncaught ReferenceError: x is not defined
```

## by using ``var``

```js
var x;
var y = 5;

//variables defined with let can be redeclared
var x = 10; //no error
```

> ``var`` can not have block scope.<br>
The variable declared with ``var`` inside the block can be used outside the block.

```js
{
   var m = 50;
   console.log("value of m inside block: ", m);
   // value of m inside block:  50
}
console.log("value of m outside block: ", m);
// value of m outside block:  50
```

## by using ``const``

```js
const x=5;  //value must be assigned when delcared with const

const y;
y=5;
//this will give an error
```

> variable declared with ``const`` cannot be reassigned.

```js
const pi = 3.14;
// pi = 3.1415;    //gives an error
// pi = 5 + 3.1415;    //also gives an error
```

## Without using anything

```js
a = 5;
b = 6;
c = a + b;
console.log("sum = ", c);   // sum = 11
```
> If we don't assign value to the variable, it will be logged as undefined.

```js
let a;
console.log("value of a ", a);
// value of a  undefined
```