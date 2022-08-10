import React from "react";
import { useSelector } from 'react-redux';

const Winner = () => {
  const {horses, winner} = useSelector(state => state)

  return (
    winner !== -1 && (
      <div className="winner">
        Winner is <span className="winner-name">{horses[winner].name}</span>
      </div>
    )
  );
};

export default Winner;
