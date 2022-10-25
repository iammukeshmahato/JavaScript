# Object in JavaScript

Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. The order of the key is not reserved, or there is no order.
To create an object literal, we use two curly brackets.

### Creating an empty object

```js
const person = {};
```

### Creating an objecting with values

```js
const myData = {
   fname: "Mukesh",
   lname: "Mahato",
   age: 210,
};

console.log(myData); // { fname: 'Mukesh', lname: 'Mahato', age: 210 }
```

### Getting values from an object

We can access values of object using two methods:

-  using . followed by key name if the key-name is a one word
-  using square bracket and a quote

```js
// accessing object properties using period (.) and key name.

console.log(myData.fname); // Mukesh
console.log(myData.lname); // Mahat
console.log(myData.age); // 210
```

```js
// accessing object properties using square brakets and key name.

console.log(myData["fname"]); // Mukesh
console.log(myData["lname"]); // Mahat
console.log(myData["age"]); // 210
```

### Creating object methods

```js
const person = {
   fname: "Alexa",
   lname: "Microsoft",
   getFullName: function () {
      return `${this.fname} ${this.lname}`;
   },
   skills: ["C", "C++", "JAVA", "PHP", "PYTHON", "JavaScript"],
};

console.log(person.getFullName()); // Alexa Microsoft
console.log(person.skills); // [ 'C', 'C++', 'JAVA', 'PHP', 'PYTHON', 'JavaScript' ]
```

```js
const person = {
   fname: "Alexa",
   lname: "Microsoft",
   getFullName: function () {
      return `${this.fname} ${this.lname}`;
   },
   skills: ["C", "C++", "JAVA", "PHP", "PYTHON", "JavaScript"],
};

person.country = "Nepal";
person.isMarried = false;
person.skills.push("HTML");
person.skills.push("CSS");

console.log(person.country); // Nepal
console.log(person.isMarried); // false
```

### Object Methods

There are different methods to manipulate an object. Let us see some of the available methods.

#### 1. _Object.assign_
   To copy an object without modifying the original object

```js
// const copyPerson = Object.assign(person);
const copyPerson = Object.assign({}, person);
console.log(copyPerson);
```

#### 2. _Object.keys()_
   To get the keys or properties of an object as an array

```js
console.log(Object.keys(copyPerson)); // [ 'fname', 'lname', 'getFullName', 'skills', 'country', 'isMarried' ]
```

#### 3. _Object.values()_
   To get values of an object as an array.

```js
console.log(Object.values(copyPerson));
```

```js
[
    'Alexa',
    'Microsoft',
    [Function: getFullName],
    ['C', 'C++', 'JAVA', 'PHP', 'PYTHON', 'JavaScript', 'HTML', 'CSS'],
    'Nepal',
    false
]
```

#### 4. _Object.entries()_
   To get the keys and values in an array

```js
console.log(Object.entries(copyPerson));
```

```js
[
    ['fname', 'Alexa'],
    ['lname', 'Microsoft'],
    ['getFullName', [Function: getFullName]],
    [
        'skills',
        [
            'C',
            'C++',
            'JAVA',
            'PHP',
            'PYTHON',
            'JavaScript',
            'HTML',
            'CSS'
        ]
    ],
    ['country', 'Nepal'],
    ['isMarried', false]
]
```

#### 5. _hasOwnProperty()_
   To check if key or property exist in an object and return boolean.

```js
console.log(copyPerson.hasOwnProperty("fname")); // true
console.log(copyPerson.hasOwnProperty("name")); // false
console.log(copyPerson.hasOwnProperty("getFullName")); // true
```
