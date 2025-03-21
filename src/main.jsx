import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Dashboard from './components/Dashboard/Dashboard';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import Statistics from './components/Statistics/Statistics';
import Deal from './components/Deal/Deal';
import ErrorElement from './components/ErrorElement/ErrorElement';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/",
            element:<Cart></Cart>
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {
        path: "/deal",
        element: <Deal></Deal>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
