// Coercion occurs when combining a string and a different data type.

let str = "500j";

let num = 25;


console.log(str + num); // 50025, it is now a string

// A way to get around this is to convert it to a number using Number() or the parseInt function.
// The only issue is that Number() will try to convert the whole string to a number.
// Where as the parseInt() function will only parse all numbers up to a non number value.

console.log(Number(str) + num); // NaN
console.log(parseInt(str) + num) // 525