import React from 'react'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux'
import { toLogin } from '@/actions/login'
import './style.less'
function Login (props) {
  const { toLogin } = props
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 5,
    },
  }
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  }
   const  onFinish = async values => {
   const res =  await toLogin(values)
   if( res.payload.code === 200 ) {
     localStorage.setItem('token',res.payload.data.token)
     props.history.push('/')
   }
  }
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入账号',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}
export default connect ( state => {
  return {}
},{
  toLogin
})(Login)