import { Input, Select, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import BreadCrumb from '../../../../components/BreadCrumb'
const { Search } = Input

type Props = {
  setSearch: (e: string) => void
  setCategory: (e: string) => void
  setPost: (e: string) => void
}

const breadcrumb = [
  {
    title: 'Dashboard'
  },
  {
    title: 'Products List'
  }
]

export default function Header ({ setSearch, setCategory, setPost }: Props) {
  const navigate = useNavigate()
  function handleClick () {
    navigate('/dashboard/products/create', { replace: true, state: { logged: true } })
  }

  return (
    <header className='flex flex-col gap-3 bg-white py-3 lg:px-4 px-3 pb-4 rounded-lg w-auto'>
      <div>
        <h1 className="font-semibold lg:text-2xl text-lg text-seagull-900">Products List</h1>
        <BreadCrumb list={breadcrumb} />
      </div>
      <div className='flex justify-between items-center flex-wrap'>
        <Search
          placeholder="Search your product"
          className='w-full lg:w-[300px] mb-3 lg:mb-0'
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className='flex lg:gap-4 gap-3 flex-wrap w-full lg:w-auto'>
          <div className='flex lg:gap-4 gap-3 w-full lg:w-auto'>
            <Select
              defaultValue="all"
              placeholder='Category'
              className='w-full lg:w-[200px]'
              onChange={(e) => setCategory(e)}
              options={[
                { value: 'all', label: 'All' },
                { value: 'cleanliness', label: 'Cleanliness' },
                { value: 'drinks', label: 'Drinks' },
                { value: 'pastas', label: 'Pastas' }
              ]}
            />
            <Select
              defaultValue="both"
              className='w-full lg:w-[200px]'
              onChange={(e) => setPost(e)}
              options={[
                { value: 'both', label: 'Both' },
                { value: 'post', label: 'Post' },
                { value: 'no post', label: 'No Post' }
              ]}
            />
          </div>
          <Button onClick={handleClick} className='bg-seagull-400 hover:bg-seagull-800! w-full font-["Outfit_Variable"] lg:w-auto'><span className='text-white'>Add Product</span></Button>
        </div>
      </div>
    </header>
  )
}
