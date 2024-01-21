import { useRoutes, Navigate } from 'react-router-dom'
import Login from '../pages/Login/Login'
import ProtectedRoute from './ProtectedRoute'
import ProductsList from '../pages/Products/ListProducts/ProductsList'
import { Suspense, lazy } from 'react'
const CreateProduct = lazy(() => import('../pages/Products/CreateProduct/CreateProduct'))
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'))
const Statistics = lazy(() => import('../pages/Statistics/Statistics'))

function Load () {
  return (
    <div className='w-full bg-seagull-50 grid place-content-center'>Cargando</div>
  )
}

export default function Router () {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to={'/login'} />
    },
    {
      path: '/dashboard',
      element: <ProtectedRoute><Suspense fallback={<div className='w-full h-screen bg-seagull-50 grid place-content-center'>Cargando</div>}>
        <Dashboard />
      </Suspense></ProtectedRoute>,
      children: [
        { element: <Navigate to={'/dashboard/products/list'} replace={true} state={{ logged: true }} />, index: true },
        { path: 'products/list', element: <ProtectedRoute><ProductsList /></ProtectedRoute> },
        {
          path: 'products/create',
          element: <Suspense fallback={<Load />}><CreateProduct /></Suspense>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <ProtectedRoute><Suspense fallback={<div className='w-full h-screen bg-seagull-50 grid place-content-center'>Cargando</div>}>
        <Dashboard />
      </Suspense></ProtectedRoute>,
      children: [
        { element: <Navigate to={'/dashboard/statistics'} replace={true} state={{ logged: true }} />, index: true },
        { path: 'statistics', element: <ProtectedRoute><Suspense fallback={<Load />}><Statistics /></Suspense></ProtectedRoute> }
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return element
}
