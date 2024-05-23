import React from 'react'
import './AddPlayerForm.css'
import { useState } from 'react'

const AddPlayerForm = ({players, setPlayers}) => {

    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        status: 'bench',
        imageUrl: '',
        teamId: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

async function addPlayer(e) {
    e.preventDefault();
    try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log(result);
        if (result.data && result.data.newPlayer) {
            setPlayers(prevPlayers => [...prevPlayers, result.data.newPlayer]);
          }
    } catch (error) {
        console.error(error)
    }
}

  return (
    <form className='player-form' onSubmit={addPlayer}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <label htmlFor="breed">Breed</label>
      <input type="text" name="breed" value={formData.breed} onChange={handleChange} />
      <label htmlFor="status">Status</label>
      <input type="text" name="status" value={formData.status} onChange={handleChange} />
      <label htmlFor="image">ImageUrl</label>
      <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
      <label htmlFor="teamId">Team Id</label>
      <input type="number" name="teamId" value={formData.teamId} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddPlayerForm;
