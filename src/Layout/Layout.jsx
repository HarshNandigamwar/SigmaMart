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
    console.log(`%c SigmaMart E-Commerce Store (v2.0.0)`, headerStyle);
    console.log(
      `%cDeveloped by: Shriharsh Nandigamwar`,
      "font-size: 16px; color: #F59E0B; font-weight: bold; margin-bottom: 15px;"
    );
    console.log(
      "%c--- Developer Features ---",
      "font-size: 16px; color: #374151; font-weight: bold; margin-top: 10px;"
    );
    // Core Features List
    console.log(
      `%c[AUTH]`,
      featureStyle,
      `Supports multiple logins: Firebase Email/Password and Google Login.`
    );
    console.log(
      `%c[STATE]`,
      featureStyle,
      `Core state (Add to Cart, Wishlist) persists across sessions using Firebase Firestore.`
    );
    console.log(
      `%c[UX/DESIGN]`,
      featureStyle,
      `Different product categories and an easy-to-use UI ensure smooth navigation.`
    );
    console.log(
      `%c[SEARCH]`,
      featureStyle,
      `Dynamic placeholder text rotates every 2 seconds to suggest categories.`
    );
    console.log(
      `%c[MEDIA]`,
      featureStyle,
      `Product images are served from Cloudinary for fast, optimized loading.`
    );
    console.log(
      `%c[INTERACTION]`,
      featureStyle,
      `Enter key press triggers search functionality.`
    );
    // Debug Message
    console.log("\n");
    console.log(
      `%c[DEBUG TIP]: If you encounter 'auth/invalid-api-key' error, check the 'VITE_FIREBASE_API_KEY' in your .env file and restart the server.`,
      infoStyle
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
