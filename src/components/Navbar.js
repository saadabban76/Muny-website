import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div className="mx-auto max-w-[1000px] justify-center p-5 px-6">
        {/* container */}
        <div className=" flex items-center justify-between space-x-4">
          {/* left  */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="MemeMan" className="h-14 w-12 " />
            <h1
              className="bold logo-gradient text-2xl sm:text-4xl 
            lg:text-5xl"
            >
              MUNY
            </h1>
          </div>
          {/* center */}
          <div
            className="flex items-center space-x-4 font-semibold 
          sm:text-xl"
          >
            <h2 className="text-white">Home</h2>
            <h2>what tf is Muny ?</h2>
            <h2>how to buy</h2>
            <h2>Roadmap</h2>
          </div>
          {/* right */}
          <div className="flex items-center">
            <button
              className="rounded-full border border-white px-4
             py-1 text-center font-bold text-white"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
