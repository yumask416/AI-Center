/* request.js */
import axios from 'axios'

// let baseURL = 'http://10.10.10.27:3000/api/v1/'
let baseURL = process.env.NODE_ENV === 'development' ? 'http://10.10.10.27:3000/api/v1/' : ''

// 创建axios实例
const service = axios.create({
  baseURL,
  timeout: 3000,
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers.Tokens = token // 字段名为 Tokens
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  res => {
    return res
  },
  err => {
    return Promise.reject(err)
  }
)

export default service
