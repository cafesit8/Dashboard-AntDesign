import { useRoutes, Navigate } from 'react-router-dom'
import Login from '../pages/Login/Login'
import ProtectedRoute from './ProtectedRoute'
import ProductsList from '../pages/Products/ListProducts/ProductsList'
import { Suspense, lazy } from 'react'
const CreateProduct = lazy(() => import('../pages/Products/CreateProduct/CreateProduct'))
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'))

export default function Router () {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to={'/login'} />
    },
    {
      path: '/dashboard',
      element: <ProtectedRoute><Suspense fallback={<div className='w-full bg-seagull-50 grid place-content-center'>Cargando</div>}>
        <Dashboard />
      </Suspense></ProtectedRoute>,
      children: [
        { element: <Navigate to={'/dashboard/products/list'} replace={true} state={{ logged: true }} />, index: true },
        { path: 'products/list', element: <ProtectedRoute><ProductsList /></ProtectedRoute> },
        {
          path: 'products/create',
          element: <Suspense fallback={<div className='w-full bg-seagull-50 grid place-content-center'>Cargando</div>}>
            <CreateProduct />
          </Suspense>
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return element
}
