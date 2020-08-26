let user1 = {
    firstName: "Ed",
    lastName: "Woulfe",
    occupation: "Web Developer"
}

let user2 = {
    ...user1
};

let user3 = user1;
let user4 = {
    lastName: "Woulfe",
    firstName: "Ed",
    occupation: "Web Developer"
}


console.log(Object.is(user1, user2)) // false
console.log(Object.is(user1, user3)) // true


function checkSameObject(obj1, obj2) {

    // Gets an array of properties
    const props1 = Object.getOwnPropertyNames(obj1);
    const props2 = Object.getOwnPropertyNames(obj2);

    // If the arrays aren't equal in length, then they cannot possibly have the same properties.
    if (props1.length !== props2.length) {
        return false;
    }
    /*  For in loop to check each property. The order of the properties doesn't matter.
     *  If obj1 has a firstName property, it will check if obj2 does also, regardless of where it was defined in the object.
     */
    for (property in obj1) {

        if (obj1[property] !== obj2[property]) {
            return false;
        }
    }

    return true;

}

console.log(checkSameObject(user1, user4)); // true