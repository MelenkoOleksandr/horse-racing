import {memo} from 'react'
import { MAX_DISTANCE } from '../App';
import "./Horse.css";

const Horse = ({horse}) => {
  return (
    <div className={`horse ${horse.distance === MAX_DISTANCE ? "stopped" : ""}`}>
        <div className="horse-name">
            Name: <span>{horse.name}</span>
        </div>
        <div className="horse-distance">
            Distance: <span>{horse.distance}</span>
        </div>
    </div>
  )
}

export default memo(Horse);