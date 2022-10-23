// for loop
// syntax
// for(initialization, condition, increment/decrement){
//     // code
// }

for (let i = 0; i <= 5; i++) {
    console.log(i);
}
// 0 1 2 3 4 5

for (let i = 5; i >= 0; i--) {
    console.log(i);
}
// 5 4 3 2 1 0

for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50

let names = ["Ram", "Shyam", "Gita", "Hari", "Mohan", "Rita", "Sita"];
let namesInUpperCase = [];
for (let i = 0; i < names.length; i++) {
    namesInUpperCase.push(names[i].toUpperCase());
}

console.log(namesInUpperCase);

// ['RAM', 'SHYAM', 'GITA', 'HARI', 'MOHAN', 'RITA', 'SITA']

// While loop

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// 0 1 2 3 4 5

// do while loop
count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);
// 0 1 2 3 4 5

count = 10;
do {
    console.log(count);
    count++;
} while (count < 5);

// 10

// for of loop
// - used for arrays. 
// syntax
// for(const element of array){
// code
// }

names = ["Ram", "Shyam", "Gita", "Hari", "Mohan", "Rita", "Sita"];

for (const name of names) {
    console.log(name);
}
// Ram
// Shyam
// Gita
// Hari
// Mohan
// Rita
// Sita


// for in loop
// syntax
// for(keys in object){
// code
// }

const myData = {
    name: "Mukesh Mahato",
    age: 21
}

for (const key in myData) {
    console.log(myData[key]);
}

// break - used to interrupt a loop

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}
// 0 1 2

// continue - skip a certain iterations.

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
// 0 1 2 4