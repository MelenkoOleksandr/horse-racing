import { MAX_DISTANCE } from "../App";

export const allHorsesFinishedRace = horses => horses.every(horse => horse.distance === MAX_DISTANCE)
export const findWinnerIndex = horses => horses.findIndex(horse => horse.distance === MAX_DISTANCE)