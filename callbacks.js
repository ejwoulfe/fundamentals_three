// Functions that are called upon later to complete a task. Passed through other functions.


function printVariable(str) {
    return str;
}


function useCallback(callback) {
    return callback;
}


console.log(useCallback(printVariable("Hello!")));


let arr = [1, 2, 3, 4];

// The map functions is using a callback function for each iteration.
console.log(arr.map((value, index) => {
    return index + ": " + value;
}))