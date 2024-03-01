import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import ProfilePage from './components/profile/ProfilePage'
import ErrorPage from './components/errors/ErrorPage'
import BookDetailPage from './components/book/BookDetailPage'
import SearchPage from './components/search/SearchPage'
import BorrowListPage from './components/borrows/BorrowListPage'
import CategoryMainPage from './components/categories/CategoryMainPage'
import CategorySubPage from './components/categories/CategorySubPage'
import OrderDetailPage from './components/order/OrderDetailPage'
import OrderListPage from './components/order/OrderListPage'

const router = createBrowserRouter([
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'home',
    element: <BorrowListPage/>
  },
  {
    path: 'signup',
    element: <SignupPage />
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        element: <ErrorPage />
      },
      {
        path: ':userid',
        element: <ProfilePage />
      }

    ]
  },
  {
    path: 'book',
    children: [
      {
        path: '',
        element: <ErrorPage />
      },
      {
        path: ':bookid',
        element: <BookDetailPage />
      },
    ]
  },
  {
    path: 'search',
    element: <SearchPage />
  },
  {
    path: 'category',
    children:[
      {
        path:'',
        element: <CategoryMainPage />,
      },
      {
        path:':catid',
        element: <CategorySubPage />
      }
    ]
  },
  {
    path: 'orders',
    children:[
      {
        path:'',
        element: <OrderListPage />,
      },
      {
        path:':orderid',
        element: <OrderDetailPage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
