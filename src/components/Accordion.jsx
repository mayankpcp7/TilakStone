// components/Accordion.js
import { useState } from 'react';
import { Minus, Plus } from './common/Icons';
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
          <div key={index} className={`${index === openIndex ? ' duration-300 border-transparent shadow-[0px_0px_19.1px_2px_#00000014] rounded-xl':'border border-solid rounded border-[#0000001A] shadow-none min-h-[90px] sm:min-h-[unset]'} ${index === 7 ? "mb-0":"sm:mb-4 mb-2.5 "}   w-full`}>
            <button
              className={`w-full text-left duration-300  font-plusJkarta text-base sm:text-lg text-faqHeadBlack font-medium  flex justify-between items-center leading-138 ${index === openIndex ? 'pb-2 px-3 sm:px-4 pt-3 sm:pt-4':'sm:p-4 p-3'} `}
              onClick={() => handleToggle(index)}
            >
               <div className={`flex gap-2 max-w-[236px] sm:max-w-full ${index === 6 || index === 4 ? "max-w-[234px] sm:max-w-full" :""} ${index === 0 ? "max-w-[268px] sm:max-w-full ": ""}`}>
                    <span>{index + 1}. </span>   
                                  {item.head}
               </div>
              <span className=' duration-300'>{index === openIndex ? <Minus/>:<Plus/>}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 text-faqAccordionBlack duration-500 bg-transparent pb-4 font-plusJkarta text-sm leading-lg sm:text-base max-w-[756px]">
                {item.content}
              </div>
            )}
          </div>
      ))}
    </div>
  );
};

export default Accordion;
