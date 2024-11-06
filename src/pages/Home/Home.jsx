import React, { useEffect, useState } from "react";
import Nav from "../../components/navigator/Nav";
import { useNavigate } from "react-router-dom";
import WhiteBtn from "../../components/buttons/WhiteBtn";
import { CategoryProducts } from "../../APIs";
import Slider from "./Slider";
import ShowCase from "./ShowCase";
import Footer from "../../components/Footer";
import Comments from "./Comments";
import { motion } from "framer-motion";
import Categories from "./Caregories";
import { IMGS } from "../../utilities/Imgs";

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const sunglasses = await CategoryProducts("sunglasses");
        const accessories = await CategoryProducts("sports-accessories");
        setProducts([...sunglasses, ...accessories]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="h-screen w-full relative">
        <div
          className="fixed -z-10 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMGS.home})`,
          }}
        />
        <div className="w-full md:h-24 h-16 absolute">
          <Nav dark={false} />
        </div>

        <div className="w-full h-full bg-primary/30 text-white  flex items-center">
          <div className="flex flex-col md:gap-20 gap-10 text-start md:p-20 p-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="  md:text-6xl text-3xl flex flex-col md:gap-5 gap-2 font-semibold text-shadow-md "
            >
              <p>Get up to 15% off</p>
              <p className="text-primary "> New Arrivals</p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="md:text-2xl text-base text-white/60 "
            >
              Introducing our latest collection of products
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <WhiteBtn
                title="Take a look"
                onClick={() => {
                  navigate("/all");
                }}
                className="py-1"
              />
            </motion.div>
          </div>
          <button className="flex justify-center items-center md:text-base text-xs absolute bottom-10 left-1/2 -translate-x-1/2 ">
            SCROLL DOWN
            <img src={IMGS.scroll} className="h-5 w-5" />
          </button>
        </div>
      </div>
      <Categories />
      <Slider />
      <ShowCase />
      <Comments />
      <Footer />
    </div>
  );
}
