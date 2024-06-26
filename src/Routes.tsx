import { createBrowserRouter, Navigate } from "react-router-dom";

import BookDetailPage from "./components/book/BookDetailPage";
import BorrowListPage from "./components/borrows/BorrowListPage";
import CategoryMainPage from "./components/categories/CategoryMainPage";
import CategorySubPage from "./components/categories/CategorySubPage";
import ErrorPage from "./components/errors/ErrorPage";
import LoginPage from "./components/login/LoginPage";
import OrderDetailPage from "./components/order/OrderDetailPage";
import OrderListPage from "./components/order/OrderListPage";
import ProfilePage from "./components/profile/ProfilePage";
import SearchPage from "./components/search/SearchPage";
import SignupPage from "./components/signup/SignupPage";
import Cart from "./components/Cart/Cart";
import LibrarianLogin from "./components/librarian/login/LibrarianLogin";
import DeliverBookPage from "./components/librarian/deliverBook/DeliverBookPage";
import ReceiveBookPage from "./components/librarian/receiveBook/ReceiveBookPage";
import LibrarianSignUp from "./components/librarian/signup/LibrarianSignUp";

const Router = createBrowserRouter([
    {
        path: '',
        element: <Navigate to='/home/' replace />,
    },
    {
        path: 'login',
        element: <LoginPage />
    },
    {
        path: 'home',
        element: <BorrowListPage />
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
                element: <ProfilePage />
            }

        ]
    },
    {
        path: 'books',
        children: [
            {
                path: '',
                element: <ErrorPage />
            },
            {
                path: ':infoid',
                element: <BookDetailPage />
            },
        ]
    },
    {
        path: 'search',
        element: <SearchPage />
    },
    {
        path: 'categories',
        children: [
            {
                path: '',
                element: <CategoryMainPage />,
            },
            {
                path: ':catname',
                element: <CategorySubPage />
            }
        ]
    },
    {
        path: 'orders',
        children: [
            {
                path: '',
                element: <OrderListPage />,
            },
            {
                path: ':order_id',
                element: <OrderDetailPage />
            }
        ]
    },
    {
        path: 'cart',
        element: <Cart />

    },


    {
        path: 'librarian',
        children:[
            {
                path:"",
                element: <Navigate to= 'deliver' />

            },
            {
                path:'login',
                element: <LibrarianLogin />
            },
            {
                path:'signup',
                element: <LibrarianSignUp />
            },
            {
                path:'deliver',
                element:<DeliverBookPage/>

            },
            {
                path:'receive',
                element:<ReceiveBookPage/>
            }
        ]
    }
])

export default Router