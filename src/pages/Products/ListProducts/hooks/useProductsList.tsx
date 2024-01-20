import { useEffect, useMemo } from 'react'
import { Product } from '../../../../types/Products/types'

type Props = {
  selectProduct: (product: Product) => void
  search: string
  products: Product[]
  category: string
  post: string
}

export default function useProductsList ({ selectProduct, search, products, category, post }: Props) {
  useEffect(() => {
    selectProduct({} as any)
  }, [selectProduct])

  const findProduct = useMemo(() => {
    if (search === '') return [...products]
    if (search !== '') return [...products].filter((item: Product) => item.name.toLowerCase().includes(search.toLowerCase()))
    return [...products]
  }, [search, products])

  const categoryFiltered = useMemo(() => {
    if (category === '' || category === 'all') return [...findProduct]
    if (category !== '') return [...findProduct].filter((item: Product) => item.category.toLowerCase().includes(category.toLowerCase()))
    return [...findProduct]
  }, [category, findProduct])

  const postFiltered = useMemo(() => {
    if (post === '' || post === 'both') return [...categoryFiltered]
    if (post !== '') return [...categoryFiltered].filter((item: Product) => item.post.toLowerCase().includes(post.toLowerCase()))
    return [...categoryFiltered]
  }, [categoryFiltered, post])

  return {
    postFiltered
  }
}
