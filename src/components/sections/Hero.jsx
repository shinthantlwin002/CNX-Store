import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="flex container mx-auto gap-6">
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src="/images/hero-section-left.png"
          alt="outfit"
          className="w-full"
        />
      </div>
      <div className="w-full h-[70vh] bg-[#DCEDEC] flex flex-col items-center justify-center">
        <p className="roboto-regular text-sm mb-6">
          🔥 Up to 50% off almost everything
        </p>
        <h1 className="raleway-semibold text-4xl uppercase text-center mb-10">
          Your offer <br /> cyber monday
        </h1>
        <Button className="bg-white text-[#1E1E1E] px-10 py-2">Shop Now</Button>
      </div>
    </div>
  );
};

export default Hero;
