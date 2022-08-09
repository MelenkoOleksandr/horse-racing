import React from 'react'

const Greeting = ({startRace, raceStarted}) => {
  return (
    <div className="greeting">
      <h3 className="greeting-title">Welcome to the horse race!</h3>
      <button disabled={raceStarted} className="start-btn" onClick={startRace}>
        Start race
      </button>
    </div>
  );
}

export default Greeting