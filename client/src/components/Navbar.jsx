import React, { useEffect, useState } from "react";

import { Link, Navigate } from "react-router-dom";

import Logo from "./Logo";

// navItems
import { navItems } from "../constants/constant";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [activeNav, setActiveNav] = useState("/");

  return (
    <header
      className={`${
        isNavbarTransparent ? "bg-transparent" : "bg-bgprimary"
        } transition-all duration-300 py-4 relative`}>
    
      {/* Background element that will handle the blur effect */}
      <div className={`
        absolute inset-0 -z-10
         backdrop-blur-xs mx-auto w-[98%] md:max-w-7xl
        transition-all duration-300
        h-[calc(100%_-_1rem)] top-0 rounded-xl overflow-hidden
      `}></div>
    
      {/* now, just retain my streak */}
      <nav
        className={`mx-auto w-[98%] md:max-w-7xl flex justify-between items-center px-2 md:px-3 lg:px-10 py-2 rounded-2xl bg-[#fff] transition-all duration-300`}
      >
        {/* Left Side */}
        <Logo />

        {/* Middle Side */}
        <div className="lg:pr-5 hidden md:block">
          <div className="h-full border py-1 px-1 rounded-xl border-border space-x-1 flex items-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`${
                  item.href === window.location.pathname
                    ? "bg-gradient font-bold text-white"
                    : "text-link"
                } px-3 py-2 hover:bg-link-hover rounded-lg text-[15px]`}
                onClick={() => {
                  setActiveNav(item.href)
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex h-full border py-1 px-1 rounded-xl border-border space-x-1 items-center">
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

          {/* Mobile Nav */}
          <MobileNav
            navItems={navItems}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
