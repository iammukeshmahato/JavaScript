// Q.1
let challenge = "30 Days Of JavaScript";

// Q.2
console.log(challenge);

// Q.3
console.log(`The of ${challenge} = ${challenge.length}`);

// Q.4
console.log(`${challenge} in capital case = '${challenge.toUpperCase()}'`);

// Q.5
console.log(`${challenge} in lowercase = '${challenge.toLowerCase()}'`);

// Q.6
console.log(`The first word = ${challenge.substring(0,2)}`);    // substring() extract from start to (end -1) th index

// Q.7
console.log(challenge.slice(3));

// Q.8
console.log(`does ${challenge} contains 'Script' => ${challenge.includes("Script")}`);

// Q.9
splitedArray = challenge.split(" ");

// Q.10
console.log(splitedArray);

// Q.11
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
splitedArray = string.split(", ");
console.log(splitedArray);

// Q.12
console.log(`Changing 'JavaScript' with 'python' in ${challenge} => ${challenge.replace("JavaScript", "Python")}`);

// Q.13
console.log(`Character at 15th index in ${challenge} => '${challenge.charAt(15)}'`);

// Q.14
console.log(`code of J in ${challenge} => ${challenge.charCodeAt(challenge.indexOf("J"))}`);

// Q.15
console.log(`index of 'a' in ${challenge} => ${challenge.indexOf("a")}`);

// Q.16
console.log(`Last index of 'a' in ${challenge} => ${challenge.lastIndexOf("a")}`);

// Q.17
string = 'You cannot end a sentence with because because because is a conjunction'
console.log(`index of first occurrence 'because' in '${string}' => ${string.indexOf("because")}`);

// Q.18
console.log(`index of last occurrence 'because' in '${string}' => ${string.lastIndexOf("because")}`);

// Q.19
console.log(`position of first occurance of 'because' in ${string} uisng search() => ${string.search("because")}`);

// Q.20
challengeWithSpace = '   30 Days Of JavaScript';
console.log(`Removing white space from '${challengeWithSpace}' => '${challengeWithSpace.trim()}'`);

// Q.21
console.log(`Does '${challenge}' starts with '30' => ${challenge.startsWith("30")}`);

// Q.22
console.log(`Does '${challenge}' ends with 'JavaScript' => ${challenge.endsWith("JavaScript")}`);

// Q.23
console.log(`all Match of 'a' in '${challenge}' => ${challenge.match(/a/gi)}`);

// Q.24
let str1 = "30 Days Of";
console.log(`concatenation of '${str1}' & 'JavaScript' => '${str1.concat(" JavaScript")}'`);