import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <div className="bg-gray-100 w-[100%] h-[8vh] grid grid-cols-3 items-center">
      <div className="p-2 flex space-x-3 ml-10">
        <div className="w-9 h-9 bg-gray-300 rounded-full flex justify-center items-center hover:bg-[#3b5998] transition-all ease-linear">
          <FaFacebookF className="text-[14px] cursor-pointer" />
        </div>
        <div className="w-9 h-9 bg-gray-300 rounded-full flex justify-center items-center hover:bg-[#555555] transition-all ease-linear">
          <FaXTwitter className="text-[14px] cursor-pointer" />
        </div>
        <div className="w-9 h-9 bg-gray-300 rounded-full flex justify-center items-center hover:bg-pink-500 transition-all ease-linear">
          <FaInstagram className="text-[14px] cursor-pointer" />
        </div>
        <div className="w-9 h-9 bg-gray-300 rounded-full flex justify-center items-center hover:bg-[#ff8e51] transition-all ease-linear">
          <FaTiktok className="text-[14px] cursor-pointer" />
        </div>
        <div className="w-9 h-9 bg-gray-300 rounded-full flex justify-center items-center hover:bg-red-500 transition-all ease-linear">
          <FaPinterest className="text-[14px] cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-center">Summer Sale Discount Off 90%</div>
      <div className="flex justify-end">
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle
            id="dropdown-autoclose-tre"
            className="bg-transparent text-black font-bold mr-8"
          >
            USA
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">France</Dropdown.Item>
            <Dropdown.Item href="#">Germany</Dropdown.Item>
            <Dropdown.Item href="#">United States</Dropdown.Item>
            <Dropdown.Item href="#">Vietnam</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2" autoClose="inside">
          <Dropdown.Toggle
            id="dropdown-autoclose-inside"
            className="bg-transparent text-black font-bold mr-10"
          >
            English
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Hindi</Dropdown.Item>
            <Dropdown.Item href="#">Gujarati</Dropdown.Item>
            <Dropdown.Item href="#">English</Dropdown.Item>
            <Dropdown.Item href="#">Spain</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
