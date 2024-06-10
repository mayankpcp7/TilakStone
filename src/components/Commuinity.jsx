import React from "react";
import Heading from "./common/Heading";
import {
  CommuinityList,
  CommuinityList2,
  CommuinityList3,
} from "./common/Helper";

const Commuinity = () => {
  return (
    <div className="max-w-[1180px] mx-auto px-5 pt-[140px]">
      <Heading commonHeading="Our Online Community" />
      <div className="flex gap-6 mt-20 max-h-[722px] overflow-y-hidden justify-center">
        <div className="flex flex-col partners_slider_track gap-6 max-w-[364px]">
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
        <div className="sm:block hidden max-w-[364px]">
          <div className="flex flex-col gap-6">
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
        <div className="lg:block hidden max-w-[364px]">
          <div className="flex flex-col gap-6">
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