console.log("--------------------------");
console.log("\tExercise: Level 2");
console.log("--------------------------\n");

// Q.1
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
let highestSkillCount = 0;
let userWithManySkills = "";
for (const user in users) {
    let skillCount = users[user].skills.length;
    if (users[user].skills.length > highestSkillCount) {
        highestSkillCount = skillCount;
        userWithManySkills = user;
    }
}
console.log(`${userWithManySkills} is the person who has many skills among all the users. With ${highestSkillCount} skills.`);
// Asab is the person who has many skills among all the users. With 8 skills.

// Q.2
let loggedInCount = 0;
let pointCount = 0;
for (const user in users) {
    if (users[user].isLoggedIn) loggedInCount++;
    if (users[user].points >= 50) pointCount++;
}
console.log(`Logged in Users: ${loggedInCount}\nUsers having points more than or equal to 50 points: ${pointCount}`);
// Logged in Users: 2
// Users having points more than or equal to 50 points: 3

// Q.3
let mernDev = [];
for (const user in users) {
    let skills = users[user].skills
    if (skills.includes("MongoDB") && skills.includes("Express") && skills.includes("React") && skills.includes("Node")) {
        mernDev.push(user);
    }
}
console.log(`MERN stack developer: ${mernDev}`);
// MERN stack developer: Asab,Paul

// Q.4      // Not solved

console.log("\nQ.4 Not Solved\n");

// const copyUser = Object.assign({}, users);
// copyUser.name = "Mukesh";
// console.log(copyUser);

// Q.5
console.log(Object.keys(users));    // ['Alex', 'Asab', 'Brook', 'Daniel', 'John', 'Thomas', 'Paul']

// Q.6
console.log(Object.values(users));

// Q.7
// importing data from data folder.
const { countries } = require('./data/countries_data');
for (const country of countries) {
    console.log(`Name: ${country.name}\nCapital: ${country.capital}\nPopulations: ${country.population}\nLanguages: ${country.languages}\n`);
}