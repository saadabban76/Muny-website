import React from "react";

const Htblocks = ({ src, title, description }) => {
  return (
    <div
      className="w-full bg-[#1c243b] 
    p-10 shadow-md shadow-gray-800 sm:px-14"
    >
    
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:space-x-8">
        <img src={src} alt="wallet" className="" />
        <div className="flex flex-col gap-4 sm:space-x-4">
          <h2 className="text-center text-3xl font-bold sm:text-left">
            {title}
          </h2>
          <p className="text-md sm:text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Htblocks;
