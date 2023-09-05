import React from 'react'
import { Link } from 'react-router-dom';

const AOLItem = ({aol}) => {
  return (
    <Link to={`/today/${aol.id}`}>
      <div className='aol'>
        <div>
          <h3>{aol.name}</h3>
          <h4>{aol.description}</h4>
        </div>
      </div>
      </Link>


  )
}

export default AOLItem

