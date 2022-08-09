import React from "react";

const Winner = ({ hasWinner, winnerName }) => {
  return (
    <div className="winner">
      Winner is <span className="winner-name">{winnerName}</span>
    </div>
  );
};

export default Winner;
