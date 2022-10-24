console.log("--------------------------");
console.log("\tExercise: Level 3");
console.log("--------------------------\n");


// Q.1
function userIdGeneratedByUser() {
    const lengthOfId = prompt("Enter the number of characters in ID: ");
    const noOfIds = prompt("How many IDs, do you want to generate ?");

    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphSmall = "abcdefghijklmnopqrstuvwxyz";
    const sets = [num, alph, alphSmall];
    const lengthOfSets = sets.length;
    const IDs = [];

    for (let i = 1; i <= noOfIds; i++) {
        let ID = "";
        for (let i = 0; i < lengthOfId; i++) {
            let setToBeSelected = Math.floor(Math.random() * lengthOfSets);
            let index = Math.floor(Math.random() * sets[setToBeSelected].length);
            ID += sets[setToBeSelected][index];
        }
        IDs.push(ID);
        console.log(`ID ${i} = ${ID}`);
        // console.log(IDs);
    }
}

userIdGeneratedByUser();

// Q.2
function rgbColorGenerator() {
    let color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    // console.log(color);
    return color;
}
console.log(rgbColorGenerator());

// Q.3
function arrayOfHexaColors(length = 1) {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    hexaColors = []
    for (let i = 0; i < length; i++) {
        let HexaColorCode = "#";
        for (let i = 0; i < 6; i++) {
            HexaColorCode += hex[Math.floor(Math.random() * 16)];
        }
        // return HexaColorCode;
        hexaColors.push(HexaColorCode)
    }
    return hexaColors;
}

console.log(arrayOfHexaColors(5));

// Q.4
function arrayOfRgbColors(length = 1) {
    const rgbColors = [];
    for (let i = 0; i < length; i++) {
        let color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        rgbColors.push(color);
    }
    return rgbColors;
}
console.log(arrayOfRgbColors(5));

// Q.5
function convertHexaToRgb(HexaColorCode) {
    const hexaRGB = [];
    const hexaCode = HexaColorCode.length == 7 ? HexaColorCode.slice(1) : HexaColorCode;

    for (let i = 0; i < hexaCode.length; i += 2) {
        hexaRGB.push(hexaCode.slice(i, 2 + i));
    }

    const r = parseInt(hexaRGB[0], 16);
    const g = parseInt(hexaRGB[1], 16);
    const b = parseInt(hexaRGB[2], 16);

    rgbColor = `rgb(${r},${g},${b})`;
    console.log(`HexaColor ${HexaColorCode} = ${rgbColor}`);
    // return rgbColor;
}
convertHexaToRgb("#ffaabb");

// Q.6
componetToHex = (c) => {
    hex = c.toString(16);
    hex == 1 ? "0" + hex : hex;
    return hex;
}
function convertRgbToHexa(r, g, b) {
    if (r < 256 && g < 256 && b < 256)
        return `#${componetToHex(r)}${componetToHex(g)}${componetToHex(b)}`;
    else
        return "Invalid";
}
console.log(convertRgbToHexa(34, 45, 255))

// Q.7
function generateColors(type, length) {
    arr = [];
    if (type.toLowerCase() == "rgb") {
        arr = arrayOfRgbColors(length);
        return arr;
    }
    else if (type.toLowerCase() == "hexa") {
        arr = arrayOfHexaColors(length);
        return arr;
    }
    else
        return "Invalid";
}
console.log(generateColors("hexa", 5));

// Q.8
function shuffleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * arr.length);
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 6, 7]));

// Q.9
function factorial(number) {
    if (number == 1)
        return 1;
    else
        return number * factorial(number - 1)
}
console.log(factorial(5));      // 120

// Q.10
function isEmpty(arg) {
    return arg == null || arg.toString().length == 0 ? true : false;
}
let empty;
console.log(isEmpty(empty));   // true
console.log(isEmpty(""));   // true
console.log(isEmpty(" "));   // false

// Q.11
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(5, 6, 7, 8, 1));        // 27
console.log(sum(5, 6, 7, 8, 10, 24, 45, 456));        // 561

// Q.12
function sumOfArrayItems(arr) {
    let sum = 0;
    let errorCount = 0;
    const indexs = [];
    arr.forEach((elem, i) => {
        if (typeof (elem) == "number") {
            sum += elem;
        } else {
            errorCount++;
            indexs.push(i);
        }
    });

    if (!errorCount) {
        return sum;
    } else {
        return `Invalid: not a number at ${indexs.length > 1 ? "indexes" : "index"} ${indexs}`;
    }
}
console.log(sumOfArrayItems([1, 2, 3, 4, 5]));    // 15
console.log(sumOfArrayItems([1, 2, 3, '4', 5]));    // Invalid: not a number at indexe 3
console.log(sumOfArrayItems([1, '2', 3, '4', 5]));    // Invalid: not a number at indexes 1,3

// Q.13
function average(arr) {
    let sum = sumOfArrayItems(arr);
    return sum / arr.length;
}
console.log(average([3, 4, 5, 6, 7, 8, 9, 9]));     // 6.375

// Q.14
function modifyArray(arr) {
    if (arr.length >= 5) {
        arr[4] = arr[4].toUpperCase();
        return arr;
    } else {
        return "Not Found";
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));

// Q.15
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

console.log(isPrime(3));    // true
console.log(isPrime(9));    // false

// Q.16
function isAllUniqueItems(arr) {
    let matchCount = 0;
    arr.forEach((elem, index) => {
        for (let i = 0; i < arr.length; i++) {
            if (i == index) { continue; }
            if (elem == arr[i]) { matchCount++; }
        }
    })
    if (matchCount) { return false; }
    else { return true };
}

console.log(isAllUniqueItems([1, 2, 3, 4, 5]));      // true
console.log(isAllUniqueItems([1, 2, 3, 4, 5, 5]));      // false

// Q.17
function isOfSameType(arr) {
    const type = typeof (arr[0]);
    let errorCount = 0;
    // console.log(type);

    arr.forEach(elem => {
        if (typeof (elem) !== type)
            errorCount++;
    })
    if (errorCount) {
        return false
    } else {
        return true;
    }

}
console.log(isOfSameType([1, 2, 3]))      // true
console.log(isOfSameType([1, 2, "3"]))      // false
console.log(isOfSameType(["1", "2", "3"]))      // true
console.log(isOfSameType([true, false, true]))      // true

// Q.18
function isValidVariable(name) {
    const reg = /^([$_a-zA-Z]{1,})([a-zA-Z\d])$/;
    // const reg = /^([$_a-zA-Z])([a-zA-Z$_\d])$/;
    return reg.test(name);
}
console.log(isValidVariable("_Mukesh"));        // true
console.log(isValidVariable("@Mukesh"));        // false
console.log(isValidVariable("12Mukesh"));        // false
console.log(isValidVariable("Mukesh123"));        // true
console.log(isValidVariable("Mukesh123#^"));        // fasle

// Q.19
function sevenRandomNumbers() {
    arr = [];
    for (let i = 0; i < 7; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}
console.log(sevenRandomNumbers());

// Q.20
function reverseCountries(arr) {
    temp = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        temp.push(arr[i]);
    }
    arr = temp;
    return arr;
}
const Alexa = ["nepal", "india", "china", "pakistan"];
console.log(Alexa);     // [ 'nepal', 'india', 'china', 'pakistan' ]
console.log(reverseCountries(Alexa));       // [ 'pakistan', 'china', 'india', 'nepal' ]