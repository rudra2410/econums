import React from "react";
import img from "../assets/img-p2.png";
import img1 from "../assets/img-p3.png";
import img2 from "../assets/img-p4.png";
import img3 from "../assets/brand-01.png"
import img4 from "../assets/brand-02.png"
import img5 from "../assets/brand-03.png"
import img6 from "../assets/brand-04.png"
import img7 from "../assets/brand-05.png"
import img8 from "../assets/brand-06.png"
import { FaStar } from "react-icons/fa";

const Happy_client = () => {
  return (
    <>
      <div>
        <h1 className="text-[40px] text-center tracking-wide">Happy Clients</h1>
        <p className="text-center mt-4 text-[16px]">
          Hear what they say about us
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 pb-20">
        <div class="border rounded-md shadow-md p-4">
          <div>
            <div class="flex space-x-2 text-[20px] mb-4 mt-4">
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
            </div>
          </div>
          <h3 class="font-bold text-lg mb-2">Best Online Fashion Site</h3>
          <p class="text-gray-600 mb-4 text-[18px] mt-4">
            “ I always find something stylish and affordable on this web fashion
            site ”
          </p>
          <div class="font-semibold space-y-2 mb-8">
            <p>Robert Smith</p>
            <p class="text-gray-500 font-normal text-sm pb-6 capitalize">
              Customer from USA
            </p>
            <hr />
          </div>
          <div class="flex items-center">
            <img src={img} alt="Product" class="h-20 mr-4 rounded" />
            <div className="space-y-3">
              <p class="font-normal">Cotton Jersey Top</p>
              <p class="text-black">$7.95</p>
            </div>
          </div>
        </div>
        <div class="border rounded-md shadow-md p-4">
          <div>
            <div class="flex space-x-2 text-[20px] mb-4 mt-4">
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
            </div>
          </div>
          <h3 class="font-bold text-lg mb-2">Great Selection and Quality</h3>
          <p class="text-gray-600 mb-4 text-[18px] mt-4">
            “I love the variety of styles and the high-quality clothing on this
            web fashion site.”
          </p>
          <div class="font-semibold space-y-2 mb-8">
            <p>Allen Lyn</p>
            <p class="text-gray-500 font-normal text-sm pb-6 capitalize">
              Customer from France
            </p>
            <hr />
          </div>
          <div class="flex items-center">
            <img src={img1} alt="Product" class="h-20 mr-4 rounded" />
            <div className="space-y-3">
              <p class="font-normal">Cotton Jersey Top</p>
              <p class="text-black">$7.95</p>
            </div>
          </div>
        </div>
        <div class="border rounded-md shadow-md p-4">
          <div>
            <div class="flex space-x-2 text-[20px] mb-4 mt-4">
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
              <FaStar className="text-[#FF7B54]" />
            </div>
          </div>
          <h3 class="font-bold text-lg mb-2">Best Customer Service</h3>
          <p class="text-gray-600 mb-4 text-[18px] mt-4">
            “I finally found a web fashion site with stylish and flattering options in my size.”
          </p>
          <div class="font-semibold space-y-2 mb-8">
            <p>Peter Rope</p>
            <p class="text-gray-500 font-normal text-sm pb-6">
              Customer from USA
            </p>
            <hr />
          </div>
          <div class="flex items-center">
            <img src={img2} alt="Product" class="h-20 mr-4 rounded" />
            <div className="space-y-3">
              <p class="font-normal">Ribbed Model T-Shirt</p>
              <p class="text-black">$18.95</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <img src={img3} alt="1" className="size-60" />
        <img src={img4} alt="2" className="size-60" />
        <img src={img5} alt="3" className="size-60" />
        <img src={img6} alt="4" className="size-60" />
        <img src={img7} alt="5" className="size-60" />
        <img src={img8} alt="6" className="size-60" />
      </div>
    </>
  );
};
export default Happy_client;
