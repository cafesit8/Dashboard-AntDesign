import { chartNoSaleDrinks, chartNoSalePastas } from './const/chart'
import '../../styles/statistics.css'
import { Suspense, lazy } from 'react'
import { StatisticsSkeletons } from '../../components/Skeletons'
const NoSale = lazy(() => import('./components/ProductNoSale'))
const SaleCard = lazy(() => import('./components/Sale'))

export default function Statistics () {
  return (
    <section className='flex flex-col md:gap-5 gap-2'>
      <header className='bg-white p-3 rounded-lg'>
        <h2 className='font-semibold lg:text-2xl text-lg text-seagull-900 leading-5 mb-1'>Statistics of the Products and Categories</h2>
        <p className='text-seagull-800/80 sm:text-base text-sm'>In this section you will be able to see the statistics of the products, sales and non-sales.</p>
      </header>
      <div className='statistics grid'>
        <Suspense fallback={<StatisticsSkeletons />}>
          <NoSale
            title='Unsold Pastas for the mid-year of 2023'
            gridArea='uno'
            color='emerald'
            list={chartNoSalePastas}
          />
        </Suspense>
        <Suspense fallback={<StatisticsSkeletons />}>
          <NoSale
            title='Unsold Drinks for the mid-year of 2023'
            gridArea='dos'
            color='purple'
            list={chartNoSaleDrinks}
          />
        </Suspense>
        <Suspense fallback={<StatisticsSkeletons />}>
          <SaleCard />
        </Suspense>
      </div>
    </section>
  )
}
