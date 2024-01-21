import { Card, LineChart, Title } from '@tremor/react'

const valueFormatter = (number: number) => `S/. ${new Intl.NumberFormat('us').format(number).toString()}`

export default function NoSale ({ title, gridArea, color, list }: { title: string, gridArea: string, color: string, list:any }) {
  return (
    <Card className={`[grid-area:${gridArea}] rounded-lg p-3 sm:p-6`}>
      <Title className='sm:text-lg text-base text-seagull-800 [text-wrap:pretty]'>{title}</Title>
      <LineChart
        className="mt-0 text-sm"
        data={list}
        index="date"
        categories={['No Sale']}
        colors={[`${color}`]}
        valueFormatter={valueFormatter}
        yAxisWidth={50}
      />
    </Card>
  )
}
