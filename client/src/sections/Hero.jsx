import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 px-2 md:px-4 py-6 md:h-[30rem]">
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
        <img
          src="/images/carousel/img1.png"
          alt=""
          className="object-contain rounded-xl overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
