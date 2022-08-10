import React from 'react'
import { useSelector } from 'react-redux';

const Greeting = ({startRace}) => {
  const raceStarted = useSelector(state => state.raceStarted)
  return (
    <div className="greeting">
      <h3 className="greeting-title">Welcome to the horse race!</h3>
      <button disabled={raceStarted} className="start-btn" onClick={startRace} data-testid="greeting-btn">
        Start race
      </button>
    </div>
  );
}

export default Greeting