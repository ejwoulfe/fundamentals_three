// Deep Copying Objects


let user1 = {
    firstName: "Ed",
    lastName: "Woulfe",
    occupation: "Web Developer"
}

let user2 = {
    ...user1
};


console.log(user1) // {firstName: "Ed", lastName: "Woulfe", occupation: "Web Developer"}
console.log(user2) // {firstName: "Ed", lastName: "Woulfe", occupation: "Web Developer"}


user1.location = "East Coast";

console.log(user1) // {firstName: "Ed", lastName: "Woulfe", occupation: "Web Developer", location: "East Coast"}
console.log(user2) // {firstName: "Ed", lastName: "Woulfe", occupation: "Web Developer"}


let user3 = {
    firstName: "Tom",
    lastName: "Bombadil",
    occupation: "Forest Keeper"
}

let user4 = JSON.parse(JSON.stringify(user3));

console.log(user3) // {firstName: "Tom", lastName: "Bombadil", occupation: "Forest Keeper"}
console.log(user4) // {firstName: "Tom", lastName: "Bombadil", occupation: "Forest Keeper"}


user3.location = "Fangorn Forest";

console.log(user3) // {firstName: "Tom", lastName: "Bombadil", occupation: "Forest Keeper", location: "Fangorn Forest"}
console.log(user4) // {firstName: "Tom", lastName: "Bombadil", occupation: "Forest Keeper"}