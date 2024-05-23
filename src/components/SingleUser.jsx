import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayerCard from './PlayerCard';

const SingleUser = () => {
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function getSinglePlayer() {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${id}`)
                if (!response.ok) {
                    throw new Error("Player not found")
                }
                const result = await response.json();
                console.log(result.data.player)
                setPlayer(result.data.player);
            } catch (error) {
                
            }
        }
        getSinglePlayer();
    }, [id])


  return (
    <>
    {error ? (
        <h1>{error}</h1>
    ) : player ? (
      <>
        <PlayerCard players={player}/>
      </>
    ) : (
      <h1>Loading...</h1>
    )}
  </>
  
  )
}

export default SingleUser;