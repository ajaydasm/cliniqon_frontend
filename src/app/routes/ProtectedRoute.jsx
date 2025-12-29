import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../services/auth'
import { ROUTES_PATHS } from '../../shared/constants/path'

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? (
    children
  ) : (
    <Navigate to={ROUTES_PATHS.LOGIN} />
  )
}

export default ProtectedRoute
