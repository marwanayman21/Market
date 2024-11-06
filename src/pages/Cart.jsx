import React, { useContext, useMemo, useState } from "react";
import { CartContext } from "../context/CartContext";
import Nav from "../components/navigator/Nav";
import Button from "../components/buttons/Button";
import { CiTrash } from "react-icons/ci";
import WhiteBtn from "../components/buttons/WhiteBtn";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [loginMsg, setLoginMsg] = useState(true);
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const { loggedIn } = useContext(AuthContext);
  const totalQuantity = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (loggedIn) {
      navigate("/personalInfo");
    } else {
      setLoginMsg(false);
    }
  };

  return (
    <div>
      <Nav dark={true} />
      <div className="flex md:flex-row flex-col gap-20">
        <div className="flex flex-col md:gap-10 gap-5 md:w-2/3 md:p-10 p-2 pb-48 md:pb-10">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex w-full md:gap-10 gap-3 md:h-40 h-32"
            >
              <div className="h-full w-32 bg-primary/10">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-[100%] h-[100%] object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between w-full py-2">
                <h2 className="md:text-2xl text-base uppercase">
                  {item.title}
                </h2>
                <p className="md:text-lg text-sm text-black/30">
                  ${item.price * item.quantity}
                </p>
                <div className="flex w-full items-center justify-between">
                  <div className="md:h-10 md:w-28 h-6 w-16 md:text-base text-xs border-2 border-black grid grid-cols-3 items-center">
                    <button
                      className="hover:bg-primary hover:text-white h-full w-full"
                      onClick={() => decreaseQuantity(item)}
                    >
                      -
                    </button>
                    <p className="text-center">{item.quantity}</p>
                    <button
                      className="hover:bg-primary hover:text-white h-full w-full"
                      onClick={() => increaseQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-black/50 flex items-center border-b-[1px] border-black/30 md:text-sm text-[10px] hover:text-red-500 hover:border-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <CiTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/3 md:p-10 p-5 flex flex-col md:gap-10 gap-4 fixed md:right-0 md:bottom-auto bottom-0 md:bg-white bg-primary md:text-black text-white w-full">
          <h2 className="md:text-4xl uppercase">Shopping Info</h2>
          <div className="flex justify-between md:text-black/50 text-white/50">
            <p>Total Quantity</p>
            <p>{totalQuantity}</p>
          </div>
          <div className="flex justify-between md:text-black/50 text-white/50">
            <p>Total Price</p>
            <p>${totalPrice}</p>
          </div>

          <Button
            title="CHECKOUT"
            className="md:flex hidden"
            onClick={handleCheckout}
          />
          <WhiteBtn
            title="CHECKOUT"
            className="md:hidden block self-center py-1 w-full"
            removeIcon={true}
            onClick={handleCheckout}
          />
          <div
            className={`flex gap-1 text-[10px] md:text-base m-auto ${
              loginMsg && " hidden"
            }`}
          >
            <span>You need to</span>
            <button
              className="font-serif font-semibold hover:text-primary"
              onClick={() => navigate("/auth/signup")}
            >
              Register
            </button>
            <span> or</span>
            <button
              className="font-serif font-semibold hover:text-primary"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </button>
            <span>to continue</span>
          </div>
        </div>
      </div>
    </div>
  );
}
