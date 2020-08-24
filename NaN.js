// Get NaN when you try to parse a non number value, or did 0/0.
// Instead of the program blowing up, it will return NaN.

let str = "hello";



console.log(0 / 0); // NaN
console.log(Math.ceil(str)); // NaN
console.log(typeof NaN); // number
console.log(isNaN("Hello!")) // true