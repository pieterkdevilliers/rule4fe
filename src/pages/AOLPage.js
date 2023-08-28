
import React,  {useState, useEffect}from 'react'
import AOLItem from '../components/AOLItem'

const AOLPage = () => {

    let [aols, setAOL] = useState([]);
    
    useEffect(() => {
        getSnapshots();
    }, [])

    let getAOLs = async () => {
        let response = await fetch('http://127.0.0.1:8000/snapshots/api/v1/aols');
        let data = await response.json();
        console.log("Data: ", data);
        setSnapshots(data);
    }

  return (
    <div>
      <div className="aols">
        {aols.map((aol, index) => (
            <AOLItem key={index} aol={aol} />
        ))}
      </div>
    </div>
  )
}

export default SnapshotsPage
