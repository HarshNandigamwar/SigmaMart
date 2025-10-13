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

const Layout = () => {
  return (
    <>
      <NavBar />
      {/* <Home /> */}
      {/* <Categories/> */}
      {/* <CategoriesDetail/> */}
      {/* <ProductDetail /> */}
      <Footer />
    </>
  );
};

export default Layout;
