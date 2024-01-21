import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { SideBar } from '../../components/SideBar'
import { Suspense, lazy } from 'react'
import '../../styles/global.css'
const DrawerDefault = lazy(() => import('../../components/Drawer'))

export default function Dashboard () {
  return (
    <div className='md:p-5 px-3 py-4 bg-[#edf9fa] min-h-screen h-dvh flex md:gap-5 gap-2'>
      <aside className='w-auto sm:block hidden'>
        <SideBar />
      </aside>
      <section className='scroll-container flex-1 w-full overflow-x-auto'>
        <Suspense fallback={<div className='w-auto h-screen bg-seagull-50'>Cargando</div>}>
          <DrawerDefault />
        </Suspense>
        <header>
          <NavBar />
        </header>
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  )
}
