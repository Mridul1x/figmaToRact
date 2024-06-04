import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import TopNavbar from "../pages/Shared/TopNavbar";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <TopNavbar></TopNavbar>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
