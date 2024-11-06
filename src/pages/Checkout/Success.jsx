import React from "react";
import Nav from "../../components/navigator/Nav";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/Button";

export default function Success() {
  const navigate = useNavigate();
  return (
    <div className=" h-screen">
      <Nav dark={true} />
      <div className="flex flex-col justify-center items-center text-center md:gap-10 gap-5 h-[calc(100vh-96px)] ">
        <div className="md:w-24 w-12 aspect-square rounded-full bg-green-500/80 flex justify-center items-center">
          <FaCheck className=" md:text-4xl text-2xl  text-white" />
        </div>
        <h2 className=" md:text-6xl text-2xl uppercase font-serif">
          Payment Success!
        </h2>
        <p className="text-black/50 md:w-[70%] w-[90%] md:text-base text-[10px]">
          Lean back and relax, knowing our team is hard at work preparing and
          shipping your package swiftly. Feel free to browse our diverse product
          selection during this time – you might discover another item you'd
          like to add to your collection!
        </p>
        <Button
          title="Back To Home"
          className="w-1/3"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}
