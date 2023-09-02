import React, {useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

const AOLPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    let aolId = id;

    let [aol, setAol] = useState(null);

    useEffect(() => {
        getAol();
    }, [aolId])

    let getAol = async () => {
        let response = await fetch(`/snapshots/api/v1/aols/${aolId}`)
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

