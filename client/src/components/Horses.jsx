import React from "react";
import { useSelector } from "react-redux";
import Horse from "./Horse/Horse";

const Horses = () => {
  const horses = useSelector(state => state.horses)
  return (
    horses.length > 0 && (
      <div className="horses-field">
        {horses.map((horse, horseIndex) => (
          <Horse key={horse.name} horse={horse} horseIndex={horseIndex} />
        ))}
      </div>
    )
  );
};

export default Horses;
