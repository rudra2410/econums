import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

function Best_Seller({ img, hover, name, prize }) {
  // const [data, setData] = useState([]);

  // console.log(data);

  // const products = async () => {
  //   const res = await axios.get("http://localhost:3000/products");
  //   setData(res.data);
  //   console.log(res.data.products);
  // };

  // useEffect(() => {
  //   products();
  // }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-2 slg:grid-cols-3 justify-center">
        {/* {data.map((products) => (
          <div key={products.id}>
            <div className="box w-32 vsm:w-40 lmd:w-52 relative mx-auto md:mx-7 my-4">
              {
                <div className="relative"> */}
        {/* <img
                  src={products.img1}
                  className="md:max-w-[290px] duration-100 ease-in-out hover:transition-all opacity-100 hover:opacity-0 hover:scale-100 rounded-[14px]"
                  alt="Imagem de perfil"
                />
                <img
                  src={products.img2}
                  className="md:max-w-72 absolute top-0 left-0 z-0 opacity-0 hover:ease-linear hover  :duration-700 hover:transition-all hover:scale-100 hover:opacity-100"
                  alt="Nova imagem"
                  /> */}
        <div class="image-container">
          <img src={img} class="image1 hover:scale-125" />
          <img src={hover} class="image2" />
          {/* <div className="flex opacity-0 group-hover:opacity-100 duration-500  absolute left-2 vsm:left-5 lmd:left-8 md:left-20 top-[110px] vsm:top-[150px] lmd:top-[200px] md:top-80">
                      <CiHeart className="size-7 lmd:size-9 mx-1 border-2 rounded-full p-1 bg-white hover:bg-black hover:text-white mt-3" />
                      <FaRegEye className="size-7 mx-1 lmd:size-9 border-2 rounded-full p-1 bg-white hover:bg-black hover:text-white mt-3" />
                      <LuShoppingBag className="size-7 lmd:size-9 mx-1 border-2 rounded-full bg-white p-1 hover:bg-black hover:text-white mt-3" />
                      </div> */}
          {/* </div>
                </div>
                } */}
        </div>
      </div>
      <div className="mt-3">
        <h1 className="md:text-[16px] capitalize font-medium text-gray-800">
          {name}
        </h1>
        <h3 className="vsm:text-md text-gray-800 mt-2.5">{prize}</h3>
        <div className="flex space-x-2">
          <h1 className="border border-solid border-black rounded-full size-6 mt-4 bg-orange-500"></h1>
          <h1 className="border border-solid border-black rounded-full size-6 mt-4 bg-black"></h1>
          <h1 className="border border-solid border-black rounded-full size-6 mt-4 bg-gray-500"></h1>
          <h1 className="border border-solid border-black rounded-full size-6 mt-4 bg-purple-500"></h1>
        </div>
      </div>
    
    </div>
  );
}

export default Best_Seller;
