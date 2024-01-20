import { Breadcrumb } from 'antd'

export default function BreadCrumb ({ list }: { list: any }) {
  return (
    <Breadcrumb
      className='text-md'
      // items={[
      //   {
      //     title: 'Home'
      //   },
      //   {
      //     title: <a href="">Application Center</a>
      //   },
      //   {
      //     title: <a href="">Application List</a>
      //   },
      //   {
      //     title: 'An Application'
      //   }
      // ]}
      items={list}
    />
  )
}
