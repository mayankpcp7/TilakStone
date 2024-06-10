import React from "react";
import Heading from "./common/Heading";
import {
  CommuinityList,
  CommuinityList2,
  CommuinityList3,
} from "./common/Helper";

const Commuinity = () => {
  return (
    <div className="max-w-[1180px] mx-auto px-5 lg:pt-[140px] sm:pt-[123px] pt-[90px]">
      <Heading commonHeading="Our Online Community" />
      <div className="flex lg:gap-6 gap-5 sm:mt-20 mt-10 max-h-[722px] overflow-y-hidden justify-center">
        <div className="flex flex-col partners_slider_track lg:gap-6 gap-5 max-w-[364px]">
          {CommuinityList.map((obj, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[16px] border border-black border-opacity-[0.06] shadow-commuinityCard"
            >
              <div className="shadow-commuinityin rounded-xl">
                <img src={obj.image} alt={obj.alt} className="rounded-xl" />
              </div>
            </div>
          ))}
        </div>
        <div className="sm:block hidden max-w-[364px] partners_slider_track2">
          <div className="flex flex-col lg:gap-6 gap-5">
            {CommuinityList2.map((obj, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-[16px] border border-black border-opacity-[0.06] shadow-commuinityCard"
              >
                <div className="shadow-commuinityin rounded-xl">
                  <img src={obj.image} alt={obj.alt} className="rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:block hidden max-w-[364px] partners_slider_track">
          <div className="flex flex-col lg:gap-6 gap-5">
            {CommuinityList3.map((obj, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-[16px] border border-black border-opacity-[0.06] shadow-commuinityCard"
              >
                <div className="shadow-commuinityin rounded-xl">
                  <img src={obj.image} alt={obj.alt} className="rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commuinity;
