import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import testRouteArray from './testRoutes'
import { lazy, Suspense } from 'react'
import NotFoundPage from './pages/errors/NotFoundPage'
import Layout from './pages/layout/Layout'

const RecruitListPage = lazy(() => import('./pages/recruit/RecruitListPage'))
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
    path: '/recruit/detail/:recruitId',
    element: <RecruitDetailPage />,
    fallback: <p>나중에 스켈레톤 넣을 자리</p>,
  },
  {
    path: '/lecture',
    element: <LecturePage />,
    fallback: <p>나중에 스켈레톤 넣을 자리</p>,
  },
]

const suspendedRouterArray = routeArray.map((route) => ({
  path: route.path,
  element: <Suspense fallback={route.fallback}>{route.element}</Suspense>,
}))

const router = createBrowserRouter([
  ...testRouteArray,
  { element: <Layout />, children: suspendedRouterArray },
  { path: '*', element: <NotFoundPage /> },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
