import React, { useState } from "react";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import { BsPersonCircle } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";


const Cards = () => {
 const [showmore, setshowmore] = useState(false)

const handlemore =()=>{
   setshowmore(!showmore)
}

  return (
    <section className=" bg-card-bg/30 pb-5 lg:py-7 ">
      <div className="container">
        <div className="lg:flex-row flex-wrap flex mt-5 justify-between " >
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img className="w-[200px] lg:w-full " src={card1} alt="card-image" />
          </div>
          <div className="p-4  ">
            <div className="flex items-center gap-x-2">
              <BsPersonCircle className="text-4xl  " />
              <div>
                <h3 className=" text-font-color text-xl font-inria font-bold">
                  Mahbub Alam
                </h3>
                <h6 className="italic font-light text-font-color/90 text-xs">
                  post on 3 days ago
                </h6>
              </div>
            </div>
            <h4 className="font-inter text-font-color  mt-4 text-md font-bold">
              MOXX MPod Airbud..
            </h4>
            <p className="text-font-color/90  font-inter italic font-light text-md ">
              This airbud is not good for long time use........
            </p>
          </div>
          <div className="px-4  flex items-center gap-x-1 pb-4 ">
            <h6 className="font-inter font-normal text-md">3.5/5</h6>
            <FaStar className="text-[#F0F005]" />
          </div>
        </div>   
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60 ">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img className="w-[200px] lg:w-full " src={card2} alt="card-image" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-x-2">
              <BsPersonCircle className="text-4xl" />
              <div>
                <h3 className=" text-font-color text-xl font-inria font-bold">
                 Tahmid Khan
                </h3>
                <h6 className="italic font-light text-font-color/90 text-xs">
                  post on 5 days ago
                </h6>
              </div>
            </div>
            <h4 className="font-inter text-font-color mt-4 text-md font-bold">
              QCY T13 PRO Airbud
            </h4>
            <p className="text-font-color/90  font-inter italic font-light text-md ">
          This airbud is  good for long time use........
            </p>
          </div>
          <div className="px-4 flex items-center gap-x-1 pb-4 ">
            <h6 className="font-inter font-normal text-md">4.5/5</h6>
            <FaStar className="text-[#F0F005]" />
          </div>
        </div> 
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img className="w-[200px] lg:w-full " src={card3} alt="card-image" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-x-2">
              <BsPersonCircle className="text-4xl" />
              <div>
                <h3 className=" text-font-color text-xl font-inria font-bold">
                 Shohag Hossen
                </h3>
                <h6 className="italic font-light text-font-color/90 text-xs">
                  post on 1 mon ago
                </h6>
              </div>
            </div>
            <h4 className="font-inter text-font-color mt-4 text-md font-bold">
             K35 Dual Wireless M..
            </h4>
            <p className="text-font-color/90  font-inter italic font-light text-md ">
             This microphone is  good for long time use.
            </p>
          </div>
          <div className="px-4 flex items-center gap-x-1 pb-4 ">
            <h6 className="font-inter font-normal text-md">4.0/5</h6>
            <FaStar className="text-[#F0F005]" />
          </div>
        </div>
         <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img src={card4} alt="card-image" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-x-2">
              <BsPersonCircle className="text-4xl" />
              <div>
                <h3 className=" text-font-color text-xl font-inria font-bold">
                 Tanvir Hossain
                </h3>
                <h6 className="italic font-light text-font-color/90 text-xs">
                  post on 4 mon ago
                </h6>
              </div>
            </div>
            <h4 className="font-inter text-font-color mt-4 text-md font-bold">
             I Phone 20 Pro Max
            </h4>
            <p className="text-font-color/90  font-inter italic font-light text-md ">
           This airbud is not good in this price phone....
            </p>
          </div>
          <div className="px-4 flex items-center gap-x-1 pb-4 ">
            <h6 className="font-inter font-normal text-md">3.0/5</h6>
            <FaStar className="text-[#F0F005]" />
          </div>
        </div>


        </div>
            {
               showmore&& 
        <div className="lg:flex-row flex-wrap flex mt-5 justify-between " >
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img className="w-[200px] lg:w-full " src={card1} alt="card-image" />
          </div>
          <div className="p-4  ">
            <div className="flex items-center gap-x-2">
              <BsPersonCircle className="text-4xl  " />
              <div>
                <h3 className=" text-font-color text-xl font-inria font-bold">
                  Mahbub Alam
                </h3>
                <h6 className="italic font-light text-font-color/90 text-xs">
                  post on 3 days ago
                </h6>
              </div>
            </div>
            <h4 className="font-inter text-font-color  mt-4 text-md font-bold">
              MOXX MPod Airbud..
            </h4>
            <p className="text-font-color/90  font-inter italic font-light text-md ">
              This airbud is not good for long time use........
            </p>
          </div>
          <div className="px-4  flex items-center gap-x-1 pb-4 ">
            <h6 className="font-inter font-normal text-md">3.5/5</h6>
            <FaStar className="text-[#F0F005]" />
          </div>
        </div>   
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60 ">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img className="w-[200px] lg:w-full " src={card2} alt="card-image" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-x-2">
              <BsPersonCircle className="text-4xl" />
              <div>
                <h3 className=" text-font-color text-xl font-inria font-bold">
                 Tahmid Khan
                </h3>
                <h6 className="italic font-light text-font-color/90 text-xs">
                  post on 5 days ago
                </h6>
              </div>
            </div>
            <h4 className="font-inter text-font-color mt-4 text-md font-bold">
              QCY T13 PRO Airbud
            </h4>
            <p className="text-font-color/90  font-inter italic font-light text-md ">
          This airbud is  good for long time use........
            </p>
          </div>
          <div className="px-4 flex items-center gap-x-1 pb-4 ">
            <h6 className="font-inter font-normal text-md">4.5/5</h6>
            <FaStar className="text-[#F0F005]" />
          </div>
        </div> 
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img className="w-[200px] lg:w-full " src={card3} alt="card-image" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-x-2">
              <BsPersonCircle className="text-4xl" />
              <div>
                <h3 className=" text-font-color text-xl font-inria font-bold">
                 Shohag Hossen
                </h3>
                <h6 className="italic font-light text-font-color/90 text-xs">
                  post on 1 mon ago
                </h6>
              </div>
            </div>
            <h4 className="font-inter text-font-color mt-4 text-md font-bold">
             K35 Dual Wireless M..
            </h4>
            <p className="text-font-color/90  font-inter italic font-light text-md ">
             This microphone is  good for long time use.
            </p>
          </div>
          <div className="px-4 flex items-center gap-x-1 pb-4 ">
            <h6 className="font-inter font-normal text-md">4.0/5</h6>
            <FaStar className="text-[#F0F005]" />
          </div>
        </div>
         <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img src={card4} alt="card-image" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-x-2">
              <BsPersonCircle className="text-4xl" />
              <div>
                <h3 className=" text-font-color text-xl font-inria font-bold">
                 Tanvir Hossain
                </h3>
                <h6 className="italic font-light text-font-color/90 text-xs">
                  post on 4 mon ago
                </h6>
              </div>
            </div>
            <h4 className="font-inter text-font-color mt-4 text-md font-bold">
             I Phone 20 Pro Max
            </h4>
            <p className="text-font-color/90  font-inter italic font-light text-md ">
           This airbud is not good in this price phone....
            </p>
          </div>
          <div className="px-4 flex items-center gap-x-1 pb-4 ">
            <h6 className="font-inter font-normal text-md">3.0/5</h6>
            <FaStar className="text-[#F0F005]" />
          </div>
        </div>


        </div>
            }
          <button onClick={handlemore} type="button" class="text-font-color block relative -mt-10 mx-auto leading-6 cursor-pointer shadow-xl/40 tracking-[2px] bg-[#F5F5F5] font-normal font-inter rounded-md text-md lg:text-xl px-12 lg:px-18 py-3 lg:py-5 ">More Review</button>
      </div>
    </section>
  );
};

export default Cards;
