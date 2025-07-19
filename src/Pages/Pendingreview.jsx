import React from 'react';
import card2 from "../assets/images/card2.png";
import { FaStar, FaLongArrowAltLeft, FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

const Pendingreview = () => {
  const user = useSelector((state) => state.userLogin.value);

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex  sm:flex-row border-b border-black/30 py-6 justify-between gap-4">
          <div className="flex items-center gap-x-3">
            <Link to="/home2">
              <FaLongArrowAltLeft className="text-3xl sm:text-4xl" />
            </Link>
            <p className="font-inter text-font-color font-light text-sm sm:text-2xl">
              profile / pending review
            </p>
          </div>

          <div className="flex items-center gap-x-2 sm:gap-x-6">
            <h2 className="font-inter text-font-color font-light text-sm sm:text-2xl">
              {user?.displayName || "Guest"}
            </h2>
            <BsPersonCircle className="text-4xl sm:text-5xl" />
          </div>
        </div>

        {/* Review Cards */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-center mt-6">
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[320px] sm:max-w-[270px] flex flex-col bg-white shadow-md border border-slate-200 rounded-xl mx-auto hover:scale-105 transition-transform duration-300"
            >
              <div className="m-2 overflow-hidden rounded-md">
                <img
                  className="w-full object-cover rounded-md"
                  src={card2}
                  alt="card"
                />
              </div>
              <div className="px-4 pb-2">
                <h3 className="text-font-color text-lg font-inria font-bold mt-2">
                  {index === 0 ? "QCY T13 PRO Airbud" : "MOXX MPod Airbud.."}
                </h3>
                <h6 className="italic font-light text-font-color/90 text-xs mb-4">
                  post on {index === 0 ? "3 days ago" : "5 days ago"}
                </h6>

                <div className="flex items-center justify-center gap-16 mb-4">
                  <FaEdit className="text-xl text-blue-500 cursor-pointer" />
                  <MdDeleteSweep className="text-3xl text-red-500 cursor-pointer" />
                </div>

                <div className="flex items-center gap-x-2 pb-4">
                  <h6 className="font-inter font-normal text-sm">
                    {index === 0 ? "3.5/5" : "4.5/5"}
                  </h6>
                  <FaStar className="text-[#F0F005]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pendingreview;
