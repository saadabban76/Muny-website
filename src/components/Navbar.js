import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="shadow-md">
      <div className="relative mx-auto max-w-[1600px] justify-center p-5 px-6">
        {/* container */}
        <div className="flex w-full items-center justify-between space-x-4">
          {/* left  */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="MemeMan" className="h-16 w-14 object-cover" />
            <h1
              className="bold logo-gradient text-2xl sm:text-4xl 
            lg:text-5xl"
            >
              MUNY
            </h1>
          </div>
          {/* container for left and center for large screens*/}
          <div className="hidden space-x-4 md:flex lg:space-x-16">
            {/* center */}
            <div
              className="flex items-center space-x-4 justify-self-start font-semibold
               text-gray-300 sm:text-xl 
          lg:space-x-8"
            >
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <h2 className="cursor-pointer transition-all ease-linear hover:text-white">
                  Home
                </h2>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
              >
                <h2 className="cursor-pointer transition-all ease-linear hover:text-white">
                  what tf is Muny ?
                </h2>
              </Link>
              <Link
                to="howtobuy"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
              >
                <h2 className="cursor-pointer transition-all ease-linear hover:text-white">
                  how to buy
                </h2>
              </Link>
              <Link
                to="roadmap"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
              >
                <h2 className="cursor-pointer transition-all ease-linear hover:text-white">
                  Roadmap
                </h2>
              </Link>
            </div>

            {/* right */}
            <div className="flex items-center justify-self-end">
              <button
                className="rounded-full border border-white px-8 py-2 text-center font-bold text-white
             transition-all ease-linear hover:bg-[#39B54A] hover:text-gray-100"
              >
                Buy
              </button>
            </div>
          </div>
          {/*container for left and center for Small screens*/}
          <button
            className="block p-2 transition-all ease-linear md:hidden"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <IoMdClose size={"44"} />
            ) : (
              <HiOutlineMenuAlt3 size={"44"} />
            )}
          </button>
          <div
            className={`absolute right-5 top-24 z-20 w-[93%] flex-col space-x-16 rounded-md bg-primarybg p-10 transition-all ease-linear md:hidden ${
              menu ? "top-28 transition-all ease-linear" : "top-0 hidden"
            } `}
          >
            {/* center */}
            <div
              className="flex flex-col items-center space-y-8 justify-self-start
               text-2xl font-semibold 
                text-gray-300 transition-colors ease-linear"
            >
              <h2
                className="w-full cursor-pointer border-b border-gray-900
               pb-3 pr-5 text-right text-white hover:text-white"
              >
                Home
              </h2>
              <h2
                className="w-full cursor-pointer border-b border-gray-900 pb-3
               pr-5 text-right hover:text-white"
              >
                what tf is Muny ?
              </h2>
              <h2
                className="w-full cursor-pointer border-b border-gray-900 pb-3 pr-5
               text-right hover:text-white"
              >
                how to buy
              </h2>
              <h2
                className="w-full cursor-pointer border-b border-gray-900
               pb-3 pr-5 text-right hover:text-white"
              >
                Roadmap
              </h2>
            </div>

            {/* right */}
            <div className="flex w-full items-center justify-center">
              <button
                className="mx-auto mt-5 w-[60%] rounded-3xl border border-white py-2
             text-center font-bold text-white transition-all
             ease-linear hover:scale-105 hover:bg-[#39B54A]"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
