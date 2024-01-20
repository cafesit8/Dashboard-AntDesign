import React, { useState } from 'react'
import {
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Menu } from 'antd'

type MenuItem = Required<MenuProps>['items'][number];

function getItem (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(<span>Products</span>, '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8')
  ])
]

function IconLeft () {
  return (
    <svg className="text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l10 0" /><path d="M4 18l14 0" /></svg>
  )
}

function IconRight () {
  return (
    <svg className="text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M10 12l10 0" /><path d="M6 18l14 0" /></svg>
  )
}

export function SideBar () {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={`min-w-[50px] ${collapsed ? 'w-[50px] md:w-[70px]' : 'lg:w-[260px] w-[210px]'}`}>
      <Button onClick={toggleCollapsed} style={{ marginBottom: 20, width: '100%', height: 50 }} className='bg-seagull-400 grid place-content-center hover:bg-[#053047]!'>
        {collapsed ? <IconRight /> : <IconLeft />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        className={`${collapsed ? 'w-[50px] md:w-[70px]' : 'w-auto'} rounded-lg`}
      />
    </div>
  )
}
