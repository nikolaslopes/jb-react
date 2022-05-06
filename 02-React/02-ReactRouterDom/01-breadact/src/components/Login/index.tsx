import { useNavigate } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()

  function onLogin() {
    localStorage.setItem('token', 'a1b2c3d4')

    navigate('/stock')
  }

  return <button onClick={onLogin}>Fazer login!</button>
}
