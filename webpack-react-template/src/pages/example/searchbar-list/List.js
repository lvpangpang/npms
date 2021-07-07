import { Table } from '@sd/components'
import store from './store'

export default function Index() {
  return (
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
      ]}
    />
  )
}
