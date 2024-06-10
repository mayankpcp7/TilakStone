import { Swiper, SwiperSlide } from "swiper/react"
import { Arrow, LeftArrow, RightTick } from "./common/Icons";
import Heading from "./common/Heading"
import { Pagination, Virtual } from "swiper/modules"
import { useCallback, useRef } from 'react'
import temple from "../assets/images/webp/pursuit-sec/temple-half.png"
import vector from "../assets/images/webp/pursuit-sec/vector.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { pursuitSecList } from "./common/Helper";

const PursuitSec = () => {
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section className="px-5 sm:px-10 md:px-[60px] pt-[90px] md:pt-[120px] lg:pt-[140px] relative">
            <div className="container max-w-[1140px] mx-auto relative z-20">
                <Heading className="max-w-[789px] mx-auto" commonHeading="In pursuit of the ideal pooja room? Look no further. if you" />
                <Swiper ref={sliderRef} spaceBetween={27} modules={[Virtual, Pagination]} slidesPerView={1} loop={true}
                    breakpoints={{ 640: { slidesPerView: 2, } }} pagination={{ el: ".swiper-pagination", type: "bullets", bulletActiveClass: "swiper-pagination-bullet-active", }} className="mt-[35px] sm:mt-14 md:mt-20 lg:!hidden">
                    {pursuitSecList.map((item, index) => (
                        <SwiperSlide className="h-full col-span-1" key={index}>
                            <div className="flex flex-col h-[258px] sm:h-[290px] md:h-[262px] group justify-between border rounded-2xl border-lightGreyPrimary shadow-commuinityCard hover:shadow-none bg-lightBrownSecondary duration-300 hover:bg-darkYellowPrimary py-6 pl-6 pr-5 sm:p-5 lg:pt-6 lg:px-6 lg:pb-7 lg:pr-7 hover:pb-6 hover:border-darkYellowSecondary">
                                <div className="flex flex-col gap-3">
                                    <span className="flex items-center justify-center w-[42px] h-[42px] sm:w-12 sm:h-12 rounded-full bg-whitePrimary duration-300 group-hover:bg-white"><RightTick /></span>
                                    <p className={`text-xl font-bold duration-300 font-plusJkarta leading-lg text-lightBlack group-hover:text-white h-[90px] overflow-scroll scroll-bar-hidden ${index === 0 && 1 && 3 && 4 && 6 && 7 && "lg:mr-3"}`}>{item.title}</p>
                                </div>
                                <button className="w-[61px] h-[42px] sm:w-[70px] sm:h-12 rounded-3xl bg-white border border-darkYellow duration-300 group-hover:border-white flex items-center justify-center mt-5"><Arrow /></button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="grid grid-cols-3 gap-5 md:mt-20 max-lg:hidden">
                    {pursuitSecList.map((item, index) => (
                        <div className="h-full col-span-1" key={index}>
                            <div className="flex flex-col justify-between h-full py-6 pl-6 lg:h-[270px]  pr-5 duration-300 border group rounded-2xl border-lightGreyPrimary shadow-commuinityCard hover:shadow-none bg-lightBrownSecondary hover:bg-darkYellowPrimary sm:p-5 lg:pt-6 lg:px-6 lg:pb-7 lg:pr-7 hover:pb-6 hover:border-darkYellowSecondary">
                                <div className="flex flex-col gap-3">
                                    <span className="flex items-center justify-center w-[42px] h-[42px] sm:w-12 sm:h-12 rounded-full bg-whitePrimary duration-300 group-hover:bg-white">
                                        <RightTick />
                                    </span>
                                    <p className={`text-xl font-bold duration-300 font-plusJkarta leading-lg text-lightBlack group-hover:text-white h-[90px] overflow-scroll scroll-bar-hidden ${index === 0 && 1 && 3 && 4 && 6 && 7 && "lg:mr-3"}`}>{item.title}</p>
                                </div>
                                <button className="w-[61px] h-[42px] sm:w-[70px] sm:h-12 rounded-3xl bg-white border border-darkYellow duration-300 group-hover:border-white flex items-center justify-center mt-5"><Arrow /></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 swiper-pagination sm:hidden pursuit"><span className='!mx-1 swiper-pagination-bullet'></span></div>
                <div className="flex items-center justify-center gap-4 mt-8 max-sm:hidden lg:hidden">
                    <button onClick={handlePrev}  className='flex next-arrow items-center justify-center w-12 group h-12 bg-white border-[2px] border-darkYellow duration-300 hover:bg-darkYellow rounded-full'><LeftArrow className="duration-300 group-hover:stroke-white" /></button>
                    <button onClick={handleNext} className='flex items-center prev-arrow justify-center w-12 group h-12 bg-white border-[2px] border-darkYellow duration-300 hover:bg-darkYellow rounded-full'><LeftArrow className="duration-300 rotate-180 group-hover:stroke-white" /></button>
                </div>
            </div>
            <img className="absolute bottom-0 right-0 z-0 translate-y-10 max-md:hidden md:h-[688px] lg:h-[846px]" src={temple} alt="temple" />
            <img className="absolute bottom-0 left-0 z-0 translate-y-[113px] max-md:hidden md:h-[358px] lg:h-[424px]" src={vector} alt="vector" />
        </section>
    )
}

export default PursuitSec
