import React from "react";

const PopularCategories = () => {
  return (
    <div className="py-20">
      <h1 className="raleway-semibold text-3xl text-center mb-4 uppercase">
        popular categories
      </h1>
      <p className="roboto-light text-[#343434] text-base text-center mb-10">
        Browse Our Most-Loved Categories
      </p>

      <div className="flex gap-4 container mx-auto">
        <div className="flex flex-col items-center w-full">
          <div className="bg-[#EDECDC] w-full h-[200px] flex justify-center items-center mb-4 group">
            <img
              src="/images/shoes.png"
              alt="shoes"
              className="w-[150px] group-hover:scale-110 transition-all ease-out duration-300"
            />
          </div>
          <h1 className="raleway-semibold text-xl 3xl:text-2xl uppercase text-center">
            Shoes
          </h1>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="bg-[#DCEDEC] w-full h-[200px] flex justify-center items-center mb-4 group">
            <img
              src="/images/bag.png"
              alt="bags"
              className="w-[120px] group-hover:scale-110 transition-all ease-out duration-300"
            />
          </div>
          <h1 className="raleway-semibold text-xl 3xl:text-2xl uppercase text-center">
            Bags
          </h1>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="bg-[#ECDCED] w-full h-[200px] flex justify-center items-center mb-4 group">
            <img
              src="/images/shirts.png"
              alt="shirts"
              className="w-[120px] group-hover:scale-110 transition-all ease-out duration-300"
            />
          </div>
          <h1 className="raleway-semibold text-xl 3xl:text-2xl uppercase text-center">
            Shirts
          </h1>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="bg-[#EDECDC] w-full h-[200px] flex justify-center items-center mb-4 group">
            <img
              src="/images/Watch.png"
              alt="watch"
              className="w-[120px] group-hover:scale-110 transition-all ease-out duration-300"
            />
          </div>
          <h1 className="raleway-semibold text-xl 3xl:text-2xl uppercase text-center">
            Watches
          </h1>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="bg-[#DCEDEC] w-full h-[200px] flex justify-center items-center mb-4 group">
            <img
              src="/images/skirts.png"
              alt="skirts"
              className="w-[120px] group-hover:scale-110 transition-all ease-out duration-300"
            />
          </div>
          <h1 className="raleway-semibold text-xl 3xl:text-2xl uppercase text-center">
            Skirts
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
