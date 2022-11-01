// 1. console.log();
// It is use to show to output on the browser console.

console.log("Hello i am mukesh, I am learning JavaScript.");

console.log("I am %d %s Old", 100, "Years");

// we can use %c and css to style the console output

console.log('%cI am Mukesh Mahato', 'color:gray') // log output is gray

console.log('%cI %cam %c Mukesh %cMahato', 'color:red', 'color:green', 'color:yellow', 'color:pink');

// 2. console.warn() - used to show warning in browser console.
console.warn("This is warning message");

// 3. console.error() - used to show an error messages.
console.error("Somethig went wrong. We can't process it now.")

// 4. console.table([first]) - it is used to print an array or an object as a table in browser console

const namess = ['Mukesh', 'Sanjeev', 'Nitesh', 'Subesh', 'Ramu', 'Bikee']
console.table(namess)

const info = {
    name: "Mukesh Mahto",
    faculty: "DIT",
    roll: 100
}

console.table(info)

// 5. console.time(timerName); - used to set the timer
// we can get time timer value using console.timeEnd(timerName);

console.time('count 1 to 10');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.timeEnd('count 1 to 10');   // count 1 to 10: 0.439ms

// 6. console.info() - it is used to display information message on the browser console.
// it is similar to console.log()
console.info("This is to notifiy that today is holiday.")

// 7. console.assert(condition, message) - it is used to write assertion if condition is failed

console.assert(4 > 5, '4 is greater than 5'); // Assertion failed: 4 is greater than 5
console.assert(4 > 3, '4 is greater than 5'); // no output in browser console because assetion is true.

for (let i = 1; i <= 10; i++) {
    console.assert(i % 2 == 0, `${i} is not even`);
}

// 8. console.group('groupName') - used to group the different log groups
// console.log();
// console.groupEnd(groupName) -  is used to end the group

var friends = ['Bikee', 'Nitesh', 'Ramu', 'Sanjeev', 'Subesh']
var myInfo = {
    name: "Mukesh Mahato",
    faculty: "DIT",
    year: "3rd",
    semester: 2
}

console.group('My information')
console.log(myInfo);
console.groupEnd('My information')

console.group('Friends')
console.log(friends);
console.groupEnd('Friends');

// 9. console.count('name') - it counts the number of console.count() is executed.

console.count("count")
console.count("count")
console.count("count")

for (let i = 1; i <= 5; i++) {
    console.count("count")
}

// 10. console.clear(); - is used to clear the browser console.
