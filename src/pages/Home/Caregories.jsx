import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeCard from "../../components/cards/HomeCard";
import { CategoryProducts } from "../../APIs";
import { motion } from "framer-motion";
import { IMGS } from "../../utilities/Imgs";

export default function Categories() {
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
  const CARDS = [
    {
      id: 1,
      title: "For Women",
      text: " Celebrate Your Unique Beauty with Products Designed to Empower,Inspire, and Elevate Every Woman's Style.",
      nav: "/women",
    },
    {
      id: 2,
      title: "For Men",
      text: "Discover the Power of Self-Expression with Products that Help Men Unleash TheirInner Strength and Confidence.",
      nav: "/men",
    },
    {
      id: 3,
      title: "Electronics",
      text: "Explore the latest in technology and innovation with our curated selection of electronics.",
      nav: "/electronics",
    },
  ];
  return (
    <section className="md:h-[80vh] h-[50vh] md:p-5 p-3 bg-white">
      <div className=" w-full h-full grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 md:gap-10 gap-3 md:text-4xl text-xl">
        <div className=" grid md:grid-rows-2 md:grid-cols-1 grid-cols-2 md:gap-10 gap-3">
          <HomeCard
            title={CARDS[0].title}
            text={CARDS[0].text}
            onClick={() => {
              navigate(CARDS[0].nav);
            }}
            bg={IMGS.women}
            x={-100}
          />

          <HomeCard
            title={CARDS[1].title}
            text={CARDS[1].text}
            onClick={() => {
              navigate(CARDS[1].nav);
            }}
            bg={IMGS.men}
            x={-100}
          />
        </div>

        <HomeCard
          title={CARDS[2].title}
          text={CARDS[2].text}
          onClick={() => {
            navigate(CARDS[2].nav);
          }}
          bg={IMGS.electronics}
          x={100}
        />
      </div>
    </section>
  );
}
