import { TableStore } from '@sd/components'
import { message, Modal } from 'antd'
import Api from './Api'

class Store {
  $table = new TableStore({
    fetchList: async () => {
      const { list, total } = await Api.getList()
      return { list, total }
    },
    remove: ({ id, username }) => {
      Modal.confirm({
        title: `确定要删除用户 '${username}' 吗?`,
        onOk: async () => {
          await Api.remove({ id })
          message.success('删除成功')
          this.$table.search()
        },
      })
    },
  })
}
export default new Store()
