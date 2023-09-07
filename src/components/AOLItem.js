import React from 'react'
import { Link } from 'react-router-dom';

const AOLItem = ({aol}) => {
  return (
    <Link to={`/today/${aol.id}`}>
      <div class="card card-style">
        <div class="card-body">
          <h3 class="card-title">{aol.name}</h3>
          <p class="card-text">{aol.description}</p>
        </div>
      </div>
      </Link>


  )
}

export default AOLItem

