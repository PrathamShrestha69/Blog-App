import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
        <Navbar></Navbar>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
