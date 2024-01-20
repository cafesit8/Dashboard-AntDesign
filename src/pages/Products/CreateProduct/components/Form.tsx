import { Select, Button } from 'antd'
import { Product } from '../../../../types/Products/types'
import { useProductsStore } from '../../store/productsStore'
import { ChangeEvent, RefObject } from 'react'

type Props = {
  handleSendData: (data: Product) => void
  fileInputRef: RefObject<HTMLInputElement>
  photos: string[]
  handleDeleteImage: (index: string) => void
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: any
  errors: any
  register: any
  setValue: any
}

export default function Form ({ handleSendData, fileInputRef, photos, handleDeleteImage, handleFileChange, handleSubmit, errors, register, setValue }: Props) {
  const { productSelected } = useProductsStore()

  return (
    <form onSubmit={handleSubmit(handleSendData)} className="form">
      <article className="[grid-area:uno] w-full bg-white p-3 rounded-lg md:block hidden">
        <h4 className='text-base text-seagull-800'>Details:</h4>
        <p className='text-sm text-black/60'>Title, Description, Images...</p>
      </article>
      <article className="[grid-area:dos] w-full bg-white py-3 px-4 pb-4 rounded-lg flex flex-col gap-2">
        <label>
          <span className='text-sm'>Name:</span>
          <input type="text" className={`${errors.name ? 'outline-red-500' : 'outline-seagull-500'} bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full py-1.5 px-3`} placeholder="ej: Jabón Líquido" {...register('name')} autoComplete='off' />
          {errors.name && <span className='text-sm text-red-500 ml-1'>{errors.name.message}</span>}
        </label>
        <label>
          <span className='text-sm'>Description:</span>
          <input type="text" className={`${errors.description ? 'outline-red-500' : 'outline-seagull-500'} bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full py-1.5 px-3`} placeholder="ej: This product help you..." {...register('description')} autoComplete='off' />
          {errors.description && <span className='text-sm text-red-500 ml-1'>{errors.description.message}</span>}
        </label>
        <div className='mt-2'>
          <input className='hidden' ref={fileInputRef} accept='image/*' type="file" id="fileInput" multiple onChange={handleFileChange} />
          <label htmlFor="fileInput">
            <div className={'border-seagull-600 border-2 border-dashed rounded-lg flex justify-center items-center flex-col p-4 text-center cursor-pointer'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-upload" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" /><path d="M9 15l3 -3l3 3" /><path d="M12 12l0 9" /></svg>
              <p className='text-seagull-950'>Haz clic aquí para seleccionar imágenes</p>
            </div>
          </label>
          {(photos.length > 0 || productSelected?.image) && (
            <section className='flex flex-col gap-4 mt-2'>
              <article className='grid md:grid-cols-[repeat(auto-fill,minmax(128px,1fr))] grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4'>
                {photos.map((item) => (
                  <picture key={item} className='block w-full h-32 relative bg-[#edf9fa] rounded-lg p-3'>
                    <svg onClick={() => handleDeleteImage(item)} className="absolute text-black/10 duration-150 hover:text-black/30 cursor-pointer top-0 right-0" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" stroke-width="0" fill="currentColor" /></svg>
                    <img className='w-full h-full object-contain rounded-lg' src={item} alt="" />
                  </picture>
                ))}
              </article>
            </section>
          )}
        </div>
      </article>
      <article className="[grid-area:tres] w-full bg-white p-3 rounded-lg md:block hidden">
        <span className='text-base'>Prices:</span>
        <p className='text-sm text-black/60'>Price, Stock, Category and Post</p>
      </article>
      <article className="[grid-area:cuatro] w-full bg-white py-3 px-4 pb-4 rounded-lg flex flex-col gap-2">
        <div className='flex gap-4'>
          <label className='w-full'>
            <span className='text-sm'>Price:</span>
            <input type="number" className={`${errors.price ? 'outline-red-500' : 'outline-seagull-500'} bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full py-1.5 px-3`} placeholder="ej: 20.50" {...register('price')} autoComplete='off' />
            {errors.price && <span className='text-sm text-red-500 ml-1'>{errors.price.message}</span>}
          </label>
          <label className='w-full'>
            <span className='text-sm'>Stock:</span>
            <input type="number" className={`${errors.stock ? 'outline-red-500' : 'outline-seagull-500'} bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full py-1.5 px-3`} placeholder="ej: 20.50" {...register('stock')} autoComplete='off' />
            {errors.stock && <span className='text-sm text-red-500 ml-1'>{errors.stock.message}</span>}
          </label>
        </div>
        <div className='flex gap-4'>
          <label className='w-full'>
            <span className='text-sm'>Category:</span>
            <Select
              defaultValue={productSelected.category}
              placeholder='Pastas'
              className='block'
              style={{ width: '100%' }}
              onChange={(e) => setValue('category', e)}
              options={[
                { value: 'cleanliness', label: 'Cleanliness' },
                { value: 'drinks', label: 'Drinks' },
                { value: 'pastas', label: 'Pastas' }
              ]}
            />
            {errors.category && <span className='text-sm text-red-500 ml-1'>{errors.category.message}</span>}
          </label>
          <label className='w-full'>
            <span className='text-sm'>Post:</span>
            <Select
              status={errors.post ? 'error' : ''}
              defaultValue={productSelected.post}
              className='block'
              style={{ width: '100%' }}
              onChange={(e) => setValue('post', (e))}
              options={[
                { value: 'post', label: 'Yes' },
                { value: 'no post', label: 'No' }
              ]}
            />
          </label>
        </div>
      </article>
      <Button htmlType='submit' className='[grid-area:button] border-none w-full self-end bg-white'><span className='text-black'>Guardar</span></Button>
    </form>
  )
}
