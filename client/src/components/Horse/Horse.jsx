import { memo } from "react";
import { MAX_DISTANCE } from "../../App";

import horseImg from "../../assets/horse.png";
import "./Horse.css";

const Horse = ({ horse }) => {
  return (
    <div
      className={`horse ${horse.distance === MAX_DISTANCE ? "stopped" : ""}`}
    >
      <div
        className="horse-info"
        style={{ left: horse.distance > 100  ? `calc(${(horse.distance / MAX_DISTANCE) * 100}% - 100px)`: 0}}
      >
        <img className="horse-image" src={horseImg} alt="horse" />
        <h6 className="horse-name">
          <span>{horse.name}</span>
        </h6>
        <h6 className="horse-distanse">{horse.distance}m</h6>
      </div>
    </div>
  );
};

export default memo(Horse);
