import BreadCrumb from '../../../../components/BreadCrumb'
import { useProductsStore } from '../../store/productsStore'

export default function Header ({ list }: any) {
  const productSelected = useProductsStore(state => state.productSelected)
  const selected = Object.keys(productSelected).length > 0
  return (
    <header className='bg-white rounded-lg py-2 px-3 pb-2 md:mb-5 mb-2'>
      <h2 className="font-semibold lg:text-2xl text-lg text-seagull-900">{selected ? 'Update Product' : 'Add Product'}</h2>
      <BreadCrumb list={list} />
    </header>
  )
}
