import React from "react";
import { HiUser } from "react-icons/hi2";
import { FaCheck, FaCreditCard, FaTruck } from "react-icons/fa";

export default function Stepper({ num }) {
  return (
    <div>
      <div className="md:mx-10 mx-2">
        <h1 className="md:text-6xl text-2xl font-serif uppercase">
          Checkout Form
        </h1>
        <div className=" md:mt-10 mt-8 flex gap-3">
          <Step
            num={num}
            stepNum={1}
            title="Personal info"
            icon={<HiUser />}
            checked={num !== 1 && true}
          />
          <div className=" md:h-1 h-[1px] md:w-28 w-14 bg-black/20 md:-ml-40 -ml-20 mt-3" />
          <Step
            num={num}
            stepNum={2}
            title="Shipping Delivery"
            icon={<FaTruck />}
            checked={num === 3 && true}
          />
          <div className=" md:h-1 h-[1px] md:w-28 w-14 bg-black/20 md:-ml-40 -ml-20 mt-3" />
          <Step
            num={num}
            stepNum={3}
            title="confirmation"
            icon={<FaCreditCard />}
          />
        </div>
      </div>
    </div>
  );
}

const Step = ({ stepNum, title, icon, num, checked }) => {
  return (
    <div
      className={`flex flex-col gap-1  md:w-48 w-32 
    `}
    >
      <div
        className={` md:w-8 md:h-8 h-6 w-6 md:text-base text-xs border-[1px] rounded-full flex justify-center items-center 
        ${num === stepNum ? "bg-primary/10 text-primary" : "border-[1px]"}
        ${checked && "bg-green-500/30 border-0 text-green-800"}
        `}
      >
        {checked ? <FaCheck /> : icon}
      </div>
      <p className=" capitalize md:text-xs text-[7px] text-black/40">
        step {stepNum}
      </p>
      <p
        className={`" uppercase md:text-base text-[8px] "  ${
          num === stepNum && "text-primary"
        }`}
      >
        {title}
      </p>
    </div>
  );
};
