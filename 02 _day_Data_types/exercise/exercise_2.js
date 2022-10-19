console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." \v- By Mother Teresa`);

console.log(`type of '10' => ${typeof '10'}`);
console.log(`type of 10 => ${typeof 10}`);

let strNum = '9.8';
console.log(`type of ${strNum} => ${typeof strNum}`);
let strNumInFloat = parseFloat(strNum)
console.log(`type of ${strNumInFloat} => ${typeof strNumInFloat}`);

// Q.5
let python = "Python";
console.log(`Does 'on' found in 'Python' => ${python.includes("on")}`);

let Jargon = "Jargon";
console.log(`Does 'on' found in '${Jargon}' => ${Jargon.includes("on")}`);

// Q.6
let str = 'I hope this course is not full of jargon';
searchWord = 'jargon';
console.log(`Does '${searchWord}' found in '${str}' => ${str.includes(searchWord)}`);

// Q.7 
let randNum = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number form 0 - 100 => ${randNum}`);

// Q.8
randNum = 50 + (Math.floor(Math.random() * 50) + 1);
console.log(`Random Number form 50 - 100 => ${randNum}`);

// Q.9
randNum = (Math.floor(Math.random() * 255) + 1);
console.log(`Random Number form 0 - 255 => ${randNum}`);

// Q.10
str = "JavaScript";
console.log(str[7]);

// Q.11
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`); 

// Q.12
str = "You cannot end a sentence with because because because is a conjunction";
console.log(str.substr(str.indexOf("because"), 23));