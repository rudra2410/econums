import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../assets/collection-17.jpg";
import img2 from "../assets/collection-14.jpg";
import img3 from "../assets/collection-18.jpg";
import img4 from "../assets/collection-15.jpg";
import img5 from "../assets/collection-20.jpg";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import { FaLocationArrow } from "react-icons/fa6";

export function Swipper() {
  return (
    <>
      <div className="flex p-6 space-x-2">
        <FaAngleLeft className="border-2 rounded-full size-8" />
        <FaAngleRight className="border-2 rounded-full size-8" />
        <h1 className="text-black font-medium uppercase text-[24px]">
          Shop by Categories
        </h1>
      </div>
      <Container className="max-w-7xl mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper pb-40"
        >
          <SwiperSlide>
            <div className="relative">
              <img src={img1} alt="First" className="" />
              <h1 className="absolute bottom-10 bg-[#fff] rounded px-6 py-2.5 left-4 hover:bg-black transition-all ease-linear hover:text-white hover:font-bold tracking-wider duration-200">
                Clothing
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={img2} alt="second" />
              <h1 className="absolute bottom-10 bg-[#fff] rounded px-6 py-2.5 left-4 hover:bg-black transition-all ease-linear hover:text-white hover:font-bold tracking-wider duration-200">
                Sunglasses
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img3} alt="third" />
              <h1 className="absolute bottom-10 bg-[#fff] rounded px-6 py-2.5 left-4 hover:bg-black transition-all ease-linear hover:text-white hover:font-bold tracking-wider duration-200">
                Bags
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 border-black size-[435px]">
              <h1 className="absolute bottom-10 left-6 text-3xl leading-[45px] text-start p-2">
                Discovery all new items{" "}
                  <FaLocationArrow className="mt-4 text-[40px]"/>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img4} alt="four" />
              <h1 className="absolute bottom-10 bg-[#fff] rounded px-6 py-2.5 left-4 hover:bg-black transition-all ease-linear hover:text-white hover:font-bold tracking-wider duration-200">
                Fashion
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img5} alt="five" />
              <h1 className="absolute bottom-10 bg-[#fff] rounded px-6 py-2.5 left-4 hover:bg-black transition-all ease-linear hover:text-white hover:font-bold tracking-wider duration-200">
                Accessories
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}

export default Swipper;
