import { allHorsesFinishedRace, findWinnerIndex } from "./race"

describe('allHorsesFinishedRace', () => {
    it("must return true when all horses finished race", () => {
        expect(allHorsesFinishedRace([{ name: "T1", distance: 1000 }, { name: "T2", distance: 1000 }, { name: "T3", distance: 1000 }])).toBe(true)
        expect(allHorsesFinishedRace([])).toBe(true)
    })

    it("must return false otherwise", () => {
        expect(allHorsesFinishedRace([{ name: "T1", distance: 12 }])).toBe(false)
        expect(allHorsesFinishedRace([{ name: "T1", distance: 999 }, { name: "T2", distance: 1000 }])).toBe(false)
    })
})


describe('findIndex', () => {
    it('should return the lowest index o the horse if they finished simultaneously', () => {
        expect(findWinnerIndex([{ name: "T1", distance: 1000 }, { name: "T2", distance: 1000 }])).toBe(0)
        expect(findWinnerIndex([{ name: "T1", distance: 980 }, { name: "T2", distance: 1000 }, { name: "T3", distance: 1000 }])).toBe(1)
    })

    it('should return the correct winner index', () => {
        expect(findWinnerIndex([{ name: "T1", distance: 800 }, { name: "T2", distance: 1000 }])).toBe(1)
        expect(findWinnerIndex([{ name: "T1", distance: 800 }, { name: "T2", distance: 900 }, { name: "T3", distance: 1000 }])).toBe(2)
    })
    it('should be -1 if no winner', () => {
        expect(findWinnerIndex([{ name: "T1", distance: 800 }, { name: "T2", distance: 422 }])).toBe(-1)
        expect(findWinnerIndex([])).toBe(-1)
    })
})