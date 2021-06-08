import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Button } from 'antd-mobile'

import store from './store'
import styles from './index.less'

function Index() {
  useEffect(() => {
    store.getList()
  }, [])
  return (
    <div className={styles.home_box}>
      <div className={styles.text}>{`首页数据: ${store.num}`}</div>
      <div>
        <Button type="primary" onClick={store.setNum}>
          点我
        </Button>
      </div>
      {/* {store.list} */}
    </div>
  )
}

export default observer(Index)
