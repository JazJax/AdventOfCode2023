class Bag {
    constructor(_red, _green, _blue) {
        this._red = _red
    }

    isPossible(red, green, blue) {
        return this._red >= red
    }
}

module.exports = { Bag } 