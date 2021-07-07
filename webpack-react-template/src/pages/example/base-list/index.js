import { Table, View } from '@sd/components'
import { useEffect } from 'react'
import store from './store'
import { Space } from 'antd'
import { Link } from '@sd/admin'

export default function Index() {
  useEffect(() => {
    // 触发列表的搜索
    store.$table.search()
  }, [])
  return (
    <View>
      <Table
        store={store}
        columns={[
          {
            title: 'ID',
            dataIndex: 'id',
          },
          {
            title: '用户名',
            dataIndex: 'username',
          },
          {
            title: '日期',
            dataIndex: 'date',
          },
          {
            title: '住址',
            dataIndex: 'address',
          },
          {
            title: '操作',
            fixed: 'right',
            width: 240,
            render(data) {
              return (
                <Space>
                  <Link to={`/example/base-list/detail/${data.id}`}>编辑</Link>
                  <a onClick={() => store.$table.remove(data)}>删除</a>
                </Space>
              )
            },
          },
        ]}
      />
    </View>
  )
}
