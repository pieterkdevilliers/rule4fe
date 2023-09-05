import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SnapshotForm = ({ onAddSnapshot, todayId }) => {
  const navigate = useNavigate();
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const newSnapshot = {
      body,
      area_of_life: todayId, // Use the todayId from props
    };

    try {
      const response = await fetch('/snapshots/api/v1/snapshots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newSnapshot),
      });

      if (response.ok) {
        const data = await response.json();
        onAddSnapshot(data); // Update the state with the new AOL data
        setBody('');
        navigate(`/today/${todayId}`);
      } else {
        console.error('Failed to create Snapshot');
      }
    } catch (error) {
      console.error('Error creating Snapshot:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Snapshot Content:</label>
      <div>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <br />
      <button type="submit">Create Snapshot</button>
    </form>
  );
};

export default SnapshotForm;
