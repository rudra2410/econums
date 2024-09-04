import React from "react";
import img1 from "../assets/gallery-7.jpg";
import img2 from "../assets/gallery-3.jpg";
import img3 from "../assets/gallery-5.jpg";
import img4 from "../assets/gallery-8.jpg";
import img5 from "../assets/gallery-6.jpg";
import { LiaCubeSolid } from "react-icons/lia";
import { CiCreditCard1 } from "react-icons/ci";
import { PiArrowElbowDownLeftBold } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";

const Shop_Gram = () => {
  return (
    <>
      <div>
        <h1 className="text-[40px] text-center tracking-wide">Shop Gram</h1>
        <p className="text-center mt-4 text-[16px] mb-20">
          Inspire and let yourself be inspired, from one unique fashion to
          another
        </p>
        <div className="size-[280px] flex flex-row space-x-3 items-center pb-20 ml-12">
          <img src={img1} className="hover:scale-110" alt="1" />
          <img src={img2} className="rounded-md hover:scale-115" alt="2" />
          <img src={img3} className="rounded-md hover:scale-115" alt="3" />
          <img src={img4} className="rounded-md hover:scale-115" alt="4" />
          <img src={img5} className="rounded-md hover:scale-115" alt="5" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around space-y-4 md:space-y-0 md:space-x-4 mt-8 px-4 md:px-0">
        <div className="flex w-[20vw] flex-col items-center justify-center p-6 border rounded-lg shadow-md bg-white">
          <div className="mb-4">
            <LiaCubeSolid className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-lg font-bold text-black mb-2">Free Shipping</h3>
          <p className="text-sm text-gray-500">Free shipping over order $120</p>
        </div>
        <div className="flex w-[20vw] flex-col items-center justify-center p-6 border rounded-lg shadow-md bg-white">
          <div className="mb-4">
            <CiCreditCard1 className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-lg font-bold text-black mb-2">
            Flexible Payment
          </h3>
          <p className="text-sm text-gray-500">
            Pay with Multiple Credit Cards
          </p>
        </div>
        <div className="flex w-[20vw] flex-col items-center justify-center p-6 border rounded-lg shadow-md bg-white">
          <div className="mb-4">
            <PiArrowElbowDownLeftBold  className="w-8 h-8 text-black"/>
          </div>
          <h3 className="text-lg font-bold text-black mb-2">14 Day Returns</h3>
          <p className="text-sm text-gray-500">
            Within 30 days for an exchange
          </p>
        </div>
        <div className="flex w-[20vw] flex-col items-center justify-center p-6 border rounded-lg shadow-md bg-white">
          <div className="mb-4">
          <MdSupportAgent  className="w-8 h-8 text-black"/>
          </div>
          <h3 className="text-lg font-bold text-black mb-2">Premium Support</h3>
          <p className="text-sm text-gray-500">Outstanding premium support</p>
        </div>
      </div>
    </>
  );
};

export default Shop_Gram;
