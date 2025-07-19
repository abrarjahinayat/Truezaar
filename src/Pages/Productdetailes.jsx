import React from "react";
import Header from "../Components/Header";
import productdetailes from "../assets/images/productdetailes.png";
import { BsPersonCircle } from "react-icons/bs";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom"; // fixed import

const Productdetailes = () => {
  const navigate = useNavigate();

  return (
    <section>
      <Header />

      <div className="container px-4 lg:px-0">
        {/* Breadcrumb */}
        <div className="mt-4 text-sm text-gray-600">
          <nav>
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Products</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">QCY T13 Anc Earbuds</span>
          </nav>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Image */}
          <div className="w-full">
            <img
              src={productdetailes}
              alt="Product"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <button className="text-sm text-black bg-white py-1 px-6 border border-gray-400 rounded-2xl font-medium">
              Electronics
            </button>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Earbuds QCY T13 ANC
            </h1>

            <div className="text-xl md:text-3xl font-bold text-gray-900">
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
              <span className="text-lg font-semibold text-gray-900">5</span>
            </div>

            {/* Button */}
            <button
              onClick={() => navigate("/productreview")}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Write a review
            </button>
          </div>
        </div>

        {/* Product Review */}
        <h3 className="font-bold font-inter text-xl md:text-2xl py-6">
          Product Review
        </h3>

        {/* Review Card */}
        <div className="bg-white border border-gray-300 rounded-md p-4 space-y-3">
          <div className="flex items-center gap-3">
            <BsPersonCircle className="text-4xl" />
            <div>
              <h3 className="text-font-color text-lg font-bold">
                Mahbub Alam
              </h3>
              <h6 className="italic font-light text-gray-600 text-sm">
                Posted 3 days ago
              </h6>
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            আমি QCY T13 ANC এয়ারবাডসটি প্রায় দেড় বছর ধরে ব্যবহার করছি, এবং
            এখন আপনাদের সঙ্গে আমার বাস্তব অভিজ্ঞতা শেয়ার করতে চাই। প্রথমেই বলি,
            এই এয়ারবাডসের সাউন্ড কোয়ালিটি সত্যিই চমৎকার। বেস (bass) এবং ট্রেবল
            (treble) এর ব্যালেন্স এক কথায় পারফেক্ট। মিউজিক শোনার সময় প্রতিটি
            বিট ক্লিয়ার শোনা যায়। এমনকি ১.৫ বছর পরেও সাউন্ড কোয়ালিটিতে কোনো
            ধরনের পরিবর্তন বা ঘাটতি আমি অনুভব করিনি। ব্যাটারি ব্যাকআপ নিয়ে আমি
            একদমই হতাশ হইনি। একবার চার্জ দিলে সহজেই ৬-৭ ঘণ্টা পর্যন্ত চলেছে।
            চার্জিং কেসসহ মিলিয়ে পুরো দিন চালিয়ে নেওয়া যায়। এখনো ব্যাটারির
            পারফরম্যান্স তেমন কমেনি, যা দেড় বছরের ব্যবহারে বিরল। যারা বাজেটের
            মধ্যে ANC ফিচারসহ ভালো মানের একটি ইয়ারবাড খুঁজছেন, তাদের জন্য QCY
            T13 ANC নিঃসন্দেহে একটি দুর্দান্ত অপশন।
          </p>
        </div>
      </div>
    </section>
  );
};

export default Productdetailes;
