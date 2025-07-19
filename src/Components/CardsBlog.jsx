import React, { useState } from "react";
import Blog1 from "../assets/images/blog1.png";
import Blog2 from "../assets/images/blog2.png";
import Blog3 from "../assets/images/blog3.png";
import Blog4 from "../assets/images/blog4.png";
import { IoEyeOutline } from "react-icons/io5";

const CardsBlog = () => {
  const [showMore, setShowMore] = useState(false);

  const handleMore = () => {
    setShowMore(!showMore);
  };

  // Initial blog list
  const blogList = [
    { image: Blog1, views: "45k" },
    { image: Blog2, views: "35k" },
    { image: Blog3, views: "40k" },
    { image: Blog4, views: "50k" },
  ];

  // Duplicate blogs shown on "Show More"
  const extraBlogs = [
    { image: Blog1, views: "45k" },
    { image: Blog2, views: "35k" },
    { image: Blog3, views: "40k" },
    { image: Blog4, views: "50k" },
  ];

  return (
    <section className="bg-card-bg/30 pb-5 lg:py-7">
      <div className="container">
        {/* Blog Cards Grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mt-5">
          {[...blogList, ...(showMore ? extraBlogs : [])].map((blog, idx) => (
            <div
              key={idx}
              className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative m-1.5 overflow-hidden text-white rounded-md">
                <img
                  className="w-full h-[130px] object-cover"
                  src={blog.image}
                  alt="card"
                />
              </div>
              <div className="p-4">
                <p className="text-font-color/90 font-inter italic font-light text-sm lg:text-md">
                  Thoughtful, well-handled responses can turn an unhappy customer into a loyal one and show.
                </p>
              </div>
              <div className="px-4 flex items-center gap-x-2 pb-4">
                <IoEyeOutline className="text-xl lg:text-2xl" />
                <h6 className="font-inter font-normal text-sm lg:text-md">{blog.views}</h6>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <button
          onClick={handleMore}
          type="button"
          className="text-font-color block mt-6 mx-auto leading-6 cursor-pointer shadow-xl/40 tracking-[2px] bg-[#F5F5F5] font-normal font-inter rounded-md text-sm lg:text-xl px-6 lg:px-12 py-2 lg:py-4 transition-transform hover:scale-105"
        >
          {showMore ? "Show Less" : "More Review"}
        </button>
      </div>
    </section>
  );
};

export default CardsBlog;
