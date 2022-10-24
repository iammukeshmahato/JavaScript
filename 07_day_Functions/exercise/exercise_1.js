console.log("--------------------------");
console.log("\tExercise: Level 1");
console.log("--------------------------\n");

// Q.1
function fullName() {
    console.log("Mukesh Mahato");
}
fullName();

// Q.2
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName("Ram", "sah"));

// Q.3
function addNumber(num1, num2) {
    return num1 + num2;
}
console.log(addNumber(11, 22));  // 33

// Q.4
function areaOfRectangle(l, b) {
    let area = l * b;
    return area;
}
console.log("The area of a rectangle with length 10 and breadth 12 = ", areaOfRectangle(10, 12));    //120

// Q.5
function perimeterOfRectangle(l, b) {
    let perimeter = 2 * (l + b);
    return perimeter;
}
console.log("The perimeter of a rectangle with length 120 and breadth 21 = ", perimeterOfRectangle(120, 21));    //282

// Q.6
function volumeOfRectPrism(l, b, h) {
    let volume = l * b * h;
    return volume;
}
console.log("Voluem of rectange = ", volumeOfRectPrism(4, 5, 6));     // 120

// Q.7
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area;
}
console.log("Area of circle with radius 9 = ", areaOfCircle(9));     // 254.46900494077323

// Q.8
function circumOfCircle(r) {
    let circum = 2 * Math.PI * r;
    return circum;
}
console.log("Circumference of circle with radius 9 = ", circumOfCircle(9));     // 56.548667764616276

// Q.9
function density(mass, volume) {
    let density = mass / volume;
    return density;
}
console.log("Density = ", density(52, 4));     // 13

// Q.10
function speed(distance, time) {
    let speed = distance / time;
    return speed;
}
console.log("Speed = ", speed(8, 1.5));  // 5.333333333333333

// Q.11
function weight(mass) {
    return mass * 9.8;
}
console.log("weight of 58kg mass = ", weight(58));   // 568.4000000000001

// Q.12
function convertCelsiusToFahrenheit(c) {
    let f = (c * 9 / 5 + 32);
    return f;
}
console.log(`38c = ${convertCelsiusToFahrenheit(38)}F`);    // 100.4F

// Q.13
function BMI(weight, height) {
    let bmi = weight / (height * height);
    switch (true) {
        case bmi < 18.5:
            console.log("Underweight");
            break;

        case bmi < 24.9:
            console.log("Normal Weight");
            break;

        case bmi < 29.9:
            console.log("Over Weight");
            break;

        case bmi >= 30:
            console.log("Obese");
            break;

        default:
            console.log("Invalid");
            break;
    }
    return bmi;
}

console.log("bmi = ", BMI(53, 1.6));    // normal weight 20.703124999999996

// Q.14
function checkSeason(month) {
    switch (true) {
        case month == "september" || month == "october" || month == "november":
            console.log("The season is Autumn.");
            break;
        case month == "december" || month == "january" || month == "february":
            console.log("The season is Winter.");
            break;
        case month == "march" || month == "april" || month == "may":
            console.log("The season is Spring.");
            break;
        case month == "june" || month == "july" || month == "august":
            console.log("The season is Summer.");
            break;

        default:
            console.log("invalid input");
            break;
    }
}
checkSeason("june");    // The season is Summer.

// Q.15
function findMax(a, b, c) {
    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    else return c;
}
console.log(findMax(5, 4, -9));   // 5
console.log(findMax(-5, 4, -9));   // 4
console.log(findMax(-5, -4, -9));   // -4