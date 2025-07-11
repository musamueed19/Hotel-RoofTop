import React, { useState } from "react";

import { Link, Navigate } from "react-router-dom";

import Logo from "./Logo";

// navItems
import { navItems } from "../constants/constant";

const Navbar = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  return (
    <header
      className={`${
        isNavbarTransparent ? "bg-transparent" : "bg-white"
      } pt-6 h-[5rem] transition-colors duration-300 overflow-hidden`}
    >
      <nav className="mx-auto container md:max-w-7xl flex justify-between items-center px-2 md:px-6 lg:px-10">
        {/* Left Side */}
        <div>
          <Logo />
        </div>

        {/* Middle Side */}
        <div className="pr-5 hidden md:block">
          <div className="h-full border py-1 px-1 rounded-xl border-border space-x-1 flex items-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-link px-3 py-2 hover:bg-link-hover rounded-lg text-[15px]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="h-full border py-1 px-1 rounded-xl border-border space-x-1 flex items-center">
            <Link
              to={"/login"}
              className="text-link px-3 py-2 hover:bg-link-hover rounded-lg text-[15px]"
            >
              Log In
            </Link>
            <Link
              to={"/signup"}
              className="relative px-3 py-2 bg-gradient rounded-lg text-[15px] text-white font-bold "
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
