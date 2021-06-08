import { isFun } from '../data-type'

function handleParams(params) {
  const list = []
  Object.keys(params || {}).forEach((key) => {
    const val = params[key]
    if (val === '' || val === null || val === undefined) {
      return
    }
    list.push(`${key}=${encodeURIComponent(val)}`)
  })
  return list.join('&')
}

function request(http) {
  http.interceptors.request.use(
    (userConfig) => {
      const glocalConfig = http.prototype.glocalConfig
      const { headers } = glocalConfig
      const headersRes = { ...(userConfig.headers), ...headers }
      delete glocalConfig.headers
      delete userConfig.headers
      const config = { ...userConfig, ...glocalConfig, ...{ headers: headersRes } }
      const { method, transformRequest } = config

      if (method === 'get') {
        config.paramsSerializer = function (params) {
          return handleParams(params)
        }
      }

      if (isFun(transformRequest)) {
        config.transformRequest = function (data) {
          return transformRequest(data)
        }
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}

export default request
