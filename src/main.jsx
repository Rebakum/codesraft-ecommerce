import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import { ThemeProvider } from './Context/ThemeContext.jsx';
import { CartProvider } from './Cart/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
