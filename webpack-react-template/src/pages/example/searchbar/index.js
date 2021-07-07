import { SearchBar, View } from '@sd/components'
import store from './store'
import { DatePicker, Input } from 'antd'

const { Item } = SearchBar
export default function Index() {
  return (
    <View>
      <SearchBar store={store}>
        <Item label="姓名" name="username">
          <Input />
        </Item>
        <Item label="日期" name="date">
          <DatePicker />
        </Item>
      </SearchBar>
    </View>
  )
}
