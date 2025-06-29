import React from 'react'
import card2 from "../assets/images/card2.png";
import { FaStar } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router';
import { BsPersonCircle } from 'react-icons/bs';
import { MdDeleteSweep } from 'react-icons/md';

const Pendingreview = () => {
  return (
    <section>
         <div className="container">
        <div className="flex border-b border-black/30 py-6 justify-between">
          <div className="flex items-center gap-x-5">
            <Link to={'/home2'}> <FaLongArrowAltLeft className="text-5xl" /></Link>
           
            <p className="font-inter text-font-color font-light text-2xl">
              profile/pending review
            </p>
          </div>

          <div className="flex items-center gap-x-6">
            <h2 className="font-inter text-font-color font-light text-2xl">
              Mahbub Alam
            </h2>
            <BsPersonCircle className="text-5xl" />
          </div>
        </div>

        <div className="lg:flex-row flex-wrap flex mt-5 gap-x-10 ">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
            <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
              <img
                className="w-[200px] lg:w-full "
                src={card2}
                alt="card-image"
              />
            </div>
            <div className="p-4  ">
              <div className="flex items-center gap-x-2">
              
                <div>
                  <h3 className=" text-font-color text-xl font-inria font-bold">
                   QCY T13 PRO Airbud
                  </h3>
                  <h6 className="italic font-light text-font-color/90 text-xs">
                    post on 3 days ago
                  </h6>
                </div>
              </div>
              <div className="flex items-center justify-center  mt-5 gap-x-20 ">
              
                  <FaEdit className="text-2xl" /> 
              
                <MdDeleteSweep className="text-4xl text-red-500" />
              </div>
            </div>
            <div className="px-4  flex items-center gap-x-1 pb-4 ">
              <h6 className="font-inter font-normal text-md">3.5/5</h6>
              <FaStar className="text-[#F0F005]" />
            </div>
          </div>
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60 ">
            <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
              <img
                className="w-[200px] lg:w-full "
                src={card2}
                alt="card-image"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-x-2">
             
                <div>
                  <h3 className=" text-font-color text-xl font-inria font-bold">
                    MOXX MPod Airbud..
                  </h3>
                  <h6 className="italic font-light text-font-color/90 text-xs">
                    post on 5 days ago
                  </h6>
                </div>
              </div>
                 <div className="flex items-center justify-center  mt-5 gap-x-20 ">
              
                  <FaEdit className="text-2xl" /> 
              
                <MdDeleteSweep className="text-4xl text-red-500" />
              </div>
            </div>
            <div className="px-4 flex items-center gap-x-1 pb-4 ">
              <h6 className="font-inter font-normal text-md">4.5/5</h6>
              <FaStar className="text-[#F0F005]" />
            </div>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Pendingreview