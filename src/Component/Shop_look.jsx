import React from "react";
import img from "../assets/lookbook-3.jpg";
import img1 from "../assets/lookbook-4.jpg";
const Shop_look = () => {
  return (
    <div>
      <div className="flex justify-center">
        <a
          type="button"
          className=" text-[16px] mt-10 px-8 py-3.5 mb-10 border rounded-md  border-black hover:text-[#ff0000] transition-all duration-100 ease-linear"
        >
          Load More
        </a>
      </div>
      <div>
        <h1 className="text-[40px] text-center mt-20">Shop The Look</h1>
        <p className="text-center mt-6 pb-10">
          Inspire and let yourself be inspired, from one unique fashion to
          another.
        </p>
        <div className="flex justify-center items-center max-w-[1435px] pb-20 ">
          <img src={img} alt="one" />
          <img src={img1} alt="two" />
        </div>
      </div>
    </div>
  );
};

export default Shop_look;
