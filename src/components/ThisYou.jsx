import React from "react";
import { ThisYouData } from "./common/Helper";
import bgTemple from "../assets/images/webp/thisYou/bgTemple.webp";
import { YelloCommonButton } from "./common/Button";
import Heading from "./common/Heading";

const ThisYou = () => {
  return (
    <div className="relative pt-10 md:pt-20">
      <img
        className="absolute w-[355px] h-[367px] md:w-[846px] md:h-[876px] -left-32 sm:-left-10 -z-10 top-16 sm:top-3"
        src={bgTemple}
        alt="backgroundTemple"
      />
      <div className="container max-w-[1164px] mx-auto md:px-3 sm:px-[60px] lg:px-3 pt-5 md:pt-10 lg:pt-5">
        <Heading commonHeading="Is this You ?"  className="mb-10"/>
        <div className="flex flex-row flex-wrap">
          {ThisYouData.map((thisYou, index) => {
            const hideOnSmallScreen =
              index >= ThisYouData.length - 3 ? "md:block hidden" : "";

            const customClass = `custom-class-${index + 1}`;

            return (
              <div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 px-5 sm:px-3 pb-[15px] md:pb-6 ${hideOnSmallScreen}`}
              >
                <div className="w-f ull relative z-30 gap-3 flex items-center bg-white group mx-auto md:mx-0 h-full shadow-[0px_4px_16px_0px_#0000000F] py-5 px-6 duration-300 min-h-[117px] md:min-h-[130px] hover:bg-[#ecc744] border border-[#dedede] hover:border-[#bf9602] rounded-2xl">
                  <img
                    className="w-[56px]  md:w-[64px] "
                    src={thisYou.emoji}
                    alt="Emojis"
                  />
                  <p className="font-plusJkarta font-bold text-base md:text-lg group-hover:text-white max-w-[230px] leading-lg text-lightBlack pb-0">
                    {thisYou.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-base font-roboto md:text-2xl  md:px-0 max-w-[694px] mx-auto text-black font-semibold leading-lg mt-[25px] md:mt-[14px] mb-10 font-graphik">
          If you can relate to any of these, then we can help you
          <span className="text-darkYellow"> build the temple </span>
          of your Dreams
        </p>
        <YelloCommonButton text="Enquiry Now" />
      </div>
    </div>
  );
};

export default ThisYou;
