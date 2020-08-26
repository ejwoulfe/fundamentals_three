// Synchronous - Code read from Top to bottom, line by line.

/* Asynchronous - Code is still being read from top to bottom, but out code needs a certain type of data, could be user input or 
 * we need data from a server. Something that will take some amount of time to get. We can either continue on with the code while we wait for that data.
 * Or if we MUST wait we can use the async await to stop the code from continuing on.
 *
 */

// Synchronous

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// This will print out in order: 1,2,3,4,5




// Asynchronous

let hello = async () => {
    return "3"
};

console.log(1);
console.log(2);
hello().then((value) => console.log(value));
console.log(4);
console.log(5);

// This will print out to be 1,2,4,5,3