import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { topChoiceCardlist } from './common/Helper';

const TsaTopChoice = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} !w-3 !h-3 rounded-full !bg-darkYellow !opacity-30 block"></span>`;
    },
  };

  return (
    <div className='lg:pt-32 md:mt-3 md:pt-28 pt-20 mt-2.5'>
      <div className='container xl:max-w-[1172px] lg:px-4 md:px-[27px] px-5 mx-auto'>
        <h2 className='font-plusJkarta font-bold sm:text-5xl text-2xl text-black text-center sm:max-w-[563px] max-w-[400px] mx-auto !leading-md'>
          TSA is the top choice by families like you.
        </h2>
        <div className='md:mt-20 mt-[30px]'>
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            pagination={pagination}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            loop={true}
            modules={[Pagination]}
            className="mySwiper md:!pb-[52px] !pb-[37px]"
          >
            {topChoiceCardlist.map((value, index) => (
              <SwiperSlide key={index} className='border border-[#dedede] bg-white shadow-[0px_4px_16px_0px_#0000000F] lg:p-[23px] md:p-[19px] p-[21px] rounded-2xl'>
                <div className="relative w-full">
                  <img
                    src={value.img}
                    alt={value.alt}
                    className="w-full relative rounded-xl shadow-[0px_2px_17.2px_0px_#0000000A] md:min-h-[370px] object-cover object-center"
                  />
                  <div className="absolute left-0 right-0 bottom-0 lg:px-3 pb-3 md:px-[15px] px-[11px]">
                    <button className="bg-darkYellow font-plusJkarta text-base rounded-md !leading-md text-white w-full sm:py-4 py-[15px]">
                      View Reel
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TsaTopChoice;
