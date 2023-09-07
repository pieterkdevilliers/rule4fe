import React from 'react'

const SnapshotItem = ({snapshot}) => {
  return (
    <div class="card card-style mb-3">
      <div class="card-body">
        <h4 class="card-title">{snapshot.created}</h4>
        <p class="card-text">{snapshot.body}</p>
        </div>
    </div>
  )
}

export default SnapshotItem
