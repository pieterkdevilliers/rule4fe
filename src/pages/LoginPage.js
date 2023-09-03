import LoginFrom from '../components/LoginForm'
import LogOut from '../components/LogOut'

const LoginPage = () => {



  return (
    <div>
    <div>
      <h3> Login </h3>
      <LoginFrom />
    </div>
    <div>
      <h3>Logout</h3>
      <LogOut />
    </div>
    </div>
  )
}

export default LoginPage

