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
import { Link } from "react-router";

const Header2 = () => {
  const [toggle, settoggle] = useState(false);
  const [profile, setprofile] = useState (false);
  const [showDropdown, setShowDropdown] = useState(false); // new state for hover menu

  const handlebar = () => {
    settoggle(!toggle);
  };

  const handleProfile= ()=>{
    setprofile(!profile)
  }

  return (
    <header>
      <nav className="bg-navbar/70">
        <div className="container">
          <div className="flex py-1.5  items-center justify-between">
            <div className="flex items-center gap-x-2 lg:gap-x-4">
              <img src={Logo} alt="logo" />
              <h2 className="font-inter lg:tracking-[3px] text-[#FFFFFF] lg:text-3xl font-light">
                TRUEZAAR
              </h2>
            </div>

            <FaBars onClick={handlebar} className="lg:hidden text-3xl" />

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

            {/* Profile Icon with Hover Dropdown */}
            <div className="hidden lg:block relative">
              <div
                className="inline-block cursor-pointer"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
             
              >
                <BsPersonCircle className="text-5xl" />

                {showDropdown && (
                  <div className="w-[300px] rounded-md py-10 pl-8 bg-[#F5F5F5] -right-10 mt-1 absolute z-50 shadow-lg">
                    <ul >
                      <li onClick={handleProfile} className="flex hover:bg-navbar/50 items-center gap-x-3">
                        <BsPersonCircle className="text-3xl" />
                        <span className="text-2xl font-inria font-bold text-font-color">Mahbub Alam</span>
                      </li>
                      <li className="flex hover:bg-navbar/50 items-center mt-2 gap-x-3">
                        <IoMdSettings className="text-3xl" />
                        <span className="text-2xl font-inria font-bold text-font-color">Settings and Privacy</span>
                      </li>
                      <li className="flex hover:bg-navbar/50 items-center mt-2 gap-x-3">
                        <FaQuestionCircle className="text-3xl" />
                        <span className="text-2xl font-inria font-bold text-font-color">Help and Support</span>
                      </li>
                      <li className="flex hover:bg-navbar/50 items-center mt-2 gap-x-3">
                        <LuLogOut className="text-3xl" />
                        <span className="text-2xl font-inria font-bold text-font-color">Log Out</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {toggle && (
            <div className="block absolute left-0 bg-navbar/80 w-full lg:hidden py-3 flex-col">
              <button className="text-white block mx-auto bg-navbar font-light font-inter rounded-md text-md px-9 py-3">
                Sign Up
              </button>
              <button className="text-white block mt-2 mx-auto bg-navbar font-light font-inter rounded-md text-md px-9 py-3">
                Login
              </button>

              <div className="block px-2 py-3">
                <form className="lg:w-[639px] w-full lg:mx-auto">
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
            </div>
          )}


            {
                profile &&
          <div className="w-120 py-20 p-5 z-1 border border-black/20 rounded-md shadow-md absolute left-200 mt-10 bg-white/95">
            <MdCloseFullscreen onClick={handleProfile} className="text-4xl absolute top-5 right-5 cursor-pointer text-red-500 " />
            <div className="px-5"  >
                <BsPersonCircle className="text-6xl " />
                <h3 className="font-inter py-2 font-medium text-font-color text-3xl" >Mahbub Alam  </h3>
            </div>
            <ul className="py-4 px-5" >
               <li className="flex  items-center gap-x-3" ><AiTwotoneMail className=" text-2xl w-10 h-10 bg-transparent rounded-full text-primary_white items-center flex justify-center " /> <span className="text-md font-light text-font-color font-inria bg-[#FFFFFF] rounded-md hover:bg-navbar/50 shadow-xs border border-black/10 py-2 px-2 w-60 " >alammahbub963@gmail.com</span> </li>     
               <li className="flex  items-center py-3 gap-x-3" ><IoMdCall  className=" text-xl w-10 h-10 bg-transparent  rounded-full text-primary_white items-center flex justify-center " /> <span className="text-md font-light hover:bg-navbar/50 text-font-color font-inria bg-[#FFFFFF] rounded-md shadow-xs border border-black/10 py-2 px-2 w-60 " >01600000001</span> </li>   
                 <Link to={"/totalreview"} className="flex items-center gap-x-3" ><RiHandCoinLine  className=" text-2xl w-10 h-10 bg-transparent  rounded-full text-primary_white items-center flex justify-center " /> <span className="text-md hover:bg-navbar/50  font-light text-font-color font-inria bg-[#FFFFFF] rounded-md shadow-xs border border-black/10 py-2 px-2 w-60 " >Total review  10</span> </Link>    
                  <li className="flex  items-center py-3 gap-x-3" ><ImBubbles4  className=" text-2xl w-10 h-10 bg-gray-200 rounded-full text-primary_white items-center flex justify-center " /> <span className="text-md hover:bg-navbar/50 font-light text-font-color font-inria bg-[#FFFFFF] rounded-md shadow-xs border border-black/10 py-2 px-2 w-60" >Pending review  02</span> </li> 
                  <li className="flex  items-center py-3 gap-x-3" ><HiOutlineUserGroup  className=" text-2xl w-10 h-10 bg-gray-200 rounded-full text-primary_white items-center flex justify-center " /> <span className="text-md font-light text-font-color font-inria bg-[#FFFFFF] hover:bg-navbar/50 rounded-md shadow-xs border border-black/10 py-2 px-2 w-60" >Reported review  00 </span> </li>
               
            </ul>
          </div>
            }

        </div>
      </nav>
    </header>
  );
};

export default Header2;
