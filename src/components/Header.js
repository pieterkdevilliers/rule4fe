import React from 'react'
import LoginButton from './LogIn'
import Logout from './LogOut'

const header = () => {
  return (
    <div>
      <h1>Rule4 Header</h1>
      <div>
    <div>
      <h3> Login </h3>
      <LoginButton />
    </div>
    <div>
      <h3>Logout</h3>
      <Logout />
    </div>
    </div>
    </div>
    
  )
}

export default header
