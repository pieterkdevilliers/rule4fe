import React from 'react'

const SnapshotItem = ({snapshot}) => {
  return (
    <div className="snapshot">
      <div>
        <h4>{snapshot.created}</h4>
        <p>{snapshot.body}</p>
        </div>
    </div>
  )
}

export default SnapshotItem
