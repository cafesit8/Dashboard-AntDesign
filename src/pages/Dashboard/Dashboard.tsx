import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { SideBar } from '../../components/SideBar'

export default function Dashboard () {
  return (
    <div className='md:p-5 px-2 py-4 bg-[#edf9fa] min-h-screen flex md:gap-5 gap-2'>
      <aside className='w-auto'>
        <SideBar />
      </aside>
      <section className='flex-1 w-full overflow-x-auto'>
        <header className=''>
          <NavBar />
        </header>
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  )
}
