import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'

const AddAOLButton = () => {
  return (
    <Link to="/aols/add">
      <AddIcon />
    </Link>
  )
}

export default AddAOLButton