console.log(`The solution for Day 2, part 1 is ${Day2()}`)

function Day2() {
    /*
    Question: Which games possible if bag had:
    - only 12 red cubes, 13 green cubes, and 14 blue cubes
    - When given a list of games, e.g.: ...
    - What is the sum of the IDs of the possible games?
    */
    const { Bag, Game, Round, Conundrum, Parser} = require("./Bag.js");

    return answer = new Conundrum(
        new Bag(12,13,14),
        Parser.parseGamesFile('input.txt')
        ).Solve()
}