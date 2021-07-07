import { TableStore } from '@sd/components'
import { Modal } from 'antd'
import Api from './Api'

class Store {
  $table = new TableStore({
    fetchList: async (params) => {
      const { list, total } = await Api.getList(params)
      return {
        list,
        total,
      }
    },
    // 批量删除
    removeBatch: () => {
      // 获取选择的行数据
      const { keys } = this.$table.getSelected()
      if (keys.length) {
        Modal.confirm({
          title: '确定批量删除吗？',
          onOk: async () => {
            await Api.remove({ ids: keys.join() })
            this.$table.search()
          },
        })
      }
    },
  })
}
export default new Store()
