// src/hooks/useRequest.ts
import { useRequest as useAhooksRequest } from 'ahooks'
import type { Options, Service } from 'ahooks/lib/useRequest/src/types'
import service from '@/utils/request'

type RequestMethod = 'get' | 'post' | 'put' | 'delete'

interface RequestOptions<T> {
  method?: RequestMethod
  params?: Record<string, any>
  data?: Record<string, any>
  config?: Options<T, any[]>
}

export default function useRequest<T = any>(
  url: string,
  options?: RequestOptions<T>
) {
  const {
    method = 'get',
    params,
    data,
    config = {}
  } = options || {}

  const requestService: Service<T, []> = async () => {
    const axiosConfig = {
      url,
      method,
      params,
      data
    }
    return service(axiosConfig)
  }
  
  return useAhooksRequest(requestService, {
    manual: true, // 默认手动触发
    ...config
  })
}