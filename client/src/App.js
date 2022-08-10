import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from './index';
import { setHorses, setRaceStarted, setWinner } from './store/raceSlice/raceSlice';
import Greeting from './components/Greeting/Greeting';
import Horses from './components/Horses';
import Winner from './components/Winner/Winner';
import { allHorsesFinishedRace, findWinnerIndex } from './utils/race';

import './App.css';
import UserChoice from './components/UserChoice/UserChoice';

export const MAX_DISTANCE = 1000

function App() {
  const dispatch = useDispatch()
  const winner = useSelector(state => state.winner)

  useEffect(() => {
    socket.on('ticker', horses => {
      dispatch(setHorses(horses))

      if (allHorsesFinishedRace(horses)) {
        // If the server will be fixed to multiple races | now app works correctly only on the first time then listeners stacks 
        // dispatch(setRaceStarted(false))
        return
      }

      
      if (winner === -1 ) {
        const winnerIndex = findWinnerIndex(horses)
        if (winnerIndex !== -1) {
          dispatch(setWinner(winnerIndex))
        }
      }

      return () => {
        socket.off('ticker')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startRace = () => {
    socket.emit("start")
    dispatch(setRaceStarted(true))
  }

  return (
    <div className="container">
      <Greeting startRace={startRace} />
      <Horses />
      <Winner />
      <UserChoice />
    </div>
  );
}

export default App;
