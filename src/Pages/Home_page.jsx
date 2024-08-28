import React from "react";
import Header_Part from "../Component/Header_Part";
import Scroll from "../Component/Scroll";
import Swipper from "../Component/Swipper";
import Best_Seller from "../Component/Best_Seller";
import Shop_look from "../Component/Shop_look";

const Home_page = () => {
  return (
    <div>
      <Header_Part />
      <Scroll />
      <Swipper />
      <div className="grid lg:grid-cols-4 grid-cols-2 slg:grid-cols-3 justify-center ml-10 gap-10">
        <Best_Seller
          img="https://themesflat.co/html/ecomus/images/products/orange-1.jpg"
          hover="https://themesflat.co/html/ecomus/images/products/white-1.jpg"
          name="Ribbed Tank Top"
          prize="$16.95"
        />
        <Best_Seller
          img="https://themesflat.co/html/ecomus/images/products/brown.jpg"
          hover="https://themesflat.co/html/ecomus/images/products/purple.jpg"
          name="Ribbed Model T-Shirt"
          prize="$18.95"
        />
        <Best_Seller
          img="https://themesflat.co/html/ecomus/images/products/white-3.jpg"
          hover="https://themesflat.co/html/ecomus/images/products/white-4.jpg"
          name="Oversized Printed T-shirt"
          prize="$10.00"
        />
        <Best_Seller
          img="https://themesflat.co/html/ecomus/images/products/white-2.jpg"
          hover="https://themesflat.co/html/ecomus/images/products/pink-1.jpg"
          name="Oversized Printed T-shirt"
          prize="$16.95"
        />
        <Best_Seller
          img="https://themesflat.co/html/ecomus/images/products/brown-2.jpg"
          hover="https://themesflat.co/html/ecomus/images/products/brown-3.jpg"
          name="V-neck linen T-shirt"
          prize="$114.95"
        />
        <Best_Seller
          img="https://themesflat.co/html/ecomus/images/products/light-green-1.jpg "
          hover="https://themesflat.co/html/ecomus/images/products/light-green-2.jpg"
          name="Loose Fit Sweatshirt"
          prize="$10.00"
        />
        <Best_Seller
          img="https://themesflat.co/html/ecomus/images/products/black-4.jpg"
          hover="https://themesflat.co/html/ecomus/images/products/black-5.jpg"
          name="Regular Fit Oxford Shirt"
          prize="$10.00"
        />
        <Best_Seller
          img="https://themesflat.co/html/ecomus/images/products/white-8.jpg"
          hover="https://themesflat.co/html/ecomus/images/products/black-6.jpg"
          name="Loose Fit Hoodie"
          prize="$9.95"
        />
      </div>
      <Shop_look />
    </div>
  );
};

export default Home_page;
