// This in javascript refers to the current context of where its being called.

console.log(this); // The this in this context will be referring to the window object because it is in the global scope.
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}





// the this in the two methods are referring to the person object, so this.name will refer to Ed Woulfe.
const person = {
    name: "Ed Woulfe",
    degree: "Computer Science",
    getName() {
        return this.name;
    },
    getDegree() {
        return this.degree;
    }
}

console.log(person.getDegree());
// Computer Science