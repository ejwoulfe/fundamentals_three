// Handling asynchronous code. Get requests, could use it for user input.
// A promise will always resolve, in either a resolved state or rejected state. Both should be handled.

// One way of handling promises is using the then keyword.

// The issue is that it can get pretty sloppy if we need to do multiple thens.

const promise1 = new Promise((resolve, reject) => {
    resolve('Success!');
});

promise1.then((value) => {
    console.log(value);
    // expected output: "Success!"
});


// A way to combat that is using the async await keywords, which allows us a much easier way of handling those requests to avoid the stacking of thens.
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    return (result); // "done!"
}

console.log(f());