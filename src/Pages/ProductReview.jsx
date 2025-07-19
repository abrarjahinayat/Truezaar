import React, { useState } from "react";
import productReview from "../assets/images/productreview.png";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const ProductReview = () => {
  const [rating, setRating] = useState(0);
  const [recommendation, setRecommendation] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <section className="py-6 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="pb-10">
          {/* Product Image */}
          <div className="mb-6 lg:mb-8">
            <img 
              src={productReview} 
              alt="Product Review" 
              className="w-full max-w-md lg:max-w-none mx-auto lg:mx-0 rounded-lg"
            />
          </div>

          {/* Form Container */}
          <div className="space-y-6 lg:space-y-8">
            
            {/* Product Name Field */}
            <div>
              <h3 className="font-inria text-font-color text-lg lg:text-2xl font-light mb-3">
                Product Name & Model<sup className="text-red-600">*</sup>
              </h3>
              <input
                type="text"
                id="product-name"
                className="block w-full lg:w-[380px] py-3 lg:py-4 px-4 lg:px-8 text-sm lg:text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF] placeholder:text-base lg:placeholder:text-xl placeholder:font-bold placeholder:font-inria placeholder:text-font-color/30"
                placeholder="Product name..."
                required
              />
            </div>

            {/* Price Field */}
            <div>
              <h3 className="font-inria text-font-color text-lg lg:text-2xl font-light mb-3">
                Price<sup className="text-red-600">*</sup>
              </h3>
              <div className="relative w-full lg:w-[150px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaBangladeshiTakaSign className="text-lg lg:text-xl font-bold text-gray-900" />
                </div>
                <input
                  type="number"
                  className="block w-full lg:w-[150px] p-3 pl-10 text-sm lg:text-base text-font-color border border-black/60 rounded-lg bg-white focus:ring-2 focus:ring-navbar/50 focus:border-navbar transition-colors"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Rating Field */}
            <div>
              <h3 className="font-inria text-font-color text-lg lg:text-2xl font-light mb-3">
                Rate this product<sup className="text-red-600">*</sup>
              </h3>
              
              {/* Mobile Rating - Larger touch targets */}
              <div className="block lg:hidden">
                <div className="flex justify-start items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star} className="cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-rating"
                        value={star}
                        className="sr-only"
                        onChange={() => handleRatingChange(star)}
                      />
                      <svg
                        className={`w-8 h-8 transition-colors ${
                          star <= rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </label>
                  ))}
                </div>
              </div>

              {/* Desktop Rating - Original design */}
              <div className="hidden lg:block">
                <div className="flex flex-row-reverse justify-end items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <React.Fragment key={star}>
                      <input
                        id={`rating-${star}`}
                        type="radio"
                        className="peer mt-3 -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                        name="desktop-rating"
                        value={star}
                      />
                      <label
                        htmlFor={`rating-${star}`}
                        className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none"
                      >
                        <svg
                          className="shrink-0 size-5"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo Upload Field */}
            <div>
              <h3 className="font-inria text-font-color text-lg lg:text-2xl font-light mb-3">
                Add Photo<sup className="text-red-600">*</sup>
              </h3>
              <div className="w-full lg:w-[320px] p-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-2 text-sm lg:text-base text-font-color border border-black/60 rounded-lg bg-white">
                <label
                  htmlFor="uploadFile1"
                  className="flex bg-gray-800 hover:bg-gray-700 text-white text-sm lg:text-base font-medium px-3 lg:px-4 py-2 lg:py-2.5 outline-none rounded cursor-pointer transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 lg:w-6 mr-2 fill-white inline"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                    />
                    <path
                      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                    />
                  </svg>
                  Upload
                  <input type="file" id="uploadFile1" className="hidden" accept="image/*" />
                </label>
                <span className="font-inria text-font-color text-base lg:text-2xl font-light">
                  Select picture
                </span>
              </div>
            </div>

            {/* Review Text Field */}
            <div>
              <h3 className="font-inria text-font-color text-lg lg:text-2xl font-light mb-3">
                Write Your Review<sup className="text-red-600">*</sup>
              </h3>
              <textarea
                id="review-message"
                rows={4}
                className="block p-4 w-full text-sm lg:text-md text-font-color rounded-lg border border-black/60 focus:ring-2 focus:ring-navbar/50 focus:border-navbar transition-colors resize-none"
                placeholder="Write your review here..."
              />
            </div>

            {/* Recommendation Field */}
            <div>
              <h3 className="font-inria text-font-color text-lg lg:text-2xl font-light mb-3">
                Would you recommend this product?
              </h3>
              <fieldset>
                <legend className="sr-only">Recommendation</legend>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="recommend-yes"
                      type="radio"
                      name="recommendation"
                      value="yes"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-navbar text-navbar"
                      onChange={(e) => setRecommendation(e.target.value)}
                    />
                    <label
                      htmlFor="recommend-yes"
                      className="text-sm lg:text-base font-medium text-gray-900 ml-3 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="recommend-no"
                      type="radio"
                      name="recommendation"
                      value="no"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-navbar text-navbar"
                      onChange={(e) => setRecommendation(e.target.value)}
                    />
                    <label
                      htmlFor="recommend-no"
                      className="text-sm lg:text-base font-medium text-gray-900 ml-3 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="recommend-unsure"
                      type="radio"
                      name="recommendation"
                      value="unsure"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-navbar text-navbar"
                      onChange={(e) => setRecommendation(e.target.value)}
                    />
                    <label
                      htmlFor="recommend-unsure"
                      className="text-sm lg:text-base font-medium text-gray-900 ml-3 cursor-pointer"
                    >
                      I am not sure
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white block mt-8 lg:mt-12 mx-auto leading-6 lg:tracking-[2px] bg-navbar hover:bg-navbar/90 font-bold font-inter rounded-md text-base lg:text-xl px-6 py-3 lg:px-18 lg:py-5 transition-colors duration-200 w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductReview;