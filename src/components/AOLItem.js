import React from 'react'
import { Link } from 'react-router-dom';

const AOLItem = ({aol}) => {
  return (
    <Link to={`/today/${aol.id}`}>
        <h3>{aol.name}</h3>
        <h4>{aol.description}</h4>
    </Link>
  )
}

export default AOLItem

