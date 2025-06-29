import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router";
const Header = () => {
  const [toggle, settoggle] = useState(false);
  const handlebar = () => {
    settoggle(!toggle);
  };
  return (
    <header>
      <nav className="bg-navbar/70">
        <div className="container">
          <div className="flex py-1.5  items-center justify-between">
            <img src={Logo} alt="logo" />

            <FaBars onClick={handlebar} className="lg:hidden text-3xl " />

            <div className="hidden lg:block">
              <form className="lg:w-[639px] lg:mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                    <CiSearch className="text-2xl font-bold text-gray-900 " />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3  ps-13 text-base text-font-color border border-black/60 rounded-lg bg-white  "
                    placeholder="find reviews of the product you need......"
                    required=""
                  />
                </div>
              </form>
            </div>

            <div className="hidden lg:block">
              <button
                type="button"
                class="text-white bg-navbar font-light font-inter rounded-md text-md px-9 py-3 "
              >
                Sign Up
              </button>
              <Link to={'/home2'}
                type="button"
                class="text-white bg-navbar font-light font-inter rounded-md ml-13  text-md px-9 py-3  "
              >
                Login
              </Link>
            </div>
          </div>
          {/* Responsive for mobile */}

          {
            toggle &&
                <div className="block absolute left-0 bg-navbar/80 w-full lg:hidden py-3 flex-col ">
              <button
                type="button"
                class="text-white block mx-auto bg-navbar font-light font-inter rounded-md text-md px-9 py-3 "
              >
                Sign Up
              </button>
              <button
                type="button"
                class="text-white block mt-2 mx-auto bg-navbar font-light font-inter rounded-md   text-md px-9 py-3  "
              >
                Login
              </button>

              <div className="block px-2 py-3 ">
              <form className="lg:w-[639px] w-full lg:mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                    <CiSearch className="text-2xl font-bold text-gray-900 " />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3  ps-13 text-base text-font-color border border-black/60 rounded-lg bg-white  "
                    placeholder="find reviews of the product you need......"
                    required=""
                  />
                </div>
              </form>
            </div>
            </div>
          }

        </div>
      </nav>
    </header>
  );
};

export default Header;
