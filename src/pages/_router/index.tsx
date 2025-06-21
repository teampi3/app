import { createBrowserRouter } from 'react-router-dom'
import { DashboardPage } from '@/pages/dashboard'

export const router = createBrowserRouter([
  { path: '/app', element: <DashboardPage /> },
])
