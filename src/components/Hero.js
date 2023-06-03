import React from "react";
// import mememan from "../assets/images/mememan.png";
import herobg from "../assets/images/herobg.jpg";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div
        className="relative mx-auto h-[540px]  max-w-[1200px]  
         border-b border-gray-700 opacity-100 sm:h-[700px]"
      >
        <img
          className="-z-28 absolute h-full w-full object-contain 
          sm:object-center"
          src={herobg}
          alt="bg"
        />
        <article
          className="relative z-10 p-20
      "
        >
          <div className="ml-20 flex w-[45%] flex-col gap-8 pt-36">
            {/* coin name */}
            <h2 className="text-center text-3xl font-bold text-gray-200 sm:text-left sm:text-5xl">
              $MUNY
            </h2>
            {/* paragraph */}
            <p className="mt-6 text-center text-lg font-semibold text-[#40d354] sm:mt-0 sm:text-left sm:text-xl">
              the most memeable memecoin in existence. The dogs and frogs have
              had their day, it’s time for MUNY to rule to MemeSeason.
            </p>
            {/* social Links */}
            <div className="flex space-x-4">
              {/* discord button */}
              <div
                className={`text-md flex cursor-pointer items-center 
                  space-x-2 rounded-md bg-[#5865F2] p-2 px-4 text-white
                  transition-all ease-linear hover:scale-110 hover:shadow-lg sm:text-lg`}
              >
                <BsDiscord />
                <p className="">Join Discord</p>
              </div>
              {/* Telegram button */}
              <div
                className={`text-md flex cursor-pointer items-center 
                  space-x-2 rounded-md bg-[#30A3E6] p-2 px-4 text-white
         transition-all ease-linear hover:scale-110 hover:shadow-lg sm:text-lg`}
              >
                <FaTelegramPlane />
                <p className="">Join Telegram</p>
              </div>
            </div>
          </div>
          {/* right */}
          {/* <div className="self-center">
              <img
                className="h-[230px] w-[220px] sm:h-[380px] sm:w-[340px]"
                src={mememan}
                alt="mememan"
              />
            </div> */}
        </article>
      </div>
    </div>
  );
};

export default Hero;
