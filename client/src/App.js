import React, { useState, useContext, useEffect } from 'react';

import './App.css';
import Greeting from './components/Greeting/Greeting';
import Horses from './components/Horses';
import Winner from './components/Winner/Winner';
import { SocketIOContext } from './index';
import { allHorsesFinishedRace, findWinnerIndex } from './utils/race';

export const MAX_DISTANCE = 1000

function App() {
  const io = useContext(SocketIOContext)
  const [raceStarted, setRaceStarted] = useState(false)
  const [horses, setHorses] = useState([])
  const [winner, setWinner] = useState(-1)

  useEffect(() => {
    io.on('ticker', horses => {
      setHorses(horses)

      if (allHorsesFinishedRace(horses)) {
        setRaceStarted(false)
        return
      }

      const winnerIndex = findWinnerIndex(horses)
      if (winner !== -1 || winnerIndex) {
        setWinner(winnerIndex)
      }

      return () => {
        io.off('ticker')
      }
    })
  }, [])

  const startRace = () => {
    io.emit("start")
    setRaceStarted(true)
  }
  return (
    <div className="container">
      <Greeting raceStarted={raceStarted} startRace={startRace}/>
      {horses.length > 0 && <Horses horses={horses} />}
      {winner !== -1 && <Winner winnerName={horses[winner].name} />}

    </div>
  );
}

export default App;
