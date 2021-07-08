import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { DownOutlined } from '@ant-design/icons'
import { Popover, Button } from 'antd'
import styles from './index.less'
import DATA from './data'

const { phone, roleNameDisplays, username } = DATA

function User() {
  const [visible, setVisible] = useState(false)
  return (
    <Popover
      visible={visible}
      placement="bottomLeft"
      trigger="click"
      onVisibleChange={(v) => setVisible(v)}
      content={
        <div className={styles.info}>
          <div>手机号：{phone}</div>
          <div>
            角色：
            {roleNameDisplays.map((item) => {
              return item + ' '
            })}
          </div>
          <Button type="primary" block>
            退出
          </Button>
        </div>
      }
    >
      <span style={{ cursor: 'pointer' }}>
        {username} <DownOutlined />
      </span>
    </Popover>
  )
}
export default observer(User)
