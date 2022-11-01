# Console Object Methods In Javascript

## Console Object Methods

We use console object methods to show output on the browser console and we use document.write to show output on the browser document(view port). Both methods used only for testing and debugging purposes. The console method is the most popular testing and debugging tool on the browser. We use document.getElementById() when we like to interact with DOM try using JavaScript.

In addition to the famous, console.log() method, the console provides other more methods.

### 1. console.log()

We use console.log() to show output on the browser console. We can substitute values and also we can style the logging out put using %c.

-  Showing output on browser console

```js
console.log("Hello i am mukesh, I am learning JavaScript.");
```

```sh
Hello i am mukesh, I am learning JavaScript.
```

-  Substitution

```js
console.log("I am %d %s Old", 100, "Years");
```

```sh
I am 100 Years Old
```

-  CSS

We can style logging message using css. we can use %c and css to style the output in the console.

```js
console.log("%cI am Mukesh Mahato", "color:gray"); // log output is gray

console.log(
   "%cI %cam %c Mukesh %cMahato",
   "color:red",
   "color:green",
   "color:yellow",
   "color:pink"
);
```

### 2. console.warn()

We use console.warn() to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices.

```js
console.warn("This is warning message");
```

### 3. console.error()

The console.error() method shows an error messages.

```js
console.error("Somethig went wrong. We can't process it now.");
```

### 4. console.table()

The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.

```js
const names = ["Mukesh", "Sanjeev", "Nitesh", "Subesh", "Ramu", "Bikee"];
console.table(names);
```

```sh
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │ 'Mukesh'  │
│    1    │ 'Sanjeev' │
│    2    │ 'Nitesh'  │
│    3    │ 'Subesh'  │
│    4    │  'Ramu'   │
│    5    │  'Bikee'  │
└─────────┴───────────┘
```

```js
const info = {
   name: "Mukesh Mahto",
   faculty: "DIT",
   roll: 100,
};

console.table(info);
```

```sh
┌─────────┬────────────────┐
│ (index) │     Values     │
├─────────┼────────────────┤
│  name   │ 'Mukesh Mahto' │
│ faculty │     'DIT'      │
│  roll   │      100       │
└─────────┴────────────────┘
```

### 5. console.time()

Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

```js
// console.time(timerName); - used to set the timer
// we can get time timer value using console.timeEnd(timerName);

console.time("count 1 to 10");
for (let i = 1; i <= 10; i++) {
   console.log(i);
}
console.timeEnd("count 1 to 10"); // count 1 to 10: 0.439ms
```

### 6. console.info()

It displays information message on browser console.

```js
// it is similar to console.log()

console.info("This is to notifiy that today is holiday.");
```

### 7. console.assert()

The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.

```js
// console.assert(condition, message) - it is used to write assertion if condition is failed

console.assert(4 > 5, "4 is greater than 5");
console.assert(4 > 3, "4 is greater than 5"); // no output in browser console because assetion is true.
```

```sh
Assertion failed: 4 is greater than 5
```

```js
for (let i = 1; i <= 10; i++) {
   console.assert(i % 2 == 0, `${i} is not even`);
}
```

```sh
Assertion failed: 1 is not even
Assertion failed: 3 is not even
Assertion failed: 5 is not even
Assertion failed: 7 is not even
Assertion failed: 9 is not even
```

### 8. console.group()

The console.group() can help to group different log groups. Copy the following code and paste it on browser console to the groups.

```js
var friends = ["Bikee", "Nitesh", "Ramu", "Sanjeev", "Subesh"];
var myInfo = {
   name: "Mukesh Mahato",
   faculty: "DIT",
   year: "3rd",
   semester: 2,
};

console.group("My information");
console.log(myInfo);
console.groupEnd("My information");

console.group("Friends");
console.log(friends);
console.groupEnd("Friends");
```

### 9. console.count()

It prints the number of times the console.count() is called. It takes a string label parameter. It is very helpful to count the number of times a function is called.

```js
console.count("count: ");
console.count("count: ");
console.count("count: ");

for (let i = 1; i <= 5; i++) {
   console.count("count: ");
}
```

```sh
count: 1
count: 2
count: 3
count: 4
count: 5
count: 6
count: 7
count: 8
```

### 10. console.clear()

The console.clear() cleans the browser console.

```js
console.clear();
```

### I have issue in the following exercies.

#### Exercise Level 1:

-  [Question No. 2](https://github.com/iammukeshmahato/JavaScript/blob/master/13_day_Console_Object_Methods/exercise/questions.md/#exercises-level-1)

-  [Question No. 3](https://github.com/iammukeshmahato/JavaScript/blob/master/13_day_Console_Object_Methods/exercise/questions.md/#exercises-level-1)

## [data/countries_data.js file](https://github.com/iammukeshmahato/JavaScript/blob/master/08_day_Objects/exercise/data/countries_data.js)
