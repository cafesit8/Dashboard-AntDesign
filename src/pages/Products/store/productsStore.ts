import { create } from 'zustand'
import { Product } from '../../../types/Products/types'
import { data } from '../const/products'

interface ProductsStoreProps {
  products: Product[]
  productSelected: Partial<Product>
  addProduct: (product: Product) => void
  deleteProduct: (id: string) => void
  selectProduct: (product: Product) => void
  updateProduct: (id: string, product: Product) => void
}

export const useProductsStore = create<ProductsStoreProps>((set, get) => ({
  products: [...data],
  productSelected: {} as Partial<Product>,
  addProduct: (product: Product) => set(state => ({ products: [product, ...state.products] })),
  deleteProduct: (id: string) => set(state => ({ products: [...state.products.filter(product => product.id !== id)] })),
  selectProduct: (product: Product) => set(({ productSelected: product })),
  updateProduct: (id:string, product: Product) => {
    const indexProduct = get().products.findIndex(product => product.id === id)
    get().products[indexProduct] = product
  }
}))
