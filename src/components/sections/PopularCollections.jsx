import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../ui/Carousel";

const PopularCollections = () => {
  const [products, setProducts] = useState([]);
  const popularBgColors = ["#DCEDEC", "#ECDCED", "#EDECDC"];
  const popularProducts = products.filter(
    (product) =>
      product?.rating?.rate > 3 &&
      (product?.category == "men's clothing" ||
        product?.category == "women's clothing")
  );
  console.log("po", popularProducts);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const items = popularProducts.map((product, index) => (
    <div key={product?.id} className="my-4">
      <div className="group border border-gray-100 shadow-lg shadow-gray-300 w-full h-[350px] flex flex-col items-center justify-between">
        <div className="px-4 py-8 group-hover:scale-110 transition-all ease-out duration-300">
          <img
            src={product?.image}
            alt="item"
            className="w-[150px] max-h-[200px] object-cover"
          />
        </div>
        <h1
          className={`bg-[${
            popularBgColors[index % 3]
          }] text-[#1E1E1E] w-full h-[80px] flex items-center justify-center text-center px-4`}
        >
          {product?.title}
        </h1>
      </div>
    </div>
  ));
  return (
    <div className="py-20">
      <h1 className="raleway-semibold text-3xl text-center mb-4 uppercase">
        popular collections
      </h1>
      <p className="roboto-light text-[#343434] text-base text-center mb-10">
        Collections That Are Stealing the Spotlight
      </p>

      <div className="container mx-auto">
        <Carousel items={items} />
      </div>
    </div>
  );
};

export default PopularCollections;
