import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="bg-bgprimary min-h-screen h-fit flex flex-col h-[90rem] relative">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="flex-grow">
        <div className="mx-auto md:max-w-8xl lg:max-w-[88rem] md:px-6 lg:px-10 my-2">
          <Outlet />
        </div>
      </div>
      <div className="mx-auto">Footer</div>
    </div>
  );
};

export default Layout;
