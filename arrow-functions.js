// Arrow functions. Sugar syntanx for making functions. Better readability to some.

add = (x, y) => {
    return x + y;
}

console.log(add(2, 12))



let arr1 = [1, 2, 3, 4, 5];


console.log(arr1.map(value => {
    return value + 1;
}))