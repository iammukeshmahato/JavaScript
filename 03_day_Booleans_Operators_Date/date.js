// creating a date object
let now = new Date();
console.log(now);       // Wed Oct 19 2022 15:25:12 GMT+0545 (Nepal Time)

console.log(now.getFullYear());      // 2022
console.log(now.getMonth());      // 9 <- 9 for october because index starts with 0
console.log(now.getDate());      // 19
console.log(now.getDay());      // 3 <- 3 for wednesday because array index starts with 0
console.log(now.getHours());    // 15 <- return in 24hrs
console.log(now.getMinutes());  // 29
console.log(now.getSeconds());    // 39
console.log(now.getTime());     // 1666172750066 <- this is the number of seconds passed from January 1, 1970 to Wed Oct 19 2022 15:25:12 