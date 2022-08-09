import React from "react";
import Horse from "./Horse/Horse";

const Horses = ({ horses }) => {
  return (
    <div className="horses-field">
      {horses.map((horse) => (
        <Horse key={horse.name} horse={horse} />
      ))}
    </div>
  );
};

export default Horses;
