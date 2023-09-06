import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const AOLPage = () => {

    const { id } = useParams();
    let aolId = id;

    let [aol, setAol] = useState(null);

    useEffect(() => {
        getAol();
    }, [aolId])

    let getAol = async () => {
        let response = await fetch(`https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1/aols/${aolId}`)
        let data = await response.json();
        setAol(data);
    }

  return (
    <div>
      <h3> {aol?.name} </h3>
      <p> {aol?.description} </p>
    </div>
  )
}

export default AOLPage

