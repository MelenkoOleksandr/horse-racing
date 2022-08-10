import { configureStore } from "@reduxjs/toolkit";
import raceSlice from './raceSlice/raceSlice';

export default configureStore({
    reducer: raceSlice
})