import React from 'react'
import Horse from './Horse'

const Horses = ({horses}) => {
  return horses.map(horse => <Horse key={horse.name} horse={horse}/>)
}

export default Horses