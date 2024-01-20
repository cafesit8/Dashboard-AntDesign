import Columns from './components/Columns'
import Header from './components/Header'
import DataTable from 'react-data-table-component'
import { styles } from '../../../styles/customStylesTable'
import { useProductsStore } from '../store/productsStore'
import { useState } from 'react'
import useProductsList from './hooks/useProductsList'
import '@fontsource-variable/outfit'

export default function ProductsList () {
  const { products, selectProduct } = useProductsStore()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [post, setPost] = useState('')
  const { columns } = Columns()
  const { postFiltered } = useProductsList({ selectProduct, search, products, category, post })

  return (
    <section className='flex flex-col md:gap-5 gap-2'>
      <Header setSearch={setSearch} setCategory={setCategory} setPost={setPost} />
      <main>
        <DataTable
          columns={columns}
          data={postFiltered}
          pagination
          customStyles={styles}
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 15, 20]}
          noDataComponent={<p className="text-base text-gray-400 p-3">No hay información para mostrar</p>}
        />
      </main>
    </section>
  )
}
