
import React,  {useState, useEffect}from 'react'
import SnapshotItem from '../components/SnapshotItem'

const SnapshotListPage = () => {

    let [snapshots, setSnapshots] = useState([]);
    
    useEffect(() => {
        getSnapshots();
    }, [])

    let getSnapshots = async () => {
        let response = await fetch('/snapshots/api/v1/snapshots');
        let data = await response.json();
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

export default SnapshotListPage
