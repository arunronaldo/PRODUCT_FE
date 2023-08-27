/* eslint-disable jsx-a11y/alt-text */
/***************Import React packages**************************/
import React from "react";
import Slider from "react-slick";

/***************Import CSS**************************/
import "./banner.css";

/***************Import Images**************************/
import banner1 from "../../assets/images/banner1.jpeg";
import banner2 from "../../assets/images/banner2.jpeg";

const BannerImages = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    pauseOnHover: true,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
      </Slider>
    </div>
  );
};

export default BannerImages;
