import React from "react";
import Header2 from "../Components/Header2";
import { Star } from "lucide-react";
import productdetailes from "../assets/images/productdetailes.png";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router";
const Productdetailes = () => {
    const navigate = useNavigate()
  return (
    <section>
      <Header2 />

      <div className="container">
        <div>
          <div className=" mt-5 bg-gray-50">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
              <nav className="text-sm text-gray-600">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span>Products</span>
                <span className="mx-2">/</span>
                <span className="text-gray-900">QCY T13 Anc Earbuds</span>
              </nav>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Image Area (Empty as requested) */}

                <img src={productdetailes} alt="" />

                {/* Right Side - Product Details */}
                <div className="space-y-6">
                  {/* Category */}
                  <button className="text-sm text-black bg-white py-1 px-8 border border-gray-500/30 rounded-2xl font-medium">
                    Electronics
                  </button>

                  {/* Product Name */}
                  <h1 className="text-3xl font-bold text-gray-900">
                    Earbuds QCY T13 ANC
                  </h1>

                  {/* Price */}
                  <div className="text-3xl font-bold text-gray-900">
                    ৳ 1,900
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      5
                    </span>
                  </div>

                  {/* Write Review Button */}
                  <button onClick={()=>navigate('/productreview')} className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold  py-3 px-20 rounded-lg transition-colors duration-200">
                    Write a review
                  </button>
                </div>
              </div>
            </div>
            <h3 className="font-bold font-inter text-2xl py-2">
              Product Review
            </h3>
          </div>
        </div>

        <div className="bg-white border border-gray-500/50 rounded-sm">
          <div className="flex items-center p-3 gap-x-2">
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
          <p className="px-4 py-3 h-80">
            আমি QCY T13 ANC এয়ারবাডসটি প্রায় দেড় বছর ধরে ব্যবহার করছি, এবং
            এখন আপনাদের সঙ্গে আমার বাস্তব অভিজ্ঞতা শেয়ার করতে চাই।প্রথমেই বলি,
            এই এয়ারবাডসের সাউন্ড কোয়ালিটি সত্যিই চমৎকার। বেস (bass) এবং ট্রেবল
            (treble) এর ব্যালেন্স এক কথায় পারফেক্ট। মিউজিক শোনার সময় প্রতিটি
            বিট ক্লিয়ার শোনা যায়। এমনকি ১.৫বছর পরেও সাউন্ড কোয়ালিটিতে কোনো
            ধরনের পরিবর্তন বা ঘাটতি আমি অনুভব করিনি। ব্যাটারি ব্যাকআপ নিয়ে আমি
            একদমই হতাশহইনি। একবার চার্জ দিলে সহজেই ৬-৭ ঘণ্টা পর্যন্ত চলেছে।
            চার্জিং কেসসহ মিলিয়ে পুরো দিন চালিয়ে নেওয়া যায়। এখনো ব্যাটারির
            পারফরম্যান্স তেমন কমেনি, যা দেড় বছরের ব্যবহারে বিরল। যারা বাজেটের
            মধ্যে ANC ফিচারসহ ভালো মানের একটি ইয়ারবাড খুঁজছেন, তাদের জন্য QCY
            T13 ANC নিঃসন্দেহে একটি দুর্দান্ত অপশন। দেড় বছর পরেও আগের মতোই
            পারফরম্যান্স পাওয়া সত্যিই প্রশংসার যোগ্য।
          </p>
        </div>
      </div>
    </section>
  );
};

export default Productdetailes;
