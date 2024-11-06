import React, { useEffect, useState } from "react";
import { CategoryProducts } from "../../APIs";
import Nav from "../../components/navigator/Nav";
import Grid from "../../components/Grid";
import Filter from "../../components/Filter";

const categories = [
  { id: 1, slug: "tops", name: "tops" },
  { id: 2, slug: "womens-dresses", name: "dresses" },
  { id: 3, slug: "womens-jewellery", name: "jewellery" },
  { id: 4, slug: "womens-shoes", name: "shoes" },
  { id: 5, slug: "womens-watches", name: "watches" },
  { id: 6, slug: "beauty", name: "make-up" },
];

export default function Women() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("tops");

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
        const data = await CategoryProducts("tops");
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
