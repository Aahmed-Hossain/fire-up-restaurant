import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import AuthProviders from './provider/AuthProviders'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProviders>
    <RouterProvider router={routes}></RouterProvider>
    </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>,
)
