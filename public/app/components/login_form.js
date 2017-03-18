import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Form } from 'semantic-ui-react';

const LoginForm = () => (
  <div>
  <Form>
  <Form.Field inline>
  <label>用户</label>
  <input placeholder='用户名' />
  </Form.Field>
  <Form.Field inline>
  <label>密码</label>
  <input placeholder='密码' />
  </Form.Field>
  <Button primary type='submit'>登录</Button>
  <Button type='submit'>取消</Button>
  </Form>
  <div>
  <Link to="/">
  忘记密码
  </Link>
  <Link to="/">
  注册
  </Link>
  </div>
  <Button fluid>点击免费获取体验课</Button>
  </div>
);

export default LoginForm;
