import React from "react";
import face from "../assets/images/panicman.png";

const About = () => {
  return (
    <div
      className="mx-auto h-full max-w-[1200px] 
    p-10"
    >
      {/* container */}
      <div className="flex flex-col-reverse items-center justify-between sm:flex-row">
        {/* image */}
        <div>
          <img
            className="mt-12 h-[230px] w-[220px] sm:mt-0 sm:h-[270px] sm:w-[270px]"
            src={face}
            alt="mememan"
          />
        </div>
        {/* about details */}
        <div className="flex flex-col gap-10 sm:w-[50%]">
          <h1 className="text-4xl font-bold sm:text-center sm:text-5xl">
            About
          </h1>
          <div className="flex flex-col space-y-4 text-lg">
            <p>
              Muny is tired of watching everyone play hot potato with the
              endless derivative Inu coins. The Inu’s have had their day. It’s
              time for the most recognizable meme in the world to take his reign
              as king of the memes.
            </p>
            <p>
              Muny is here to make memecoins great again. Launched stealth with
              no presale, zero taxes, LP burnt and contract renounced, $Muny is
              a coin for the people, forever. Fueled by pure memetic power, let
              $Muny show you the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
