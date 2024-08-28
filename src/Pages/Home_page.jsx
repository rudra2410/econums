import React from "react";
import Header_Part from "../Component/Header_Part";
import Scroll from "../Component/Scroll";
import Swipper from "../Component/Swipper";
import Best_Seller from "../Component/Best_Seller";

const Home_page = () => {
  return (
    <div>
      <Header_Part />
      <Scroll />
      <Swipper />
      <Best_Seller />
    </div>
  );
};

export default Home_page;
