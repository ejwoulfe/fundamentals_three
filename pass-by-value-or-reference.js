// Pass by value will make a copy of the data, where Pass by reference changes the data itself.


//The print function is mutating the object, we are passing by reference into the function in this case.

const person = {
    name: "Ed",
    location: "Maine",
    degree: "Computer Science"
}


// It is referencing the object and will change its values at the address saved in memory.
// If we were to make it value = {}, it will just create a new object at a new address.
function print(value) {

    value.name = "Sam"
    console.log(value)
}
console.log("Function call: + \n")
print(person); // {name: "Sam", location: "Maine", degree: "Computer Science"}
console.log("Outside call: + \n")
console.log(person) // {name: "Sam", location: "Maine", degree: "Computer Science"}


let num = 10;

function changeNum(x) {
    x = 265;
    console.log(x); // 265
}

changeNum(num);
console.log(num) // 10