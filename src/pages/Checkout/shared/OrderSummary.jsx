import React, { useContext, useMemo } from "react";
import { CartContext } from "../../../context/CartContext";

export default function OrderSummary() {
  const { cart } = useContext(CartContext);
  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);
  return (
    <div className="md:block hidden">
      <h2 className="text-2xl mb-5 font-semibold">ORDER SUMMARY</h2>
      <div className="flex flex-col items-center justify-center gap-3">
        {cart.map((item, index) => (
          <div key={index} className="flex w-full md:gap-3 gap-3 md:h-36 h-32">
            <div className="h-full w-32 bg-primary/10 flex justify-center items-center">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-[100%] aspect-square object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col w-full gap-3">
              <h2 className=" uppercase">{item.title}</h2>
              <p className="text-black/30 ">x{item.quantity}</p>
              <p className="">${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between font-semibold mr-10 mt-5 text-lg">
        <p>Total Price</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
}
