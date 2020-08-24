let arr1 = [1, 2, 2, 2, 3, 4, 5, 5, 6, 7];

let arr2 = new Set(arr1);
arr2 = [...arr2];

console.log(arr2)


let arr3 = [];


for (let i = 0; i < arr1.length; i++) {
    if (!arr3.includes(arr1[i])) {
        arr3.push(arr1[i])
    }


}

console.log(arr3);