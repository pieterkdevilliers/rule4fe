import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'

const AddSnapshotButton = () => {
  return (
    <Link to="/snapshots/add">
      <AddIcon />
    </Link>
  )
}

export default AddSnapshotButton