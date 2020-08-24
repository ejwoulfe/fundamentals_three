class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    getLocation() {
        return this.location
    }

}


let Ed = new Person("Ed", 27, "Maine");


console.log(Ed instanceof Person); // true
console.log(Ed instanceof Object); // true
console.log([] instanceof Object); // true