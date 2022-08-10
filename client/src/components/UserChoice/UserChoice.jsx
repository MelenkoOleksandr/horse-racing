import React from "react";
import { useSelector } from "react-redux";
import { allHorsesFinishedRace } from "../../utils/race";

const UserChoice = () => {
  const { userChoice, horses, winner } = useSelector((state) => state);

  return (
    userChoice !== -1 && (
      <div className="user-choice__container">
        <div className="user-choice">
          You selected <span>{horses[userChoice].name}</span>
        </div>
        <div className="user-result">
          {allHorsesFinishedRace(horses) &&
            (winner === userChoice ? "Congratulations!" : "Try next time")}
        </div>
      </div>
    )
  );
};

export default UserChoice;
