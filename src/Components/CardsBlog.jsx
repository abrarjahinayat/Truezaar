import React, { useState } from "react";
import Blog1 from '../assets/images/blog1.png'
import Blog2 from '../assets/images/blog2.png'
import Blog3 from '../assets/images/blog3.png'
import Blog4 from '../assets/images/blog4.png'
import { IoEyeOutline } from "react-icons/io5";



const CardsBlog = () => {
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
            <img className="w-[200px] lg:w-full " src={Blog1} alt="card-image" />
          </div>
          <div className="p-4  ">
           
          <p className="text-font-color/90  font-inter italic font-light text-md ">
              Thoughtful, well-handled responses can turn an unhappy customer into a loyal one and show .
            </p>
          </div>
           <div className="px-4 flex items-center gap-x-2 pb-4 ">
            <IoEyeOutline className="text-2xl" />
            <h6 className="font-inter font-normal text-md">45k</h6>
          </div>
        </div>   
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60 ">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img className="w-[200px] lg:w-full " src={Blog2} alt="card-image" />
          </div>
          <div className="p-4">
            <p className="text-font-color  font-inter  font-light text-md ">
         Thoughtful, well-handled responses can turn an unhappy customer into a loyal one and show .
            </p>
          </div>
           <div className="px-4 flex items-center gap-x-2 pb-4 ">
            <IoEyeOutline className="text-2xl" />
            <h6 className="font-inter font-normal text-md">35k</h6>
          </div>
        </div> 
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img className="w-[200px] lg:w-full " src={Blog3} alt="card-image" />
          </div>
          <div className="p-4">
          
           <p className="text-font-color/90  font-inter italic font-light text-md ">
              Thoughtful, well-handled responses can turn an unhappy customer into a loyal one and show .
            </p>
          </div>
             <div className="px-4 flex items-center gap-x-2 pb-4 ">
            <IoEyeOutline className="text-2xl" />
            <h6 className="font-inter font-normal text-md">40k</h6>
          </div>
        </div>
         <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img src={Blog4} alt="card-image" />
          </div>
          <div className="p-4">
         <p className="text-font-color/90  font-inter italic font-light text-md ">
             Thoughtful, well-handled responses can turn an unhappy customer into a loyal one and show .
            </p>
          </div>
          <div className="px-4 flex items-center gap-x-2 pb-4 ">
            <IoEyeOutline className="text-2xl" />
            <h6 className="font-inter font-normal text-md">50k</h6>
          </div>
        </div>


        </div>
            {
               showmore&& 
     <div className="lg:flex-row flex-wrap flex mt-5 justify-between " >
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img className="w-[200px] lg:w-full " src={Blog1} alt="card-image" />
          </div>
          <div className="p-4  ">
           
          <p className="text-font-color/90  font-inter italic font-light text-md ">
              Thoughtful, well-handled responses can turn an unhappy customer into a loyal one and show .
            </p>
          </div>
           <div className="px-4 flex items-center gap-x-2 pb-4 ">
            <IoEyeOutline className="text-2xl" />
            <h6 className="font-inter font-normal text-md">45k</h6>
          </div>
        </div>   
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60 ">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img className="w-[200px] lg:w-full " src={Blog2} alt="card-image" />
          </div>
          <div className="p-4">
            <p className="text-font-color  font-inter  font-light text-md ">
         Thoughtful, well-handled responses can turn an unhappy customer into a loyal one and show .
            </p>
          </div>
           <div className="px-4 flex items-center gap-x-2 pb-4 ">
            <IoEyeOutline className="text-2xl" />
            <h6 className="font-inter font-normal text-md">35k</h6>
          </div>
        </div> 
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img className="w-[200px] lg:w-full " src={Blog3} alt="card-image" />
          </div>
          <div className="p-4">
          
           <p className="text-font-color/90  font-inter italic font-light text-md ">
              Thoughtful, well-handled responses can turn an unhappy customer into a loyal one and show .
            </p>
          </div>
             <div className="px-4 flex items-center gap-x-2 pb-4 ">
            <IoEyeOutline className="text-2xl" />
            <h6 className="font-inter font-normal text-md">40k</h6>
          </div>
        </div>
         <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-50 lg:w-60">
          <div className="relative  m-1.5 overflow-hidden text-white rounded-md">
            <img src={Blog4} alt="card-image" />
          </div>
          <div className="p-4">
         <p className="text-font-color/90  font-inter italic font-light text-md ">
             Thoughtful, well-handled responses can turn an unhappy customer into a loyal one and show .
            </p>
          </div>
          <div className="px-4 flex items-center gap-x-2 pb-4 ">
            <IoEyeOutline className="text-2xl" />
            <h6 className="font-inter font-normal text-md">50k</h6>
          </div>
        </div>


        </div>
            }
          <button onClick={handlemore} type="button" class="text-font-color block relative -mt-10 mx-auto leading-6 cursor-pointer shadow-xl/40 tracking-[2px] bg-[#F5F5F5] font-normal font-inter rounded-md text-md lg:text-xl px-12 lg:px-18 py-3 lg:py-5 ">More Review</button>
      </div>
    </section>
  );
};

export default CardsBlog;
