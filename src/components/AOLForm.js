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
    <form class="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
      <div class="m-3">
      <div class="col-auto">
        <label class="form-label">
          Name:
          <input type="text" class="form-control"  value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div class="col-auto">
        <label class="form-label">
          Description:
          <textarea class="form-control"  value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
      </div>
      <div class="col-auto">
      <button type="submit" class="btn btn-outline-success">Create AOL</button>
      </div>
      </div>
    </form>
  );
};

export default AOLForm;
