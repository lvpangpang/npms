import { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { DownOutlined } from '@ant-design/icons'
import { Popover, Button } from 'antd'
import { setStorage } from 'js-common-library'
import styles from './index.less'
import DATA from './data'

const { phone, roleNameDisplays, username } = DATA

function User() {
  const [visible, setVisible] = useState(false)
  const history = useHistory()
  const logOut = useCallback(() => {
    localStorage.removeItem('token')
    history.replace('/login')
  })
  return (
    <Popover
      visible={visible}
      placement="bottomLeft"
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
          <Button type="primary" block onClick={logOut}>
            退出
          </Button>
        </div>
      }
    >
      <span style={{ cursor: 'pointer' }}>
        {username}
        <DownOutlined style={{ marginLeft: '10px' }} />
      </span>
    </Popover>
  )
}
export default observer(User)
