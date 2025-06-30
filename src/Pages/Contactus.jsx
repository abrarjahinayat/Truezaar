import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const Contactus = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div>
          <h2 className="font-inria text-3xl text-center font-semibold  text-font-color">
            Contact Us
          </h2>
          <p className="font-inter font-extralight mt-5 text-center text-font-color text-2xl">
            We would love to hear from you. Please reach out to us using the
            form below.
          </p>

          <div className=" w-[1000px] border-gray-400 border-b-2  py-10 mx-auto">
            <label
              className="block font-inria text-xl text-font-color font-medium"
              htmlFor=""
            >
              Full Name
            </label>
            <input
              className="w-full px-3 mt-2 mb-7 py-3 border rounded-md text-font-color border-black/30 "
              type="text"
              placeholder="Enter your name"
            />
            <label
              className="block font-inria text-xl text-font-color font-medium"
              htmlFor=""
            >
              Email Address
            </label>
            <input
              className="w-full px-3 mt-2 mb-7 py-3 border rounded-md text-font-color border-black/30 "
              type="text"
              placeholder="Enter your email"
            />
            <label
              className="block font-inria text-xl text-font-color font-medium"
              htmlFor=""
            >
              Subect
            </label>
            <input
              className="w-full px-3 mt-2 py-3 border rounded-md text-font-color border-black/30 "
              type="text"
              placeholder="Enter the subject"
            />

            <label
              className="block font-inria mt-7 mb-3 text-xl text-font-color font-medium"
              htmlFor=""
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-4 w-full text-md text-font-color  rounded-lg border "
              placeholder="Write your message here..."
            />
                  <button
            type="button"
            class="text-white block mt-4 lg:mt-12 mx-auto leading-6  bg-navbar font-bold font-inter rounded-md lg:text-2xl px-5 py-2  lg:px-18 lg:py-5 "
          >
           Send Message
          </button>
          
          </div>
          <div className="py-5">
                <div className="flex justify-center items-center gap-x-8">
                    <MdOutlineMail className="text-5xl" />
                    <p className="text-2xl w-[400px] font-inria font-medium text-[#0075FF]">support@truzar.com</p>
                </div> 
                 <div className="flex py-3 justify-center items-center gap-x-8">
                   <MdCall  className="text-5xl" />
                    <p className="text-2xl w-[400px] font-inria font-medium text-[#0075FF]">+096 09600000001</p>
                </div>
                <div className="flex py-3 justify-center items-center gap-x-8">
                   <MdLocationPin   className="text-5xl" />
                    <p className="text-2xl w-[400px]  font-inria font-medium text-[#0075FF]">+096 7/1  khaejurtek,Nobinogor,
Savar,Dhaka</p>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
