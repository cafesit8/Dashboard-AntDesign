import { AreaChart, Card, Title } from '@tremor/react'
import { chartStatistics } from '../const/chart'

const valueFormatter = function (number: number) {
  return 'S/. ' + new Intl.NumberFormat('pe').format(number).toString()
}

export default function SaleCard () {
  return (
    <Card className='[grid-area:sale] rounded-lg p-3 sm:p-6'>
      <Title className='sm:text-lg text-base text-seagull-800 [text-wrap:pretty]'>Sales of each category for the mid-year of 2023</Title>
      <AreaChart
        className="h-72 text-sm sm:text-base"
        data={chartStatistics}
        index="date"
        yAxisWidth={65}
        categories={['Drinks', 'Cleanliness', 'Pastas']}
        colors={['red', 'yellow', 'blue']}
        valueFormatter={valueFormatter}
      />
    </Card>
  )
}
