import React, { useState, useContext } from 'react';

import './App.css';
import Horses from './components/Horses';
import { SocketIOContext } from './index';

export const MAX_DISTANCE = 1000

function App() {
  const io = useContext(SocketIOContext)
  const [raceStarted, setRaceStarted] = useState(false)
  const [horses, setHorses] = useState([])
  const [winner, setWinner] = useState(-1)

  const startRace = () => {
    setRaceStarted(true)
    io.emit("start")
    io.on("ticker", horses => {
      if (horses.every(horse => horse.distance === MAX_DISTANCE)) {
        io.off("ticker")
        setRaceStarted(false)
      }
      const winnerIndex = horses.findIndex(horse => horse.distance >= MAX_DISTANCE)
      if (winner !== -1 || winnerIndex) {
        setWinner(winnerIndex)
      }
      setHorses(horses)
    })
  }
  return (
    <div className="container">
      <div className="greeting">
        <h3 className='greeting-title'>Welcome to the horse race!</h3>
        <button disabled={raceStarted} className='start-btn' onClick={startRace}>Start race</button>
      </div>
     
      
      {horses.length > 0 && <div className="horses-field">
        <Horses horses={horses} />
      </div>}
      {winner !== -1 && <div className="winner">
        Winner is <span className='winner-name'>{horses[winner].name}</span>
      </div>}

    </div>
  );
}

export default App;
