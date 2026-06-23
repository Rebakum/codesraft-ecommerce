import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import { ThemeProvider } from './Context/ThemeContext.jsx';
import { CartProvider } from './Cart/CartContext.jsx';
import { WishlistProvider } from './Wishlist/WishlistContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <RouterProvider router={router}/>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
