import React, {useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import SnapshotItem from '../components/SnapshotItem'

const TodayPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  let todayId = id;

  let [snapshot, setToday] = useState(null);
  let [aol, setTodayAOL] = useState(null);

    useEffect(() => {
        getToday();
        getAol();
    }, [todayId])

    let getToday = async () => {
      const token = localStorage.getItem('token');
        let response = await fetch(`/snapshots/api/v1/today/${todayId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the header
          },})
        let data = await response.json();
        setToday(data);
    }

    let getAol = async () => {
      const token = localStorage.getItem('token');
      let response = await fetch(`/snapshots/api/v1/aols/${todayId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the token in the header
        },})
      let data = await response.json();
      setTodayAOL(data);
  }

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
    </div>
  )
}

export default TodayPage
