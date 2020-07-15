let person = {
    firstName: "Sam",
    lastName: "Smith",
    age: 25
};

let person2 = person;

// Any mutations to either person or person2 will change both of them because it is pass by reference.
person2.location = "Wisconsin";
person.firstName = "Fred"


// If we were to reassign the person object person2 would still hold the objects keys were we declared it.

person = {};

// person is now an empty object, however, person2 will still be {firstName: "Fred", lastName: "Smith", age: 25, location: "Wisconsin"}.
// Because when we declared it, it was referencing to the unchanged person object. 
// After we redeclared person, it was given a new address, but person2 still points to the old person.

console.log("person:");
console.log(person) // {}

console.log("person2:");
console.log(person2) // {firstName: "Fred", lastName: "Smith", age: 25, location: "Wisconsin"}