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
        this.id = id
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

module.exports = { Bag, Game, Round, Conundrum } 