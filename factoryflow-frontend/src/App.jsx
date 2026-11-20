import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/auth/Login'
import Unauthorized from './pages/auth/Unauthorized'

import AdminDashboard from './pages/admin/Dashboard'
import OperatorDashboard from './pages/operator/Dashboard'

import ProtectedRoute from './components/common/ProtectedRoute'
import MainLayout from './components/layout/MainLayout'

function App() {
  return (
    <Routes>

      {/* Route par défaut */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Authentification */}
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Routes Admin */}
      <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
        <Route element={<MainLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Route>

      {/* Routes Operator */}
      <Route element={<ProtectedRoute allowedRoles={['OPERATOR']} />}>
        <Route element={<MainLayout />}>
          <Route path="/operator" element={<OperatorDashboard />} />
        </Route>
      </Route>

      {/* Page introuvable */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  )
}

export default App