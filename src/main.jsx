import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './componants/Shop/Shop.jsx';
import Home from './componants/Layout/Home.jsx';
import Orders from './componants/Orders/Orders.jsx';
import Inventory from './componants/Inventory/Inventory.jsx';
import Login from './componants/Login/Login.jsx';
import cartProductsLoadrer from './loader/cartProductsLoader.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/',
        element: <Shop/>
      },
      {
        path: 'shop',
        element: <Shop/>
      },
      {
        path: 'orders',
        element: <Orders/>,
        loader: cartProductsLoadrer
      },
      {
        path: 'inventory',
        element: <Inventory/>
      },
      {
        path: 'login',
        element: <Login/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
