import React from 'react';
import { Form, Button, Checkbox } from 'antd';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Forms = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '35ch' }, }} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Username" variant="standard" />
          </Box>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '35ch' }, }} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Password" variant="standard" />
          </Box>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="/#">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/#">register now!</a>
        </Form.Item>
      </Form>
    </>
  )
}

export default Forms
