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
          <div key={index} className={`${index === openIndex ? ' bg-white border-transparent shadow-[0px_0px_19.1px_2px_#00000014] rounded-xl':'border border-solid rounded border-[#0000001A] shadow-none'} ${index === 7 ? "mb-0":"mb-4"}   w-full`}>
            <button
              className={`w-full text-left  font-plusJkarta  text-lg text-faqHeadBlack font-medium  flex justify-between items-center leading-138 ${index === openIndex ? 'pb-2 px-4 pt-4':'p-4'} `}
              onClick={() => handleToggle(index)}
            >
               <div className=' flex gap-2'>
                    <span>{index + 1}. </span>   
                                  {item.head}
               </div>
              <span>{index === openIndex ? <Minus/>:<Plus/>}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 text-black bg-transparent pb-4 font-plusJkarta text-base leading-[140%] max-w-[750px]">
                {item.content}
              </div>
            )}
          </div>
      ))}
    </div>
  );
};

export default Accordion;
