const { Bag } = require("./Bag.js");

test("Empty bag, a game is not possible", () => {
    const bag = new Bag(0, 0, 0)

    var possible = bag.isPossibleThrow(1, 0, 0)

    expect(possible).toBe(false)
})

test("Bag with one ball allows a throw", () => {
    const bag = new Bag(1, 0, 0)

    expect(bag.isPossibleThrow(1, 0, 0)).toBe(true)
})

test("Bag must have at least as many red balls as game throw", () => {
    const bag = new Bag(1, 0, 0)

    expect(bag.isPossibleThrow(2, 0, 0)).toBe(false)
    expect(bag.isPossibleThrow(1, 0, 0)).toBe(true)
})

test("Bag must have at least as many green balls as game throw", () => {
    const bag = new Bag(0, 1, 0)

    expect(bag.isPossibleThrow(0, 2, 0)).toBe(false)
    expect(bag.isPossibleThrow(0, 1, 0)).toBe(true)
})

test("Bag must have at least as many blue balls as game throw", () => {
    const bag = new Bag(0, 1, 1)

    expect(bag.isPossibleThrow(0, 0, 2)).toBe(false)
    expect(bag.isPossibleThrow(0, 0, 1)).toBe(true)
})

test("A game can have one throw", () => {
    const bag = new Bag(0,0,1)
    const gameA = { "Round 1": {"red": 1 , "green": 0 , "blue": 0} }
    const gameB = { "Round 1": {"red": 0 , "green": 0 , "blue": 1} }

    expect(bag.isPossibleGame(gameA)).toBe(false)
    expect(bag.isPossibleGame(gameB)).toBe(true)
})

test("A game can have several throws", () => {
    const bag = new Bag(0,0,1)
    const gameA = [
        {"round": 1, "red": 0 , "green": 0 , "blue": 1},
        {"round": 2, "red": 1 , "green": 0 , "blue": 1}
    ]

    const gameB = [
        {"round": 1, "red": 0 , "green": 0 , "blue": 1},
        {"round": 2, "red": 0 , "green": 0 , "blue": 1}
    ]

    expect(bag.isPossibleGame(gameA)).toBe(false)
    expect(bag.isPossibleGame(gameB)).toBe(true)
})