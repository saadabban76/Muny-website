import React from "react";
import mememan from "../assets/images/logo.png";

const About = () => {
  return (
    <div
      className="mx-auto h-full max-w-[1200px] 
    p-10"
    >
      {/* container */}
      <div className="flex flex-col items-center justify-between sm:flex-row">
        {/* image */}
        <div>
          <img
            className="h-[230px] w-[220px] sm:h-[270px] sm:w-[270px]"
            src={mememan}
            alt="mememan"
          />
        </div>
        {/* about details */}
        <div className="flex w-[50%] flex-col gap-6">
          <h1 className="text-center text-3xl font-bold sm:text-5xl">About</h1>
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
