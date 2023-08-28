import React from 'react'

const SnapshotItem = ({snapshot}) => {
  return (
    <div>
      <div>
        <h4>{snapshot.created}</h4>
      </div>
        <p>{snapshot.body}</p>
    </div>
  )
}

export default SnapshotItem
