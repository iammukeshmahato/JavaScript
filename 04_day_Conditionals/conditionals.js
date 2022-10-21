// if() Statement

let num = 5;
if (num > 0) {
    console.log(`${num} is a positive number`);;
}
// 5 is a positive number

// if...Else Statement
num = 5;
if (num > 0) {
    console.log(`${num} is a positive number`);;
} else {
    console.log(`${num} is a negative number`);;
}
// 5 is a positive number

num = -5;
if (num > 0) {
    console.log(`${num} is a positive number`);;
} else {
    console.log(`${num} is a negative number`);;
}
// -5 is a negative number

// if..Else if...Else

num = "asdf";
if (num > 0) {
    console.log(`${num} is a positive number`);;
} else if (num == 0) {
    console.log(`${num} is a Zero`);;
}
else if (num < 0) {
    console.log(`${num} is a negative number`);;
} else {
    console.log(`${num} is a not a number`);;
}
// asdf is a not a number

// Switch Statement

let day = 5;
switch (day) {
    case 1:
        console.log("Today is Sunday");
        break
    case 2:
        console.log("Today is Monday");
        break
    case 3:
        console.log("Today is Tuesday");
        break
    case 4:
        console.log("Today is Wednesday");
        break
    case 5:
        console.log("Today is Thursday");
        break
    case 6:
        console.log("Today is Friday");
        break
    case 7:
        console.log("Today is Saturday");
        break
    default:
        console.log("Invalid Input");
}
// Today is Thursday

// using conditions in case

let input = 9;
switch (true) {     // pass true as args in switch
    case input > 0:
        console.log(`${input} is a positive number.`);
        break;
    case input < 0:
        console.log(`${input} is a negative number.`);
        break;
    case input == 0:
        console.log(`${input} is a Zero.`);
        break;

    default:
        console.log(`${input} is a not a number.`);
        break;
}
// 9 is a positive number.

// Ternary Operators
// syntax
// conditon ? true : false

let isSatuday = false;
isSatuday ? console.log("No classes today.") : console.log("There is class today");
// There is class today
