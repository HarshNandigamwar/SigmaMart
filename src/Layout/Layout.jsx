// import from React
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
// import from components
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";

const Layout = () => {
  // Welcome message print on Console
  useEffect(() => {
    const headerStyle =
      "font-size: 24px; color: #4F46E5; font-weight: bold; padding: 10px 0;";
    const featureStyle = "font-size: 14px; color: #10B981; font-weight: bold;";
    const infoStyle = "font-size: 13px; color: #6B7280;";
    // Header Message and Developer Name
    console.log(`%c SigmaMart E-Commerce Store`, headerStyle);
    console.log(
      `%cDeveloped by: Shriharsh Nandigamwar`,
      "font-size: 16px; color: #F59E0B; font-weight: bold; margin-bottom: 15px;"
    );
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
