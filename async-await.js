// Async Await

// Await can only be used inside an async defined function.

// Mostly used in promises, to make sure your code doesn't try to perform tasks before the asynchronous call is returned with the appropriate values.



async function asyncCall() {
    console.log('Calling before line.');
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    console.log(json);
    console.log("After awaits")
    // expected output: 'resolved'
}

asyncCall();


/* Calling before line.
 * {userId: 1, id: 1, title: "delectus aut autem", completed: false}
 * After awaits
 */