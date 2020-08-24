// Spread unwraps the values inside the array.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1];

arr1.push(6);



console.log(arr1) // [1, 2, 3, 4, 5, 6]
console.log(arr2) // [1, 2, 3, 4, 5]

function rest(...arr) {
    console.log(arr); // [1, 2, 3, 4, 5, 6];
}

rest(arr1);