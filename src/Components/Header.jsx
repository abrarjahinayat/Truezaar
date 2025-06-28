import React from "react";
import Logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <header>
      <nav className="bg-navbar/70" >
        <div className="container">
          <div className="flex py-1.5  items-center justify-between">
            
              <img src={Logo} alt="logo" />
           
            <div>
              <form className="w-[639px] mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                   <CiSearch className="text-2xl font-bold text-gray-900 "/>
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

            <div>
                <button type="button" class="text-white bg-navbar font-light font-inter rounded-md text-md px-9 py-3 ">Sign Up</button>
                <button type="button" class="text-white bg-navbar font-light font-inter rounded-md ml-13  text-md px-9 py-3  ">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
