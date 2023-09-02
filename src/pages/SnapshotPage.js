import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

const SnapshotPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  let snapshotId = id;

  let [snapshot, setSnapshot] = useState(null);

  useEffect(() => {
      getSnapshot();
  }, [snapshotId])

  let getSnapshot = async () => {
      let response = await fetch(`/snapshots/api/v1/snapshots/${snapshotId}`)
      let data = await response.json();
      setSnapshot(data);
  }

  return (
    <div>
      <h3> {snapshot?.area_of_life} </h3>
      <p> {snapshot?.body} </p>
      <p> {snapshot?.created} </p>
    </div>
  )

  return (
    <div>
      <h1>Snapshot Page {snapshotId}</h1>
    </div>
  )
}

export default SnapshotPage
