## SearchBar

### 默认配置

```jsx
import React from 'react'
import { Input, DatePicker, Button } from 'antd'
import { SearchBar, Select } from '../src'

const { Item } = SearchBar

const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 12 },
}

export default function Index() {
  return (
    <SearchBar
      extra={[
        <Button>
          导出
        </Button>
      ]}
    >
      <Item label="发票抬头" name="invoiceTitle">
        <Input />
      </Item>
      <Item label="发票税号" name="customerIdentifier">
        <Input />
      </Item>
      <Item label="审核状态" name="auditStatus">
        <Select></Select>
      </Item>
      <Item label="执行状态" name="executeStatus">
        <Select></Select>
      </Item>
    </SearchBar>
  )
}
```
