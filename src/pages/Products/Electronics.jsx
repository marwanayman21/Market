import React, { useEffect, useState } from "react";
import { CategoryProducts } from "../../APIs";
import Nav from "../../components/navigator/Nav";
import Grid from "../../components/Grid";
import Filter from "../../components/Filter";

const categories = [
  { id: 1, slug: "smartphones", name: "smartphones" },
  { id: 2, slug: "laptops", name: "laptops" },
  { id: 3, slug: "tablets", name: "tablets" },
  { id: 4, slug: "mobile-accessories", name: "mobile accessories" },
];

export default function Electronics() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("smartphones");

  const FilterProducts = async (cat) => {
    try {
      setSelectedCategory(cat);
      const data = await CategoryProducts(cat);
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await CategoryProducts("smartphones");
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Nav dark={true} />
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        FilterProducts={FilterProducts}
      />
      <Grid products={products} />
    </div>
  );
}
