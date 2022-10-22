// Creating an array
// 1. using Array constructor
let arr = Array();
console.log(arr);   // []

// 2. Using squar brackets []
let arr2 = [];
console.log(arr2);  // []


// creating array with values
let names = ['ram', 'shyam', 'gita', 'hari'];   // Array of strings
console.log(names); // [ 'ram', 'shyam', 'gita', 'hari' ]
console.log(`Length = ${names.length}`);    // 4

let numbers = [0, 10, 20, 5, 4, 6, 12];     // Array of numbers
console.log(numbers);   // [0, 10, 20, 5, 4, 6, 12]
console.log(`Length = ${numbers.length}`);    // 7

// Array can have different data types
let data = [
  "Mukesh Mahato",
  21,
  "Male",
  true,
  { country: "Nepal", city: "Lahan" }
]
console.log(data);
[
  'Mukesh Mahato',
  21,
  'Male',
  true,
  { country: 'Nepal', city: 'Lahan' }
]

// Accessing array using index
let fruits = ['apple', 'banana', 'orange', 'mango'];
console.log(`First fruit = ${fruits[0]}`);      // apple
console.log(`second fruit = ${fruits[1]}`);      // banana
console.log(`third fruit = ${fruits[2]}`);      // orange
console.log(`last fruit = ${fruits[fruits.length - 1]}`);      // mango

// Modifiying array element
numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[1] = 20;
console.log(numbers);   // [ 10, 20, 3, 4, 5 ]

// Array manipulation methods
// 1. Array constructor - to create an array
let newArr = Array();   // creates an empty array
let fiveElementArray = Array(5);    // creates array of length 5 with empty value
console.log(fiveElementArray);  // [ <5 empty items> ]

// 2. fill method - used to fill element with static data
fiveElementArray.fill(9);
console.log(fiveElementArray);  // [ 9, 9, 9, 9, 9 ]

fiveElementArray.fill("M");
console.log(fiveElementArray);  // [ 'M', 'M', 'M', 'M', 'M' ]

let fillArray = Array(6).fill("a");
console.log(fillArray);     // [ 'a', 'a', 'a', 'a', 'a', 'a' ]

// 3. concat - used to concatenate array
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);    // [ 1, 2, 3, 4, 5, 6 ]

// 4. length - used to get the length of an array
let countries = ['Nepal', 'India', 'China', 'Pakistan'];
console.log(countries.length);      // 4

// 5. indexOf - returns the index of element
let num = [1, 2, 3, 4, 5];
console.log(num.indexOf(1));    // 0
console.log(num.indexOf(2));    // 1
console.log(num.indexOf(3));    // 2
console.log(num.indexOf(4));    // 3
console.log(num.indexOf(5));    // 4
console.log(num.indexOf(6));    // -1   if element not exist it returns -1

// 6. includes - check if an item exist in an array. returns true if exist else return false
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.includes(20));  // false
console.log(num.includes(2));  // true

// 7. Array.isArray() - check if the data type is array or not
let lang = ["JS", "PHP", "C", "C++", "PYTHON"];
console.log(Array.isArray(lang));   // true

let myName = "Mukesh";
console.log(Array.isArray(myName));     // false

// 8. toString() - conters an array to string
names = ['ram', 'shyam', 'gita', 'hari'];
console.log(names);     // [ 'ram', 'shyam', 'gita', 'hari' ]
console.log(names.toString());      // ram,shyam,gita,hari

// 9. join - it is used to join the elements of the array, the argument we passed in the join method will ne joined in the array and return as string. By default, it joins with a comma.
names = ['ram', 'shyam', 'gita', 'hari'];
console.log(names.join());  // ram,shyam,gita,hari
console.log(names.join(""));  // ramshyamgitahari
console.log(names.join(" "));  // ram shyam gita hari
console.log(names.join("@"));  // ram@shyam@gita@hari
console.log(names.join(" - "));  // ram - shyam - gita - hari

// 10. slice - to cut out a multiple items in range.
// return an Array
// syntax
// arrayName.slice(start, end)

console.log(names.slice());    // copies all the items
console.log(names.slice(0));    // copies all the itesm
console.log(names.slice(1, 3));    // [ 'shyam', 'gita' ]
console.log(names.slice(2));    // from 2nd index [ 'gita', 'hari' ]

// 11. splice - it takes 3 parameters: starting position, number of items to be removed and number of items to be added.
numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice());  // removes all the elements - []
console.log(numbers.splice(2, 1));  // removes 1 item from index 2  - [3]
console.log(numbers);   // [ 1, 2, 4, 5 ]

console.log(numbers.splice(1, 2, 9, 8, 7));  // removes 2 item from index 1 and add 9,8,7 at index 1 - [2,4]
console.log(numbers);  // [ 1, 9, 8, 7, 5 ]

// 12. push - Adding element to an array at last
numbers = [1, 2, 3, 4, 5];
console.log(numbers);     // [ 1, 2, 3, 4, 5 ]  
numbers.push(6)
console.log(numbers);     // [ 1, 2, 3, 4, 5, 6 ]  

// 13. pop - deleting last item of an array
numbers.pop()
console.log(numbers);       // [ 1, 2, 3, 4, 5 ]

// 14. unshifi() - adding an item at the beginnig of an array
numbers.unshift(0);
console.log(numbers);   // [ 0, 1, 2, 3, 4, 5 ]

// 15. shifi() - deleteing an item at the beginnig of an array
numbers.shift();
console.log(numbers);   // [ 1, 2, 3, 4, 5 ]

// 16. sort() - arrange array element in ascending order
console.log(lang);      // [ 'JS', 'PHP', 'C', 'C++', 'PYTHON' ]
console.log(lang.sort());       // [ 'C', 'C++', 'JS', 'PHP', 'PYTHON' ]

// 17. reverse() -  arrange array element in descending order
console.log(lang.reverse());    // [ 'PYTHON', 'PHP', 'JS', 'C++', 'C' ]

// Array of Array - Multi dimensional array
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length);  // 2
console.log(fullStack[0]);  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]

let odd = [1, 3, 5];
let even = [2, 4, 6];
let bothNum = [odd, even];
console.log(odd);   // [ 1, 3, 5 ]
console.log(even);  // [ 2, 4, 6 ]
console.log(bothNum);   // [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]
