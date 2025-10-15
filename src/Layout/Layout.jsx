// import from React
import React from "react";
// import from components
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";
// import from pages
import Home from "../Pages/Home.jsx";
import Categories from "../Pages/Categories.jsx";
import CategoriesDetail from '../Pages/CategoriesDetail.jsx'
import ProductDetail from "../Pages/ProductDetail.jsx";
import Cart from "../Pages/Cart.jsx";
import Order from "../Pages/Order.jsx";
import Wishlist from "../Pages/Wishlist.jsx";
import OrderHistory from '../Pages/OrderHistory'
import AboutUs from "../Pages/AboutUs.jsx";
import Login from '../Pages/Login.jsx'
import CreateAC from '../Pages/CreateAC.jsx'
const Layout = () => {
  return (
    <>
      <NavBar />
      {/* <Login/> */}
      {/* <CreateAC/> */}
      {/* <Home /> */}
      {/* <Categories/> */}
      {/* <CategoriesDetail/> */}
      {/* <ProductDetail /> */}
      {/* <Cart/> */}
      {/* <Order/> */}
      {/* <Wishlist/> */}
      {/* <OrderHistory/> */}
      {/* <AboutUs/> */}
      <Footer />
    </>
  );
};

export default Layout;
