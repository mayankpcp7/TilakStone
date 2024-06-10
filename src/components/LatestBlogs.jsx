import React from "react";
import { LatestBlogsArray } from "./common/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import latestblogsvector from "../assets/images/webp/latestblogs/latest-blogs-vector-left.webp";
import latestblogsvectorRight from "../assets/images/webp/latestblogs/latest-blogs-vector-right.webp";
import { YelloCommonButton } from "./common/Button";
import Heading from "./common/Heading";

const LatestBlogs = () => {
  return (
    <div className="2xl:max-w-[1920px] lg:mx-auto py-12 max-sm:px-5 relative z-[1] overflow-x-clip">
      <div className="pointer-events-none absolute max-sm:hidden sm:top-[3%] lg:top-[7%] sm:-left-[7%] sm:max-w-[148px] lg:max-w-[200px] rotate-[15deg]">
        <img className="w-full" src={latestblogsvector} alt=" latest-blogs" />
      </div>
      <div className="pointer-events-none absolute top-[-6%] right-[-6%] max-w-[101px] sm:hidden">
        <img
          className="w-full"
          src={latestblogsvectorRight}
          alt=" latest-blogs"
        />
      </div>
      <Heading commonHeading="Latest Blogs" />
      <p className=" font-plusJkarta font-normal text-sm md:text-base leading-normal text-center mt-3 max-sm:max-w-[335px] max-sm:mx-auto max-sm:px-3">
        Discover diverse perspectives, insights, and stories in the latest blogs
        <span className="sm:block">
          {" "}
          covering topics from technology to wellness and beyond.
        </span>
      </p>
      <div className="max-w-[1164px] sm:ps-3 md:ps-[60px] lg:mx-auto lg:px-3">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          speed={900}
          breakpoints={{
            450: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2.3,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },

            1024: { loop: false, slidesPerView: 3, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {LatestBlogsArray.map((obj, index) => (
            <SwiperSlide key={index}>
              {" "}
              <div className="border border-blogBorder rounded-xl md:max-w-[364px] duration-300 hover:shadow-[0px_11px_15.9px_0px_#00000014] mb-[35px] mt-[25px] hover:-translate-y-2 sm:hover:-translate-y-3 sm:my-10">
                <img
                  className="w-full rounded-t-xl"
                  src={obj.LatestBlogsTempleImg}
                  alt="temple"
                />
                <div className="p-3 md:p-[20px_14.5px_16px_16px]">
                  <div className="flex items-center gap-2">
                    <p className="font-plusJkarta font-medium text-darkYellow text-sm leading-normal uppercase">
                      {obj.TempleHeading}
                    </p>
                    <span className="w-[1px] h-[21px] bg-latestblogsgradient"></span>
                    <p className="font-plusJkarta font-medium text-offBlack text-sm leading-normal opacity-60">
                      5 min read
                    </p>
                  </div>
                  <h3 className="font-plusJkarta font-semibold text-base md:text-xl !leading-xmd capitalize mt-4">
                    {obj.title}
                  </h3>
                  <p className="font-plusJkarta font-normal text-blogPera text-sm !leading-lg mt-2">
                    Lorem ipsum dolor sit amet consectetur. In ultrices urna
                    eget lla nisl duis lectus. Tincidunt pretium odio at scele
                    risque viva.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <YelloCommonButton text="View All Blogs" />
    </div>
  );
};

export default LatestBlogs;
