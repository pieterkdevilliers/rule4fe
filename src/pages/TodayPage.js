import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useHistory
import SnapshotItem from '../components/SnapshotItem';
import AddSnapshotButton from '../components/AddSnapshotButton';

const TodayPage = () => {
  const { id } = useParams();
  let todayId = id;

  let [snapshot, setToday] = useState(null);
  let [aol, setTodayAOL] = useState(null);
  const navigate = useNavigate(); // Create a history object

  useEffect(() => {
    getToday();
    getAol();
  }, [todayId]);

  let getToday = async () => {
    const token = localStorage.getItem('token');
    let response = await fetch(`/snapshots/api/v1/today/${todayId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the token in the header
      },
    });
    let data = await response.json();
    setToday(data);
  };

  let getAol = async () => {
    const token = localStorage.getItem('token');
    let response = await fetch(`/snapshots/api/v1/aols/${todayId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the token in the header
      },
    });
    let data = await response.json();
    setTodayAOL(data);
  };

  // Function to navigate to a new page with todayId as a URL parameter
  const handleAddSnapshot = () => {
    navigate(`/snapshots/add/${todayId}`);
  };

  return (
    <div>
      <div>
        <h1>Selected AOL:</h1>
        <h3> {aol?.name} </h3>
        <p> {aol?.description} </p>
      </div>
      <h1>Related Snapshots:</h1>
      <div className="snapshots">
        {snapshot?.map((snapshot, index) => (
          <SnapshotItem key={index} snapshot={snapshot} />
        ))}
      </div>
      <button onClick={handleAddSnapshot}>Add Snapshot</button> {/* Use a button instead of AddSnapshotButton */}
    </div>
  );
};

export default TodayPage;
