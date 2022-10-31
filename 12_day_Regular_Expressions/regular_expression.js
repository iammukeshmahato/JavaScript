// Creating a pattern with RegExp Constructor

var pattern = 'mukesh';
var regEx = new RegExp(pattern);     // using RegExp() constructor

// Declaring regular expression with global flag and case insensitive flag.

var pattern = 'mukesh';
var flag = 'gi';        // g - global, i - case insensitive
var regEx = new RegExp(pattern, flag);

// declaring a regex pattern using RegExp object & writting pattern and flags inside constructor
var regEx = new RegExp('mukesh', 'gi');

// Creating a pattern without RegExp Constructor

// Declaring regular expression with global flag and case insensitive flag.
var regEx = /mukesh/gi


// RegExp Object Methods

// 1. test() - returns true for match and false for not match.
// pattern.test(str);

var str = "My name is mukesh mahato.";
var regExp = /mukesh/;
var result = regExp.test(str);
console.log(result);        // true

// 2. match() - it returns an array of results or null. It is used used with string.
// string.match(regExp)

var str = "My name is mukesh mahato. my name is mukesh";
var regExp = /mukesh/;
var result = str.match(regExp);
console.log(result);    // it returns only first occurance

var regExp = /mukesh/g;
var result = str.match(regExp);
console.log(result);    // it returns all occurance

// 3. search() - it returns the index of first match else -1
// string.search(regExp)

var str = "My name is mukesh mahato. my name is mukesh";
var regExp = /mukesh/;
var result = str.search(regExp);
console.log(result);        // 11 - because the index of first occurance of mukesh is 11

console.log(str.search("alexa"));   // -1 beacuse there is no alexa in the string str

// 4. replace() - it returns new string with all the replacement.
// string.replace(regExp)

var str = "My name is mukesh mahato. my name is mukesh";
var regExp = /mukesh/g;
var replacedString = str.replace(regExp, "alexa");
console.log(replacedString);    // My name is alexa mahato. my name is alexa

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches)  

// Meta Characters
// 1. [] defines range
var pattern = /[Aa]pple/g;       // there can be A or a & then pple
var str = "apple is not same as Apple";
var result = str.match(pattern);
console.log(result);

// 2. Escape character (\\) in RegExp
var pattern = /\d/g;    // d is a special character which means digits in regExp
var str = "Hi its me mukesh i was born in Jan 1, 1990";
console.log(str.match(pattern));    // [ '1', '1', '9', '9', '0' ]

// 3. One or more times(+)
var pattern = /\d+/g;    // d is a special character which means digits in regExp
var str = "Hi its me mukesh i was born in Jan 1, 1990";
console.log(str.match(pattern));    // [ '1', '1990' ]

// 4. Period (.)
var pattern = /[m]./g;    // this expect any character after . except new line.
var str = "Hi its me mukesh i was born in Jan 1, 1990";
console.log(str.match(pattern));    // [ 'me', 'mu' ]

// 5. Zero or more times(*)
var pattern = /[m].*/g;    // this expect any character after . except new line.
var str = "Hi its me mukesh i was born in Jan 1, 1990";
console.log(str.match(pattern));    // [ 'me mukesh i was born in Jan 1, 1990' ]

// 6. Zero or one times(?)
var pattern = /[Ee]-?mail/g;    // ? means optional, there can be - or can't be.
var str = "Hey please write down my Email. My E-mail is mukeshmahato843@gmail.com";
console.log(str.match(pattern));    // [ 'Email', 'E-mail' ]

// Quantifier in RegExp
// It specifies the quantity of a characters.
// it is written in {} curly brackets.

var str = "Hi its me mukesh i was born in Jan 1, 1990";
var pattern = /\d{4}/g;    // i want exactly 4 digits.
console.log(str.match(pattern));    // [ '1990' ]

var str = "Hi its me mukesh i was born in Jan 1, 1990";
var pattern = /\b[a-zA-Z]{3}\b/g;    // i want exactly 3 characters without numbers.
console.log(str.match(pattern));    // [ 'its', 'was', 'Jan' ]

// Cart ^ - starts with
var str = "Hi its me mukesh i was born in Jan 1, 1990. my fav movie is missing";
var pattern = /^Hi/;    // ^ means starts with 
console.log(str.match(pattern));

// - Negation

var str = 'This regular expression example was made in December 6,  2019.'
var pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
var matches = str.match(pattern)
console.log(matches);   [ '6', '2019' ]

// Exact Match ^ $

var pattern = /^[A-Z][a-z]{5,12}$/;     // ^ starts with & $ Ends With
var name = 'Mukesh';
var result = pattern.test(name)

console.log(result) // true