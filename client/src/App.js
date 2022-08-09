import React, { useState, useEffect, useContext } from 'react';

import './App.css';
import Horses from './components/Horses';
import { SocketIOContext } from './index';

export const MAX_DISTANCE = 1000

function App() {
  const io = useContext(SocketIOContext)
  const [horses, setHorses] = useState([])

  const startRace = () => {
    io.emit("start")
    io.on("ticker", horses => {
      if (horses.every(horse => horse.distance === MAX_DISTANCE)) {
        io.off("ticker")
      }
      setHorses(horses)
    })
  }
  return (
    <div className="container">
      <div className="greeting">
        <h3 className='greeting-title'>Welcome to the horse race!</h3>
        <button className='start-btn' onClick={startRace}>Start race</button>
      </div>
      
      <Horses horses={horses}/>
    </div>
  );
}

export default App;
