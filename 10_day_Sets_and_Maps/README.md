# Sets & Maps In JavaScript

## Set

Set is a collection of elements. Set can only contains unique elements.
Let us see how to create a set in the section below.

### Creating an empty set

```js
const names = new Set();
console.log(names); // Set(0) {}
```

### Creating set from array

```js
const languages = [
   "English",
   "Finnish",
   "English",
   "French",
   "Spanish",
   "English",
   "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages); // Set(4) { 'English', 'Finnish', 'French', 'Spanish' }
```

Set is an iterable object and we can iterate through each elements.

```js
const languages = [
   "English",
   "Finnish",
   "English",
   "French",
   "Spanish",
   "English",
   "French",
];

const setOfLanguages = new Set(languages);

for (const languages of setOfLanguages) {
   console.log(languages);
}
```

```sh
  English
  Finnish
  French
  Spanish
```

### Adding an element to a set

```js
const names = new Set();
console.log(names); // Set(0) {}
names.add("Mukesh");
names.add("Ram");
names.add("Shyam");
names.add("Gita");

console.log(names.size); // 4
console.log(names); // Set(4) { 'Mukesh', 'Ram', 'Shyam', 'Gita' }
```

We can also use loop to add element to a set.

```js
const tempName = ["Ram", "Shyam", "Gita", "Hari"];
const setOfNames = new Set();
for (const name of tempName) {
   setOfNames.add(name);
}
console.log(setOfNames); // Set(4) { 'Ram', 'Shyam', 'Gita', 'Hari' }
```

### Deleting an element a set

We can delete an element from a set using a delete method.

```js
console.log(setOfNames.delete("Ram")); // true
console.log(setOfNames); // Set(3) { 'Shyam', 'Gita', 'Hari' }
```

### Checking an element in the set

The has method can help to know if a certain element exists in a set.

```js
// checking an element in the set
console.log(setOfNames.has("Ram")); // false
console.log(setOfNames.has("Hari")); // true
```

### Clearing the set

It removes all the elements from a set.

```js
// Clearing the set - clear()
console.log(setOfNames); // Set(3) { 'Shyam', 'Gita', 'Hari' }
setOfNames.clear();
console.log(setOfNames); // Set(0) {}
```

We can use Set for the following purpose.

```js
const languages = [
   "English",
   "Finnish",
   "English",
   "French",
   "Spanish",
   "English",
   "French",
];
const langSet = new Set(languages);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const l of langSet) {
   const filteredLang = languages.filter((lng) => lng === l);
   console.log(filteredLang); // ["English", "English", "English"]
   counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);
```

```js
[
   { lang: "English", count: 3 },
   { lang: "Finnish", count: 1 },
   { lang: "French", count: 2 },
   { lang: "Spanish", count: 1 },
];
```

Other use case of set. For instance to count unique item in an array.

```js
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);

console.log(setOfNumbers);
```

```sh
Set(5) {5, 3, 2, 9, 4}
```

### Union of sets

To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B).

```js
// Union of sets
var a = [1, 2, 3, 4, 5];
var b = [3, 4, 5, 6];
var c = [...a, ...b]; // (...)spread operator is used to copy the element of one array into the another array with new memory location

console.log(c); //[ 1, 2, 3, 4, 5, 3, 4, 5, 6]

var A = new Set(a);
var B = new Set(b);
var C = new Set(c);

console.log(C); // Set(6) { 1, 2, 3, 4, 5, 6 }
```

### Intersection of sets

To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B).

```js
// Intersection of sets
// it can be done using filter method

var a = [1, 2, 3, 4, 5];
var b = [3, 4, 5, 6];

var A = new Set(a);
var B = new Set(b);

var c = a.filter((elem) => B.has(elem)); // since filter method returns an array, it will be an array
var C = new Set(c);

console.log(C); // Set(3) { 3, 4, 5 }
```

### Difference of sets

To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B).
<br><br>
Difference of set A and set B (A\B) - Set A should not contain any elements of set B

```js
var a = [1, 2, 3, 4, 5];
var b = [3, 4, 5, 6];

var A = new Set(a);
var B = new Set(b);

var c = a.filter((elem) => !B.has(elem)); // since filter method returns an array, it will be an array
var C = new Set(c);

console.log(C); // Set(2) { 1, 2 }
```

## Map

Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

### Creating an empty Map

```js
const map = new Map();
console.log(map); // Map(0) {}
```

### Creating an Map from array

```js
countries = [
   ["Finland", "Helsinki"],
   ["Sweden", "Stockholm"],
   ["Norway", "Oslo"],
   ["Nepal", "KTM"],
];
const country_map = new Map(countries);
console.log(country_map);
```

```js
// output

Map(4) {
    'Finland' => 'Helsinki',
     'Sweden' => 'Stockholm',
     'Norway' => 'Oslo',
     'Nepal' => 'KTM'
}
```

```js
console.log(country_map.size); // 4
```

### Adding values to the Map

set() is used to add values to the map.

```js
country_map.set("India", "Delhi");
console.log(country_map);
console.log(country_map.size); // 5
```

### Getting a value from Map

get() is used to get the value form map

```js
console.log(country_map.get("India")); // Delhi
```

### Checking key in Map

Check if a key exists in a map using _has_ method. It returns _true_ or _false_.
<br><br>
has() is used to check for key in Map

```js
console.log(country_map.has("India")); // true
console.log(country_map.has("China"));
```

```js
// Getting all the values from the Map using loop

for (const country of country_map) {
   console.log(country);
}
```

```js
// OUTPUT

["Finland", "Helsinki"][("Sweden", "Stockholm")][("Norway", "Oslo")][
   ("Nepal", "KTM")
][("India", "Delhi")];
```

````js
for (const [country, city] of country_map) {
    console.log(country, city);
}```

```js
// OUTPUT

// Finland Helsinki
// Sweden Stockholm
// Norway Oslo
// Nepal KTM
// India Delhi
````

### I have issue in the following exercies.

#### Exercise Level 1:

-  [Question No. 6](https://github.com/iammukeshmahato/JavaScript/blob/master/10_day_Sets_and_Maps/exercise/questions.md/#exercises-level-1)


## [data/countries_data.js file](https://github.com/iammukeshmahato/JavaScript/blob/master/08_day_Objects/exercise/data/countries_data.js)