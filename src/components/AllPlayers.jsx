import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PlayerCard from './PlayerCard';
import './AllPlayers.css'

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        async function getPlayers() {
            try {
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players');
                const result = await response.json();
                console.log(result.data.players);
                setPlayers(result.data.players);
            } catch (error) {
                console.error(error)
            }
        }
        getPlayers();
    }, [])


  return (
    <div className='cards-container'>
        {players.map((elem) => {
            return (<div key={elem.id} onClick={()=> navigate(`/players/${elem.id}`)}><PlayerCard players={elem}/></div>)
        })}
    </div>
  )
}

export default AllPlayers
