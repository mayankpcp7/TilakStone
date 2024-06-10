import React from "react";

const Heading = ({ commonHeading }) => {
  return (
    <h2 className="font-plusJkarta font-bold text-black leading-md text-2xl sm:text-4xl  md:text-5xl text-center">
      {commonHeading}
    </h2>
  );
};

export default Heading;
