import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LogIn from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import store from "./store/store";
import {Provider} from "react-redux";
import Accounts from "./dashboard/accounts/Accounts";
import Transactions from "./dashboard/transactions/Transactions";
import Category from "./dashboard/category/Category";
import ProtectedRoute, {ProtectedRouteProps} from "./login/ProtectedRoute";

const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    authenticationPath: '/login',
};

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Dashboard />} />,
        children: [
            {
                path: "accounts",
                element: <Accounts />,
                index: true
            },
            {
                path: "transactions",
                element: <Transactions />,
                index: true
            },
            {
                path: "categories",
                element: <Category />,
                index: true
            }
        ]
    },
    {
        path: "/login",
        element: <LogIn />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/app",
        element: <App />,
        // errorElement: <ErrorPage />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
