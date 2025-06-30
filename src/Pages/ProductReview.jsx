import React from "react";
import productReview from "../assets/images/productreview.png";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
const ProductReview = () => {
  return (
    <section>
      <div className="container">
        <div className="pb-10">
          <img src={productReview} alt="" />
          <div>
            <div className="mt-8">
              <h3 className="font-inria text-font-color text-2xl font-light">
                Product Name & Model<sup className="text-red-600">*</sup>{" "}
              </h3>
              <input
                type="search"
                id="default-search"
                className="block w-[380px] py-4 px-8 lg:ps-3 text-base text-font-color border border-black/60 rounded-md bg-[#FFFFFF]  placeholder:text-xl placeholder:font-bold placeholder:font-inria placeholder:text-font-color/30  "
                placeholder="Product name..."
                required=""
              />
            </div>
            <div className="mt-5">
              <h3 className="font-inria text-font-color text-2xl font-light">
                Price<sup className="text-red-600">*</sup>{" "}
              </h3>
              <form>
                <div className="relative">
                  <div className="absolute inset-y-0 -left-3 flex items-center ps-5 pointer-events-none">
                    <FaBangladeshiTakaSign className="text-xl font-bold text-gray-900" />
                  </div>
                  <input
                    type="search"
                    className="block w-[150px] p-3 ps-8 text-base text-font-color border border-black/60 rounded-lg bg-white"
                  />
                </div>
              </form>
            </div>
            <div className="mt-5">
              <h3 className="font-inria text-font-color text-2xl font-light">
                Rate this product<sup className="text-red-600">*</sup>{" "}
              </h3>

              <div>
                {/* Rating */}
                <div className="flex flex-row-reverse justify-end items-center ">
                  <input
                    id="hs-ratings-readonly-1"
                    type="radio"
                    className="peer mt-3 -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    defaultValue={1}
                  />
                  <label
                    htmlFor="hs-ratings-readonly-1"
                    className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none"
                  >
                    <svg
                      className="shrink-0 size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-2"
                    type="radio"
                    className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    defaultValue={2}
                  />
                  <label
                    htmlFor="hs-ratings-readonly-2"
                    className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none"
                  >
                    <svg
                      className="shrink-0 size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-3"
                    type="radio"
                    className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    defaultValue={3}
                  />
                  <label
                    htmlFor="hs-ratings-readonly-3"
                    className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none"
                  >
                    <svg
                      className="shrink-0 size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-4"
                    type="radio"
                    className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    defaultValue={4}
                  />
                  <label
                    htmlFor="hs-ratings-readonly-4"
                    className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none"
                  >
                    <svg
                      className="shrink-0 size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </label>
                  <input
                    id="hs-ratings-readonly-5"
                    type="radio"
                    className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                    name="hs-ratings-readonly"
                    defaultValue={5}
                  />
                  <label
                    htmlFor="hs-ratings-readonly-5"
                    className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none"
                  >
                    <svg
                      className="shrink-0 size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </label>
                </div>
                {/* End Rating */}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="font-inria text-font-color text-2xl font-light">
                Add Photo<sup className="text-red-600">*</sup>{" "}
              </h3>
              <div className="w-[320px] p-3 flex items-center gap-x-2 ps-8 text-base text-font-color border border-black/60 rounded-lg bg-white">
                <label
                  htmlFor="uploadFile1"
                  className="flex bg-gray-800 mt-3 hover:bg-gray-700 text-white text-base font-medium px-4 py-2.5 outline-none rounded w-max cursor-pointer  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 mr-2 fill-white inline"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                      data-original="#000000"
                    />
                  </svg>
                  Upload
                  <input type="file" id="uploadFile1" className="hidden" />
                </label>
                <h3 className="font-inria text-font-color text-2xl font-light">
                  Select picture
                </h3>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="font-inria text-font-color text-2xl font-light">
                Write Your Review<sup className="text-red-600">*</sup>{" "}
              </h3>
              <>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-4 w-full text-md text-font-color  rounded-lg border "
                  placeholder="Write your review here..."
                />
              </>
            </div>

            <div className="mt-5">
              <h3 className="font-inria text-font-color text-2xl font-light">
                Would you recommend this product?
              </h3>
              <>
                {/* component */}
                {/* This is an example component */}
                <div className="mt-3">
                  <fieldset className="mb-5">
                    <legend className="sr-only">Countries</legend>
                    <div className="flex items-center mb-4">
                      <input
                        id="country-option-1"
                        type="radio"
                        name="countries"
                        defaultValue="USA"
                        className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
                        defaultChecked=""
                      />
                      <label
                        htmlFor="country-option-1"
                        className="text-sm font-medium text-gray-900 ml-2 block"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center mb-4">
                      <input
                        id="country-option-2"
                        type="radio"
                        name="countries"
                        defaultValue="Germany"
                        className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                        aria-labelledby="country-option-2"
                        aria-describedby="country-option-2"
                      />
                      <label
                        htmlFor="country-option-2"
                        className="text-sm font-medium text-gray-900 ml-2 block"
                      >
                        No
                      </label>
                    </div>
                    <div className="flex items-center mb-4">
                      <input
                        id="country-option-3"
                        type="radio"
                        name="countries"
                        defaultValue="Spain"
                        className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                        aria-labelledby="country-option-3"
                        aria-describedby="country-option-3"
                      />
                      <label
                        htmlFor="country-option-3"
                        className="text-sm font-medium text-gray-900 ml-2 block"
                      >
                        I am not sure
                      </label>
                    </div>
                  </fieldset>
                </div>
              </>
            </div>
          </div>
          <button
            type="button"
            class="text-white block mt-4 lg:mt-12 mx-auto leading-6 lg:tracking-[2px] bg-navbar font-bold font-inter rounded-md lg:text-xl px-5 py-2  lg:px-18 lg:py-5 "
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
