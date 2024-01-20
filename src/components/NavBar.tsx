import { useNavigate } from 'react-router-dom'

export default function NavBar () {
  const navigate = useNavigate()
  return (
    <nav className="bg-white rounded-lg md:mb-5 mb-2">
      <div className="w-full flex items-center md:justify-end justify-center mx-auto py-2 md:px-4 px-0">
        <div className="w-auto" id="navbar-default">
          <ul className="font-medium flex md:justify-center justify-between w-full items-center md:p-0 rounded-lg flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a href="#" className="block text-sm md:text-base py-1 px-3 text-gray-800 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block text-sm md:text-base py-1 px-3 text-gray-800 rounded md:border-0  md:p-0 dark:text-[#124a67]">About</a>
            </li>
            <li className="py-1 px-3">
              <button onClick={() => navigate('/login')} className="text-gray-800 text-sm md:text-base">Cerrar Sesión</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
