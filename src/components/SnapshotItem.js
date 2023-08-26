import React from 'react'

const SnapshotItem = ({snapshot}) => {
  return (
    <div>
        <h3>{snapshot.body}</h3>
        <h4>{snapshot.area_of_life}</h4>
        <h4>{snapshot.created}</h4>
    </div>
  )
}

export default SnapshotItem
