// import from React
import React from "react";
import { Outlet } from "react-router-dom";
// import from components
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
