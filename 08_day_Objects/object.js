// object with values
const myData = {
    fname: "Mukesh",
    lname: "Mahato",
    age: 210,
}
console.log(myData);        // { fname: 'Mukesh', lname: 'Mahato', age: 21 }

// accessing object properties using period (.)
console.log(myData.fname);  // Mukesh
console.log(myData.lname);  // Mahat
console.log(myData.age);  // 210

// accessing object properties using square brakets and key name.
console.log(myData['fname']); // Mukesh
console.log(myData['lname']); // Mahat
console.log(myData['age']); // 210

// Creating object methods
const person = {
    fname: "Alexa",
    lname: "Microsoft",
    getFullName: function () {
        return `${this.fname} ${this.lname}`;
    },
    skills: [
        "C", "C++", "JAVA", "PHP", "PYTHON", "JavaScript"
    ]
}

console.log(person.getFullName());      // Alexa Microsoft
console.log(person.skills);      // [ 'C', 'C++', 'JAVA', 'PHP', 'PYTHON', 'JavaScript' ]

// adding new key an object
person.country = "Nepal";
person.isMarried = false;
person.skills.push("HTML");
person.skills.push("CSS");

console.log(person.country);    // Nepal
console.log(person.isMarried);    // false

// object methods
// 1. object.assign: To copy an object without modifying the original object
// const copyPerson = Object.assign(person);
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

// 2. Object.keys() - to get the keys or properties of an object as an array
console.log(Object.keys(copyPerson));   // [ 'fname', 'lname', 'getFullName', 'skills', 'country', 'isMarried' ]

// 3. Object.values() - to get values of an object as an array
console.log(Object.values(copyPerson));
// [
//     'Alexa',
//     'Microsoft',
//     [Function: getFullName],
//     ['C', 'C++', 'JAVA', 'PHP', 'PYTHON', 'JavaScript', 'HTML', 'CSS'],
//     'Nepal',
//     false
// ]

// 4. Object.entries() - to get the keys and values in an array
console.log(Object.entries(copyPerson));

// [
//     ['fname', 'Alexa'],
//     ['lname', 'Microsoft'],
//     ['getFullName', [Function: getFullName]],
//     [
//         'skills',
//         [
//             'C',
//             'C++',
//             'JAVA',
//             'PHP',
//             'PYTHON',
//             'JavaScript',
//             'HTML',
//             'CSS'
//         ]
//     ],
//     ['country', 'Nepal'],
//     ['isMarried', false]
// ]

// 5. hasOwnProperty() - to check if key or property exist in an object and return boolean.
console.log(copyPerson.hasOwnProperty('fname'));     // true
console.log(copyPerson.hasOwnProperty('name'));     // false
console.log(copyPerson.hasOwnProperty('getFullName'));     // true