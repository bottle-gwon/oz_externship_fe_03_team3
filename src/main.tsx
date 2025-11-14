import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import testRouteArray from './testRoutes'
import { lazy, Suspense } from 'react'
import Layout from './pages/layout/Layout'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './lib/tanstackQueryClient'
// NOTE: 스켈레톤은 lazy로 임포트하지 말고 평범하게 임포트 해주세요
import LectureSkeleton from './components/lecture/LectureSkeleton'
import RecruitSkeletone from './components/recruit/title/RecruitSkeletone'
import RecruitDetailSkeleton from './components/recruit/detail/RecruitDetailSkeleton'
import GlobalNotFoundPage from './pages/errors/GlobalNotFoundPage'
import RecruitWriteSkeleton from './components/recruit/write/RecruitWriteSkeleton'
import ManageSkeleton from './components/recruit/manage/ManageSkeleton'

const RecruitListPage = lazy(() => import('./pages/recruit/RecruitListPage'))
const RecruitEditPage = lazy(
  () => import('./pages/recruit/write/edit/RecruitEditPage')
)
const RecruitWritePage = lazy(
  () => import('./pages/recruit/write/RecruitWritePage')
)
const RecruitManagePage = lazy(
  () => import('./pages/recruit/manage/RecruitManagePage')
)
const RecruitDetailPage = lazy(
  () => import('./pages/recruit/detail/RecruitDetailPage')
)
const LecturePage = lazy(() => import('./pages/lecture/LecturePage'))

const routeArray = [
  {
    path: '/recruit',
    element: <RecruitListPage />,
    fallback: <RecruitSkeletone />,
  },
  {
    path: '/recruit/write/:recruitId',
    element: <RecruitEditPage />,
    fallback: <RecruitWriteSkeleton />,
  },
  {
    path: '/recruit/write',
    element: <RecruitWritePage />,
    fallback: <RecruitWriteSkeleton />,
  },
  {
    path: '/recruit/manage',
    element: <RecruitManagePage />,
    fallback: <ManageSkeleton />,
  },
  {
    path: '/recruit/:recruitUuid',
    element: <RecruitDetailPage />,
    fallback: <RecruitDetailSkeleton />,
  },
  {
    path: '/lecture',
    element: <LecturePage />,
    // NOTE: 스켈레톤은 lazy로 임포트하지 말고 평범하게 임포트 해주세요
    fallback: <LectureSkeleton />,
  },
]

const suspendedTestRouteArray = testRouteArray.map((route) => ({
  path: route.path,
  element: (
    <Suspense fallback={<p>test route fallback</p>}>{route.element}</Suspense>
  ),
}))

const suspendedRouteArray = routeArray.map((route) => ({
  path: route.path,
  element: <Suspense fallback={route.fallback}>{route.element}</Suspense>,
}))

const router = createBrowserRouter([
  ...suspendedTestRouteArray,
  {
    element: <Layout />,
    children: [
      ...suspendedRouteArray,
      { path: '*', element: <GlobalNotFoundPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
