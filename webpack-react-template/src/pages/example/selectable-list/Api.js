import { http } from '@sd/utils'

export default {
  getList: (data) => http.get('/example/list', { data, mock: true }),
  remove: (data) => http.post('/example/remove', { data }, { mock: true }),
  update: (data) => http.post('/example/update', { data }, { mock: true }),
}
