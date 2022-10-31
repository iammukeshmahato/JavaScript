# Regular Expressions In Javascript

## Regular Expressions

A regular expression or RegExp is a small programming language that helps to find pattern in data. A RegExp can be used to check if some pattern exists in a different data types. To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag. We can create a pattern in two ways.

To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag. The flag could be g, i, m, s, u or y.

### RegExp parameters

A regular expression takes two parameters. One required search pattern and an optional flag.

#### Pattern

A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

#### Flags

Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

-  g: a global flag which means looking for a pattern in whole text
-  i: case insensitive flag(it searches for both lowercase and uppercase)
-  m: multiline

### Creating a pattern with RegExp Constructor

Declaring regular expression without global flag and case insensitive flag.

```js
var pattern = "mukesh";
var regEx = new RegExp(pattern); // using RegExp() constructor
```

Declaring regular expression with global flag and case insensitive flag.

```js
var pattern = "mukesh";
var flag = "gi";
```

Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor.

```js
var regEx = new RegExp("mukesh", "gi");
```

### Creating a pattern without RegExp Constructor

Declaring regular expression with global flag and case insensitive flag.

```js
var regEx = /mukesh/gi;
```

### RegExpp Object Methods

#### Testing for a match

_test()_:Tests for a match in a string. It returns true or false.

```js
var str = "My name is mukesh mahato.";
var regExp = /mukesh/;
var result = regExp.test(str);
console.log(result); // true
```

_match()_:Returns an array containing all of the matches, including capturing groups, or null if no match is found.
If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

```js
// string.match(regExp)

var str = "My name is mukesh mahato. my name is mukesh";
var regExp = /mukesh/;
var result = str.match(regExp);
console.log(result); // it returns only first occurance
```

```js
var regExp = /mukesh/g;
var result = str.match(regExp);
console.log(result); // it returns all occurance
```

_search()_: Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

```js
// string.search(regExp)

var str = "My name is mukesh mahato. my name is mukesh";
var regExp = /mukesh/;
var result = str.search(regExp);
console.log(result); // 11 - because the index of first occurance of mukesh is 11

console.log(str.search("alexa")); // -1 beacuse there is no alexa in the string str
```

#### Replacing a substring

_replace()_: Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

```js
// string.replace(regExp)

var str = "My name is mukesh mahato. my name is mukesh";
var regExp = /mukesh/g;
var replacedString = str.replace(regExp, "alexa");
console.log(replacedString); // My name is alexa mahato. my name is alexa
```

```js
const txt =
   "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

matches = txt.replace(/%/g, "");
console.log(matches);
```

```sh
I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.
```

## Meta Characters

-  []: A set of characters. It defines the range of characters
   -  [a-c] means, a or b or c
   -  [a-z] means, any letter a to z
   -  [A-Z] means, any character A to Z
   -  [0-3] means, 0 or 1 or 2 or 3
   -  [0-9] means any number 0 to 9
   -  [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
-  \\: uses to escape special characters
   -  \d mean: match where the string contains digits (numbers from 0-9)
   -  \D mean: match where the string does not contain digits
-  . : any character except new line character(\n)
-  ^: starts with
   -  r'^substring' eg r'^love', a sentence which starts with a word love
   -  r'[^abc] mean not a, not b, not c.
-  $: ends with
   -  r'substring$' eg r'love$', sentence ends with a word love
-  \*: zero or more times
   -  r'[a]\*' means a optional or it can occur many times.
-  +: one or more times
   -  r'[a]+' means at least once or more times
-  ?: zero or one times
   -  r'[a]?' means zero times or once
-  \b: word bounder, matches with the beginning or ending of a word
-  {3}: Exactly 3 characters
-  {3,}: At least 3 characters
-  {3,8}: 3 to 8 characters
-  |: Either or
   -  r'apple|banana' mean either of an apple or a banana
-  (): Capture and group

![Regular Expression cheat sheet](images/regex.png)

### Square Bracket

```js
// 1. [] defines range
var pattern = "[Aa]pple"; // there can be A or a & then pple
var str = "apple is not same as Apple";
var result = str.match(pattern);
console.log(result);
```

```js
[
  'apple', index: 0, input: 'apple is not same as Apple', groups: undefined
]
```

```js
var pattern = /[Aa]pple/g; // there can be A or a & then pple
var str = "apple is not same as Apple";
var result = str.match(pattern);
console.log(result);
```

```js
["apple", "Apple"];
```

### Escape character(\\) in RegExp

```js
var pattern = /\d/g; // d is a special character which means digits in regExp
var str = "Hi its me mukesh i was born in Jan 1, 1990";
console.log(str.match(pattern)); // [ '1', '1', '9', '9', '0' ]
```

### One or more times(+)

```js
var pattern = /\d+/g; // d is a special character which means digits in regExp
var str = "Hi its me mukesh i was born in Jan 1, 1990";
console.log(str.match(pattern)); // [ '1', '1990' ]
```

### Period(.)

```js
var pattern = /[m]./g; // this expect any character after . except new line.
var str = "Hi its me mukesh i was born in Jan 1, 1990";
console.log(str.match(pattern)); // [ 'me', 'mu' ]
```

### Zero or more times(\*)

Zero or many times. The pattern may not occur or it can occur many times.

```js
var pattern = /[m].*/g; // this expect any character after . except new line.
var str = "Hi its me mukesh i was born in Jan 1, 1990";
console.log(str.match(pattern)); // [ 'me mukesh i was born in Jan 1, 1990' ]
```

It is returnig all the string after the first match i.e at _me_. Because `*` expect `Zero or more time`.

### Zero or one times(?)

Zero or one times. The pattern may not occur or it may occur once.

```js
var pattern = /[Ee]-?mail/g; // ? means optional, there can be - or can't be.
var str =
   "Hey please write down my Email. My E-mail is mukeshmahato843@gmail.com";
console.log(str.match(pattern)); // [ 'Email', 'E-mail' ]
```

### Quantifier in RegExp

It specify the quantity of a character. We can specify the length of the substring we look for in a text useing a curly bracket `{}`.

```js
var str = "Hi its me mukesh i was born in Jan 1, 1990";
var pattern = /\d{4}/g; // i want exactly 4 digits.
console.log(str.match(pattern)); // [ '1990' ]
```

```js
var str = "Hi its me mukesh i was born in Jan 1, 1990";
var pattern = /\b[a-zA-Z]{3}\b/g; // i want exactly 3 characters without numbers.
console.log(str.match(pattern)); // [ 'its', 'was', 'Jan' ]
```

### Cart ^

-  Starts with

Returns an array if matched or return **null**

```js
// Cart ^ - starts with
var str = "Hi its me mukesh i was born in Jan 1, 1990. my fav movie is missing";
var pattern = /^Hi/; // ^ means starts with
console.log(str.match(pattern));
```

```js
[
  'Hi',
  index: 0,
  input: 'Hi its me mukesh i was born in Jan 1, 1990. my fav movie is missing',
  groups: undefined
]
```

```js
// Cart ^ - starts with
var str = "Hi its me mukesh i was born in Jan 1, 1990. my fav movie is missing";
var pattern = /^hi/; // ^ means starts with
console.log(str.match(pattern));
```

```js
null;
```

-  Negation

   `-` with `^` act as negation.

```js
var str = "This regular expression example was made in December 6,  2019.";
var pattern = /[^A-Za-z,. ]+/g; // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
var matches = str.match(pattern);
console.log(matches);
["6", "2019"];
```

### Exact match

It should have ^ starting and $ which is an end.

```js
var pattern = /^[A-Z][a-z]{5,12}$/; // ^ starts with & $ Ends With
var name = "Mukesh";
var result = pattern.test(name);

console.log(result); // true
```

In the above example, `{5,12}` means name must have minimum of 6 characters or maximum of 13 characters.

### I have issue in the following exercies.

#### Exercise Level 1:

-  [Question No. 2](https://github.com/iammukeshmahato/JavaScript/blob/master/12_day_Regular_Expressions/exercise/questions.md/#exercises-level-1)

-  [Question No. 3](https://github.com/iammukeshmahato/JavaScript/blob/master/12_day_Regular_Expressions/exercise/questions.md/#exercises-level-1)
