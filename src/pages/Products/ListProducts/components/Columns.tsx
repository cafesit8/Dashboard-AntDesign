import { useNavigate } from 'react-router-dom'
import NameTable from '../../../../components/NameTable'
import { Product } from '../../../../types/Products/types'
import { useProductsStore } from '../../store/productsStore'

export default function Columns () {
  const deleteProduct = useProductsStore(state => state.deleteProduct)
  const productSelected = useProductsStore(state => state.selectProduct)
  const navigate = useNavigate()

  function handleEdit (row: Product) {
    productSelected(row)
    navigate('/dashboard/products/create', { replace: true, state: { logged: true } })
  }

  const columns = [
    {
      name: <NameTable text="Name" />,
      cell: (row: Product) => <p className='text-sm [text-wrap:pretty]'>{row.name}</p>,
      center: true,
      width: '10rem'
    },
    {
      name: <NameTable text="Image" />,
      cell: (row: Product) => (
        <picture className='block m-2 w-16 h-16'>
          <img className='object-contain w-full h-full' src={row.image[0]} alt="" />
        </picture>
      ),
      center: true
    },
    {
      name: <NameTable text="Category" />,
      cell: (row: Product) => row.category,
      center: true
    },
    {
      name: <NameTable text="Stock" />,
      cell: (row: Product) => row.stock,
      center: true
    },
    {
      name: <NameTable text="Price" />,
      cell: (row: Product) => <span>S/. {row.price}</span>,
      center: true
    },
    {
      name: <NameTable text="Post" />,
      cell: (row: Product) => row.post === 'post' ? <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Post</span> : <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded text-center">No Post</span>,
      center: true
    },
    {
      name: <NameTable text="Actions" />,
      cell: (row: Product) => (
        <div className='text-black w-full h-full flex justify-center items-center gap-3'>
          <button onClick={() => handleEdit(row)}>
            <svg className="text-seagull-700" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
          </button>
          <button onClick={() => deleteProduct(row.id!)}>
            <svg className="text-seagull-700" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="currentColor" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="currentColor" /></svg>
          </button>
        </div>
      )
    }
  ]
  return { columns }
}
