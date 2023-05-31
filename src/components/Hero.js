import React from "react";
import mememan from "../assets/images/mememan.png";

const Hero = () => {
  return (
    <div className="mx-auto max-w-[900px] p-28 px-6">
      {/* left */}
      <div className="flex flex-col-reverse justify-between sm:flex-row sm:items-center">
        <article
          className="flex 
      flex-col gap-4 sm:w-[49%]"
        >
          <h2 className="bold text-center text-3xl text-white sm:text-left sm:text-5xl">
            $MUNY
          </h2>
          <p className="mt-6 text-center text-xl sm:mt-0 sm:text-left sm:text-2xl">
            the most memeable memecoin in existence. The dogs and frogs have had
            their day, it’s time for MUNY to rule to MemeSeason.
          </p>
        </article>
        {/* right */}
        <div className="self-center">
          <img
            className="h-[230px] w-[220px] sm:h-[320px] sm:w-[300px]"
            src={mememan}
            alt="mememan"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
