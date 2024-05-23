import React from "react";
import './PlayerCard.css'
import { useNavigate } from "react-router-dom";

const IndividualCard = ({ players }) => {

    const navigate = useNavigate();
  return (
    <div className="card-container">
      <div>{players.name}</div>
      <img src={players.imageUrl} alt={players.name} height={'200px'} />
      <div>{players.breed}</div>
      <button className="back" onClick={()=> navigate(`/players/`)}>Back</button>
    </div>
  );
};

export default IndividualCard;