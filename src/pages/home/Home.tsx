import React from "react";
import Navber from "../../components/nav/Navber";
import Slider from "../../components/slider/Slider";
import image1 from "../../assets/images/slider-1.jpg";
import image2 from "../../assets/images/slider-2.jpg";
import image3 from "../../assets/images/slider-3.jpg";
import image4 from "../../assets/images/slider-4.jpg";
import Product from "../../components/product/Product";

const Home: React.FC = () => {
  const images = [
    {src:image1, text:"Image One Text"},
    {src:image2, text:"Image Two Text"},
    {src:image3, text:"Image Three Text"},
    {src:image4, text:"Image Four Text"},
  ];
  return (
    <div>
      <Navber />
      <Slider images={images} autoplayInterval={5000} />
      
      <Product />
    </div>
  );
};

export default Home;
