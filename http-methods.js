// GET, POST, PUT/UPDATE, DELETE

// GET retrieves data from a server. Could be an API Call.
async function getData() {

    const response = await (await fetch('https://jsonplaceholder.typicode.com/posts'));
    const jsonData = await response.json();

    console.log('Get', jsonData);
}
getData();

// POST creates data

async function postData() {

    const response = await (await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Ed',
            body: 'Woulfe',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }));

    const jsonData = await response.json();

    console.log('Post', jsonData);
}
postData();

// PUT will update already existing data.

async function putData() {

    const response = await (await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            'id': 1,
            title: 'Ed',
            body: 'Woulfe',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }));

    const jsonData = await response.json();

    console.log('Put', jsonData);
}
putData();

// DELETE will delete existing data.

async function deleteData() {

    const response = await (await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
        body: JSON.stringify({
            'id': 1,
            title: 'Ed',
            body: 'Woulfe',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }));

    const jsonData = await response.json();

    console.log('Delete', jsonData);
}
deleteData();