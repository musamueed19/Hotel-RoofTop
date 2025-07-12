import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


// import swiperItems
import {swiperItems} from "../constants/constant"

const Hero = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 md:gap-x-4 gap-y-8 py-6 md:h-fit">
      {/* Text */}
      <div className="h-full flex flex-col text-center justify-center gap-4">
        <h1 className="capitalize text-3xl md:text-4xl font-bold px-2 md:px-6">
          Hotels with rooftop pools near me
        </h1>
        <p className="px-2">
          Discovering hotels with rooftop pools near you! Whether you're
          planning a luxurious staycation or a weekend gateway, our curated
          selection of hotels with rooftop pools will help you beat the heat and
          elevate your travel experience.
        </p>
      </div>

      {/* Img */}
      <div className="flex w-full h-full items-center justify-center">
        <Swiper
          spaceBetween={20}
          pagination={{
            type: "progressbar",
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper overflow-hidden rounded-b-2xl"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {swiperItems.map((item, index) => (
            <SwiperSlide>
              <img
                src={item.img}
                alt=""
                className="object-cover overflow-hidden rounded-b-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
