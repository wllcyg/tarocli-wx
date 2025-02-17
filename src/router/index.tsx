// src/router/index.tsx
import { createHashRouter } from 'react-router-dom'
import Layout from '@/layout'
import { lazy, Suspense } from 'react'

const lazyLoad = (importFn: () => Promise<any>, fallback = <div>加载中...</div>) => {
    const Component = lazy(importFn)
    return (
      <Suspense fallback={fallback}>
        <Component />
      </Suspense>
    )
  }

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: lazyLoad(() => import('@/pages/Home'))
      },
      {
        path: '/about',
        element: lazyLoad(() => import('@/pages/About'))
      }
    ],
    errorElement: <div>404</div>
  },
  {
    path: '*',
    element: <div>503</div>
  },
  {
    path: '/login',
    element: lazyLoad(() => import('@/pages/Login'))
  }
])

export default router