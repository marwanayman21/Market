import React, { useEffect, useState, useCallback } from "react";
import { AllProducts, CategoryList, CategoryProducts } from "../../APIs";
import Grid from "../../components/Grid";
import Loading from "../../components/Loading";
import Drawer from "../../components/Drawer";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/navigator/Nav";

function All() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [header, setHeader] = useState("All Products");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prevState) => !prevState);
  }, []);

  const fetchProducts = useCallback(async () => {
    try {
      const data = await AllProducts();
      setProducts(data);
      setLoading(false);
      setHeader("All Products");
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const data = await CategoryList();
      setCategories(data);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }, []);

  const FilterProducts = useCallback(async (cat) => {
    try {
      setSelectedCategory(cat);
      const data = await CategoryProducts(cat);
      setProducts(data);
      setHeader(cat);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="w-full">
      <Nav menuBtn={true} toggleDrawer={toggleDrawer} dark={true} />
      <h2 className=" md:text-4xl text-sm font-serif  md:-mb-5 md:mx-auto text-center  uppercase">
        {header}
      </h2>
      <div>
        <Drawer
          isOpen={isDrawerOpen}
          onClose={toggleDrawer}
          content={categories}
          FilterProducts={FilterProducts}
          fetchProducts={fetchProducts}
        />
      </div>
      <Grid products={products} />
    </div>
  );
}

export default All;
