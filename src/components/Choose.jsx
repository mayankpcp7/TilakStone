import React from 'react';
import { Correct, Cross } from './common/Icons';
import { Stone, features, localVendor } from './common/Helper';

const ComparisonTable = () => {
  return (
    <div className="p-8 max-w-[963px] mx-auto scroll overflow-scroll">
        <h2 className=' font-plusJkarta font-bold sm:text-5xl text-2xl sm:leading-[60px] leading-[30px] text-black text-center'>Why Choose Tilak</h2>
        <p className=' font-plusJkarta font-normal sm:text-base text-sm max-w-[511px] text-center text-black mx-auto pt-2 pb-[56px]'>Tilak font is elegant, legible, and versatile, making it ideal for various design projects, ensuring clarity and aesthetic appeal.</p>
      <div className="rounded-2xl overflow-x-auto bg-white border">
        <table className="min-w-[897px]">
          <thead>
            <tr>
              <th className="px-7 pt-7 pb-[22px] border-b-2 border-gray-300 text-left text-black font-plusJkarta text-2xl leading-[22px] tracking-wider">Feature</th>
              <th className="px-7 pt-7 pb-[22px] border-b-2 border-gray-300 text-left text-black font-plusJkarta text-2xl leading-[22px] tracking-wider">Tilak Stone Arts (TSA)</th>
              <th className="px-7 pt-7 pb-[22px] border-b-2 border-gray-300 text-left text-black font-plusJkarta text-2xl leading-[22px] tracking-wider">Local Vendors</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <td className="px-6 py-6 border-b border-gray-300 font-plusJkarta font-normal text-sm leading-[17px] text-black">{feature}</td>
                <td className="px-6 py-6 border-b border-gray-300 font-plusJkarta font-normal text-sm leading-[17px] text-black">
                  <div className="flex">
                    <Correct />
                    <span className="ml-2">{Stone[index]}</span>
                  </div>
                </td>
                <td className="px-6 py-6 border-b border-gray-300 font-plusJkarta font-normal text-sm leading-[17px] text-black text-end">
                  <div className="flex">
                    <Cross />
                    <span className="ml-2">{localVendor[index]}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ComparisonTable;

