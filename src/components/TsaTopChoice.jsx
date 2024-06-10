import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const TsaTopChoice = () => {
  return (
    <div className='pt-32 mt-3'>
      <div className='container xl:max-w-[1172px] px-4 mx-auto'>
        <h2 className='font-bold sm:text-5xl text-2xl text-black text-center max-w-[563px] mx-auto !leading-md'>TSA is the top choice by families like you.</h2>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]} className="mySwiper">
            <SwiperSlide className='border border-'>Slide 1</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TsaTopChoice