import { useRoutes, Navigate } from 'react-router-dom'
import Login from '../pages/Login/Login'
import ProtectedRoute from './ProtectedRoute'
import ProductsList from '../pages/Products/ListProducts/ProductsList'
import { Suspense, lazy } from 'react'
import Loader from '../components/Loader'
const CreateProduct = lazy(() => import('../pages/Products/CreateProduct/CreateProduct'))
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'))
const Statistics = lazy(() => import('../pages/Statistics/Statistics'))

export default function Router () {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to={'/login'} />
    },
    {
      path: '/dashboard',
      element: <ProtectedRoute><Suspense fallback={<Loader />}><Dashboard /></Suspense></ProtectedRoute>,
      children: [
        { element: <Navigate to={'/dashboard/products/list'} replace={true} state={{ logged: true }} />, index: true },
        { path: 'products/list', element: <ProtectedRoute><ProductsList /></ProtectedRoute> },
        {
          path: 'products/create',
          element: <Suspense fallback={<Loader />}><CreateProduct /></Suspense>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <ProtectedRoute><Suspense fallback={<Loader />}><Dashboard /></Suspense></ProtectedRoute>,
      children: [
        { element: <Navigate to={'/dashboard/statistics'} replace={true} state={{ logged: true }} />, index: true },
        { path: 'statistics', element: <ProtectedRoute><Suspense fallback={<Loader />}><Statistics /></Suspense></ProtectedRoute> }
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return element
}
