import React from "react";
// import mememan from "../assets/images/mememan.png";
import herobg from "../assets/images/herobg.jpg";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div id="hero">
      <div
        className="relative mx-auto h-[540px]  max-w-[1200px]  
         border-b border-gray-700 opacity-100 sm:h-[700px]"
      >
        <img
          className="-z-28 absolute h-full w-full object-left 
          sm:object-center"
          src={herobg}
          alt="bg"
        />
        <article
          className="relative z-10 px-10 py-20 sm:p-20
      "
        >
          <div className="flex w-[55%] flex-col gap-8 pt-20 transition-all ease-linear sm:ml-20 sm:w-[45%] sm:pt-36">
            {/* coin name */}
            <Fade top>
              <h2 className="text-left text-3xl font-bold text-gray-200 sm:text-5xl">
                $MUNY
              </h2>
            </Fade>

            {/* paragraph */}
            <Fade>
              <p className="text-md break-keep text-left font-semibold text-[#40d354] sm:mt-0 sm:text-xl">
                the most memeable memecoin in existence. The dogs and frogs have
                had their day, it’s time for MUNY to rule to MemeSeason.
              </p>
            </Fade>
            {/* social Links */}
            <div className="flex space-x-4">
              {/* discord button */}
              <Fade left>
                <div
                  className={`text-md flex cursor-pointer items-center space-x-2 
                  rounded-full bg-[#5865F2] p-3 text-white transition-all ease-linear hover:scale-110
                  hover:shadow-lg sm:rounded-md sm:p-2 sm:px-4 sm:text-lg`}
                >
                  <BsDiscord />
                  <p className="hidden sm:inline-flex">Join Discord</p>
                </div>
              </Fade>

              {/* Telegram button */}
              <Fade right>
                <div
                  className={`text-md flex cursor-pointer items-center 
                  space-x-2 rounded-full bg-[#30A3E6] p-3 text-white transition-all ease-linear hover:scale-110
         hover:shadow-lg sm:rounded-md sm:p-2 sm:px-4 sm:text-lg`}
                >
                  <FaTelegramPlane />
                  <p className="hidden sm:inline-flex">Join Telegram</p>
                </div>
              </Fade>
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
