
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

import Dashboard from "../pages/Dashboard/Dashboard";
import UserHome from "../pages/Dashboard/UserPages/UserHome";

import BillingInfo from "../pages/BillingInfo/BillingInfo";
import ContactPage from "../pages/ContactPage/contactPage";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import WishList from "../pages/WishList/WishList";
import Error from "../pages/Error/Error";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";






const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error></Error>,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/wishList",
        element: <WishList />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: '/login',
        element: <LogIn/>

      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: "/billing-info",
        element: <BillingInfo />
      },

      {
        path: "/contact-us",
        element: <ContactPage />,
      },

    ],

  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "user",
        element: <UserHome />,
      },
    ],
  },

]);
export default router;


