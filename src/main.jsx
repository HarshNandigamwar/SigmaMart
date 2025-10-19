import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// importing Auth
import { AuthProvider } from "./Context/AuthProvider.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
// import from Context
import { CartProvider } from "./Context/CartProvider.jsx";
import { WishlistProvider } from "./Context/WishlistProvider.jsx";
// skeleton loader
import "react-loading-skeleton/dist/skeleton.css";
// Importing layout
import Layout from "./Layout/Layout.jsx";
// Import from sonner for notification
import { Toaster } from "sonner";
// import Pages
import Home from "./Pages/Home.jsx";
import Categories from "./Pages/Categories.jsx";
import CategoriesDetail from "./Pages/CategoriesDetail.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Cart from "./Pages/Cart.jsx";
import Order from "./Pages/Order.jsx";
import Wishlist from "./Pages/Wishlist.jsx";
import OrderHistory from "./Pages/OrderHistory";
import AboutUs from "./Pages/AboutUs.jsx";
import Login from "./Pages/Login.jsx";
import CreateAC from "./Pages/CreateAC.jsx";
import Profile from "./Pages/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Unprotected Routes: Anyone can see */}
      <Route path="" element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route
        path="categoriesdetail/:categorie"
        element={<CategoriesDetail />}
      />
      <Route path="productdetail/:id" element={<ProductDetail />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="login" element={<Login />} />
      <Route path="createac" element={<CreateAC />} />
      {/*  Protected Routes: Login Required */}
      <Route element={<ProtectedRoute />}>
        <Route path="cart" element={<Cart />} />
        <Route path="order/:id" element={<Order />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="orderhistory" element={<OrderHistory />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-center" richColors theme="dark" />
    <AuthProvider>
      <WishlistProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  </StrictMode>
);
