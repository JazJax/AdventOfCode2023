const { Bag } = require("./Bag.js");

test("Empty bag, a game is not possible", () => {
    const bag = new Bag(0, 0, 0)

    var possible = bag.isPossible(1, 0, 0)

    expect(possible).toBe(false)
})

test("Bag with one ball allows a game", () => {
    const bag = new Bag(1, 0, 0)

    expect(bag.isPossible(1, 0, 0)).toBe(true)
})

test("Bag must have at least as many red balls than game", () => {
    const bag = new Bag(1, 0, 0)

    expect(bag.isPossible(2, 0, 0)).toBe(false)
    expect(bag.isPossible(1, 0, 0)).toBe(true)
})