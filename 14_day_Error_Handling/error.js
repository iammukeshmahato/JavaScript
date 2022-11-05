// try{}catch{}

try {
    let lastName = "Mahato";
    let fullName = firstName + ' ' + lastName;
} catch (error) {
    console.log(error);
}

// output

// ReferenceError: firstName is not defined
//     at error.js:5:20


// try{}catch{}finally{}

try {
    let lastName = "Mahato";
    let fullName = firstName + ' ' + lastName;
} catch (error) {
    console.log(error);
} finally {
    console.log("in any condition, statements in finally block will be executed");
}

try {
    let lastName = "Mahato";
    let fullName = firstName + ' ' + lastName;
} catch (error) {
    console.log("name of error: ", error.name);
    console.log("error message: ", error.message);
} finally {
    console.log("in any condition, statements in finally block will be executed");
}

console.clear();

// throwing errors
// uncomment anyone statement to see the error in console.

// throw 'Error'; // generates an exception with a string value
// throw 42 // generates an exception with the value 42
// throw true // generates an exception with the value true
// throw new Error('Required') // generates an error object with the message of Required

function throwError() {
    let errMsg;
    let x = prompt("Enter a number: ");
    try {
        if (x == "")throw 'Empty';
        if(isNaN(x)) throw `${x} is not a number.`;
        x = Number(x);
        if(x<5) throw "small value";
        if(x>10) throw "big value";
    } catch (error) {
        console.log(error);
    }
}

throwError();

// Types of error
// 1. ReferenceError: - if we use undefined variable

// console.log(xyz);

// 2. - SyntaxError: A syntax error has occurred

// console.log("hello world');

// 3. TypeError: A type error has occurred

let num = 10;
console.log(num.toLowerCase());