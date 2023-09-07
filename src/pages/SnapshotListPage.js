
import React,  {useState, useEffect}from 'react'
import SnapshotItem from '../components/SnapshotItem'
import AddSnapshotButton from '../components/AddSnapshotButton'

const SnapshotListPage = () => {

    let [snapshots, setSnapshots] = useState([]);
    
    useEffect(() => {
        getSnapshots();
    }, [])

    let getSnapshots = async () => {
      const token = localStorage.getItem('token');
        let response = await fetch('https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1/snapshots', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the header
          },});
        let data = await response.json();
        setSnapshots(data);
    }

  return (
    <div className="d-flex">
      <div>
        {snapshots.map((snapshot, index) => (
            <SnapshotItem key={index} snapshot={snapshot} />
        ))}
      </div>
      <AddSnapshotButton />
    </div>
    
  )
}

export default SnapshotListPage
