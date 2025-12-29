import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../services/auth'
import { ROUTES_PATHS } from '../../shared/constants/path'

const PublicRoute = ({ children }) => {
  return isAuthenticated() ? (
    <Navigate to={ROUTES_PATHS.ROOT} />
  ) : (
    children
  )
}

export default PublicRoute
