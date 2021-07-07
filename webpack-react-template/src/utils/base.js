import { removeLocalInfo, getLocalInfo, setLocalInfo } from '@sd/utils'
import { TOKEN } from './constant'
import { history } from '@sd/admin'
import { toJS } from 'mobx'
import { App } from '@sd/components'

export function logout() {
  removeLocalInfo(TOKEN)
  App.setLastVisitPath(window.location.pathname + window.location.search)
  history.replace('/login')
}
export function isLogin() {
  return !!getLocalInfo(TOKEN)
}
export function getToken() {
  return getLocalInfo(TOKEN)
}
export function setToken(token) {
  if (token) {
    setLocalInfo({ [TOKEN]: token })
  }
}
