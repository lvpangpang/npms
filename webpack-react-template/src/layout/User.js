import { useAppInfo } from '@sd/admin'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { logout } from '@/utils'
import { DownOutlined } from '@ant-design/icons'
import { Popover, Button } from 'antd'
import styles from './style.less'
import cls from 'classnames'

function User() {
  const [visible, setVisible] = useState(false)
  const { username, roleName, phone, brands } = useAppInfo()
  return (
    <Popover
      visible={visible}
      placement="bottomLeft"
      trigger="click"
      onVisibleChange={(v) => setVisible(v)}
      content={
        <div className={styles.info}>
          <div>品牌：{brands.join('、')}</div>
          <div>手机号：{phone}</div>
          <div>角色：{roleName}</div>
          <Button type="primary" onClick={logout} block>
            退出
          </Button>
        </div>
      }
    >
      <span className={styles.user}>
        {username} <DownOutlined className={cls(styles.arrow, { [styles.up]: visible })} />
      </span>
    </Popover>
  )
}
export default observer(User)
