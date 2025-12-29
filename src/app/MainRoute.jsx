import { Routes, Route } from 'react-router-dom'
import { ROUTES_PATHS } from '../shared/constants/path'

import PublicRoute from './routes/PublicRoute'
import ProtectedRoute from './routes/ProtectedRoute'

import AuthLayout from './layouts/AuthLayout'
import AppLayout from './layouts/AppLayout'

import Login from '../pages/auth/Login'
import Dashboard from '../pages/dashboard/Dashboard'

const MainRoute = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path={ROUTES_PATHS.LOGIN}
        element={
          <PublicRoute>
            <AuthLayout>
              <Login />
            </AuthLayout>
          </PublicRoute>
        }
      />

      {/* Protected Routes */}
      <Route
        path={ROUTES_PATHS.ROOT}
        element={
          <ProtectedRoute>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default MainRoute
