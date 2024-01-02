const { Bag, Game, Round, Conundrum, Parser} = require("./Bag.js");

console.log(Day2a())
console.log(Day2b())

function Day2a() {
    /*
    Question: Which games possible if bag had:
    - only 12 red cubes, 13 green cubes, and 14 blue cubes
    - When given a list of games, e.g.: ...
    - What is the sum of the IDs of the possible games?
    */
    
    let answer = new Conundrum(
        new Bag(12,13,14),
        Parser.parseGamesFile('./input.txt')
        ).Solve()

    return `The solution for Day 2, part 1 is ${answer}`
}

function Day2b() {
    /*
    Question: For each game find the minimum set of cubes that must have been present
    - The power of a set is the red, green and blue values multiplied together
    - What's the sum of the power of these sets?
    */

    let gamesList = Parser.parseGamesFile('./input.txt')
    let totalPower = 0

    gamesList.forEach( (game) => {
        totalPower += game.power
    })

    return `The solution for Day 2, part 2 is ${totalPower}`
}

module.exports = {Day2a, Day2b}