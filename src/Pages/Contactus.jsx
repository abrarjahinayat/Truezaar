import React from "react";
import { MdOutlineMail, MdCall, MdLocationPin } from "react-icons/md";

const Contactus = () => {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <div>
          <h2 className="font-inria text-2xl md:text-3xl text-center font-semibold text-font-color">
            Contact Us
          </h2>
          <p className="font-inter font-light mt-5 text-center text-font-color text-lg md:text-2xl">
            We would love to hear from you. Please reach out to us using the
            form below.
          </p>

          <div className="w-full max-w-3xl border-gray-400 border-b-2 py-10 mx-auto">
            {/* Full Name */}
            <label className="block font-inria text-base md:text-xl text-font-color font-medium">
              Full Name
            </label>
            <input
              className="w-full px-3 mt-2 mb-5 py-3 border rounded-md text-font-color border-black/30"
              type="text"
              placeholder="Enter your name"
            />

            {/* Email */}
            <label className="block font-inria text-base md:text-xl text-font-color font-medium">
              Email Address
            </label>
            <input
              className="w-full px-3 mt-2 mb-5 py-3 border rounded-md text-font-color border-black/30"
              type="text"
              placeholder="Enter your email"
            />

            {/* Subject */}
            <label className="block font-inria text-base md:text-xl text-font-color font-medium">
              Subject
            </label>
            <input
              className="w-full px-3 mt-2 py-3 border rounded-md text-font-color border-black/30"
              type="text"
              placeholder="Enter the subject"
            />

            {/* Message */}
            <label className="block font-inria mt-7 mb-3 text-base md:text-xl text-font-color font-medium">
              Message
            </label>
            <textarea
              rows={4}
              className="block p-4 w-full text-md text-font-color rounded-lg border border-black/30"
              placeholder="Write your message here..."
            />

            {/* Submit Button */}
            <button
              type="button"
              className="text-white block mt-6 md:mt-10 mx-auto bg-navbar font-bold font-inter rounded-md text-lg md:text-2xl px-6 py-3 md:px-10 md:py-4"
            >
              Send Message
            </button>
          </div>

          {/* Contact Info */}
          <div className="py-5">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-x-8 mt-6">
              <MdOutlineMail className="text-4xl md:text-5xl" />
              <p className="text-lg md:text-2xl text-center md:text-left font-inria font-medium text-[#0075FF]">
                support@truzar.com
              </p>
            </div>

            <div className="flex flex-col md:flex-row py-3 justify-center items-center gap-4 md:gap-x-8">
              <MdCall className="text-4xl md:text-5xl" />
              <p className="text-lg md:text-2xl text-center md:text-left font-inria font-medium text-[#0075FF]">
                +096 09600000001
              </p>
            </div>

            <div className="flex flex-col md:flex-row py-3 justify-center items-center gap-4 md:gap-x-8">
              <MdLocationPin className="text-4xl md:text-5xl" />
              <p className="text-lg md:text-2xl text-center md:text-left font-inria font-medium text-[#0075FF]">
                7/1 Khaejurtek, Nobinogor, Savar, Dhaka
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
