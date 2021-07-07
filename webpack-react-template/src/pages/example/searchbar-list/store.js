import { TableStore } from '@sd/components'
import Api from './Api'

class Store {
  $table = new TableStore({
    fetchList: async (params) => {
      // 这里按需要处理参数,比如将日期转为时间戳
      const { date, ...rest } = params
      const { list, total } = await Api.getList({ date: date?.valueOf(), ...rest })
      return { list, total }
    },
  })
}
export default new Store()
