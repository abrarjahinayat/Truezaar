import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { FaInstagramSquare } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Footer = () => {
  return (
    <section className='bg-font-color/75' >
        <div className="container">
            <div className=' pt-10 lg:flex-row flex-col flex items-center ' >
                <div className='lg:w-1/3'>
                    <ul className='text-[#FFFFFF] lg:flex-col lg:gap-x-0 gap-x-5 flex-row flex  font-inter font-light text-md ' >
                        <li>Contuct us</li>
                        <li className='lg:mt-3' >About us</li>
                        <li className='lg:mt-3 mb-3' >Report review</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='lg:w-2/3'>
                   <ul className='flex justify-center lg:justify-start mt-5 lg:mt-0 gap-10'>
                    <li className="w-12 h-12 bg-gray-200 text-2xl rounded-full text-primary_white items-center flex justify-center  hover:bg-secondary_color" ><FaFacebook className='text-3xl'/></li>
                    <li className="w-12 h-12 bg-gray-200 text-2xl rounded-full text-primary_white items-center flex justify-center  hover:bg-secondary_color" ><GrLinkedin className='text-3xl' /></li>
                    <li className="w-12 h-12 bg-gray-200 text-2xl rounded-full text-primary_white items-center flex justify-center  hover:bg-secondary_color" ><FcGoogle className='text-3xl' /></li>
                    <li className="w-12 h-12 bg-gray-200 text-2xl rounded-full text-primary_white items-center flex justify-center  hover:bg-secondary_color" ><FaInstagramSquare className='text-3xl' /></li>
                   </ul>
                      <div className='flex items-center py-8  gap-x-2 lg:gap-x-3'>
                                 <form className="w-[300px] ">
                                   <label
                                     htmlFor="default-search"
                                     className="mb-2 text-sm font-medium text-gray-900 sr-only "
                                   >
                                     Search
                                   </label>
                                   <div className="relative ">
                                     <div className="absolute inset-y-0 start-0 flex items-center ps-2 lg:ps-5 pointer-events-none">
                                      <CiSearch className="text-2xl font-bold text-gray-900 "/>
                                     </div>
                                     <input
                                       type="search"
                                       id="default-search"
                                       className="block w-full p-3 px-8 lg:ps-13 text-base text-font-color border border-black/60 rounded-lg bg-card-bg  "
                                       placeholder="enter your email"
                                       required=""
                                     />
                                     
                                   </div>
                                 </form>
                                  <button type="button" class="text-font-color   bg-card-bg font-light font-inter rounded-md text-md px-4 lg:px-9  py-3 ">subscribe</button>
                               </div>
                </div>
            </div>
            <p className='font-inter font-normal pb-10 text-center text-md text-white'>© 2004-2025 TRUEZAAR-This website for share your ratting and review and experience</p>
        </div>
    </section>
  )
}

export default Footer