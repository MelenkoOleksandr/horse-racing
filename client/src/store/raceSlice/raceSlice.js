import { createSlice } from "@reduxjs/toolkit"

export const raceSlice = createSlice({
    name: "race",
    initialState: {
        horses: [],
        raceStarted: false,
        winner: -1,
    },
    reducers: {
        setHorses: (state, action) => {
            state.horses = action.payload
        },
        setWinner: (state, action) => {
            state.winner = action.payload
        },
        setRaceStarted: (state, action) => {
            state.raceStarted = action.payload
        },
    }
})

export const { setHorses, setWinner, setRaceStarted } = raceSlice.actions

export default raceSlice.reducer