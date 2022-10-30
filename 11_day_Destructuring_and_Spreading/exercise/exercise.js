console.log("--------------------------");
console.log("\tExercise: Level 1");
console.log("--------------------------\n");

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

// Q.1
let [e, pi, g, humanBodayTemp, waterBoilingTemp] = constants;
console.log(e);     // 2.72
console.log(pi);        // 3.14
console.log(g);     // 9.81
console.log(humanBodayTemp);        // 37
console.log(waterBoilingTemp);      // 100

// Q.2

let [fin, est, sw, den, nor] = countries;
console.log(fin);       // Finland
console.log(est);       // Estonia
console.log(sw);       // Sweden
console.log(den);       // Denmark
console.log(nor);       // Norway

// Q.3

let { width, height, area, perimeter } = rectangle;
console.log(rectangle.width);   // 20   without destructing
console.log(width);     // 20       after destructing
console.log(height);    // 10
console.log(area);      // 200
console.log(perimeter); // 60

console.log("--------------------------");
console.log("\tExercise: Level 2");
console.log("--------------------------\n");

// Q.1
// since we are iterating, it is better to use for..of loop
for (const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age);
}

// using ForEach loop
users.forEach(({ name, scores, skills, age }) => {
    console.log(name, scores, skills, age);
});


// Q.2
users.forEach(({ name, scores, skills, age }) => {
    if (skills.length < 2) {
        console.log(name);
        console.log(scores, skills, age);
    }
});

// John
// 85 [ 'HTML' ] 25

console.log("--------------------------");
console.log("\tExercise: Level 3");
console.log("--------------------------\n");

// renaming during destructing
const { countries: countriesData } = require('./data/countries_data');
// console.log(countriesData);

// Q.1
for (const { name, capital, population, languages } of countriesData) {
    // console.log(`'${capital}' is the capital of '${name}'.\n The '${name}' has ${population} populations.\n The sopken languages area: ${languages}\n\n`);
    console.log("Country name: ", name);
    console.log("Country Capital: ", capital);
    console.log("Population: ", population);
    console.log("languages: ", languages);
    console.log();      // for break
}

// Q.2

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// for blank elements, we can use comma.
let [name, skills, [, , jsScore, reactScore]] = student;

console.log(name, skills, jsScore, reactScore);     // David [ 'HTM', 'CSS', 'JS', 'React' ] 90 95


// Q.3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr) {
    const data = []
    arr.forEach(elem => {
        const obj = {
            name: elem[0],
            skills: elem[1],
            scores: elem[2],
        }
        data.push(obj);
    })
    return data;
}

console.log(convertArrayToObject(students));

// Q.4

const student1 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const newStudent = { ...student1 };    // coping object

newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 })
// console.log(newStudent.skills.frontEnd);


newStudent.skills.backEnd.push({ skill: 'Express', level: 9 })
// console.log(newStudent.skills.backEnd);

newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 })
// console.log(newStudent.skills.dataBase);

newStudent.skills.dataScience.push('SQL')
// console.log(newStudent.skills.dataScience);

// function showArray(object) {
//     for (const key in object) {
//         console.log(key, ":", object[key]);
//     }
// }
console.log(newStudent);
// showArray(newStudent);