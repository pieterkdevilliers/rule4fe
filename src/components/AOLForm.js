import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AOLForm = ({ onAddAOL }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const newAOL = { name, description };

    try {
      const response = await fetch('https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1/aols', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newAOL),
      });

      if (response.ok) {
        const data = await response.json();
        onAddAOL(data); // Update the state with the new AOL data
        setName('');
        setDescription('');
        navigate('/aols');
      } else {
        console.error('Failed to create AOL');
      }
    } catch (error) {
      console.error('Error creating AOL:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create AOL</button>
    </form>
  );
};

export default AOLForm;
