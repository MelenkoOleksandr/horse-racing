import { createSlice } from "@reduxjs/toolkit"

export const raceSlice = createSlice({
    name: "race",
    initialState: {
        horses: [],
        raceStarted: false,
        winner: -1,
        userChoice: -1
    },
    reducers: {
        setHorses: (state, action) => {
            state.horses = action.payload
        },
        setWinner: (state, action) => {
            if (state.winner === -1) {
                state.winner = action.payload
            }
        },
        setRaceStarted: (state, action) => {
            state.raceStarted = action.payload
        },
        setUserChoise: (state, action) => {
            state.userChoice = action.payload
        },
    }
})

export const { setHorses, setWinner, setRaceStarted, setUserChoise } = raceSlice.actions

export default raceSlice.reducer