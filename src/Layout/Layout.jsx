import React from 'react'
import NavBar from '../Components/NavBar.jsx'
import Footer from '../Components/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <NavBar/>
      {/* <Outlet/> */}
      <Footer/>
    </>
  )
}

export default Layout
