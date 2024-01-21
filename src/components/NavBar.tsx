import { useNavigate } from 'react-router-dom'
import { useDrawerStore } from '../store/useDrawer'
import { Button } from 'antd'

function IconLeft () {
  return (
    <svg className="text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l10 0" /><path d="M4 18l14 0" /></svg>
  )
}

export default function NavBar () {
  const handleOpen = useDrawerStore(state => state.handleOpen)
  const navigate = useNavigate()
  return (
    <nav className="bg-white rounded-lg md:mb-5 mb-2 p-3 flex sm:justify-end justify-between items-center">
      <Button onClick={handleOpen} style={{ width: 'auto' }} className='bg-seagull-400 sm:hidden grid place-content-center hover:bg-[#053047]!'>
        <IconLeft />
      </Button>
      <ul className="flex sm:gap-5 gap-3">
        <li>
          <span className="text-seagull-800">Home</span>
        </li>
        <li>
          <span className="text-seagull-800">About</span>
        </li>
        <li className="">
          <button onClick={() => navigate('/login')} className="text-gray-800 text-base">Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  )
}
