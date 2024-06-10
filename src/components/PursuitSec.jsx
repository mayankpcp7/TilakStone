import { Swiper, SwiperSlide } from "swiper/react"
import Heading from "./common/Heading"
import { Pagination, Virtual } from "swiper/modules"
import { useCallback, useRef } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import temple from "../assets/images/webp/pursuit-sec/temple-half.png"
import vector from "../assets/images/webp/pursuit-sec/vector.png"
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
    const RightTick = () => {
        return (
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5748 0.0788631C16.4435 0.130698 15.0839 1.34883 12.0975 4.07884C9.7393 6.23866 7.3811 8.39415 6.8607 8.86931L5.91367 9.73324L3.76645 7.76349C2.585 6.67926 1.55358 5.7635 1.47857 5.72894C0.972238 5.49568 0.34401 5.68143 0.0955318 6.13499C-0.0310515 6.35529 -0.0310515 6.76565 0.0908435 6.98596C0.142414 7.07235 1.32855 8.19977 2.73034 9.48702C4.66659 11.2667 5.32764 11.8499 5.48704 11.9147C5.74958 12.027 6.10589 12.027 6.35437 11.9233C6.60754 11.8153 17.7469 1.63825 17.9016 1.37043C17.9953 1.21493 18.0094 1.13285 17.9953 0.877995C17.9813 0.623137 17.9578 0.541063 17.8453 0.394197C17.5828 0.0399866 17.0014 -0.102562 16.5748 0.0788631Z" fill="#E0A922" />
            </svg>
        )
    }
    const Arrow = () => {
        return (
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696698C10.4645 0.403805 9.98959 0.403805 9.6967 0.696698C9.40381 0.989592 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM1 6.75L15 6.75L15 5.25L1 5.25L1 6.75Z" fill="#E0A922" />
            </svg>
        )
    }
    const LeftArrow = ({ className }) => {
        return (
            <svg className={`${className} stroke-darkYellow`} width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6235 1.58789L2.67969 11.0576L12.5292 20.8915" stroke-width="3" />
            </svg>
        )
    }
    const pursuitSecList = [
        { title: "Desire a pooja room that’s a true  reflection of your faith and aesthetics?" },
        { title: "Exhausted by the search for creators who understand your vision?" },
        { title: "Longing for a bespoke design that blends tradition, modernity and functionality ?" },
        { title: "Need a guarantee that your most spiritual space will be crafted with devotion?" },
        { title: "Disappointed with the standards of local craftsmanship and service?" },
        { title: "Looking for an all-in-one service to design, deliver, and install your sacred space?" },
        { title: "In search of expert advice and superior marble artistry?" },
        { title: "Are you a designer seeking a collaborator who values precision and detail?" },
        { title: "Require a partner who brings both technical expertise and creative insight?" },
    ]

    return (
        <section className="px-5 sm:px-10 md:px-[60px] pt-[140px] relative">
            <div className="container max-w-[1140px] mx-auto relative z-20">
                <Heading className="max-w-[789px] mx-auto" commonHeading="In pursuit of the ideal pooja room? Look no further. if you" />
                <Swiper ref={sliderRef} spaceBetween={27} modules={[Virtual, Pagination]} slidesPerView={1} loop={true}
                    breakpoints={{ 640: { slidesPerView: 2, } }} pagination={{ el: ".swiper-pagination", type: "bullets", bulletActiveClass: "swiper-pagination-bullet-active", }} className="mt-[35px] sm:mt-14 md:mt-20 lg:!hidden h-[]">
                    {pursuitSecList.map((item, index) => (
                        <SwiperSlide className="h-full col-span-1" key={index}>
                            <div className="flex flex-col min-h-[258px] sm:min-h-[290px] md:min-h-[262px] group justify-between border rounded-2xl border-[#DEDEDE] shadow-[0_4px_16px_0_#0000000F] hover:shadow-none bg-[#FCFCFC] duration-300 hover:bg-[#ECC744] py-6 pl-6 pr-5 sm:p-5 lg:pt-6 lg:px-6 lg:pb-7 lg:pr-7 hover:pb-6 hover:border-[#BF9602]">
                                <div className="flex flex-col gap-3">
                                    <span className="flex items-center justify-center w-[42px] h-[42px] sm:w-12 sm:h-12 rounded-full bg-[#F3F3F3] duration-300 group-hover:bg-white">
                                        <RightTick />
                                    </span>
                                    <p className={`text-xl font-bold duration-300 font-plusJkarta leading-lg text-lightBlack group-hover:text-white ${index === 0 && 1 && 3 && 4 && 6 && 7 && "lg:mr-3"}`}>{item.title}</p>
                                </div>
                                <button className="w-[61px] h-[42px] sm:w-[70px] sm:h-12 rounded-3xl bg-white border border-darkYellow duration-300 group-hover:border-white flex items-center justify-center mt-5"><Arrow /></button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="grid grid-cols-3 gap-5 md:mt-20 max-lg:hidden">
                    {pursuitSecList.map((item, index) => (
                        <div className="h-full col-span-1" key={index}>
                            <div className="flex flex-col h-full group justify-between border rounded-2xl border-[#DEDEDE] shadow-[0_4px_16px_0_#0000000F] hover:shadow-none bg-[#FCFCFC] duration-300 hover:bg-[#ECC744] py-6 pl-6 pr-5 sm:p-5 lg:pt-6 lg:px-6 lg:pb-7 lg:pr-7 hover:pb-6 hover:border-[#BF9602]">
                                <div className="flex flex-col gap-3">
                                    <span className="flex items-center justify-center w-[42px] h-[42px] sm:w-12 sm:h-12 rounded-full bg-[#F3F3F3] duration-300 group-hover:bg-white">
                                        <RightTick />
                                    </span>
                                    <p className={`text-xl font-bold duration-300 font-plusJkarta leading-lg text-lightBlack group-hover:text-white ${index === 0 && 1 && 3 && 4 && 6 && 7 && "lg:mr-3"}`}>{item.title}</p>
                                </div>
                                <button className="w-[61px] h-[42px] sm:w-[70px] sm:h-12 rounded-3xl bg-white border border-darkYellow duration-300 group-hover:border-white flex items-center justify-center mt-5"><Arrow /></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-2 mt-6 swiper-pagination sm:hidden"><span className='swiper-pagination-bullet'></span></div>
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
