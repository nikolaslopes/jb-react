import { Navigate } from 'react-router-dom'

export function ProtectedRoute(props: { children: JSX.Element }) {
  const token = localStorage.getItem('token')

  if (token) {
    return props.children
  }

  return <Navigate to="/login" />
}
