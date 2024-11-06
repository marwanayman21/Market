import React from "react";
import { AiFillLike } from "react-icons/ai";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { motion } from "framer-motion";

export default function ShowCase() {
  return (
    <section className="bg-white w-full pb-10">
      <div className="w-full grid md:grid-cols-9 grid-cols-4 md:gap-5 gap-2 md:px-5 px-3 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-black/10 col-span-2 flex md:p-5 p-2 order-1"
        >
          <div className="flex flex-col items-center justify-center md:gap-3 gap-1 w-full h-full  bg-white md:p-5 p-2">
            <div className="p-3 bg-primary rounded-full">
              <AiFillLike className="md:text-3xl text-xl text-white" />
            </div>
            <h2 className="md:text-2xl font-bold font-serif text-center">
              100% Satisfaction Guaranteed
            </h2>
            <p className="text-black/50 md:text-sm text-[8px]">
              Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
              scelerisque morbi vulputate. Quisque bibendum eget id diam
              elementum fringilla duis.
            </p>
          </div>
        </motion.div>
        <div className=" md:col-span-5 col-span-4 grid grid-rows-2 md:gap-5 gap-2 md:order-2 order-3">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-black/10 md:p-5 p-2"
          >
            <div className="flex items-center justify-center h-full md:gap-5 gap-2 bg-white md:p-5 p-2">
              <div className="p-3 bg-primary rounded-full">
                <FaPhone className="md:text-3xl text-xl text-white" />
              </div>
              <div className="flex flex-col  md:gap-3 gap-1">
                <h2 className="md:text-2xl font-bold font-serif text-start">
                  24/7 Online Service
                </h2>
                <p className="text-black/50 md:text-sm text-[8px]">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
                  scelerisque morbi vulputate. Quisque bibendum eget id diam
                  elementum fringilla duis.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-black/10 md:p-5 p-2"
          >
            <div className="flex items-center justify-center h-full md:gap-5 gap-2 bg-white md:p-5 p-2">
              <div className="p-3 bg-primary rounded-full">
                <IoIosRocket className="md:text-3xl text-xl text-white" />
              </div>
              <div className="flex flex-col  md:gap-3 gap-1">
                <h2 className="md:text-2xl font-bold font-serif text-start">
                  Fast Delivery
                </h2>
                <p className="text-black/50 md:text-sm text-[8px]">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
                  scelerisque morbi vulputate. Quisque bibendum eget id diam
                  elementum fringilla duis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-black/10 col-span-2 flex md:p-5 p-2 md:order-3 order-2"
        >
          <div className="flex flex-col items-center justify-center md:gap-3 gap-1 w-full h-full  bg-white md:p-5 p-2">
            <div className="p-3 bg-primary rounded-full">
              <BsFillCreditCard2FrontFill className="md:text-3xl text-xl text-white" />
            </div>
            <h2 className="md:text-2xl font-bold font-serif text-center">
              Payment With Secure System
            </h2>
            <p className="text-black/50 md:text-sm text-[8px]">
              Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
              scelerisque morbi vulputate. Quisque bibendum eget id diam
              elementum fringilla duis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
