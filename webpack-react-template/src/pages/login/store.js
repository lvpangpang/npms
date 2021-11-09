import { makeAutoObservable } from 'mobx'
import { setStorage } from 'js-common-library'
import Api from './Api'
class Store {
  constructor() {
    makeAutoObservable(this)
  }
  loading = false
  login = async (values) => {
    setStorage('token', 123)
    window.location.href = '/'
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
