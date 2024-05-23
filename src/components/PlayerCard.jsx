import React from "react";
import "./PlayerCard.css";
import { useNavigate } from "react-router-dom";

const PlayerCard = ({ players, setPlayers }) => {
  const navigate = useNavigate();

async function deletePlayer() {
//     fetch('https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players', {
//     method: 'DELETE',
//   });
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${players.id}`,
        {
          method: 'DELETE',
        }
      );
      const result = await response.json();
      console.log(result);
      if (result.success) {
        // Remove the player from the state
        setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== players.id));
      }
    } catch (error) {
        console.error(error);
    }
}

  return (
    <div className="card-container">
      <div>{players.name}</div>
      <img src={players.imageUrl} alt={players.name} height={"200px"} />
      <div>{players.breed}</div>
      <div className="btns">
        <button
          className="btn"
          onClick={() => navigate(`/players/${players.id}`)}
        >
          See Details
        </button>
        <button className="btn" onClick={deletePlayer}>Delete</button>
      </div>
    </div>
  );
};

export default PlayerCard;
