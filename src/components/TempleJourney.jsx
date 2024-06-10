import React from 'react'
import ellips from "../assets/images/webp/templeJourney/rounded-ellips.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { slides } from './common/Helper'


const TempleJourney = () => {
  
  return (
    <div id='journey_swiper' className='relative pt-[90px] sm:pt-[120px] lg:pt-[140px] overflow-hidden'>
      <img src={ellips} alt="ellips" className='w-[130px] pointer-events-none h-[176px] absolute top-[-8%] right-[-33%] rotate-[-80deg] sm:rotate-[-10deg] lg:rotate-0   sm:top-[40%] lg:top-[45%] sm:right-[0.6%] lg:right-[10%] 2xl:right-[20%]' />

      <div className="max-w-[400px] sm:max-w-[738px] lg:max-w-[1064px]  mx-auto px-[20px] sm:px-3">
       <h2 className='font-plusJkarta font-bold text-black leading-md text-2xl sm:text-4xl  md:text-5xl text-center sm:mb-2'>Your Dream Temple Journey</h2>
        <div className="flex sm:flex-col">
          {/* -----------animation button */}
          <div className="w-[20%] bg-white  sm:w-full">
            <div className=" w-[35px] min-h-[447px] overflow-hidden sm:min-h-[35px] sm:w-full flex-col sm:flex-row flex  mt-[35px]  sm:mt-[80px] sm:mx-auto  justify-between items-center max-w-[940px] relative after:absolute sm:after:w-full after:w-[5px] after:h-full sm:after:h-[8px] after:bg-albumColor after:left-4">
              <button className=' h-[42px] w-[35px] sm:w-[115px] sm:h-[55px] justify-center flex items-center  sm:px-[23.5px] relative z-10  sm:py-[13.5px] border-[1px] font-bold leading-lg font-plusJkarta text-white bg-darkYellow shadow-[0px_4px_16px_0px_#0000000F] border-germanGrey rounded-[12px] sm:rounded-2xl text-xs sm:text-lg'><span className='hidden mr-1 sm:block'>STEP</span> 01</button>
              <button className=' h-[42px] w-[35px] sm:w-[115px] sm:h-[55px] justify-center flex items-center  sm:px-[23.5px] relative z-10  sm:py-[13.5px] border-[1px] font-bold leading-lg font-plusJkarta text-white bg-darkYellow shadow-[0px_4px_16px_0px_#0000000F] border-germanGrey rounded-[12px] sm:rounded-2xl text-xs sm:text-lg'><span className='hidden mr-1 sm:block'>STEP</span> 02</button>
              <button className=' h-[42px] w-[35px] sm:w-[115px] sm:h-[55px] justify-center flex items-center  sm:px-[23.5px] relative z-10  sm:py-[13.5px] border-[1px] font-bold leading-lg font-plusJkarta text-white bg-darkYellow shadow-[0px_4px_16px_0px_#0000000F] border-germanGrey rounded-[12px] sm:rounded-2xl text-xs sm:text-lg'><span className='hidden mr-1 sm:block'>STEP</span> 03</button>
              <button className=' h-[42px] w-[35px] sm:w-[115px] sm:h-[55px] justify-center flex items-center  sm:px-[23.5px] relative z-10  sm:py-[13.5px] border-[1px] font-bold leading-lg font-plusJkarta text-white bg-darkYellow shadow-[0px_4px_16px_0px_#0000000F] border-germanGrey rounded-[12px] sm:rounded-2xl text-xs sm:text-lg'><span className='hidden mr-1 sm:block'>STEP</span> 04</button>
            </div>
          </div>

          <div className='w-[80%] sm:w-full h-[585px] mb-5  mx-auto overflow-hidden'>
            {/* -----------swiper slider----------- */}
            <Swiper 
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
            >

              {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="justify-end sm:justify-center w-full flex flex-wrap mt-[35px] sm:mt-[60px] sm:mb-[40px] items-center">
            <div className="sm:w-1/2 order-1 sm:order-0">
              <img src={slide.imgSrc} alt={slide.imgAlt} className='w-[265px] lg:object-cover h-[229px] mt-6 sm:mt-0 sm:w-[280px] md:w-[311px] md:h-[316px] lg:w-[449px] lg:h-[389px] border-[1px] border-germanGrey shadow-[0px_4px_16px_0px_#0000000F] rounded-2xl' />
            </div>
            <div className="sm:w-1/2 order-0 sm:order-1 flex justify-end flex-col items-end">
              <div className="flex flex-col">
                <h3 className='mb-6 sm:mb-[16px] lg:mb-6 text-darkYellow font-bold text-xl sm:text-2xl lg:text-3xxl font-plusJkarta'>{slide.title}</h3>
                <div className="rounded-2xl border-[1px] bg-white relative z-10 border-germanGrey max-w-[265px] sm:max-w-[350px] lg:max-w-[511px] p-[11px] sm:py-[21px] sm:px-[17px] lg:p-[40px] lg:pb-16 shadow-[0px_4px_16px_0px_#0000000F]">
                  <p className='font-bold text-base sm:text-xl lg:text-2xl text-black font-plusJkarta mb-[10px] lg:mb-[16px]'>{slide.subtitle}</p>
                  <p className='leading-lg text-xs sm:text-base font-plusJkarta font-normal text-navBlack'>{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
            </Swiper>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TempleJourney