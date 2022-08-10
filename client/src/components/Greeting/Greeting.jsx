import React from 'react'
import { useSelector } from 'react-redux';

const Greeting = ({startRace}) => {
  const raceStarted = useSelector(state => state.raceStarted)
  return (
    <div className="greeting">
      <h3 className="greeting-title">Welcome to the horse race!</h3>
      <h5 className='user-warning'>You can select the horse after the race is started but do it before 700m</h5>
      <button disabled={raceStarted} className="start-btn" onClick={startRace} data-testid="greeting-btn">
        Start race
      </button>
    </div>
  );
}

export default Greeting