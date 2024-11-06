import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SliderCard({ product }) {
  const navigate = useNavigate();
  const formatTitle = (title) => {
    if (title.length > 15) {
      return title.slice(0, 15) + " ...";
    }
    return title;
  };
  return (
    <div className="w-full sm:h-[400px] h-[250px]  bg-white  ">
      <button className="  w-full h-[80%]  bg-primary/10 hover:bg-primary/60 flex justify-center items-center relative">
        <img
          onClick={() => {
            navigate("/product-details", {
              state: { product },
            });
          }}
          src={product.images[0]}
          alt={product.name}
          className="w-[80%] h-[75%] object-cover "
        />
        <span className=" absolute sm:px-2 sm:py-1 px-1 py-[2px] rounded-full bg-primary top-4 right-4 sm:text-xs text-[8px] text-white flex items-center justify-center gap-1">
          <FaStar color="gold" />
          {product.rating}
        </span>
      </button>
      <div className="w-full h-[20%]  flex flex-col  justify-between capitalize text-start  sm:pt-3 pt-1 relative">
        <p className="text-black/50 sm:text-xs text-[8px] ">
          {product.category}
        </p>

        <p className="font-semibold sm:text-lg text-xs font-serif">
          {formatTitle(product.title)}
        </p>
        <div className="flex items-center gap-2">
          <p className=" text-primary font-semibold sm:text-base text-[10px]">
            $
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(1)}
          </p>
          <p className="text-black/50 line-through sm:text-xs text-[8px]">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
