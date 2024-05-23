import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import "./AllPlayers.css";
import AddPlayerForm from "./AddPlayerForm";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State to manage the search query
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayers() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players"
        );
        const result = await response.json();
        console.log(result.data.players);
        setPlayers(result.data.players);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getPlayers();
  }, []);

    // Filter players based on the search query
    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.breed.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (loading) {
        return <div>Loading...</div>;
      }

  return (
    <>
    <AddPlayerForm players={players} setPlayers={setPlayers}/>
    <label htmlFor="search-bar">Search for dogs here:</label><br/>
    <input
        type="text"
        placeholder="Search players by name or breed"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="cards-container">
        {filteredPlayers.map((elem) => {
          return (
            <div key={elem.id}>
              <PlayerCard players={elem} setPlayers={setPlayers}/>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllPlayers;
