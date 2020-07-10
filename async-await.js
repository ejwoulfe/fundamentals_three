// Async Await

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