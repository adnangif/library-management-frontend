import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import LoginPage from './components/login/LoginPage'
import HomePage from './components/home/HomePage'
import SignupPage from './components/signup/SignupPage'

const router = createBrowserRouter([
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/home',
    element:<HomePage/>
  },
  {
    path:'/signup',
    element:<SignupPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
