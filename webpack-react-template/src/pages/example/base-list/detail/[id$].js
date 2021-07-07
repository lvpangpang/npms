import { View } from '@sd/components'

export default function Index({ params: { id } }) {
  return <View last={id ? '编辑' : '新增'}>{id ? `编辑案例ID:${id}` : `新增案例`}</View>
}
