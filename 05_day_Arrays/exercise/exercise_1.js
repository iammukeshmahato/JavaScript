let myArr = [];
let arrWithFiveElements = [1, 2, 3, 4, 5];
console.log("length = " + arrWithFiveElements.length);
console.log(`first element = ${arrWithFiveElements[0]}`);
console.log(`middle element = ${arrWithFiveElements[(arrWithFiveElements.length - 1) / 2]}`);
console.log(`last element = ${arrWithFiveElements[arrWithFiveElements.length - 1]}`);

let mixedDataType = [
    "Mukesh",
    21,
    "Lahan",
    "Male",
    true,
    { firstName: "Mukesh", lastName: "Mahato" }
]

console.log("length = " + mixedDataType.length);

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(`length = ${itCompanies.length}`);
console.log(`first comapny = ${itCompanies[0]}`);
console.log(`middle comapny = ${itCompanies[(itCompanies.length - 1) / 2]}`);
console.log(`last comapny = ${itCompanies[itCompanies.length - 1]}`);
console.log(itCompanies);
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

console.log(`${itCompanies.toString().slice(0, -7)} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);
// Q.14
// console.log(itCompanies[0].split(''));

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.sort().slice(0, 3));
console.log(itCompanies.slice(-3));

console.log(itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1));

console.log(itCompanies.shift());
console.log(itCompanies);

console.log(itCompanies.splice(itCompanies.length / 2, 1));
console.log(itCompanies);

console.log(itCompanies.pop());
console.log(itCompanies);

itCompanies.splice(0)
console.log(itCompanies);