import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MAX_DISTANCE } from "../../App";
import { setUserChoise } from "../../store/raceSlice/raceSlice";
import horseImg from "../../assets/horse.png";
import "./Horse.css";

const Horse = ({ horse, horseIndex }) => {
  const dispatch = useDispatch();
  const userChoice = useSelector((state) => state.userChoice);

  const selectHorse = () => {
    if (userChoice === -1 && horse.distance < 700) {
      dispatch(setUserChoise(horseIndex));
    }
  };
  return (
    <div
      onClick={selectHorse}
      className={`horse 
        ${horse.distance === MAX_DISTANCE ? "stopped" : ""}
        ${horseIndex === userChoice ? "selected" : ""}
      `}
    >
      <div
        className="horse-info"
        style={{
          left:
            horse.distance > 100
              ? `calc(${(horse.distance / MAX_DISTANCE) * 100}% - 100px)`
              : 0,
        }}
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
