import React from "react";
import Slider from "react-slick";
import img1 from "../assets/fashion-slideshow-01.jpg";
import img2 from "../assets/fashion-slideshow-02.jpg";
import img3 from "../assets/fashion-slideshow-03.jpg";

const Header_Part = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="relative">
          <img src={img1} alt="Slide 1" />
          <div className="absolute top-[400px] left-12 ">
            <h1 className="text-[80px] font-normal">
              Glamorous <br /> Glam
            </h1>
            <p className="mt-6 text-black font-normal text-[20px]">From Casual To Formal,We've Got You Covered</p>
            <button  className="mt-6 px-6 py-2 bg-black rounded-md text-white font-bold">Shop Collection &gt;</button>
          </div>
        </div>
        <div className="relative">
          <img src={img2} alt="Slide 1" />
          <div className="absolute top-[400px] left-12 ">
            <h1 className="text-[80px] font-normal">
              Simple <br /> Style
            </h1>
            <p className="mt-6 text-black font-normal text-[20px]">From Casual To Formal,We've Got You Covered</p>
            <button  className="mt-6 px-6 py-2 bg-black rounded-md text-white font-bold">Shop Collection &gt;</button>
          </div>
        </div>
        <div className="relative">
          <img src={img3} alt="Slide 1" />
          <div className="absolute top-[400px] left-12 ">
            <h1 className="text-[80px] font-normal">
              Glamorous <br /> Glam
            </h1>
            <p className="mt-6 text-black font-normal text-[20px]">From Casual To Formal,We've Got You Covered</p>
            <button  className="mt-6 px-6 py-2 bg-black rounded-md text-white font-bold">Shop Collection &gt;</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Header_Part;
