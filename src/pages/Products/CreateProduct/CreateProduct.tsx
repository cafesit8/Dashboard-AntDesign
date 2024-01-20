import useCreateProduct from './hooks/useCreateProduct'
import Header from './components/Header'
import { Suspense, lazy } from 'react'
import '../../../styles/form.css'
const Form = lazy(() => import('./components/Form'))

export default function CreateProduct () {
  const {
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
  } = useCreateProduct()

  return (
    <section className='flex flex-col gap-5'>
      <main>
        <Header list={breadcrumb} />
        <Suspense fallback={<span>Cargando</span>}>
          <Form
            fileInputRef={fileInputRef}
            photos={photos}
            handleDeleteImage={handleDeleteImage}
            handleSendData={handleSendData}
            handleFileChange={handleFileChange}
            handleSubmit={handleSubmit}
            errors={errors}
            register={register}
            setValue={setValue}
          />
        </Suspense>
      </main>
    </section>
  )
}
