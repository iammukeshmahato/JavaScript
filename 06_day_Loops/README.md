# Loops In JavaScript

When there is a need of executing a task a specific number of times until a termination condition is met, we use loop statements. These statements are also called looping statements or repetitive statements. Java provides three ways of writing iterative statements. They are while statement, do-while statement, and for statement.

### For Loop

When we have the fixed number of the iteration known then we use for loop. The basic syntax of for statement is:

```js
for (initialization; condition; increment / decrement) {
   // code
}
```

```js
for (let i = 0; i <= 5; i++) {
   console.log(i);
}
// 0 1 2 3 4 5
```

```js
for (let i = 5; i >= 0; i--) {
   console.log(i);
}
// 5 4 3 2 1 0
```

```js
for (let i = 1; i <= 10; i++) {
   console.log(`5 * ${i} = ${5 * i}`);
}
```

### Output

```js
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
```

### While Loop

The while statement executes the statements as long as the given condition remains true. The general syntax of while statement is:

```js
while (condition) {
   //  code
}
```

```js
let count = 0;
while (count < 5) {
   console.log(count);
   count++;
}
// 0 1 2 3 4 5
```

**Note:** If the increment/decrement conditions is not provided inside the while block, the loop can go infinite.

### Do While Loop

The do while loop always executes its body `at least once`. So, to guarantee, at least one time, execution of statements do while loop is used. The basic syntax of do while loop is:

```js
do {
   //  code
} while (condition);
```

```js
let count = 0;
do {
   console.log(count);
   count++;
} while (count < 5);

// 0 1 2 3 4 5
```

```js
let count = 10;
do {
   console.log(count);
   count++;
} while (count < 5);

// 10
```

### for of Loop

We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

```js
for (const element of array) {
   //  code
}
```

```js
let names = ["Ram", "Shyam", "Gita", "Hari", "Mohan", "Rita", "Sita"];

for (const name of names) {
   console.log(name);
}
```

### Output

```js
Ram;
Shyam;
Gita;
Hari;
Mohan;
Rita;
Sita;
```

### Break

It is used to interrupt a loop.

```js
for (let i = 0; i < 5; i++) {
   if (i == 3) {
      break;
   }
   console.log(i);
}

// 0 1 2
```

In the above example, the loop is terminated when the condition is satisfied.

### Continue

It is used to skip a certain iterations.

```js
for (let i = 0; i < 5; i++) {
   if (i == 3) {
      continue;
   }
   console.log(i);
}

// 0 1 2 4
```

In above example, the iteration 3 is skipped.
