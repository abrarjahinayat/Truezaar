import React from "react";

const Aboutus = () => {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto max-w-screen-md">
        {/* Hero Section */}
        <div className="bg-[#B3DBE4] py-16 md:py-20">
          <h2 className="font-inter text-3xl md:text-6xl text-center font-medium text-font-color">
            ABOUT TRUEZAAR
          </h2>
        </div>

        {/* Content Section */}
        <div className="bg-[#F8F8F8] py-6 md:py-10">
          {/* About */}
          <div className="py-4">
            <h2 className="font-inter text-font-color text-xl md:text-2xl font-semibold">
              About Us
            </h2>
            <p className="font-inter mt-3 p-4 border border-black/50 font-medium text-base md:text-xl text-font-color rounded-md">
              Welcome to Truezaar.com – Bangladesh’s first trusted platform
              dedicated to long-term user-based product reviews. At Truezaar, we
              believe that honest, real-world experiences matter the most when
              it comes to making the right purchasing decisions.
            </p>
          </div>

          {/* Mission */}
          <div className="py-4">
            <h2 className="font-inter text-font-color text-xl md:text-2xl font-semibold">
              Our Mission
            </h2>
            <p className="font-inter mt-3 p-4 border border-black/50 font-medium text-base md:text-xl text-font-color rounded-md">
              Our mission is to empower consumers with authentic reviews shared
              by real users who have used a product over an extended period.
              This ensures that you get a clear and reliable understanding of
              how a product performs not just at first use, but over time.
            </p>
          </div>

          {/* Vision */}
          <div className="py-4">
            <h2 className="font-inter text-font-color text-xl md:text-2xl font-semibold">
              Our Vision
            </h2>
            <p className="font-inter mt-3 p-4 border border-black/50 font-medium text-base md:text-xl text-font-color rounded-md">
              We’re proud to build a community where anyone can confidently
              explore genuine product experiences before buying, and also
              contribute their own reviews after using a product – helping
              others make better, informed choices.
            </p>
          </div>

          {/* Join Us */}
          <div className="py-4">
            <h2 className="font-inter text-font-color text-xl md:text-2xl font-semibold">
              Join Us
            </h2>
            <p className="font-inter mt-3 p-4 border border-black/50 font-medium text-base md:text-xl text-font-color rounded-md">
              Join us in shaping a smarter and more transparent product review
              ecosystem, made for the people, by the people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
