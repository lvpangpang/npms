import { setAppInfo, history } from '@sd/admin'
import { Modal } from 'antd'
import { logout } from '@/utils'
import Api from './Api'
import { App } from '@sd/components'

class Store {
  initApp = async () => {
    const { id, menus, permissions, ...rest } = await Api.init()
    if (!menus || menus.length === 0) {
      Modal.warning({
        title: '提示',
        content: '当前账号没有任何权限，请联系管理员添加权限',
        onOk: logout,
      })
      return Promise.reject('没有权限')
    }
    setAppInfo({
      id,
      menus,
      authorities: permissions.map(({ value }) => value),
      ...rest,
    })
    /*
     重定向到上次访问的页面路径,
     重定向之后再移除，防止手动刷新页面的时候又会被重定向
     */
    const lastVisitPath = App.getLastVisitPath(id)
    if (lastVisitPath) {
      App.removeLastVisitPath(id)
      history.push(lastVisitPath)
    }
  }
}
export default new Store()
