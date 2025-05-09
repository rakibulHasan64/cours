import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Outlas from './layout/Outlas.jsx';
import AllHomeLayou from './layout/AllHomeLayou.jsx';
import ErrorPage from './componet/home/ErrorPage.jsx';
import Login from './page/login/Login.jsx';
import Regsiter from './page/regster/Regsiter.jsx';
import AuthProvider from './providaer/AuthProvider.jsx';
import AllAbout from './componet/about/AllAbout.jsx';
import OurCoruse from './componet/home/OurCoruse.jsx';
import OurSuccessStdunt from './componet/home/OurSuccessStdunt.jsx';
import AdminRoute from './layout/dasbord/AdminPrivet.jsx';
import DashBord from './layout/dasbord/DashBord.jsx';
import Home from './layout/dasbordlayout/Home.jsx';
import CourseDetails from './componet/home/CoursDetalis.jsx';
import PrivateRoute from './page/regster/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlas />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element:  <AllHomeLayou /> ,
      },
      {
        path: "/signup",
        element: <Login />
      },

      {
        path: "/signin",
        element: <Regsiter />
      },

      {

        path: "/about",
        element: <AllAbout />

      },

      {
        path: "/courses",
        element: <OurCoruse />
      },
      {
        path: "/success",
        element: <OurSuccessStdunt />
      },
      {
        path: "/courses/:id",
        element: <PrivateRoute>
          <CourseDetails />
        </PrivateRoute>,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:4000/phone/${params.id}`);  // Updated the endpoint here
          if (!res.ok) {
            throw new Error('Course not found');
          }
          return res.json();
        },
        hydrateFallbackElement: <h3>Loading...</h3>
      },
      
      

      {
        path: "/admin-dashboard",
        element: (
          <AdminRoute>
            <DashBord />
          </AdminRoute>
        )
      },

      {
        path: "/dasbordhome",
        element: <AdminRoute>
          <Home />
        </AdminRoute>
      },


    ]

  
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider >
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)






