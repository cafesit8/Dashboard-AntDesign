export interface Product {
  id?: string,
  name: string,
  description: string,
  image: string[],
  category: string,
  stock: string,
  price: string,
  post: string
}

export interface ProductsContext {
  findProduct: Product[],
  dataProducts: Product[],
  setSearch: (e: string) => void,
  setDataProducts: (e: Product[]) => void,
  addProduct: (product: Product) => void,
}
