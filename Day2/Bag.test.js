const { Bag, Game, Round, Conundrum, Parser} = require("./Bag.js");
const fs = require("fs")


describe('Testing if a round is possible', function () {
    test('Round object can be constructed by rgb values', () => {
        let round = new Round(1,0,99474573)
        expect(round.red).toBe(1)
        expect(round.green).toBe(0)
        expect(round.blue).toBe(99474573)
    })
    
    test("Empty bag, a round is not possible", () => {
        const bag = new Bag(0, 0, 0)
        const round = new Round(1,0,0)

        var possible = round.isPossible(bag)

        expect(possible).toBe(false)
    })

    test("Bag with one ball allows a throw", () => {
        const bag = new Bag(1, 0, 0)
        const round = new Round(1,0,0)

        expect(round.isPossible(bag)).toBe(true)
    })

    test("Bag must have at least as many red, green and blue balls as game throw", () => {
        const bag = new Bag(1,1,1)
        const round1 = new Round(2,1,1)
        const round2 = new Round(1,2,1)
        const round3 = new Round(1,1,2)
        const round4 = new Round(1,1,1)

        expect(round1.isPossible(bag)).toBe(false)
        expect(round2.isPossible(bag)).toBe(false)
        expect(round3.isPossible(bag)).toBe(false)
        expect(round4.isPossible(bag)).toBe(true)
    })
})


describe('Testing if a game is possible', function () {
    test("A game can be constructed with an ID and some rounds", () => {
        const game = new Game(1, [new Round(0,0,1), new Round(1,0,1)])
        expect(game.id).toBe(1)
    })

    test("A game can have one throw", () => {
        const bag = new Bag(0, 0, 1)
        const gameA = new Game(1, [new Round(1,0,0)])
        const gameB = new Game(2, [new Round(0,0,1)])

        expect(gameA.isPossible(bag)).toBe(false)
        expect(gameB.isPossible(bag)).toBe(true)
    })

    test("A game can have several throws", () => {
        const bag = new Bag(0, 0, 1)
        const gameA = new Game(1, [new Round(0,0,1), new Round(1,0,1)])
        const gameB = new Game(2, [new Round(0,0,1), new Round(0,0,1)])

        expect(gameA.isPossible(bag)).toBe(false)
        expect(gameB.isPossible(bag)).toBe(true)
    })
})


describe('Checking overall conundrum', function () {
    test("Return the sum of IDs of possible games", () => {
        const smallBag = new Bag(1, 0, 1)
        const emptyBag = new Bag(0, 0, 0)
        const bigBag = new Bag(99, 99, 99)
        const games = [
            new Game(1, [
                new Round(0,0,99)
            ]),
            new Game(80, [
                new Round(0,0,1)
            ])
        ]

        smallBagAnswer = new Conundrum(smallBag, games).Solve()
        emptyBagAnswer = new Conundrum(emptyBag, games).Solve()
        bigBagAnswer = new Conundrum(bigBag, games).Solve()

        expect(smallBagAnswer).toBe(80)
        expect(emptyBagAnswer).toBe(0)
        expect(bigBagAnswer).toBe(81)
    })
})

describe('Parsing input file row', function () {
    /* Example input:
    Game 9: 7 blue, 1 red; 5 red, 4 green; 4 green, 6 red, 5 blue; 2 green, 4 blue
    Game 10: 2 red, 2 green, 2 blue; 10 blue, 2 red, 1 green; 2 green, 9 blue, 3 red
    */

    let inputText1 = "Game 9: 7 blue, 1 red; 5 red, 4 green; 4 green, 6 red, 5 blue; 2 green, 4 blue"
    let inputText2 = "Game 1429: 7 blue, 1 red; 5 red, 4 green; 4 green, 6 red, 5 blue"
    // Decided no need to test for invalid inputs at this stage

    test('Game ID can be parsed from input row', () => {
        let game1 = Parser.parseGame(inputText1)
        expect(game1.id).toBe(9)

        let game2 = Parser.parseGame(inputText2)
        expect(game2.id).toBe(1429)
    })

    test('Correct number of games parsed from input row', () => {
        let game1 = Parser.parseGame(inputText1)
        expect(game1.rounds.length).toBe(4)

        let game2 = Parser.parseGame(inputText2)
        expect(game2.rounds.length).toBe(3)
    })

    test('Throw colours parsed correctly from input row', () => {
        let game1 = Parser.parseGame(inputText1)
        expect(game1.rounds[0].red).toBe(1)
        expect(game1.rounds[2].blue).toBe(5)

        let game2 = Parser.parseGame(inputText2)
        expect(game2.rounds[1].green).toBe(4)
        expect(game2.rounds[0].green).toBe(0)
    })
})

describe('Parsing input file', () => {
    const filePath = 'input.test.txt'
    
    test('We can load input file from filesystem', () => {
        let result = Parser.parseGamesFile(filePath)
        expect(result[0].id).toBe(1)
    })

    test('We can split the input file into lines', () => {
        let result = Parser.parseGamesFile(filePath)
        expect(result.length).toBe(4)
    })

    test('We can parse a line of input as a game', () => {
        let gamesList = Parser.parseGamesFile(filePath)
        let game = gamesList[2]
        expect(game.id).toBe(3)
        expect(game.rounds.length).toBe(6)
        expect(game.rounds[1].red).toBe(4)
        expect(game.rounds[1].green).toBe(8)
        expect(game.rounds[1].blue).toBe(11)
    })

    test('the parser will convert the input file into a list of games', () => {
        let result = Parser.parseGamesFile(filePath)
        expect(result[3].id).toBe(4)
        expect(result[1].rounds[0].green).toBe(8)
    })
})