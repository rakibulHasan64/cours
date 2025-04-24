import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Outlas from './layout/Outlas.jsx';
import AllHomeLayou from './layout/AllHomeLayou.jsx';
import ErrorPage from './componet/home/ErrorPage.jsx';
import Login from './page/login/Login.jsx';
import Regsiter from './page/regster/Regsiter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlas />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllHomeLayou />
      },

      {
        path: "/signup",
        element: <Login />
      },

      {
        path: "/signin",
        element: <Regsiter />
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
