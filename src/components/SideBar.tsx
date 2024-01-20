import React, { useState } from 'react'
import {
  ContainerOutlined,
  BarChartOutlined,
  MailOutlined,
  PieChartOutlined
} from '@ant-design/icons'
import { Button, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

type MenuItem = {
  key: React.Key;
  href?: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  label?: React.ReactNode;
  type?: 'group';
};

function getItem (
  label: React.ReactNode,
  key: React.Key,
  href?: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    href,
    icon,
    children,
    label,
    type
  } as MenuItem
}

export const items: MenuItem[] = [
  getItem('Products', '1', '/dashboard/products/list', <PieChartOutlined />),
  getItem('Statistics', '2', '/dashboard/statistics', <BarChartOutlined />),
  getItem('Option 3', '3', '/dashboard/products/list', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', '', <MailOutlined />, [
    getItem('Option 5', '5', 'option1'),
    getItem('Option 6', '6', 'option2'),
    getItem('Option 7', '7', 'option3'),
    getItem('Option 8', '8', 'option4')
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
  const navigate = useNavigate()
  const toggleCollapsed = () => setCollapsed(!collapsed)

  function handleNavigate (href: string) {
    navigate(href, { replace: true, state: { logged: true } })
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
        className={`${collapsed ? 'w-[50px] md:w-[70px]' : 'w-auto'} rounded-lg font-["Outfit_Variable"]`}
      >
        {items.map((item: MenuItem) => (
          (item.children)
            ? <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
              {item.children.map((childItem: MenuItem) => (
                <Menu.Item key={childItem.key} icon={childItem.icon}>
                  {childItem.label}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
            : <Menu.Item onClick={() => handleNavigate(item.href!)} key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
        ))}
      </Menu>
    </div>
  )
}
