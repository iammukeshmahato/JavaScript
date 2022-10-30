# Destructuring and Spread In Javascript

## Destructuring

Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

### Destructing Arrays

```js
var numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree); // 1 2 3
```

```js
var fullName = ["Mukesh", "Mahato"];
var [firstName, LastName] = fullName;
console.log(firstName, LastName); // Mukesh Mahato
```

we can skip on the value by using additional comma.

```js
var fullName = ["Mukesh", "Kumar", "Mahato"];
var [firstName, , LastName] = fullName;
console.log(firstName, LastName); // Mukesh Mahato
```

we can use default value in case the value of an array for that index is undefinde.

```js
var fullName = ["Mukesh", undefined, "Mahato"];
var [firstName, middleName = "Alexa", LastName] = fullName;
console.log(firstName, middleName, LastName); // Mukesh Alexa Mahato
```

We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

```js
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var [num1, num2, num3, num4, ...remaining] = numbers;
console.log(num1, num2, num3, num4); // 1 2 3 4
console.log(remaining); // [ 5, 6, 7, 8, 9, 10 ]
```

In the above example, _remaining_ is not a keyword, its a variable. it could be anythiny we want but there should be (...)spread operator.

### Destructuring during iteration

```js
const names_ages = [
   ["Ram", 21],
   ["Shyam", 20],
   ["Gita", 19],
   ["Hari", 25],
];

for (const [name, age] of names_ages) {
   console.log(`${name} is ${age} years old.`);
}
```

```sh
Ram is 21 years old.
Shyam is 20 years old.
Gita is 19 years old.
Hari is 25 years old.
```

### Destructuring Object

While destructuring the object, the name of variable should be the exactly same as the key or property of the object.

```js
var rectange = {
   widht: 100,
   height: 120,
   area: 12000,
};

var { widht, height, area, perimeter } = rectange;
console.log(widht, height, area, perimeter); // 100 120 12000 undefined
```

since we have only 3 keys in the object, so the 4th will be undefinded.

```sh
Note: The name of variables should be exactly same as the key or properties of the object.
```

```js
// this can't be done.
var { w, h, a, p } = rectange;
console.log(w, h, a, p); // undefined undefined undefined undefined
```

### Renaming during structuring

As we know we can't use variable name another than the key or properties of the object. But we can rename them while destructuring.

```js
var rectange = {
   widht: 100,
   height: 120,
   area: 12000,
};

var { widht: w, height: h, area: a, perimeter: p } = rectange;
```

Now we can't use `width`, `height`, it will throw a _ReferenceError_.

```js
// console.log(widht, height, area, perimeter);
```

Instead we can use `w`, `h`, `a` and `p`. Because we have renamed.

```js
console.log(w, h, a, p); // 100 120 12000 undefined
```

In the above example we can see that the, `p` is undefined.

If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a `default` value during declaration.

```js
var { widht: w, height: h, area: a, perimeter: p = 100 } = rectange;

console.log(w, h, a, p);
```

```sh
100 120 12000 100
```

In the above example, `p = 100`, because we have given it as default, if the key is not matched it will assign the default value.

If there is the key in the object it won't assign the default value.

```js
var rectange = {
   widht: 100,
   height: 120,
   area: 12000,
   perimeter: 2 * (widht + height),
};

var { widht: w, height: h, area: a, perimeter: p = 100 } = rectange;
console.log(w, h, a, p);
// 1100 120 12000 440
```

```sh
1100 120 12000 440
```

Here, the value of `p` is not set by default because there is the `perimeter` key in the object `rectange`.

Destructuring keys as a function parameters. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.

### Object parameter without destructuring

```js
var rectange = {
   length: 100,
   breadth: 120,
};

const calculateArea = (rectange) => {
   // here rectange is not an object, it the parameter of the function.

   return rectange.length * rectange.breadth;
};

console.log(calculateArea(rectange)); // 12000
```

```js
let rect1 = {
   length: 40,
   breadth: 50,
};

console.log(calculateArea(rect1)); // 2000
```

```js
let rect2 = {
   l: 40,
   b: 50,
};

console.log(calculateArea(rect2)); // NaN
```

Because the key of rect2 is not exactly same as the key used in calculateArea() function.

### Object parameter with destructuring

```js
const calculatePerimeter = ({ length, breadth }) => {
   return 2 * (length + breadth);
};

console.log(calculatePerimeter(rectange)); // 440
console.log(calculatePerimeter(rect1)); // 180
console.log(calculatePerimeter(rect2)); // NaN
```

In the above example, the `rect2` giving `NaN` because the key of rect2 is not exactly same as the key used in _calculateArea()_ function.

we can fix this issue by using the following method.

when we don't know what would be the key of the object, we can use _Object.entries()_ method to get the key value pairs. Or we can use _Object.keys()_ method.

```js
const calcArea = (rectange) => {
   let l = Object.keys(rectange)[0]; // it will return the first key of the object
   let b = Object.keys(rectange)[1]; // it will return the second key of the object

   return rectange.l * rectange.b;
};

console.log(calcArea(rect2)); // 2000
```

### Destructuring object during iteration

```js
const todoList = [
   {
      task: "Prepare JS Test",
      time: "4/1/2020 8:30",
      completed: true,
   },
   {
      task: "Give JS Test",
      time: "4/1/2020 10:00",
      completed: false,
   },
   {
      task: "Assess Test Result",
      time: "4/1/2020 1:00",
      completed: false,
   },
];

for (const { task, time, completed } of todoList) {
   console.log(task, time, completed);
}
```

```sh
Output here
```

### Spread or Rest Operator

When there is lots of elements in the array, we use (...)spread or rest operator to get the remaining elements of an array.

### Spread operator to get the rest of array elements

```js
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var [num1, num2, num3, num4, ...remaining] = numbers;
console.log(num1, num2, num3, num4); // 1 2 3 4
console.log(remaining); // [ 5, 6, 7, 8, 9, 10 ]
```

In the above example, _remaining_ is not a keyword, it is a variable. it could be anythiny we want but there should be (...)spread operator.

### Spread operator to copy array

Lets copy array by just assigning to new variable.

```js
numbers = [3, 2, 4, 1, 0, 3, 5];
let copy_numbers = numbers;

console.log(numbers); // [ 3, 2, 4, 1, 0, 3, 5 ]
console.log(copy_numbers); // // [ 3, 2, 4, 1, 0, 3, 5 ]
```

While copying the array by assigning to new variable, it copyies the memory location. so change in any of the array, reflects in both.

```js
copy_numbers.sort();
console.log(copy_numbers); // [0, 1, 2, 3, 3, 4, 5 ]
console.log(numbers); // [0, 1, 2, 3, 3, 4, 5 ]
```

Here both of the arrays are returnig the same, even though we have change only one array.

This is because we are just copying the memory location of the array.

#### To prevent from this, we can use (...) spread operator to copy array elements.

```js
var numbers = [2, 3, 1, 7, 0, 4, 9, 6];
let copiedNum = [...numbers]; // this will copy all the elements of the numbers[] to copiedNum[] with new memory location.

console.log(numbers); // [ 2, 3, 1, 7, 0, 4, 9, 6 ]
console.log(copiedNum); // [ 2, 3, 1, 7, 0, 4, 9, 6 ]

copiedNum.sort();
console.log(copiedNum); // [ 0, 1, 2, 3, 4, 6, 7, 9]

console.log(numbers); // [ 2, 3, 1, 7, 0, 4, 9, 6 ]
```

### Spread operator to copy object

We can copy an object using a spread operator

```js
const user = {
   name: "Mukesh",
   age: 100,
   title: "Programmer",
};

var copiedUser = { ...user };
console.log(copiedUser); // { name: 'Mukesh', age: 100, title: 'Programmer' }
```

Modifying or changing the object while copying

```js
var copiedUser = { ...user, age: 200 };
console.log(copiedUser); // { name: 'Mukesh', age: 200, title: 'Programmer' }
```

```js
var copiedUser = { ...user, age: 200, title: "CopyCat" };
console.log(copiedUser); // { name: 'Mukesh', age: 200, title: 'CopyCat' }
```

#### Spread operator with arrow function

When we don't know the the numbers of arguments to be passed into a function, we can use (...) spread operator.

```js
const sumAllNums = (...args) => {
   let sum = 0;
   for (const num of args) {
      sum += num;
   }
   return sum;
};

console.log(sumAllNums(1, 2, 3)); // 6
console.log(sumAllNums(1, 2, 3, 6, 8, 9)); // 29
console.log(sumAllNums(1, 2, 3, 6, 8, 9, 12, 34, 56)); // 131
```

### I have issue in the following exercies.

#### Exercise Level 3:

-  [Question No. 4](https://github.com/iammukeshmahato/JavaScript/blob/master/11_day_Destructuring_and_Spreading/exercise/questions.md/#exercises-level-3)

## [data/countries_data.js file](https://github.com/iammukeshmahato/JavaScript/blob/master/08_day_Objects/exercise/data/countries_data.js)
