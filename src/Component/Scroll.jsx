import React from "react";
import flash from "../assets/flash.svg"

const Scroll = () => {
  return (
    <div className="bg-[#FCFFB2] w-[100%] h-[100px] mb-10 flex justify-center items-center">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="10"
        scrolldelay="10"
      >
        <div className="flex justify-center items-center">
          <img src={flash} className="size-8" />
          <h1 className="text-[22px] capitalize"> Spring Clearance Event: Save Up to 70%  &nbsp; </h1>
          <img src={flash} className="size-8" />
          <h1 className="text-[22px] capitalize"> Spring Clearance Event: Save Up to 70%  &nbsp; </h1>
          <img src={flash} className="size-8" />
          <h1 className="text-[22px] capitalize"> Spring Clearance Event: Save Up to 70%  &nbsp; </h1>
          <img src={flash} className="size-8" />
          <h1 className="text-[22px] capitalize"> Spring Clearance Event: Save Up to 70%  &nbsp; </h1>
          <img src={flash} className="size-8" />
          <h1 className="text-[22px] capitalize"> Spring Clearance Event: Save Up to 70%  &nbsp; </h1>
        </div>
      </marquee>
    </div>
  );
};

export default Scroll;

