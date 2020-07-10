// Async Await

// Await can only be used inside an async defined function.

// Mostly used in promises, to make sure your code doesn't try to perform tasks before the asynchronous call is returned with the appropriate values.

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('Calling before line.');
    const result = await resolveAfter2Seconds();
    console.log("After await line.")
    console.log(result);
    // expected output: 'resolved'
}

asyncCall();