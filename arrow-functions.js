// Arrow functions. Sugar syntanx for making functions. Better readability to some.
// Does not bind this.

const add = (x, y) => {
    return x + y;
}

console.log(add(2, 12))



let arr1 = [1, 2, 3, 4, 5];


console.log(arr1.map(value => {
    return value + 1;
}))


const example = param1 => param1 + 2;

console.log(example(2)); // 3


const user = {
    firstName: "Ed",
    lastName: "Woulfe",
    fullName: () => {
        return this.firstName + " " + this.lastName;
    }
}


console.log(user.fullName()) // undefined undefined