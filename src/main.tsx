import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import testRouteArray from './testRoutes'
import { lazy, Suspense } from 'react'
import NotFoundPage from './pages/errors/NotFoundPage'
import Layout from './pages/layout/Layout'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './lib/tanstackQueryClient'
import LectureSkeleton from './components/lecture/LectureSkeleton'

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
    fallback: <p>나중에 스켈레톤 넣을 자리</p>,
  },
  {
    path: '/recruit/write/:recruitId',
    element: <RecruitEditPage />,
    fallback: <p>나중에 스켈레톤 넣을 자리</p>,
  },
  {
    path: '/recruit/write',
    element: <RecruitWritePage />,
    fallback: <p>나중에 스켈레톤 넣을 자리</p>,
  },
  {
    path: '/recruit/manage',
    element: <RecruitManagePage />,
    fallback: <p>나중에 스켈레톤 넣을 자리</p>,
  },
  {
    path: '/recruit/:recruitId',
    element: <RecruitDetailPage />,
    fallback: <p>나중에 스켈레톤 넣을 자리</p>,
  },
  {
    path: '/lecture',
    element: <LecturePage />,
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
  { element: <Layout />, children: suspendedRouteArray },
  { path: '*', element: <NotFoundPage /> },
])

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
