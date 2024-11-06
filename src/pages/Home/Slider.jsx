import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import Button from "../../components/buttons/Button";
import { AllProducts } from "../../APIs";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await AllProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);
  return (
    <section className="bg-white w-full py-10 md:py-20">
      <h2 className=" md:text-4xl text-xl font-bold font-serif capitalize md:mx-5 mx-3">
        Discover our best products
      </h2>
      <Carousel products={products} />
      <Button
        onClick={() => {
          navigate("/all");
        }}
        title="View More"
        className="md:w-32 md:ml-5 w-24 ml-3"
        icon={<FaArrowRightLong />}
      />
    </section>
  );
}
