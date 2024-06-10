import React from 'react'
import { faqAccordionData } from './common/Helper';
import Accordion from './Accordion';
import Heading from './common/Heading';
import faqEllipse from '../assets/images/faqEllipse.svg'
import faqTemple from '../assets/images/webp/faq/faqTemple.webp'
const Faq = () => {

  return (
    <div className='pt-[140px] relative z-[1]'>
     <div className=' container max-w-[1164px] mx-auto px-3'>
        <Heading commonHeading={"Frequently Asked Questions"} className="!text-faqHeadBlack mb-4 leading-128" />
        <p className=' text-base text-faqPeraBlack max-w-[586px] text-center mx-auto mb-10'>Browse through our FAQs for quick answers to common queries about our services, policies, and procedures.</p>
         <div className=' max-w-[840px] mx-auto mb-8'>
             <Accordion items={faqAccordionData} />
         </div>
         <p className=' font-plusJkarta font-normal text-base  text-thinBlack max-w-[830px] mx-auto'>These FAQs are tailored to address common queries, aiming to provide clarity and reinforce the client's confidence in choosing Tilak Stone Arts for their sacred spaces.<a href="" className='text-skyBlue'> read more..</a></p>
     </div>
     <img src={faqEllipse} alt="faqellipse" className='absolute right-0 top-[60%]' />
     <img src={faqTemple} alt="temple" className=' max-w-[748px] max-h-[774px] absolute right-0 top-[-32%] z-[-1]' />
    </div>
  )
}

export default Faq
