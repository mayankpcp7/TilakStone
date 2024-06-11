import React from "react";
import Heading from "./common/Heading";
import statues from "../assets/images/webp/getInspired/shelf-statues.webp";
import table from "../assets/images/webp/getInspired/table-port.webp";
import sofa from "../assets/images/webp/getInspired/sofa.webp";
import shelf from "../assets/images/webp/getInspired/shelf.webp";
import fountain from "../assets/images/webp/getInspired/fountain.webp";
import radhaKrishan from "../assets/images/webp/getInspired/radha-krishan.webp";
import bull from "../assets/images/webp/getInspired/bull.webp";
import ganesh from "../assets/images/webp/getInspired/ganesh.webp";
import carpet from "../assets/images/webp/getInspired/carpet.webp";
import krishan from "../assets/images/webp/getInspired/krishan.webp";
import hanuman from "../assets/images/webp/getInspired/hanumanji.webp";
import gallery from "../assets/images/webp/getInspired/gallery.webp";
import buddha from "../assets/images/webp/getInspired/buddha.webp";
import pillar from "../assets/images/webp/getInspired/pillar.webp";
import mirror from "../assets/images/webp/getInspired/mirror-lamp.webp";
const GetInspired = () => {
    return (
      <div className="xl:pt-[140px]">
        <div className="max-w-[1920px] max-h-full sm:max-h-[862px] lg:max-h-[944px] overflow-hidden">
          <Heading commonHeading="Get Inspired" className="mt-20 sm:pt-3 font-plusJkarta" />
          <p className="text-center text-sm sm:text-base sm:px-0 text-navBlack font-plusJkarta max-w-[266px] font-normal sm:max-w-[453px] sm:pb-6 sm:-mb-10 lg:pb-0 lg:-mb-5 mx-auto pt-4">
            Explore our gallery of meticulously crafted pooja rooms that blend
            tradition with modernity, creating serene spaces for your spiritual
            journey.
          </p>
          <div className="sm:flex overflow-hidden hidden justify-center gap-[14px] sm:gap-6 -mt-[240px]">
            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={statues}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={table}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={sofa}
                  alt="inspired-image"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-2 mt-24 lg:mt-36 sm:gap-6">
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={shelf}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={fountain}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={radhaKrishan}
                  alt="inspired-image"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-4 mt-60 lg:mt-72 lg:pt-6 sm:gap-6">
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={bull}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={ganesh}
                  alt="inspired-image"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-4 mt-60 lg:mt-72 lg:pt-6 sm:gap-6">
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={carpet}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={radhaKrishan}
                  alt="inspired-image"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-2 mt-24 lg:mt-36 sm:gap-6">
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={krishan}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={hanuman}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={gallery}
                  alt="inspired-image"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={buddha}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={pillar}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={mirror}
                  alt="inspired-image"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-[14px]">
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={shelf}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={carpet}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={buddha}
                  alt="inspired-image"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={bull}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={krishan}
                  alt="inspired-image"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-inspire-img-shadow">
                <img
                  className="lg:max-w-[267px] sm:max-w-[248px] sm:min-h-[305px] max-w-[174px] hover:scale-110 duration-300"
                  src={fountain}
                  alt="inspired-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default GetInspired;
