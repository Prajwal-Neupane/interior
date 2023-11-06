import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 ">
      <nav
        className={` px-4 py-4 lg:px-14 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex items-center justify-between gap-8 text-base ">
          <div className="flex items-center">
            <img
              className="h-16 w-16"
              src="https://img.freepik.com/premium-vector/orange-green-beige-3d-dynamic-flying-letter-vector-illustration_95164-7083.jpg?w=740"
              alt=""
            />
            <h1 className="text-2xl font-semibold">Prajwal</h1>
          </div>
          <div>
            <ul className="md:flex hidden space-x-12">
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="block text-base duration-300 text-gray-600 hover:cursor-pointer hover:text-gray-900"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="/"
              className="hidden transition-all duration-300 lg:flex items-center text-green-900 font-semibold hover:text-gray-900"
            >
              Login
            </a>
            <button className="bg-green-800 text-white font-semibold rounded-md border-none py-2 px-4 transition-all duration-300 hover:bg-gray-900">
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              className="text-gray-800 focus:outline-none focus:text-gray-700"
            >
              {isMenu ? <RxCross1 className="h-6 w-6 " /> : <FaBars />}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden space-y-4 px-4 mt-16 py-7 bg-green-600 ${
            isMenu ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
