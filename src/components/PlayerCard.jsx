import React from "react";
import './PlayerCard.css'

const PlayerCard = ({ players }) => {
  return (
    <div className="card-container">
      <div>{players.name}</div>
      <img src={players.imageUrl} alt={players.name} height={'200px'} />
      <div>{players.breed}</div>
    </div>
  );
};

export default PlayerCard;
