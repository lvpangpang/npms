import { SearchBar } from '@sd/components'
import { Input, DatePicker } from 'antd'
import store from './store'

const { Item } = SearchBar
/* 带searchBar的表格会自动触发搜索 */
export default function Index() {
  return (
    <SearchBar store={store}>
      <Item label="姓名" name="username">
        <Input />
      </Item>
      <Item label="日期" name="date">
        <DatePicker />
      </Item>
    </SearchBar>
  )
}
