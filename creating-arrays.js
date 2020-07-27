const arr1 = [1, 2, 3, 4];

const arr2 = arr1.map((value) => {
    return value;
})
arr2.push(38);
const arr3 = [...arr1, 6];

console.log(arr1);
console.log(arr2);
console.log(arr3);