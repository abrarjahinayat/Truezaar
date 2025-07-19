import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { FaInstagramSquare } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <section className='bg-font-color/75'>
      <div className="container px-4">
        <div className='pt-10 lg:flex-row flex-col flex items-center lg:items-start'>
          <div className='w-full lg:w-1/3 mb-6 lg:mb-0'>
            <ul className='text-[#FFFFFF] flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-5 lg:gap-3 font-inter font-light text-sm sm:text-md text-center sm:text-left lg:text-left justify-center sm:justify-start'>
              <Link to={"/contactus"} className="hover:text-gray-300 transition-colors">Contact us</Link>
              <Link to={"/aboutus"} className="hover:text-gray-300 transition-colors">About us</Link>
              <Link className="hover:text-gray-300 transition-colors">Report review</Link>
              <Link to={"/blog"} className="hover:text-gray-300 transition-colors">Blog</Link>
            </ul>
          </div>
          <div className='w-full lg:w-2/3'>
            <ul className='flex justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-10 mb-6 lg:mb-0'>
              <li className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 text-xl sm:text-2xl rounded-full text-primary_white items-center flex justify-center hover:bg-secondary_color transition-colors cursor-pointer">
                <FaFacebook className='text-2xl sm:text-3xl'/>
              </li>
              <li className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 text-xl sm:text-2xl rounded-full text-primary_white items-center flex justify-center hover:bg-secondary_color transition-colors cursor-pointer">
                <GrLinkedin className='text-2xl sm:text-3xl' />
              </li>
              <li className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 text-xl sm:text-2xl rounded-full text-primary_white items-center flex justify-center hover:bg-secondary_color transition-colors cursor-pointer">
                <FcGoogle className='text-2xl sm:text-3xl' />
              </li>
              <li className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 text-xl sm:text-2xl rounded-full text-primary_white items-center flex justify-center hover:bg-secondary_color transition-colors cursor-pointer">
                <FaInstagramSquare className='text-2xl sm:text-3xl' />
              </li>
            </ul>
            
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start py-6 lg:py-8 gap-3 sm:gap-2 lg:gap-3'>
              <form className="w-full sm:w-[250px] lg:w-[300px]">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-2 lg:ps-5 pointer-events-none">
                    <CiSearch className="text-xl sm:text-2xl font-bold text-gray-900"/>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2.5 sm:p-3 px-6 sm:px-8 lg:ps-13 text-sm sm:text-base text-font-color border border-black/60 rounded-lg bg-card-bg"
                    placeholder="enter your email"
                    required=""
                  />
                </div>
              </form>
              <button 
                type="button" 
                className="text-font-color bg-card-bg font-light font-inter rounded-md text-sm sm:text-md px-6 sm:px-4 lg:px-9 py-2.5 sm:py-3 w-full sm:w-auto hover:bg-gray-100 transition-colors"
              >
                subscribe
              </button>
            </div>
          </div>
        </div>
        <p className='font-inter font-normal pb-8 lg:pb-10 text-center text-xs sm:text-sm lg:text-md text-white px-2'>
          © 2004-2025 TRUEZAAR - This website for share your rating and review and experience
        </p>
      </div>
    </section>
  )
}

export default Footer