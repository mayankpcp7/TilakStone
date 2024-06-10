import React from "react";
import Heading from "./common/Heading";
import elips from "../assets/images/webp/commuinity/commuinity-vector.webp";
import { CommuinityList, CommuinitySlidList } from "./common/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Commuinity = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} !w-2.5 !h-2.5 rounded-full !bg-darkYellow !opacity-30 block transition-all duration-300 ease-linear"></span>`;
    },
  };
  return (
    <div className="max-w-[1920px] mx-auto relative">
      <img
        src={elips}
        alt="commuinity-vector"
        className="left-0 bottom-[-10%] absolute lg:w-[139px] lg:h-[307px] sm:w-[91px] sm:h-[187px] w-[54px] h-[127px]"
      />
      <div className="max-w-[1180px] mx-auto px-5 lg:pt-[140px] sm:pt-[123px] pt-[90px]">
        <Heading commonHeading="Our Online Community" />
        <div className="sm:hidden block max-w-[364px] mx-auto mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            modules={[Pagination]}
            pagination={pagination}
            className=" !pb-11"
          >
            {CommuinitySlidList.map((obj, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-[16px] border border-black border-opacity-[0.06] min-h-[328px] flex justify-center items-center">
                  <div className="shadow-commuinityin rounded-xl h-full w-full">
                    <img
                      src={obj.image}
                      alt={obj.alt}
                      className="rounded-xl max-h-[280px] object-center object-cover w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="sm:block hidden">
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
                {CommuinityList.map((obj, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-[16px] border border-black border-opacity-[0.06] shadow-commuinityCard"
                  >
                    <div className="shadow-commuinityin rounded-xl">
                      <img
                        src={obj.image}
                        alt={obj.alt}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:block hidden max-w-[364px] partners_slider_track">
              <div className="flex flex-col lg:gap-6 gap-5">
                {CommuinityList.map((obj, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-[16px] border border-black border-opacity-[0.06] shadow-commuinityCard"
                  >
                    <div className="shadow-commuinityin rounded-xl">
                      <img
                        src={obj.image}
                        alt={obj.alt}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commuinity;
