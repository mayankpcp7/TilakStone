import React from "react";
import { promiseCardlist } from "./common/Helper";
import promiseclient from "../assets/images/webp/promise/promiseClient.webp";
import Heading from "./common/Heading";
import promiseVector from "../assets/images/webp/promise/promiseVector.webp";

const TSAPromise = () => {
  return (
    <div className="relative">
      <img width={235} height={318}
        src={promiseVector}
        alt="promiseVector"
        className="absolute w-full max-w-[100px] lg:top-0 md:top-[11%] md:block hidden right-0 h-full max-h-[318px]"
      />
      <div className="container mx-auto xl:max-w-[1172px] md:pt-[120px] pt-[80px] lg:px-4 md:px-[27px] px-5">
        <Heading
          commonHeading="The TSA Promise"
          className="capitalize md:pb-[51px] pb-6"
        />
        <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="lg:w-6/12 sm:w-[75.70%] w-full flex gap-6 flex-col">
            {promiseCardlist.map((obj, id) => (
              <div key={id} className="w-full">
                <div className="w-full group hover:bg-darkYellow bg-white transition-colors ease-linear duration-300 border border-solid border-whitegrey sm:py-4 sm:pl-4 p-4 rounded-2xl max-w-[511px]">
                  <p className="sm:text-black text-lightBlack font-plusJkarta sm:text-xl text-base font-bold group-hover:text-white !leading-md transition-colors ease-linear duration-300 mb-2">
                    {obj.tittle}
                  </p>
                  <p
                    className={`${id === 0
                        ? "lg:max-w-[414px] max-[420px]:max-w-[302px]"
                        : id === 1
                          ? "lg:max-w-[456px] max-[420px]:max-w-[299px]"
                          : id === 2
                            ? "lg:max-w-[460px] max-[420px]:max-w-[297px]"
                            : ""
                      } font-normal font-plusJkarta sm:text-base text-sm leading-normal sm:text-black opacity-80 text-lightBlack group-hover:text-white transition-colors ease-linear duration-300`}
                  >
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-6/12 w-full flex justify-center lg:justify-end">
            <img
              width={558}
              height={558}
              src={promiseclient}
              alt="Promise Client"
              className="w-full lg:max-w-[558px] lg:h-[558px] sm:max-w-[714px] sm:h-[714px] min-w-[375px] max-[420px]:-mt-[38px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TSAPromise;
