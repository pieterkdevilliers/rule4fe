import React, { useState } from 'react';

const AOLForm = ({ onAddAOL }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAOL = { name, description, owner };

    try {
      const response = await fetch('/snapshots/api/v1/aols', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAOL),
      });

      if (response.ok) {
        const data = await response.json();
        onAddAOL(data); // Update the state with the new AOL data
        setName('');
        setDescription('');
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
      <label>
        Owner:
        <textarea value={owner} onChange={(e) => setOwner(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create AOL</button>
    </form>
  );
};

export default AOLForm;
