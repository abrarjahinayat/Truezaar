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
import { MdCloseFullscreen, MdEdit } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const navigation = useNavigate();
  const user = useSelector((state) => state.userLogin.value);
  console.log(user);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 sm:py-10">
      <div className="container px-4 max-w-4xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-navbar to-blue-600 p-6 sm:p-8 text-white relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              {/* Profile Picture */}
              <div className="relative group">
                <BsPersonCircle className="text-8xl sm:text-9xl lg:text-10xl opacity-90 hover:opacity-100 transition-opacity" />
                <button className="absolute bottom-2 right-2 bg-white text-navbar p-2 rounded-full shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100">
                  <MdEdit className="text-sm" />
                </button>
              </div>

              {/* User Info */}
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-inter mb-2">
                  {user?.displayName || "Welcome User"}
                </h1>
                <p className="text-blue-100 text-sm sm:text-base">
                  Member since {new Date().getFullYear()}
                </p>
                <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    🌟 Verified Reviewer
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    📝 10 Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-inter">
              Contact Information
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Email */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <AiTwotoneMail className="text-2xl text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <p className="text-gray-800 truncate font-inria">
                    {user?.email || "email@example.com"}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <IoMdCall className="text-2xl text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600 font-medium">Phone</p>
                  <p className="text-gray-800 font-inria">+880 1600 000 001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Review Statistics */}
          <div className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 font-inter">
              Review Dashboard
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Total Reviews */}
              <Link 
                to="/totalreview"
                className="group p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:shadow-lg border border-green-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <RiHandCoinLine className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-700">10</p>
                    <p className="text-green-600 font-medium">Total Reviews</p>
                  </div>
                </div>
              </Link>

              {/* Pending Reviews */}
              <Link 
                to="/pendingreview"
                className="group p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl hover:from-yellow-100 hover:to-yellow-200 transition-all duration-300 hover:shadow-lg border border-yellow-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ImBubbles4 className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-700">02</p>
                    <p className="text-yellow-600 font-medium">Pending Reviews</p>
                  </div>
                </div>
              </Link>

              {/* Reported Reviews */}
              <div className="group p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 cursor-pointer hover:from-red-100 hover:to-red-200 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <HiOutlineUserGroup className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-700">00</p>
                    <p className="text-red-600 font-medium">Reported Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/settingpage"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-navbar text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <IoMdSettings className="text-lg" />
                  Settings
                </Link>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
                  <FaQuestionCircle className="text-lg" />
                  Help & Support
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                  📝 Write Review
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Section */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Achievements</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="font-bold text-purple-700">Top Reviewer</p>
                <p className="text-sm text-purple-600">This month</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-bold text-blue-700">5 Star Rating</p>
                <p className="text-sm text-blue-600">Average rating</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="text-2xl">👥</span>
              <div>
                <p className="font-bold text-green-700">Helpful Reviews</p>
                <p className="text-sm text-green-600">Community favorite</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <span className="text-2xl">🔥</span>
              <div>
                <p className="font-bold text-orange-700">Active Member</p>
                <p className="text-sm text-orange-600">Regular contributor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;