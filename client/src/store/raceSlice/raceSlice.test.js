import store from "../store"
import { setHorses, setRaceStarted, setWinner } from "./raceSlice"

describe("Race redux state tests", () => {
    it('Correct initial state', () => {
        const state = store.getState()
        expect(state.horses).toEqual([])
        expect(state.raceStarted).toBe(false)
        expect(state.winner).toBe(-1)
    })

    it("Should change state on action dispatch", () => {
        store.dispatch(setHorses([{name: "T1", distance: 1000}]))
        store.dispatch(setWinner(0))
        store.dispatch(setRaceStarted(true))
        expect(store.getState().horses).toEqual([{ name: "T1", distance: 1000 }])
        expect(store.getState().winner).toBe(0)
        expect(store.getState().raceStarted).toBe(true)
    })
})