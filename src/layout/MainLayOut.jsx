import React from "react";
import { Outlet } from "react-router-dom";
import NavBer from "../pages/shared/NavBer";
import Footer from "../pages/shared/Footer";

const MainLayOut = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBer />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayOut;
