import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderCard from "./cards/SliderCard";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const Carousel = ({ products }) => {
  return (
    <div className=" md:p-5 p-3 text-center w-full mx-auto bg-white text-black">
      <Slider {...settings} arrows={false}>
        {products.map((product, i) => (
          <div key={i} className="sm:p-5 p-1">
            <SliderCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
