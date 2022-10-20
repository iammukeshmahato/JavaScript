// alert()
// we can use alert() with or without window object

// alert("Hi, This also an alert without window object");
window.alert("Hi, This is an alert.");

// prompt() - it is used to take inputs from the users

let name = prompt("Enter your name:", "Mukesh");        // here 'Mukesh' is value, it is optional.
console.log(`Hello ${name}`);
document.body.append(`Hello ${name}, welcome to the 30 days JavaScript Challenge.`);

// confirm() - it returns the boolean value based on button clicked by user

let areYouSure = confirm("Are you sure want to delete ?");
console.log(areYouSure);        // return true or false based on button clicked by user