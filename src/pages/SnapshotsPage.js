
import React,  {useState, useEffect}from 'react'
import SnapshotItem from '../components/SnapshotItem'

const SnapshotsPage = () => {

    let [snapshots, setSnapshots] = useState([]);
    
    useEffect(() => {
        getSnapshots();
    }, [])

    let getSnapshots = async () => {
        let response = await fetch('http://127.0.0.1:8000/snapshots/api/v1/snapshots');
        let data = await response.json();
        console.log("Data: ", data);
        setSnapshots(data);
    }

  return (
    <div>
      <div className="snapshots">
        {snapshots.map((snapshot, index) => (
            <SnapshotItem key={index} snapshot={snapshot} />
        ))}
      </div>
    </div>
  )
}

export default SnapshotsPage
