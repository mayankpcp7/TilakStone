import React, { useState } from "react";
import navLogo from "../assets/images/png/navLogo.png";
import { navData } from "./common/Helper";

const NavBar = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);
  if (navBarVisible) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <nav className=" relative">
      <div className="max-w-[1164px] mx-auto px-3">
        <div className="lg:px-[50px] p-2 sm:p-[15px] lg:py-[11px] border-tundora  border rounded-[84px] mt-5 flex justify-between items-center">
          <ul className="hidden lg:flex gap-5 lg:gap-10 items-center ">
            {navData.slice(0, 3).map((obj, i) => (
              <li key={i}>
                <a
                  className="font-plusJkarta block hover:text-gold duration-300 text-base leading-md font-normal text-black relative z-[1]  after:absolute after:w-0  after:h-[2px] after:left-[50%] after:bottom-[-2px] hover:after:left-0 hover:after:w-full after:bg-gold after:duration-300 after:z-[-1]"
                  href={obj.to}
                >
                  {obj.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="relative z-[51]">
            <img
              src={navLogo}
              alt="navLogo"
              className="w-[34px] sm:w-[50px] md:w-[60px] lg:w-[68px] h-[34px] sm:h-[50px] md:h-[60px] lg:h-[68px] relative z-"
            />
          </a>
          <ul
            className={`flex gap-5 lg:gap-10 items-center fixed lg:static  bg-white lg:bg-transparent w-full h-full lg:w-auto lg:h-auto flex-col lg:flex-row justify-center duration-300 z-50 left-0 ${navBarVisible ? "top-0" : "-top-full"
              } `}
          >
            {navData.map((obj, i) => (
              <li key={i} className={`${i < 3 && "lg:hidden"} `}>
                <a
                  onClick={() => setNavBarVisible(false)}
                  className="font-plusJkarta block hover:text-gold duration-300 text-base leading-md font-normal text-black relative z-[1]  after:absolute after:w-0  after:h-[2px] after:left-[50%] after:bottom-[-2px] hover:after:left-0 hover:after:w-full after:bg-gold after:duration-300 after:z-[-1]"
                  href={obj.to}
                >
                  {obj.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            aria-label="navshow-hide"
            onClick={() => setNavBarVisible(!navBarVisible)}
            className="lg:hidden relative z-50"
          >
            {navBarVisible ? (
              <div className="flex lg:hidden flex-col relative z-50 justify-between w-[25px]  h-[25px] sm:w-[45px] sm:h-[45px] p-[5.99px_3.39px] sm:p-[10.78px_6.09px] cursor-pointer">
                <span
                  className={`bg-black w-full max-w-[18px] rounded-md sm:max-w-8 h-[3px] sm:h-1 absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] transition-all ease-linear duration-300 ${navBarVisible && "rotate-45"
                    }`}
                ></span>
                <span
                  className={`bg-black w-full max-w-[18px] rounded-md sm:max-w-8 h-[3px] sm:h-1 absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]  transition-all ease-linear duration-300 ${navBarVisible && "-rotate-45"
                    } `}
                ></span>
              </div>
            ) : (
              <div className="flex lg:hidden flex-col z-50 justify-between w-[25px]  h-[25px] sm:w-[45px] sm:h-[45px] p-[5.99px_3.39px] sm:p-[10.78px_6.09px] cursor-pointer relative">
                <span className="bg-black rounded-md w-1/2 h-[3px] sm:h-1 relative z-50  transition-all ease-linear duration-300"></span>
                <span className="bg-black rounded-md w-full h-[3px] sm:h-1 relative z-50  transition-all ease-linear duration-300"></span>
                <span className="bg-black rounded-md w-1/2 h-[3px] sm:h-1 ms-auto relative z-50  transition-all ease-linear duration-300"></span>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
