import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { AiTwotoneMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { RiHandCoinLine } from "react-icons/ri";
import { ImBubbles4 } from "react-icons/im";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdCloseFullscreen } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";

const Header2 = () => {
  const navigation = useNavigate()
  const auth = getAuth();
  const user = useSelector((state) => state.userLogin.value);
  console.log(user)
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("logout")
        navigation("/loginform");
      })
      .catch((error) => {
        alert(error);
      });
  }

  const handleMobileProfileClick = () => {
    setShowDropdown(!showDropdown);
  }

  const handleMobileSearchClick = () => {
    setShowMobileSearch(!showMobileSearch);
  }

  return (
    <header>
      <nav className="bg-navbar/70 relative">
        <div className="container">
          <div className="flex py-1.5 items-center justify-between">
            {/* Logo */}
            <Link to={"/home2"} className="flex items-center gap-x-2 lg:gap-x-4">
              <img src={Logo} alt="logo" className="w-12 h-12 lg:w-18 lg:h-18 rounded-full" />
              <h2 className="font-inter lg:tracking-[3px] text-[#FFFFFF] text-lg sm:text-xl lg:text-3xl font-light">
                TRUEZAAR
              </h2>
            </Link>

            {/* Mobile Icons */}
            <div className="flex lg:hidden items-center gap-x-3">
              <CiSearch 
                onClick={handleMobileSearchClick}
                className="text-3xl sm:text-4xl text-white cursor-pointer hover:text-gray-300 transition-colors" 
              />
              <BsPersonCircle 
                onClick={handleMobileProfileClick}
                className="text-3xl sm:text-4xl text-white cursor-pointer hover:text-gray-300 transition-colors" 
              />
            </div>

            {/* Search Bar for Large Screens */}
            <div className="hidden lg:block">
              <form className="lg:w-[639px] lg:mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                    <CiSearch className="text-2xl font-bold text-gray-900" />
                  </div>
                  <input
                    type="search"
                    className="block w-full p-3 ps-13 text-base text-font-color border border-black/60 rounded-lg bg-white"
                    placeholder="find reviews of the product you need......"
                    required=""
                  />
                </div>
              </form>
            </div>

            {/* Profile Icon with Hover Dropdown - Desktop Only */}
            <div className="hidden lg:block relative">
              <div
                className="inline-block cursor-pointer"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <BsPersonCircle className="text-5xl text-white" />

                {showDropdown && (
                  <div className="w-[300px] rounded-md py-10 pl-8 bg-[#F5F5F5] -right-10 mt-1 absolute z-50 shadow-lg">
                    <ul>
                      <li onClick={()=>{navigation('/profile')}} className="flex hover:bg-navbar/50 cursor-pointer items-center gap-x-3 p-2 rounded">
                        <BsPersonCircle className="text-3xl" />
                        <span className="text-2xl font-inria font-bold text-font-color">{user?.displayName}</span>
                      </li>
                      <li className="flex hover:bg-navbar/50 cursor-pointer items-center mt-2 gap-x-3 p-2 rounded">
                        <IoMdSettings className="text-3xl" />
                        <Link to={'/settingpage'} className="text-2xl font-inria font-bold text-font-color">Settings and Privacy</Link>
                      </li>
                      <li className="flex hover:bg-navbar/50 cursor-pointer items-center mt-2 gap-x-3 p-2 rounded">
                        <FaQuestionCircle className="text-3xl" />
                        <span className="text-2xl font-inria font-bold text-font-color">Help and Support</span>
                      </li>
                      <li className="flex hover:bg-red-500 cursor-pointer items-center mt-2 gap-x-3 p-2 rounded">
                        <LuLogOut className="text-3xl" />
                        <span onClick={handleLogout} className="text-2xl font-inria font-bold text-font-color">Log Out</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {showMobileSearch && (
            <div className="lg:hidden pb-3 px-2">
              <form className="w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <CiSearch className="text-xl font-bold text-gray-900" />
                  </div>
                  <input
                    type="search"
                    className="block w-full p-3 ps-10 text-sm text-font-color border border-black/60 rounded-lg bg-white placeholder:text-sm"
                    placeholder="find reviews of the product you need......"
                    required=""
                  />
                </div>
              </form>
            </div>
          )}

          {/* Mobile Dropdown Menu */}
          {showDropdown && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="w-full max-w-sm bg-[#F5F5F5] rounded-lg shadow-xl relative">
                {/* Close Button */}
                <button 
                  onClick={() => setShowDropdown(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition-colors"
                >
                  <MdCloseFullscreen className="text-2xl" />
                </button>

                {/* Dropdown Content */}
                <div className="p-6 pt-10">
                  <ul className="space-y-3">
                    <li 
                      onClick={() => {
                        navigation('/profile');
                        setShowDropdown(false);
                      }} 
                      className="flex hover:bg-navbar/50 cursor-pointer items-center gap-x-3 p-3 rounded-md transition-colors"
                    >
                      <BsPersonCircle className="text-2xl sm:text-3xl flex-shrink-0" />
                      <span className="text-lg sm:text-xl font-inria font-bold text-font-color truncate">
                        {user?.displayName || "Profile"}
                      </span>
                    </li>
                    
                    <li className="flex hover:bg-navbar/50 cursor-pointer items-center gap-x-3 p-3 rounded-md transition-colors">
                      <IoMdSettings className="text-2xl sm:text-3xl flex-shrink-0" />
                      <Link 
                        to={'/settingpage'} 
                        onClick={() => setShowDropdown(false)}
                        className="text-lg sm:text-xl font-inria font-bold text-font-color"
                      >
                        Settings and Privacy
                      </Link>
                    </li>
                    
                    <li className="flex hover:bg-navbar/50 cursor-pointer items-center gap-x-3 p-3 rounded-md transition-colors">
                      <FaQuestionCircle className="text-2xl sm:text-3xl flex-shrink-0" />
                      <span className="text-lg sm:text-xl font-inria font-bold text-font-color">
                        Help and Support
                      </span>
                    </li>
                    
                    <li 
                      onClick={() => {
                        handleLogout();
                        setShowDropdown(false);
                      }}
                      className="flex hover:bg-red-500 cursor-pointer items-center gap-x-3 p-3 rounded-md transition-colors border-t border-gray-300 mt-4 pt-4"
                    >
                      <LuLogOut className="text-2xl sm:text-3xl flex-shrink-0" />
                      <span className="text-lg sm:text-xl font-inria font-bold text-font-color">
                        Log Out
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header2;