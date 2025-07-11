import React, { useState } from 'react'

// icons import
import { HiMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
// 
import { Link } from 'react-router-dom';

const MobileNav = ({navItems, activeNav, setActiveNav}) => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden transition-all duration-300">
      <div
        className="hover:bg-gray-200/80 px-2 py-1 rounded-lg cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
              {isOpen ?
                  <RiCloseLine className="size-6" />
                  : <HiMenu className="size-6" />
        }
      </div>
      {isOpen && (
        <div className="w-screen fixed top-[5rem] left-0 h-full bg-white">
          <div className="relative">
            <div className="h-full border py-1 px-1 rounded-xl border-border space-y-3 flex flex-col items-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`${
                    activeNav === item.href
                      ? "bg-gradient font-bold text-white"
                      : "text-link"
                  } px-3 py-2 hover:bg-link-hover rounded-lg text-[15px]`}
                      onClick={() => {
                          setActiveNav(item.href)
                      setIsOpen(false)
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav