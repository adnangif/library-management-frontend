import { RouterProvider, createBrowserRouter } from "react-router-dom";

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


export default function App() {
    const router = createBrowserRouter([
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
            children: [
                {
                    path: '',
                    element: <CategoryMainPage />,
                },
                {
                    path: ':catid',
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
                    path: ':orderid',
                    element: <OrderDetailPage />
                }
            ]
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}