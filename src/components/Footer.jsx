import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary w-full text-white/50 underline-offset-4  md:text-xs text-[8px] ">
      <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 mx-auto p-4 pt-6 md:p-6 md:px-20 md:gap-20 gap-5">
        <div className="flex flex-col md:gap-3 gap-1 ">
          <h3 className="text-white md:text-3xl text-lg font-light font-serif">
            Martian Market
          </h3>
          <div className=" flex justify-between items-center">
            <p>WhatsApp</p>
            <p>+20 102 309 6263</p>
          </div>
          <div className=" flex justify-between items-center">
            <p>Email</p>
            <p>karimoda66@gmail.com</p>
          </div>
          <div className=" flex justify-between items-center">
            <p>WhatsApp</p>
            <p>+20 102 309 6263</p>
          </div>
        </div>
        <div className="flex flex-col md:gap-3 gap-1 ">
          <h3 className="text-white md:text-xl text-sm font-semibold">Menu </h3>
          <p className="hover:underline cursor-pointer">Sale</p>
          <p className="hover:underline cursor-pointer">New Arrivals</p>
          <p className="hover:underline cursor-pointer">Formal Men</p>
          <p className="hover:underline cursor-pointer">Formal Woman</p>
          <p className="hover:underline cursor-pointer">Casual Men</p>
          <p className="hover:underline cursor-pointer">Casual Woman</p>
        </div>
        <div className="flex flex-col md:gap-3 gap-1 ">
          <h3 className="text-white md:text-xl text-sm font-semibold">
            Get Help
          </h3>
          <p className="hover:underline cursor-pointer">FAQ</p>
          <p className="hover:underline cursor-pointer">Customer Service</p>
          <p className="hover:underline cursor-pointer">Refund and Return</p>
          <p className="hover:underline cursor-pointer">Terms and Conditions</p>
          <p className="hover:underline cursor-pointer">Shipping</p>
        </div>
        <div className="flex flex-col md:gap-3 gap-1 ">
          <h3 className="text-white md:text-xl text-sm font-semibold">
            About Us
          </h3>
          <p>
            We are a team of passionate individuals who are dedicated to
            providing the best shopping experience for our customers.
          </p>
        </div>
      </div>
      <p className=" text-center pb-5 md:text-lg text-sm">
        Copyright ©2023 By Martian Market Fashion
      </p>
    </footer>
  );
}
