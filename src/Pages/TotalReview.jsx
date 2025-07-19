import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import { FaStar } from "react-icons/fa6";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const TotalReview = () => {
  const user = useSelector((state) => state.userLogin.value);

  return (
    <section>
      <div className="container px-4 sm:px-2">
        {/* Header */}
        <div className="flex md:flex-row border-b border-black/30 py-6 justify-between items-start md:items-center gap-y-4">
          <div className="flex items-center gap-x-3">
            <Link to={"/home2"}>
              <FaLongArrowAltLeft className="text-3xl sm:text-4xl" />
            </Link>
            <p className="font-inter text-font-color font-light text-sm sm:text-2xl">
              profile / total review
            </p>
          </div>

          <div className="flex items-center gap-x-2 lg:gap-x-4">
            <h2 className="font-inter text-font-color font-light text-sm sm:text-2xl">
              {user?.displayName}
            </h2>
            <BsPersonCircle className="text-3xl sm:text-5xl" />
          </div>
        </div>

        {/* Review Cards */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 mt-6">
          {[card1, card2, card3].map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-[300px] mx-auto"
            >
              <div className="m-1.5 overflow-hidden rounded-md">
                <img className="w-full h-auto" src={card} alt={`card-${index}`} />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-x-2">
                  <div>
                    <h3 className="text-font-color text-lg font-inria font-bold">
                      {index === 1 ? "MOXX MPod Airbud.." : "QCY T13 PRO Airbud"}
                    </h3>
                    <h6 className="italic font-light text-font-color/90 text-xs">
                      {index === 2 ? "post on 1 mon ago" : index === 1 ? "post on 5 days ago" : "post on 3 days ago"}
                    </h6>
                  </div>
                </div>

                <div className="flex justify-between items-center px-2 mt-4">
                  <span className="flex items-center gap-x-1">
                    <BiSolidLike className="text-xl" /> {index === 2 ? "2k" : index === 1 ? "1.5k" : "1k"}
                  </span>
                  <span className="flex items-center gap-x-1">
                    <BiSolidDislike className="text-xl" /> {index === 2 ? "50" : index === 1 ? "30" : "5"}
                  </span>
                  <MdDeleteSweep className="text-2xl text-red-500" />
                </div>
              </div>

              <div className="px-4 pb-4 flex items-center gap-x-1">
                <h6 className="font-inter font-normal text-md">
                  {index === 1 ? "4.5/5" : index === 2 ? "4.0/5" : "3.5/5"}
                </h6>
                <FaStar className="text-[#F0F005]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TotalReview;
