import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/navigator/Nav";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import Button from "../components/buttons/Button";
import { motion } from "framer-motion";

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;
  const { addToCart } = useContext(CartContext);
  const [img, setImg] = useState(product.images[0]);
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  // const cartItem = (product) => {
  //   const item = cart.find((item) => item.id === product.id);
  //   return item;
  // };
  const cartItem = cart.find((item) => item.id === product.id);
  // const disableBtn = (item) => {
  //   if (item.quantity) {
  //     return item.quantity === 0;
  //   }
  // };
  return (
    <div>
      <div className="md:h-24 h-16">
        <Nav dark={true} />
      </div>
      <div className=" w-full grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 md:p-10 md:gap-20 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:h-[70vh] h-[50vh] gap-5 flex flex-col"
        >
          <div className="w-full h-[90%] bg-gradient flex justify-center items-center">
            <img
              src={img}
              alt={product.name}
              className="w-[60%] h-[100%] object-cover "
            />
          </div>
          <div className="flex h-[10%] items-end gap-3 mx-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={` h-[100%] flex justify-center items-center aspect-square bg-primary/10 rounded ${
                  img === image && "bg-primary/60"
                }`}
                onClick={() => setImg(image)}
              >
                <img
                  src={image}
                  alt={product.name}
                  className="w-[90%] h-[90%] object-cover "
                />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-full flex flex-col justify-between gap-4 p-3 md:p-0 md:text-base text-xs"
        >
          <div className="flex justify-between items-center text-black/50  ">
            <p className=" capitalize ">{product.category}</p>
            <div className="flex justify-between items-center">
              <FaStar color="gold" />
              <p>{product.rating}</p>
            </div>
          </div>
          <h1 className="md:text-6xl text-2xl md:leading-[80px] font-serif">
            {product.title}
          </h1>
          <div className="flex flex-col justify-start gap-2">
            <p className="text-black/50 line-through ">${product.price}</p>
            <p className=" text-primary font-semibold md:text-2xl">
              $
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(1)}
            </p>
          </div>
          <p>{product.description}</p>
          <div className="flex gap-5 ">
            <div className="md:h-10 md:w-28 h-6 w-16 md:text-base text-xs border-2 border-black grid grid-cols-3   items-center  ">
              <button
                className="hover:bg-primary hover:text-white h-full w-full  "
                onClick={() => {
                  cartItem && decreaseQuantity(cartItem);
                }}
              >
                -
              </button>
              <p className="text-center">{cartItem ? cartItem.quantity : 0}</p>
              <button
                className="hover:bg-primary hover:text-white h-full w-full  "
                onClick={() => {
                  cartItem ? increaseQuantity(cartItem) : addToCart(product);
                }}
              >
                +
              </button>
            </div>
            <Button
              title={cartItem ? "REMOVE FROM CART" : " ADD TO CART"}
              className="w-full"
              onClick={() => addToCart(product)}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductDetail;
