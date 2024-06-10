import React, { useState } from 'react';
import { data } from './common/Helper';
import { Correct, Cross } from './common/Icons';

const Choose = () => {
    const [hoveredColumn, setHoveredColumn] = useState(null);

    return (
        <div className="max-w-[963px] mx-auto px-3 scroll overflow-scroll">
            <h2 className="font-bold text-5xl leading-[60px] text-black text-center font-plusJkarta">Why Choose Tilak</h2>
            <p className="text-normal text-base text-black max-w-[511px] mx-auto text-center font-plusJkarta pt-2 pb-[56px]">
                Tilak font is elegant, legible, and versatile, making it ideal for various design projects, ensuring clarity and aesthetic appeal.
            </p>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border rounded-2xl">
                    <thead>
                        <tr>
                            <th
                                className={`px-7 pt-7 pb-[22px] text-left font-plusJkarta font-bold text-2xl leading-[22px] text-black tracking-wider transform transition-transform duration-300 ${hoveredColumn === 0 ? 'bg-darkYellow text-white hover:rounded-tl-2xl hover:rounded-tr-2xl ' : ''
                                    }`}
                                onMouseEnter={() => setHoveredColumn(0)}
                                onMouseLeave={() => setHoveredColumn(null)}
                            >
                                Feature
                            </th>
                            <th
                                className={`px-7 pt-7 pb-[22px] text-left font-plusJkarta font-bold text-2xl leading-[22px] text-black tracking-wider transform transition-transform duration-300 ${hoveredColumn === 1 ? 'bg-darkYellow text-white hover:rounded-tl-2xl hover:rounded-tr-2xl' : ''
                                    }`}
                                onMouseEnter={() => setHoveredColumn(1)}
                                onMouseLeave={() => setHoveredColumn(null)}
                            >
                                Tilak Stone Arts (TSA)
                            </th>
                            <th
                                className={`px-7 pt-7 pb-[22px] text-left font-plusJkarta font-bold text-2xl leading-[22px] text-black tracking-wider transform transition-transform duration-300 ${hoveredColumn === 2 ? 'bg-darkYellow text-white  hover:rounded-tl-2xl hover:rounded-tr-2xl ' : ''
                                    }`}
                                onMouseEnter={() => setHoveredColumn(2)}
                                onMouseLeave={() => setHoveredColumn(null)}
                            >
                                Local Vendors
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 relative z-10">
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td
                                    className={`px-7 py-6 whitespace-nowrap font-normal font-plusJkarta text-sm leading-[17px] text-black transform transition-transform duration-300 ${hoveredColumn === 0 ? 'bg-darkYellow text-white ' : ''
                                        }`}
                                    onMouseEnter={() => setHoveredColumn(0)}
                                    onMouseLeave={() => setHoveredColumn(null)}
                                >
                                    {row.feature}
                                </td>
                                <td
                                    className={`px-7 py-6 whitespace-nowrap font-normal font-plusJkarta text-sm leading-[17px] text-black transform transition-transform duration-300 ${hoveredColumn === 1 ? 'bg-darkYellow text-white ' : ''
                                        }`}
                                    onMouseEnter={() => setHoveredColumn(1)}
                                    onMouseLeave={() => setHoveredColumn(null)}
                                >
                                    <span className="flex">
                                        <Correct />
                                        <span className="ml-2">{row.tsa}</span>
                                    </span>
                                </td>
                                <td
                                    className={`px-7 py-6 whitespace-nowrap font-normal flex font-plusJkarta text-sm leading-[17px] text-black transform transition-transform duration-300 ${hoveredColumn === 2 ? 'bg-darkYellow text-white ' : ''
                                        }`}
                                    onMouseEnter={() => setHoveredColumn(2)}
                                    onMouseLeave={() => setHoveredColumn(null)}
                                >
                                    <Cross />
                                    <span className="ml-2">{row.localVendors}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Choose