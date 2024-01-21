import { useNavigate } from 'react-router-dom'
import { Product } from '../../../../types/Products/types'
import { useProductsStore } from '../../store/productsStore'
import { toast } from 'sonner'

export default function useColumns () {
  const deleteProduct = useProductsStore(state => state.deleteProduct)
  const productSelected = useProductsStore(state => state.selectProduct)
  const navigate = useNavigate()

  function handleEdit (row: Product) {
    productSelected(row)
    navigate('/dashboard/products/create', { replace: true, state: { logged: true } })
  }

  function handleDelete (row: Product) {
    deleteProduct(row.id!)
    toast.success('Product deleted successfully')
  }
  return {
    handleDelete,
    handleEdit
  }
}
