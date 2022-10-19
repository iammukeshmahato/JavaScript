// This method is used to replace the value with another value in the string
// It doesn't change the string it is called on
// It return a new string

// replace(match_word, replace_with)

let str = "I am learning python.";
let newStr =  str.replace("python", "JavaScript");
console.log("old string: ", str);
console.log("new string: ", newStr);

// by default it only replace the first occurance
str = "I am learning python and python."
newStr =  str.replace("python", "JavaScript");
console.log("old string: ", str);
console.log("new string: ", newStr);

// replace() is case sensitive

str = "replace this with This";
let replacedStr = str.replace("THIS");  // nothing is replaced
console.log("replaced text = ", replacedStr);

// to replace all occurance we can use regural expression with a '/g' flag
str = "please sign in to github and github";
replacedStr = str.replace(/github/g, "Ask?Mitra");  // this will replace each matching
console.log(replacedStr);