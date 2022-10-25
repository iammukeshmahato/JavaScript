console.log("--------------------------");
console.log("\tExercise: Level 1");
console.log("--------------------------\n");

// Q.1
const dog = {};

// Q.2
console.log(dog);   // {}

// Q.3
dog.name = "Tommy";
dog.legs = 4;
dog.color = "White";
dog.age = 3;
dog.bark = true;

console.log(dog);   // { name: 'Tommy', legs: 4, color: 'White', age: 3, bark: true }

// Q.4
console.log(dog.name);  // Tommy
console.log(dog.legs);  // 4
console.log(dog.color); // White
console.log(dog.age);   // 3
console.log(dog.bark);  // true

// Q.5
dog.breed = "unknown";
dog.getDogInfo = function () {
    let info = (`Name : ${dog.name}\nLegs : ${dog.legs}`);
    return info;
}

console.log(dog.getDogInfo());
// Name : Tommy
// Legs : 4