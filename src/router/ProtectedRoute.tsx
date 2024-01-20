import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoute ({ children }: { children: ReactNode }) {
  const { state } = useLocation()
  return state?.logged ? <>{children}</> : <Navigate to='/login' />
}
