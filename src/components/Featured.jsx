import React, { useRef } from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { featuredSlider } from "./common/Helper";
import Heading from "./common/Heading";
import temple from "../assets/images/webp/featured/featuredTemple.webp";
import vector from "../assets/images/webp/featured/featuredLeftVector.webp";

const Featured = () => {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: (index, className) => {
      return `
        <span class="${className} !w-3 !h-3 rounded-full !bg-darkYellow !opacity-30 block  featured-swiper"></span>
      `;
    },
  };
  const sliderRef = useRef(null);

  return (
    <div className="relative">
      <img
        src={temple}
        alt="temple"
        className="lg:-top-[65%] -top-[36%] absolute right-0 lg:max-w-[846px] max-w-[711px] max-h-[876px] md:block hidden"
      />
      <img
        src={vector}
        alt="vector"
        className="absolute left-0 max-w-[100px] top-[22%] w-full lg:block hidden"
      />
      <div className="container overflow-hidden xl:max-w-[1172px] mx-auto lg:px-4 md:px-[27px] px-5 lg:pt-[118px] md:pt-[168px] pt-[70px]">
        <Heading commonHeading="Featured On" className="capitalize mb-[18px]" />
        <Swiper
          className="sm:!pt-[30px] sm:!pb-[60px] !pt-[14px] !pb-[44px] !overflow-visible"
          ref={sliderRef}
          slidesPerView={3}
          spaceBetween={10}
          pagination={pagination}
          loop={true}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {featuredSlider.map((obj, index) => (
            <SwiperSlide key={index}>
              <div className="sm:max-w-[212px] hover:shadow-[0px_4px_10px_5px_#0000000D] transition-all ease-linear duration-300 max-sm:mx-auto !w-full sm:h-[100px] h-[48.25px] flex justify-center items-center bg-white border border-solid border-[#00000008] sm:rounded-xl rounded">
                <a aria-label={obj.lable} href={obj.url} target="_blank">
                  <img
                    src={obj.img}
                    alt={obj.alt}
                    className={`${index === 0
                      ? "sm:max-w-[139px] max-w-[102px] w-full"
                      : index === 1
                        ? "sm:max-w-[184px] max-w-[88.77px] w-full"
                        : index === 2
                          ? "sm:max-w-[127px] max-w-[61.27px] w-full"
                          : index === 3
                            ? "sm:max-w-[145px] max-w-[69.96px] w-full"
                            : index === 4
                              ? "sm:max-w-[95px] max-w-[45.83px] w-full"
                              : index === 5
                                ? "sm:max-w-[134px] max-w-[64.65px] w-full"
                                : index === 6
                                  ? "sm:max-w-[176px] max-w-[84.91px] w-full"
                                  : ""
                      }`}
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;