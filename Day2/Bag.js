class Bag {
    constructor(_red, _green, _blue) {
        this._red = _red
        this._green = _green
        this._blue = _blue
    }

    isPossibleThrow(red, green, blue) {
        return this._red >= red && this._green >= green && this._blue >= blue
    }

    isPossibleGame(game){
        let rounds = game.length
        for (let i = 0; i < rounds ; i++) {
            let round = game[i]
            if (!this.isPossibleThrow(round.red, round.green, round.blue)) {
                return false
            }
        }

        return true
    }
}

module.exports = { Bag } 