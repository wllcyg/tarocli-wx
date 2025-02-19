// src/utils/request.ts
import axios,{ AxiosResponse }  from 'axios'
interface apiRes<T> {
  code: number
  data: T
  message: string
}
const service = axios.create({
  baseURL: 'http://127.0.0.1:8001',
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器
service.interceptors.response.use(
  response  => {
    if (response.data.code == 1000) {
      return response.data.data
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

export default service