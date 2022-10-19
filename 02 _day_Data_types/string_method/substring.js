// it is similar to slice()
// The difference is that start and end values less than 0 are treated as 0 in substring().

// substring(start, end)

let str = "hello world";
console.log(str.substring(0, 5));    // it also return part of string from starting index to (end - 1)th index

// it treates negative number as 0
console.log(str.substring(-6, 4));  // hell