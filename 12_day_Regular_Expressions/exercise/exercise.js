console.log("--------------------------");
console.log("\tExercise: Level 1");
console.log("--------------------------\n");

// Q.1
var text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
var regExp = /\d+/g;
let sal = text.match(regExp);

let annualSal = sal.reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr);
});

console.log(annualSal);     // 19500

// Q.2
console.log('Q.2 [Not Solved]');

// var text = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction";
// var regExp = /-?\d/g;
// let points = text.match(regExp);
// let sortedPoints = points.map((elem)=>parseInt(elem));

// console.log(sortedPoints);

// Q.3
console.log('Q.3 [Not Solved]');

// function is_valid_variable(variable) {
//     let regExp = /^[_A-Za-z]._?[0-9]?/;
//     console.log(regExp.test(variable));
// }

// is_valid_variable('_first_name') //# True
// is_valid_variable('first_name') //# True
// is_valid_variable('first-name') //# False
// is_valid_variable('1first_name')// # False
// is_valid_variable('firstname') // True

console.log("--------------------------");
console.log("\tExercise: Level 2");
console.log("--------------------------\n");

// Q.1
function tenMostFrequentWords(para) {
    words = para.split(" ");
    // wordsCount = {};
    // for (let i = 0; i < words.length; i++) {
    //     const element = words[i];
    //     console.log(element);
    //     if (wordsCount[element] === undefined)
    //         wordsCount[element] = 1;
    //     else
    //     wordsCount[element]++;
    // }
    // console.log(wordsCount);
    // // console.log(words);
    // // return words

    wordsCount = words.reduce((acc, curr) => {
        // console.log(curr);
        // if (acc[curr] === undefined) {
        //     acc[curr] = 1;
        // } else {
        //     acc[curr]++;
        // }
        // return acc;

        acc[curr] = (acc[curr] || 0) + 1;
        return acc;

    }, {});

    wordsCount = Object.entries(wordsCount);    // converting object into array
    wordsCount.sort((a,b)=>{return a[1] - b[1]});   // sorting the array based on count
    wordsCount.reverse();   // reversing the array to get heighest count at top
    wordsCount = wordsCount.map((elem)=>({word: elem[0], count:elem[1]}));
    return wordsCount.slice(0,10);

}
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
cleanPara = paragraph.replace(/\./g, "");

console.log(tenMostFrequentWords(cleanPara))


console.log("--------------------------");
console.log("\tExercise: Level 3");
console.log("--------------------------\n");

// Q.1

function cleanText(sentence) {
    let regExp = /[!@#\$%\^&*()_+;?.]/gm;
    return sentence.replace(regExp, "");
}

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log(cleanText(sentence))

// Q.2
console.log(tenMostFrequentWords(cleanText(sentence)));
