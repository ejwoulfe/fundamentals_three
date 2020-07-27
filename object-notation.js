let game = {
    name: "World of Warcraft",
    genre: "MMORPG",
    expansion: "BFA",
    created: "2004"
};

// Dot notation.
console.log(game.name); // World of Warcraft
console.log(game['name']); // World of Warcraft


for (let key in game) {
    console.log(key + ": " + game[key]);
}
// name: World of Warcraft
// genre: MMORPG
// expansion: BFA
// created: 2004