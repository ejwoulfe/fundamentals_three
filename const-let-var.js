// All ways of declaring variables in Javascript.
// Const and let were introduced in ES6, to solve vairable hoisting from var.

// Var - scope is lexical, also has variable hoisting.

function varFunction() {

    if (true) {
        var x = 10;
    }
    return x;
}


console.log(varFunction()) // returns 10

function varFunction() {

    if (false) {
        var x = 10;
    }
    return x;
}


console.log(varFunction()) // returns undefined due to variable hoisting.


// Let - scope is Block.


function letFunction() {

    if (true) {
        // This variable is only accessable inside of this if statement.
        let x = 10;
    }
    return x;
}


console.log(letFunction()) // returns ReferenceError: x is not defined

// Const - scope is Block, also the variable may not be re-declared elsewhere. It can be used, but may not change.


function constFunction() {

    if (true) {
        // This variable is only accessable inside of this if statement.
        const x = 10;
    }
    return x;
}


console.log(constFunction()) // returns ReferenceError: x is not defined


const arr = [];

arr.push(2);

console.log(arr); // returns [2]. You are able to modify, but you may not reassign it.

const num = 5;
num++; // error, cannot reassign a constant.