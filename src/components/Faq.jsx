import React, { useState } from 'react'
import { faqAccordionData } from './common/Helper';
import Accordion from './Accordion';
import Heading from './common/Heading';
import faqEllipse from '../assets/images/faqEllipse.svg'
import faqTemple from '../assets/images/webp/faq/faqTemple.webp'
import { YelloCommonButton } from './common/Button';
import faqSmallEllipse from '../assets/images/faqSmallEllipse.svg'
import faqSmallTemple from '../assets/images/webp/faq/faqSmallTemple.webp'
import { Minus, Plus } from './common/Icons';
const Faq = () => {
  const [open, setOpen] = useState(0);
  const toggleAccordion = (index) => {
    setOpen(open === index ? true : index);
  };
  return (
    <div className='lg:py-[140px] sm:py-[120px] py-20 relative z-[1]'>
      <div className=' container max-w-[1164px] mx-auto sm:px-3 px-5'>
        <Heading commonHeading={"Frequently Asked Questions"} className="!text-faqHeadBlack mb-4 leading-128" />
        <p className=' sm:text-base text-sm leading-lg text-faqPeraBlack max-w-[586px] text-center mx-auto mb-[25px] sm:mb-10'>Browse through our FAQs for quick answers to common queries about our services, policies, and procedures.</p>
        <div className=' lg:max-w-[840px] max-w-[714px]  mx-auto mb-[25px] sm:mb-8'>
          {faqAccordionData.map((item, index) => (
            <div className={`${open === index ? ' duration-300 border-transparent shadow-[0px_0px_19.1px_2px_#00000014] rounded-xl' : 'border border-solid rounded border-[#0000001A] shadow-none min-h-[90px] sm:min-h-[unset]'} ${index === 7 ? "mb-0" : "sm:mb-4 mb-2.5 "} sm:bg-white   w-full  `} key={index}>
              <div onClick={() => toggleAccordion(index)} className={` ${open === index ? 'pb-2 px-3 sm:px-4 pt-3 sm:pt-4' : 'sm:p-4 p-3'} cursor-pointer w-full text-left duration-300  font-plusJkarta text-base sm:text-lg text-faqHeadBlack font-medium  flex justify-between items-center leading-138 `}>
                <div className={`flex gap-2 max-w-[236px] sm:max-w-full ${index === 6 || index === 4 ? "max-w-[234px] sm:max-w-full" : ""} ${index === 0 ? "max-w-[268px] sm:max-w-full " : ""}`}>
                  <span>{index + 1}. </span>
                  {item.head}
                </div>
                <span className="">{open === index ? (<span><Minus /></span>) : (<span ><Plus /></span>)}</span>
              </div>
              <p className={`overflow-hidden pTag duration-500  px-4 text-faqAccordionBlack duration bg-transparentfont-plusJkarta text-sm leading-lg sm:text-base max-w-[756px] w-full" ${open === index ? "max-h-36 pb-3 sm:pb-4" : "max-h-0"}`}>{item.content}</p>
            </div>))
          }
        </div>
        <p className=' font-plusJkarta font-normal sm:text-base text-sm leading-lg  text-thinBlack lg:max-w-[830px] max-w-[714px] mx-auto mb-10'>These FAQs are tailored to address common queries, aiming to provide clarity and reinforce the client's confidence in choosing Tilak Stone Arts for their sacred spaces.<a href="#read" className='text-skyBlue'> read more..</a></p>
        <YelloCommonButton text="Enquiry Now" className="w-full min-[400px]:w-auto" />
      </div>
      <img src={faqEllipse} alt="faqellipse" className='absolute lg:right-0 right-[-10px]  top-[560px]  sm:block hidden' />
      <img src={faqTemple} alt="temple" className=' max-h-[547.39px] lg:max-h-[774px] absolute right-0 top-[-200px] lg:top-[-326px] z-[-1] sm:block hidden' />
      <img src={faqSmallEllipse} alt='faqellipse' className='absolute left-[-2px] bottom-[108px] sm:hidden' />
      <img src={faqSmallTemple} alt="temple" className=' absolute sm:hidden left-0 max-h-[419.08px] top-[11%]' />
    </div>
  )
}

export default Faq
