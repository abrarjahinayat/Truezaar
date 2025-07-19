import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import { BsPersonCircle } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

const Cards = () => {
  const [showmore, setshowmore] = useState(false);
  const navigate = useNavigate();

  const handlemore = () => {
    setshowmore(!showmore);
  };

  const handleCardClick = () => {
    navigate("/productdetailes");
  };

  const CardComponent = ({ image, name, timeAgo, title, description, rating }) => (
    <div 
      className="relative mt-5 flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      onClick={handleCardClick}
    >
      <div className="relative m-1.5 overflow-hidden text-white rounded-md">
        <img className="w-full h-32 sm:h-40 object-cover" src={image} alt="card-image" />
      </div>
      <div className="p-2 sm:p-4 flex-1">
        <div className="flex items-center gap-x-2">
          <BsPersonCircle className="text-2xl sm:text-4xl flex-shrink-0" />
          <div className="min-w-0">
            <h3 className="text-font-color text-sm sm:text-xl font-inria font-bold truncate">
              {name}
            </h3>
            <h6 className="italic font-light text-font-color/90 text-xs">
              post on {timeAgo}
            </h6>
          </div>
        </div>
        <h4 className="font-inter text-font-color mt-2 sm:mt-4 text-sm sm:text-md font-bold line-clamp-2">
          {title}
        </h4>
        <p className="text-font-color/90 font-inter italic font-light text-xs sm:text-md line-clamp-2">
          {description}
        </p>
      </div>
      <div className="px-2 sm:px-4 flex items-center gap-x-1 pb-2 sm:pb-4">
        <h6 className="font-inter font-normal text-sm sm:text-md">{rating}/5</h6>
        <FaStar className="text-[#F0F005]" />
      </div>
    </div>
  );

  const cardData = [
    {
      image: card1,
      name: "Mahbub Alam",
      timeAgo: "3 days ago",
      title: "MOXX MPod Airbud..",
      description: "This airbud is not good for long time use........",
      rating: "3.5"
    },
    {
      image: card2,
      name: "Tahmid Khan",
      timeAgo: "5 days ago",
      title: "QCY T13 PRO Airbud",
      description: "This airbud is good for long time use........",
      rating: "4.5"
    },
    {
      image: card3,
      name: "Shohag Hossen",
      timeAgo: "1 mon ago",
      title: "K35 Dual Wireless M..",
      description: "This microphone is good for long time use.",
      rating: "4.0"
    },
    {
      image: card4,
      name: "Tanvir Hossain",
      timeAgo: "4 mon ago",
      title: "I Phone 20 Pro Max",
      description: "This airbud is not good in this price phone....",
      rating: "3.0"
    }
  ];

  return (
    <section className="bg-card-bg/30 pb-5 lg:py-7">
      <div className="container px-4">
        {/* Initial 4 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-5">
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              image={card.image}
              name={card.name}
              timeAgo={card.timeAgo}
              title={card.title}
              description={card.description}
              rating={card.rating}
            />
          ))}
        </div>

        {/* Additional cards when "Show More" is clicked */}
        {showmore && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-3 sm:mt-5">
            {cardData.map((card, index) => (
              <CardComponent
                key={`more-${index}`}
                image={card.image}
                name={card.name}
                timeAgo={card.timeAgo}
                title={card.title}
                description={card.description}
                rating={card.rating}
              />
            ))}
          </div>
        )}

        <button
          onClick={handlemore}
          type="button"
          className="text-font-color block relative mt-6 sm:mt-8 lg:-mt-10 mx-auto leading-6 cursor-pointer shadow-xl/40 tracking-[2px] bg-[#F5F5F5] font-normal font-inter rounded-md text-sm sm:text-md lg:text-xl px-8 sm:px-12 lg:px-18 py-2 sm:py-3 lg:py-5 transition-all hover:bg-gray-200"
        >
          {showmore ? 'Show Less' : 'More Review'}
        </button>
      </div>
    </section>
  );
};

export default Cards;