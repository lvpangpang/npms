import { http } from '@sd/utils'

export default {
  getList: (data) => http.get('/example/list', { data, mock: true }),
  remove: (data) => http.post('/example/remove', { data }, { mock: true }),
}
