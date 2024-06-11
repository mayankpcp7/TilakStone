import React from 'react'
import submitrequirements from "../assets/images/webp/templeJourney/submit-requirements.png"
import ellips from "../assets/images/webp/templeJourney/rounded-ellips.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const TempleJourney = () => {
  
  return (
    <div id='journey_swiper' className='relative pt-[90px] sm:pt-[120px] lg:pt-[140px] overflow-hidden'>
      <img src={ellips} alt="ellips" className='w-[130px] pointer-events-none h-[176px] absolute top-[-8%] right-[-33%] rotate-[-80deg] sm:rotate-[-10deg] lg:rotate-0   sm:top-[50%] lg:top-[52%] sm:right-[0.6%] lg:right-[10%] 2xl:right-[20%]' />

        <div className="flex sm:flex-col">
          {/* -----------animation button */}
          <div className="w-[20%] sm:w-full">
            <div className=" w-[35px] min-h-[447px] overflow-hidden sm:min-h-[35px] sm:w-full flex-col sm:flex-row flex  mt-[65px]  sm:mt-[80px] sm:mx-auto  justify-between items-center max-w-[940px] relative after:absolute sm:after:w-full after:w-[5px] after:h-full sm:after:h-[8px] after:bg-albumColor after:left-4">
              <button className=' h-[42px] w-[35px] sm:w-[115px] sm:h-[55px] justify-center flex items-center  sm:px-[23.5px] relative z-10  sm:py-[13.5px] border-[1px] font-bold leading-lg font-plusJkarta text-white bg-darkYellow shadow-[0px_4px_16px_0px_#0000000F] border-germanGrey rounded-[12px] sm:rounded-2xl text-sm sm:text-lg'><span className='hidden mr-1 sm:block'>STEP</span> 01</button>
              <button className=' h-[42px] w-[35px] sm:w-[115px] sm:h-[55px] justify-center flex items-center  sm:px-[23.5px] relative z-10  sm:py-[13.5px] border-[1px] font-bold leading-lg font-plusJkarta text-white bg-darkYellow shadow-[0px_4px_16px_0px_#0000000F] border-germanGrey rounded-[12px] sm:rounded-2xl text-sm sm:text-lg'><span className='hidden mr-1 sm:block'>STEP</span> 02</button>
              <button className=' h-[42px] w-[35px] sm:w-[115px] sm:h-[55px] justify-center flex items-center  sm:px-[23.5px] relative z-10  sm:py-[13.5px] border-[1px] font-bold leading-lg font-plusJkarta text-white bg-darkYellow shadow-[0px_4px_16px_0px_#0000000F] border-germanGrey rounded-[12px] sm:rounded-2xl text-sm sm:text-lg'><span className='hidden mr-1 sm:block'>STEP</span> 03</button>
              <button className=' h-[42px] w-[35px] sm:w-[115px] sm:h-[55px] justify-center flex items-center  sm:px-[23.5px] relative z-10  sm:py-[13.5px] border-[1px] font-bold leading-lg font-plusJkarta text-white bg-darkYellow shadow-[0px_4px_16px_0px_#0000000F] border-germanGrey rounded-[12px] sm:rounded-2xl text-sm sm:text-lg'><span className='hidden mr-1 sm:block'>STEP</span> 04</button>
            </div>
          </div>

          <div className='w-[80%] sm:w-full max-[640px]:h-[545px]  mx-auto overflow-hidden'>
            {/* -----------swiper slider----------- */}
            <Swiper id='journey_swiper'
              slidesPerView={1}
              // spaceBetween={20}
              loop={true}
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
            >

              {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="justify-end sm:justify-center w-full max-[640px]:h-[473px] flex flex-wrap mt-[35px] sm:mt-[60px] sm:mb-[40px] items-center">
            <div className="order-1 sm:w-1/2 sm:order-0">
              <img src={slide.imgSrc} alt={slide.imgAlt} className='w-[265px] lg:object-cover h-[229px] mt-6 sm:mt-0 sm:w-[280px] md:w-[311px] md:h-[316px] lg:w-[449px] lg:h-[389px] border-[1px] border-germanGrey shadow-[0px_4px_16px_0px_#0000000F] rounded-2xl' />
            </div>
            <div className="flex flex-col items-end justify-end sm:w-1/2 order-0 sm:order-1">
              <div className="flex flex-col">
                <h3 className='mb-6 sm:mb-[16px] lg:mb-6 text-darkYellow !leading-md font-bold text-xl sm:text-2xl lg:text-3xxl font-plusJkarta'>{slide.title}</h3>
                <div className="rounded-2xl border-[1px] bg-white relative z-10 border-germanGrey max-w-[265px] sm:max-w-[350px] lg:max-w-[511px] p-[11px] sm:py-[21px] sm:px-[17px] lg:p-[40px] lg:pb-16 shadow-[0px_4px_16px_0px_#0000000F]">
                  <p className='font-bold text-base !leading-md sm:text-xl lg:text-2xl text-black font-plusJkarta mb-[10px] lg:mb-[16px]'>{slide.subtitle}</p>
                  <p className='text-xs font-normal leading-lg sm:text-base font-plusJkarta text-navBlack'>{slide.description}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" justify-end sm:justify-center w-full flex flex-wrap mt-[65px] sm:mt-[60px] sm:mb-[40px] items-center ">
                  <div className="order-1 sm:w-1/2 sm:order-0">
                    <img src={submitrequirements} alt="submit requirements" className='w-[265px] lg:object-cover h-[229px] mt-6 sm:mt-0 sm:w-[280px] md:w-[311px] md:h-[316px] lg:w-[449px] lg:h-[389px] border-[1px] border-germanGrey shadow-[0px_4px_16px_0px_#0000000F] rounded-2xl' />
                  </div>
                  <div className="flex flex-col items-end justify-end sm:w-1/2 order-0 sm:order-1">
                    <div className="flex flex-col">
                      <h3 className='mb-6 sm:mb-[16px] lg:mb-6 text-darkYellow font-bold text-xl sm:text-2xl lg:text-3xxl font-plusJkarta'>Submit Your Requirements</h3>
                      <div className="rounded-2xl border-[1px] bg-white relative z-10 border-germanGrey max-w-[265px] sm:max-w-[350px] lg:max-w-[511px] p-[11px] sm:py-[21px] sm:px-[17px] lg:p-[40px] lg:pb-16  shadow-[0px_4px_16px_0px_#0000000F]">
                        <p className='font-bold text-base sm:text-xl lg:text-2xl text-black font-plusJkarta mb-[10px] lg:mb-[16px]'>Initiate Your Project</p>
                        <p className='text-xs font-normal leading-lg sm:text-base font-plusJkarta text-navBlack '>Start by sending us your requirements along with details about the space where you plan to install the temple. This allows us to understand your needs, preferences, and the specifics of your environment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" justify-end sm:justify-center w-full flex flex-wrap mt-[65px] sm:mt-[60px] sm:mb-[40px] items-center ">
                  <div className="order-1 sm:w-1/2 sm:order-0">
                    <img src={submitrequirements} alt="submit requirements" className='w-[265px] lg:object-cover h-[229px] mt-6 sm:mt-0 sm:w-[280px] md:w-[311px] md:h-[316px] lg:w-[449px] lg:h-[389px] border-[1px] border-germanGrey shadow-[0px_4px_16px_0px_#0000000F] rounded-2xl' />
                  </div>
                  <div className="flex flex-col items-end justify-end sm:w-1/2 order-0 sm:order-1">
                    <div className="flex flex-col">
                      <h3 className='mb-6 sm:mb-[16px] lg:mb-6 text-darkYellow font-bold text-xl sm:text-2xl lg:text-3xxl font-plusJkarta'>Submit Your Requirements</h3>
                      <div className="rounded-2xl border-[1px] bg-white relative z-10 border-germanGrey max-w-[265px] sm:max-w-[350px] lg:max-w-[511px] p-[11px] sm:py-[21px] sm:px-[17px] lg:p-[40px] lg:pb-16  shadow-[0px_4px_16px_0px_#0000000F]">
                        <p className='font-bold text-base sm:text-xl lg:text-2xl text-black font-plusJkarta mb-[10px] lg:mb-[16px]'>Initiate Your Project</p>
                        <p className='text-xs font-normal leading-lg sm:text-base font-plusJkarta text-navBlack '>Start by sending us your requirements along with details about the space where you plan to install the temple. This allows us to understand your needs, preferences, and the specifics of your environment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

    </>
  )
}

export default TempleJourney