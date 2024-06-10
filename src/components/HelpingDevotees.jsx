import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { YelloCommonButton } from "./common/Button";
import { EllipesLeftHeader, EllipesRightHeader } from "./common/Icons";
import laxmiDoll from "../assets/images/webp/header/laxmi-doll.webp";

const HelpingDevotees = () => {
  return (
    <main className="lg:mt-[100px] md:mt-[60px] mt-[30px] overflow-x-clip relative z-[1]">
      <p className="text-black text-base md:text-xl font-plusJkarta leading-md font-semibold text-center">
        Your Ultimate
        <Typewriter
          words={[" Pooja Room Destination", " Pooja Room Destination"]}
          loop={true}
          cursor={false}
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1000}
        />{" "}
      </p>
      <h1 className="text-3xxl md:text-4xxl lg:text-6xl px-5 sm:px-7 lg:px-0 font-plusJkarta font-bold leading-md max-w-[978px] mx-auto text-center mt-[10px]">
        Helping Devotees Re-Imagine Their{" "}
        <span className="text-darkYellow"> Pooja Rooms</span>
      </h1>
      <p className="text-center text-black leading-lg font-plusJkarta font-medium text-sm sm:text-lg  px-5 sm:px-0 max-w-[544px] lg:max-w-[822px] mx-auto mt-4 mb-[45px] md:mb-[50px]">
        Transforming Devotion: Crafting a Divine Space that Embodies
        Spirituality, Elegance, and Contemporary Style with Grace
      </p>
      <YelloCommonButton text="Get into touch" />
      <span className="pointer-events-none z-[-2] absolute right-[-10%] sm:right-0 bottom-[-25%] lg:bottom-[-10%]">
        <EllipesRightHeader />
      </span>
      <span className="pointer-events-none z-[-2] absolute left-[-10%] sm:left-[-4.3%] lg:left-0 top-[4%] sm:top-[14%] lg:top-[-1%]">
        <EllipesLeftHeader />
      </span>
      <img
        src={laxmiDoll}
        alt="laxmidoll"
        className="absolute top-[35%] md:top-[6%] lg:top-[-8%] z-[-1] max-w-[856px] min-h-[324px] md:min-h-[855px] h-full w-full  left-[50%] translate-x-[-50%]"
      />
    </main>
  );
};

export default HelpingDevotees;
