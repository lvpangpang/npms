import { SearchBarStore } from '@sd/components'
import Api from './Api'

class Store {
  $searchbar = new SearchBarStore({
    onSearch: async (params) => {
      console.log('搜索条件', params)
      await Api.getList(params)
    },
  })
}
export default new Store()
