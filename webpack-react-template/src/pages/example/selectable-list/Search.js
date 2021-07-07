import { SearchBar } from '@sd/components'
import { Button, Input, DatePicker } from 'antd'
import store from './store'

const { Item } = SearchBar
export default function Index() {
  return (
    <SearchBar
      store={store}
      extra={
        <Button danger onClick={store.$table.removeBatch}>
          批量删除
        </Button>
      }
    >
      <Item label="姓名" name="username">
        <Input />
      </Item>
      <Item label="日期" name="date">
        <DatePicker />
      </Item>
    </SearchBar>
  )
}
