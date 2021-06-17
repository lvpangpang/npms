import { Form, Button, Row, Col } from 'antd'
import { SearchOutlined, EditOutlined, DownOutlined, UpOutlined } from '@ant-design/icons'

const Item = Form.Item

const Style = {
  button: {
    marginLeft: '8px',
  },
}

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 16 },
}

function SearchItem({ col = 6, children, ...rest }) {
  return (
    <Col span={col}>
      <Item {...rest}>{children}</Item>
    </Col>
  )
}

function SearchBar({ children, extra=[], ...rest }) {
  const [form] = Form.useForm()
  return (
    <Form form={form} {...layout} {...rest}>
      <Row>{children}</Row>
      <div style={{ textAlign: 'right' }}>
        <Button type="primary" icon={<SearchOutlined />} htmlType="submit" style={Style.button}>
          搜索
        </Button>
        <Button icon={<EditOutlined />} style={Style.button}>
          清空
        </Button>
        {
          extra.map((item) => {
            return <span style={Style.button}>{item}</span>
          })
        }
      </div>
    </Form>
  )
}

SearchBar.Item = SearchItem
export default SearchBar
