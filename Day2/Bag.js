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
        var round = game["Round 1"]
        return this.isPossibleThrow(round.red, round.green, round.blue)
    }
}

module.exports = { Bag } 