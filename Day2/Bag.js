const fs = require("fs")

class Bag {
    constructor(_red, _green, _blue) {
        this._red = _red
        this._green = _green
        this._blue = _blue
    }

    toString() {
        return `Red: ${this._red} Green: ${this._green} Blue: ${this._blue}`
    }
}

class Conundrum {
    constructor(bag, games) {
        this.bag = bag
        this.games = games
    }

    Solve() {
        let result = 0
        this.games.forEach(game => {
            if (game.isPossible(this.bag)) {
                result += game.id
            }
        });
        return result
    }
}

class Game {
    constructor(id, rounds) {
        this.id = parseInt(id)
        this.rounds = rounds
    }

    isPossible(bag) {        
        for (let i = 0; i < this.rounds.length ; i++) {
            let round = this.rounds[i]
            if (!round.isPossible(bag)) {
                return false
            }
        }
        return true
    }

    toString() {
        let string = `Game ID: ${this.id}\n  Round count: ${this.rounds.length}`
        for (let i = 0; i < this.rounds.length ; i++) {
            let round = this.rounds[i]
            string += `\n    ${round.toString()}`
        }
        return string
    }

    static fromString(inputText) {
        return new Game(Game.parseIdentifier(inputText), Game.parseRounds(inputText))
    }

    static parseIdentifier(inputText) {
        let gameIdentifier = inputText
            .split(":")[0]
            .substring(5)
        return gameIdentifier
    }

    static parseRounds(inputText) {
        let roundsList = inputText.split(":")[1]
        let roundStrings = roundsList.split(";")
        let rounds = roundStrings.map((roundString) => this.parseThrow(roundString))
        return rounds
    }

    static parseThrow(throwString) {
        let red = 0, green = 0, blue = 0
        let colourStrings = throwString.split(",")
        colourStrings.forEach(colourString => {
            colourString = colourString.trim()
            if (colourString.includes("red")) red = parseInt(colourString)
            if (colourString.includes("green")) green = parseInt(colourString)
            if (colourString.includes("blue")) blue = parseInt(colourString)
        })
        return new Round(red, green, blue)
    }
}

class Round {
    constructor(_red, _green, _blue) {
        this.red = _red
        this.green = _green
        this.blue = _blue
    }

    toString() {
        return `Red: ${this.red} Green: ${this.green} Blue: ${this.blue}`
    }

    isPossible(bag) {
        return bag._red >= this.red && bag._green >= this.green && bag._blue >= this.blue
    }
}

class Parser {

    static parseGamesFile(filePath) {
        let parsedRows = fs.readFileSync(filePath, 'utf8').split("\n")
        return parsedRows.map((row) => Parser.parseGame(row))
    }
    
    static parseGame(inputText) {
        let gameId = inputText.split(":")[0].substring(5)
        
        let roundsList = inputText.split(":")[1]
        let roundStrings = roundsList.split(";")
        let rounds = roundStrings.map((roundString) => Parser.parseRound(roundString))

        return new Game(gameId, rounds)
    }

    static parseGameId(inputText) {
        let gameIdentifier = inputText
            .split(":")[0]
            .substring(5)
        return gameIdentifier
    }

    static parseRoundList(inputText) {
        let roundsList = inputText.split(":")[1]
        let roundStrings = roundsList.split(";")
        let rounds = roundStrings.map((roundString) => Parser.parseRound(roundString))
        return rounds
    }

    static parseRound(throwString) {
        let red = 0, green = 0, blue = 0
        let colourStrings = throwString.split(",")
        colourStrings.forEach(colourString => {
            colourString = colourString.trim()
            if (colourString.includes("red")) red = parseInt(colourString)
            if (colourString.includes("green")) green = parseInt(colourString)
            if (colourString.includes("blue")) blue = parseInt(colourString)
        })
        return new Round(red, green, blue)
    }
}

module.exports = { Bag, Game, Round, Conundrum, Parser } 