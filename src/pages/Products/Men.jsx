import React, { useEffect, useState } from "react";
import { CategoryProducts } from "../../APIs";
import Grid from "../../components/Grid";
import Filter from "../../components/Filter";
import Nav from "../../components/navigator/Nav";

const categories = [
  { id: 1, slug: "mens-shirts", name: "Shirts" },
  { id: 2, slug: "mens-watches", name: "Watches" },
  { id: 3, slug: "mens-shoes", name: "Shoes" },
];

export default function Men() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("mens-shirts");

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
        const data = await CategoryProducts("mens-shirts");
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
