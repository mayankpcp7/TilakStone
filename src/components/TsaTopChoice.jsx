import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { topChoiceCardlist } from './common/Helper';
import laxmiDoll from '../assets/images/webp/header/laxmi-doll.webp'

const TsaTopChoice = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} !w-3 !h-3 rounded-full !bg-darkYellow !opacity-30 block transition-all duration-300 ease-linear"></span>`;
    },
  };

  return (
    <div className='lg:py-32 md:my-3 md:py-28 py-20 my-2.5 relative overflow-x-clip'>
      <div className='container xl:max-w-[1172px] lg:px-4 md:px-[27px] px-5 mx-auto'>
        <h2 className='font-plusJkarta font-bold md:text-5xl sm:text-4xl text-2xl text-black text-center sm:max-w-[563px] max-w-[400px] mx-auto !leading-md'>
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
            className="md:!pb-[52px] !pb-[37px]"
          >
            {topChoiceCardlist.map((value, index) => (
              <SwiperSlide key={index} className=''>
                <div className='border border-[#dedede] bg-white shadow-[0px_4px_16px_0px_#0000000F] lg:p-[23px] md:p-[19px] p-[21px] rounded-2xl max-sm:max-w-[335px] max-sm:mx-auto'>
                  <div className="relative w-full">
                    <img
                      src={value.img}
                      alt={value.alt}
                      className="w-full relative rounded-xl shadow-[0px_2px_17.2px_0px_#0000000A] md:min-h-[370px] object-cover object-center"
                    />
                    <div className="absolute left-0 right-0 bottom-0 lg:px-3 pb-3 md:px-[15px] px-[11px]">
                      <button className="bg-darkYellow font-plusJkarta text-base rounded-md !leading-md text-white w-full sm:py-[15px] py-[15px] border border-darkYellow hover:bg-white hover:text-darkYellow transition-all duration-300 ease-linear">
                        View Reel
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='absolute lg:bottom-[-5%] sm:bottom-[3.5%] lg:left-[-19.7%] sm:left-[-45%] left-[-36%] bottom-[-18%] pointer-events-none'>
        <img src={laxmiDoll} alt="laxmiDoll" className='lg:w-[846px] lg:h-[876px] sm:w-[756px] sm:h-[782px]  w-[252px] h-[260px]' />
      </div>

    </div>
  );
};

export default TsaTopChoice;
