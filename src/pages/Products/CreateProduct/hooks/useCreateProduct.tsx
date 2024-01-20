import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProductsStore } from '../../store/productsStore'
import { Product } from '../../../../types/Products/types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function useCreateProduct () {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const updateProduct = useProductsStore(state => state.updateProduct)
  const addProduct = useProductsStore(state => state.addProduct)
  const productSelected = useProductsStore(state => state.productSelected)
  const [photos, setPhotos] = useState<string[]>([])
  const { setValue, handleSubmit, formState: { errors }, register } = useForm<Product>({
    defaultValues: productSelected!,
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()
  useEffect(() => {
    productSelected?.image !== undefined && setPhotos([...photos, ...productSelected.image])
  }, [])

  const breadcrumb = [{
    title: 'Dashboard'
  }, {
    title: <button className='hover:bg-seagull-50 px-2 rounded-md duration-100' onClick={() => navigate('/dashboard/products/list', { replace: true, state: { logged: true } })}>Products List</button>
  }, {
    title: 'Product'
  }] as const

  const handleFileChange = () => {
    const files = fileInputRef.current?.files
    if (files && files.length > 0) {
      const imagesArray: string[] = []
      for (const file of files) {
        if (file.type.startsWith('image/')) {
          const imageUrl = URL.createObjectURL(file)
          imagesArray.push(imageUrl)
        }
      }
      setPhotos([...photos, ...imagesArray])
      setValue('image', [...photos, ...imagesArray])
    }
  }

  function handleDeleteImage (img: string) {
    const newListImages = photos.filter((item: string) => item !== img)
    setPhotos(newListImages)
    setValue('image', newListImages)
  }

  function handleSendData (data: Product) {
    if (Object.keys(productSelected).length > 0) {
      updateProduct(data.id!, data)
    } else {
      addProduct({ ...data, id: crypto.randomUUID() })
    }
    navigate('/dashboard/products/list', { replace: true, state: { logged: true } })
  }

  return {
    breadcrumb,
    handleFileChange,
    handleDeleteImage,
    handleSendData,
    fileInputRef,
    photos,
    handleSubmit,
    errors,
    register,
    setValue
  }
}

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.array().required('Image is required'),
  category: Yup.string().required('Category is required'),
  stock: Yup.string().required('Stock is required'),
  price: Yup.string().required('Price is required'),
  post: Yup.string().required('Post is required')
})
