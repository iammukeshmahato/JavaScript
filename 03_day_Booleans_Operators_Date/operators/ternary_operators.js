//  It is a conditional operator.
// syntax:
// conditionToBeChecked ? true : false

let isLightOn = true;

isLightOn ? console.log("Light is ON") : console.log("light is OFF");

isLightOn = false;
isLightOn ? console.log("Light is ON") : console.log("light is OFF");

let count = 5;
count > 10 ? console.log("greater") : console.log("smaller");

count = 15;
count > 10 ? console.log("greater") : console.log("smaller");

let number = 13;
number > 0 ? console.log(`${number} is positive number.`):console.log(`${number} is negative number.`);

number = -13;
number > 0 ? console.log(`${number} is positive number.`):console.log(`${number} is negative number.`);