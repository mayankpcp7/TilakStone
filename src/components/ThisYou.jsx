import { ThisYouData } from "./common/Helper";
import bgTemple from "../assets/images/webp/thisYou/bgTemple.webp";
import { YelloCommonButton } from "./common/Button";
import Heading from "./common/Heading";

const ThisYou = () => {
  return (
    <div className="relative pt-10 md:pt-20">
      <img
        className="absolute w-[355px] h-[367px] md:max-w-[846px] md:h-[876px] -left-32 md:-left-2 md:top-48 lg:left-2 -z-10 top-20 lg:top-14"
        src={bgTemple}
        alt="backgroundTemple"
      />
      <div className="container max-w-[1164px] mx-auto sm:px-12 lg:px-3 pt-5 md:pt-10 lg:pt-5">
        <Heading commonHeading="Is this You ?" className="mb-10" />
        <div className="flex flex-row flex-wrap">
          {ThisYouData.map((thisYou, index) => {
            const hideOnSmallScreen =
              index >= ThisYouData.length - 3 ? "md:block hidden" : "";

            return (
              <div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 px-5 sm:px-[11px] lg:px-3 pb-[15px] md:pb-6 ${hideOnSmallScreen}`}
              >
                <div className="w-full relative z-30 gap-3 flex items-center bg-white group mx-auto md:mx-0 h-full xl:min-w-[364px] shadow-[0px_4px_16px_0px_#0000000F] hover:shadow-none py-5 md:py-[17px] lg:py-5 px-5 sm:px-6 md:px-4 duration-300 min-h-[117px] md:min-h-[129px] hover:bg-darkYellowPrimary border border-lightGreyPrimary hover:border-darkYellowSecondary rounded-2xl">
                  <img
                    className="w-[56px]  md:w-[64px] "
                    src={thisYou.emoji}
                    alt="Emojis"
                  />
                  <p className="font-plusJkarta font-bold text-base md:text-lg group-hover:text-white sm:max-w-[230px] !leading-lg text-lightBlack pb-0">
                    {thisYou.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-base  md:text-2xl  md:px-0 max-w-[694px] mx-auto text-black font-semibold !leading-lg mt-[25px] md:mt-4 mb-10 font-graphik">
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
