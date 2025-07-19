import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleBar = () => {
    setToggle(!toggle);
  };

  return (
    <header className="relative">
      <nav className="bg-navbar/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex py-3 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={Logo} alt="logo" className="w-12 h-12 lg:w-18 lg:h-18 rounded-full" />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={handleBar}
              className="lg:hidden text-white hover:text-gray-200 transition-colors duration-200 z-50 relative"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <FontAwesomeIcon 
                  icon={faBars}
                  className={`absolute inset-0 text-2xl transition-all duration-300 ${
                    toggle ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                />
                <FontAwesomeIcon 
                  icon={faTimes}
                  className={`absolute inset-0 text-2xl transition-all duration-300 ${
                    toggle ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} 
                />
              </div>
            </button>

            {/* Desktop Search */}
            <div className="hidden lg:block flex-1 max-w-2xl mx-8">
              <form>
                <label htmlFor="desktop-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FontAwesomeIcon icon={faSearch} className="text-xl text-gray-500" />
                  </div>
                  <input
                    type="search"
                    id="desktop-search"
                    className="block w-full py-3 pl-12 pr-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-navbar/50 focus:border-navbar transition-colors"
                    placeholder="Find reviews of the product you need..."
                  />
                </div>
              </form>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center  lg:space-x-12">
              <Link
                to="/signupform"
                className="text-white bg-navbar hover:bg-navbar/80 font-light font-inter rounded-md text-sm px-6 py-2.5 transition-colors duration-200"
              >
                Sign Up
              </Link>
              <Link
                to="/loginform"
                className="text-white bg-navbar hover:bg-navbar/80 font-light font-inter rounded-md text-sm px-6 py-2.5 transition-colors duration-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          toggle ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleBar}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-navbar/95 backdrop-blur-md z-45 transform transition-transform duration-300 ease-in-out ${
          toggle ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 pt-20 pb-6">
          {/* Mobile Search */}
          <div className="mb-6">
            <form>
              <label htmlFor="mobile-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <FontAwesomeIcon icon={faSearch} className="text-xl text-gray-500" />
                </div>
                <input
                  type="search"
                  id="mobile-search"
                  className="block w-full py-3 pl-12 pr-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-white/50 focus:border-white"
                  placeholder="Find reviews of the product you need..."
                />
              </div>
            </form>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-4">
            <Link
              to="/signupform"
              className="block w-full text-center text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm font-light font-inter rounded-md text-base py-3 transition-colors duration-200"
              onClick={handleBar}
            >
              Sign Up
            </Link>
            <Link
              to="/loginform"
              className="block w-full text-center text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm font-light font-inter rounded-md text-base py-3 transition-colors duration-200"
              onClick={handleBar}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;