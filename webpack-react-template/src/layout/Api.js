import { http } from '@sd/utils'

export default {
  init: () => http('/init', { mock: true, responseDelay: 500 }),
}
