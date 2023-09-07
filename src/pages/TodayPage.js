import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SnapshotItem from '../components/SnapshotItem';

const TodayPage = () => {
  const { id } = useParams();
  let todayId = id;

  let [snapshot, setToday] = useState(null);
  let [aol, setTodayAOL] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getToday();
    getAol();
  }, [todayId]);

  let getToday = async () => {
    const token = localStorage.getItem('token');
    let response = await fetch(`https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1/today/${todayId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    let data = await response.json();
    setToday(data);
  };

  let getAol = async () => {
    const token = localStorage.getItem('token');
    let response = await fetch(`https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1/aols/${todayId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    let data = await response.json();
    setTodayAOL(data);
  };

  const handleAddSnapshot = () => {
    navigate(`/snapshots/add/${todayId}`);
  };

  return (
    <div class="m-3">
      <div>
        <div>
          {aol ? (
            <>
            <div>
              <div>
                <div>
                <h3>{aol.name}</h3>
                </div>
                <div>
                  <p>{aol.description}</p>
                </div>
              </div>
            </div>
            </>
          ) : (
            <p>No AOL selected.</p>
          )}
        </div>
      </div>
      <h1>Related Snapshots:</h1>
      <div>
        {snapshot ? (
          snapshot.length > 0 ? (
            snapshot.map((snapshot, index) => (
              <SnapshotItem key={index} snapshot={snapshot} />
            ))
          ) : (
            <p>No snapshot for today yet.</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
        <button class="btn btn-outline-success" onClick={handleAddSnapshot}>Add Snapshot</button>
    </div>
  );
};

export default TodayPage;
