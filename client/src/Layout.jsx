import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    
    <div className="bg-page min-h-screen flex flex-col h-[90rem] relative">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <div className="mx-auto">Footer</div>
    </div>
  );
};

export default Layout;
