import { useEffect } from 'react'
import { Input, Form, Button, Statistic } from 'antd'
import styles from './style.less'
import { MobileOutlined, MailOutlined } from '@ant-design/icons'
import store from './store'
import { observer } from 'mobx-react-lite'

const { Item } = Form
const { Countdown } = Statistic

function Index() {
  const [form] = Form.useForm()
  const { loading, deadline, countdownVisible } = store
  function verifyPhone() {
    form.validateFields(['phone']).then(() => {
      store.sendCode(form.getFieldValue('phone'))
    })
  }
  useEffect(() => {
    return () => store.reset()
  }, [])
  return (
    <div className={styles.root}>
      <div className={styles.login_wrap}>
        <div className={styles.title}>闪电出行</div>
        <Form form={form} onFinish={store.login}>
          <Item
            name="phone"
            rules={[{ required: true, message: '请正确输入手机号!', pattern: /^[1][1-9]\d{9}$/ }]}
          >
            <Input
              size="large"
              prefix={<MobileOutlined />}
              placeholder="账号"
              onPressEnter={form.submit}
            />
          </Item>
          <Item
            name="verifyCode"
            rules={[{ required: true, pattern: /^[0-9]*$/, message: '请正确输入验证码!' }]}
          >
            <Input.Search
              size="large"
              prefix={<MailOutlined />}
              placeholder="验证码"
              onPressEnter={form.submit}
              enterButton={
                <Button disabled={countdownVisible} style={{ width: 110 }}>
                  {countdownVisible ? (
                    <Countdown
                      format="ss 后重发"
                      value={deadline}
                      onFinish={store.hideCountdown}
                      valueStyle={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 16 }}
                    />
                  ) : (
                    '获取验证码'
                  )}
                </Button>
              }
              onSearch={verifyPhone}
            />
          </Item>
          <Item>
            <Button loading={loading} type="primary" size="large" htmlType="submit" block>
              登录
            </Button>
          </Item>
          <footer className={styles.footer}>
            ©2020 Created by lingxichuxing, All Rights Reserved.
          </footer>
        </Form>
      </div>
    </div>
  )
}
export default observer(Index)
