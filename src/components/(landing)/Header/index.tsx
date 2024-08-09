"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${sticky ? "backdrop-blur-md shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto flex items-center justify-between p-1">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/eachVerticalBlack.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
          </Link>
          <button
            onClick={navbarToggleHandler}
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="lg:hidden p-2 rounded-md focus:outline-none"
          >
            <span className={`block w-6 h-0.5 bg-black transition duration-300 ${navbarOpen ? "transform rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition duration-300 ${navbarOpen ? "opacity-0" : "my-1.5"}`} />
            <span className={`block w-6 h-0.5 bg-black transition duration-300 ${navbarOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`} />
          </button>
          <nav className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-300 ${navbarOpen ? "opacity-100 visible" : "opacity-0 invisible"} lg:static lg:bg-transparent lg:opacity-100 lg:visible lg:flex lg:items-center`}>
            <ul className="flex flex-col items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 lg:flex-row p-8 lg:p-0">
              {menuData.map((menuItem, index) => (
                <li key={menuItem.id} className="group relative">
                  {menuItem.path ? (
                    <Link href={menuItem.path} className="text-lg text-purple-800 lg:text-dark hover:opacity-70 transition duration-300">
                      {menuItem.title}
                    </Link>
                  ) : (
                    <>
                      <a
                        onClick={() => handleSubmenu(index)}
                        className="text-lg text-white lg:text-dark hover:opacity-70 transition duration-300 cursor-pointer"
                      >
                        {menuItem.title}
                        <svg className="inline-block ml-2" width="15" height="14" viewBox="0 0 15 14">
                          <path
                            d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 transition duration-300 ${openIndex === index ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                        {menuItem.submenu && menuItem.submenu.map((submenuItem) => (
                          <Link key={submenuItem.id} href={submenuItem.path} className="block py-2 px-4 text-dark hover:bg-gray-100 rounded">
                            {submenuItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/auth/login" className="py-2 px-4 text-base font-bold text-white hover:opacity-70 transition duration-300">
              Log In
            </Link>
            <Link href="/auth/signup" className="py-2 px-4 bg-gradient-to-r from-purple-300 to-primary text-white rounded hover:opacity-70 transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

