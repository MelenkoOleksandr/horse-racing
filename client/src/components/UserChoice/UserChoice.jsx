import React from "react";
import { useSelector } from "react-redux";
import { allHorsesFinishedRace } from "../../utils/race";

const UserChoice = () => {
  const { userChoice, horses, winner } = useSelector((state) => state);

  return (
    userChoice !== -1 && (
      <div data-testid="user-choice" className="user-choice__container">
        <div className="user-choice">
          You selected <span>{horses[userChoice].name}</span>
        </div>
        {allHorsesFinishedRace(horses) && (
          <div data-testid="user-result" className="user-result">
            {winner === userChoice ? "Congratulations!" : "Try next time"}
          </div>
        )}
      </div>
    )
  );
};

export default UserChoice;
