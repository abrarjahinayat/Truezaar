import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";

const Settingpage = () => {
  return (
    <section className="py-5 sm:py-10">
      <div className="container px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0">
          {/* Profile Picture Section */}
          <div className="w-full lg:w-fit p-3 border border-gray-500/50 flex items-center gap-x-2 cursor-pointer hover:bg-gray-50 transition-colors">
            <CgProfile className="text-4xl sm:text-6xl flex-shrink-0" />
            <p className="font-inria font-bold text-sm sm:text-xl text-font-color/70 leading-tight">
              click to change profile picture
            </p>
          </div>

          {/* Search and Theme Toggle */}
          <div className="flex items-center gap-x-3 w-full lg:w-auto">
            {/* Search Form */}
            <form className="flex-1 lg:w-[300px] xl:w-[400px]">
              <label
                htmlFor="settings-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 lg:ps-5 pointer-events-none">
                  <CiSearch className="text-xl lg:text-2xl font-bold text-gray-900" />
                </div>
                <input
                  type="search"
                  id="settings-search"
                  className="block w-full py-2 sm:py-4 px-8 lg:ps-13 text-sm sm:text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF] placeholder:text-sm sm:placeholder:text-base"
                  placeholder="search settings"
                />
              </div>
            </form>

            {/* Theme Toggle */}
            <button className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-md transition-colors">
              <LuSunMoon className="text-4xl sm:text-6xl" />
            </button>
          </div>
        </div>

        {/* Settings Form Section */}
        <div className="mt-10 sm:mt-20 px-0 sm:ml-10">
          {/* Name Input */}
          <form className="w-full sm:w-[350px] mb-8">
            <div className="relative">
              <input
                type="text"
                id="user-name"
                className="block w-full py-3 sm:py-4 px-4 sm:px-8 lg:ps-3 text-sm sm:text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF] placeholder:text-base sm:placeholder:text-xl placeholder:font-bold placeholder:font-inria placeholder:text-font-color/30"
                placeholder="Your Name"
                required
              />
            </div>
          </form>

          {/* Change Password Section */}
          <div className="mb-8">
            <h3 className="font-inria text-font-color mt-5 mb-5 font-bold text-xl sm:text-2xl">
              Change password
            </h3>

            {/* Password Fields */}
            <div className="space-y-4 sm:space-y-6">
              <input
                type="password"
                className="block w-full sm:w-[350px] py-3 sm:py-4 px-4 sm:px-8 lg:ps-3 text-sm sm:text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF] placeholder:text-base sm:placeholder:text-xl placeholder:font-bold placeholder:font-inria placeholder:text-font-color/30"
                placeholder="old password"
                required
              />
              <input
                type="password"
                className="block w-full sm:w-[350px] py-3 sm:py-4 px-4 sm:px-8 lg:ps-3 text-sm sm:text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF] placeholder:text-base sm:placeholder:text-xl placeholder:font-bold placeholder:font-inria placeholder:text-font-color/30"
                placeholder="new password"
                required
              />
              <input
                type="password"
                className="block w-full sm:w-[350px] py-3 sm:py-4 px-4 sm:px-8 lg:ps-3 text-sm sm:text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF] placeholder:text-base sm:placeholder:text-xl placeholder:font-bold placeholder:font-inria placeholder:text-font-color/30"
                placeholder="confirm password"
                required
              />
            </div>

            {/* Delete Review Button */}
            <button 
              type="button" 
              className="text-white mt-4 sm:mt-6 lg:mt-12 leading-6 tracking-wide lg:tracking-[2px] bg-red-600 hover:bg-red-700 transition-colors font-bold font-inter rounded-md text-sm sm:text-base lg:text-md px-4 py-2 sm:px-5 sm:py-2 lg:px-9 lg:py-5"
            >
              Delete Review
            </button>
          </div>

          {/* Save Button */}
          <button 
            type="button" 
            className="text-white block mt-6 sm:mt-8 lg:mt-12 mx-auto w-full sm:w-auto leading-6 tracking-wide lg:tracking-[2px] bg-navbar hover:opacity-90 transition-opacity font-bold font-inter rounded-md text-base sm:text-lg lg:text-xl px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-5"
          >
            Save and apply
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settingpage;