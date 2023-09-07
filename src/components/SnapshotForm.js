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
      const response = await fetch('https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1/snapshots', {
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
    <form class="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
      <div class="m-3">
        <div class="col-sm-3 mb-3">
          <label class="form-label">Snapshot Content:</label>
          <textarea class="form-control" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <div class="col-auto">
          <button class="btn btn-outline-success" type="submit">Create Snapshot</button>
        </div>
      </div>
    </form>
  );
};

export default SnapshotForm;
