import { makeAutoObservable, action } from 'mobx'
import { history } from 'react-router-dom'
// import { resetStore } from '@sd/components'
// import { setToken } from '@/utils'
import Api from './Api'

class Store {
  constructor() {
    makeAutoObservable(this)
  }
  loading = false
  login = async (values) => {
    this.loading = true
    const { token } = await Api.login(values).finally(
      action(() => {
        this.loading = false
      })
    )
    // setToken(token)
    history.push('/')
  }
  /*
  短信验证码倒计时
   */
  deadline
  countdownVisible = false
  showCountdown = () => {
    this.countdownVisible = true
    this.deadline = Date.now() + 60 * 1000
  }
  hideCountdown = () => {
    this.countdownVisible = false
  }
  sendCode = async (phone) => {
    this.showCountdown()
    await Api.sendCode({ phone })
  }
  reset = () => {
    // resetStore(this, Store)
  }
}
export default new Store()
