import { Button, Checkbox, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { FC } from 'react'

type FieldType = {
  password?: string;
  remember?: string;
  email?: string;
};

const FormDeafult: FC = () => {
  const navigate = useNavigate()
  const onFinish = () => {
    navigate('/dashboard', { replace: true, state: { logged: true } })
  }

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 30 }}
      style={{ maxWidth: 350 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h2 className='font-semibold text-2xl mb-3'>Login</h2>
      <Form.Item<FieldType>
        name="email"
      >
        <Input defaultValue={'admin@admin.com'} placeholder='Correo' />
      </Form.Item>
      <Form.Item<FieldType>
        name="password"
      >
        <Input.Password defaultValue={'admin@admin.com'} placeholder='Contraseña' />
      </Form.Item>
      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 0, span: 10 }}
        className='-mt-3 mb-3'
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item className='mb-0' wrapperCol={{ offset: 0 }}>
        <Button type="primary" htmlType="submit" className='bg-[#1677ff] w-full'>
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormDeafult
