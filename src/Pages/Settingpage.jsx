import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";

const Settingpage = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center justify-between ">
          <div className="w-fit p-3 border border-gray-500/50 flex items-center gap-x-2 ">
            <CgProfile className="text-6xl " />
            <p className="font-inria font-bold  w-[140px] text-font-color/70 text-xl">
              click to change profiile picture
            </p>
          </div>
          <div className="flex items-center   gap-x-2 lg:gap-x-3">
            <form className="w-[400px] ">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 lg:ps-5 pointer-events-none">
                  <CiSearch className="text-2xl font-bold text-gray-900 " />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full py-4 px-8 lg:ps-13 text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF]  "
                  placeholder="search settings"
                  required=""
                />
              </div>
            </form>
          </div>

          <LuSunMoon className="text-6xl" />
        </div>


        <div className="mt-20 ml-10 " >
            <form className="w-[350px] ">
            
              <div className="relative ">
          
                <input
                  type="search"
                  id="default-search"
                  className="block w-full py-4 px-8 lg:ps-3 text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF]  placeholder:text-xl placeholder:font-bold placeholder:font-inria placeholder:text-font-color/30  "
                  placeholder="Your Name"
                  required=""
                />
              </div>
            </form>
            <div>
            <h3 className="font-inria text-font-color mt-5 mb-5 font-bold text-2xl" >Change password</h3>

                   <input
                  type="search"
                  id="default-search"
                  className="block w-[350px] py-4 px-8 lg:ps-3 mb-6 text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF]  placeholder:text-xl placeholder:font-bold placeholder:font-inria placeholder:text-font-color/30  "
                  placeholder="old password"
                  required=""
                />     
                  <input
                  type="search"
                  id="default-search"
                  className="block w-[350px] py-4 px-8 lg:ps-3 mb-6 text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF] placeholder:text-xl placeholder:font-bold placeholder:font-inria placeholder:text-font-color/30   "
                  placeholder="new password"
                  required=""
                />     
                  <input
                  type="search"
                  id="default-search"
                  className="block w-[350px] py-4 px-8 lg:ps-3 text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF]  placeholder:text-xl placeholder:font-bold placeholder:font-inria placeholder:text-font-color/30  "
                  placeholder="confirm password"
                  required=""
                />
                
                
            <button type="button" class="text-white mt-4 lg:mt-12  leading-6 lg:tracking-[2px] bg-navbar font-bold font-inter rounded-md lg:text-md px-5 py-2  lg:px-9 lg:py-5 ">Delete Review</button>
            </div>
            
            <button type="button" class="text-white block mt-4 lg:mt-12 mx-auto leading-6 lg:tracking-[2px] bg-navbar font-bold font-inter rounded-md lg:text-xl px-5 py-2  lg:px-12 lg:py-5 ">Save and apply</button>
        </div>
      </div>
    </section>
  );
};

export default Settingpage;
