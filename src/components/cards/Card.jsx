import React, { useContext } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { motion } from "framer-motion";
import { BsCartPlus } from "react-icons/bs";
import { BsCartX } from "react-icons/bs";

export default function Card({ product, index }) {
  const totalStars = 5;
  const navigate = useNavigate();
  const { addToCart, cart } = useContext(CartContext);
  const existProduct = cart.find((item) => item.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 * index }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          duration: 1,
        },
      }}
      className="w-full sm:h-[400px] h-[250px] sm:p-3 p-2 rounded-lg shadow-lg bg-white  "
    >
      <button className="  w-full h-[60%] rounded-md bg-primary/10 hover:bg-primary/30 flex justify-center items-center relative">
        <img
          onClick={() => {
            navigate("/product-details", {
              state: { product },
            });
          }}
          src={product.images[0]}
          alt={product.name}
          className="w-[100%] h-[100%] object-cover rounded-md"
        />
      </button>
      <div className="w-full h-[40%]  flex flex-col items-center justify-between capitalize text-center pt-5 relative">
        <button
          onClick={() => {
            addToCart(product);
          }}
          className={`h-10 w-10 flex justify-center items-center bg-white shadow
          rounded-full  absolute -top-5 left-1/2
          -translate-x-1/2  z-30 duration-300
          ${
            existProduct
              ? " text-red-600 hover:text-white hover:bg-red-600"
              : "text-green-600 hover:bg-green-600 hover:text-white"
          }
          `}
        >
          {existProduct ? <BsCartX /> : <BsCartPlus />}
        </button>
        <p className="text-black/50 sm:text-sm text-[10px] ">
          {product.category}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-primary sm:text-sm text-[8px]">
            {Array.from({ length: totalStars }, (_, index) =>
              index < product.rating ? (
                <FaStar key={index} />
              ) : (
                <FaRegStar key={index} />
              )
            )}
          </div>
          <p className="sm:text-xs text-[8px] text-black/50">
            ({product.rating})
          </p>
        </div>

        <p className="font-semibold sm:text-base text-xs">{product.title}</p>
        <div className="flex justify-center items-center gap-2">
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
    </motion.div>
  );
}
