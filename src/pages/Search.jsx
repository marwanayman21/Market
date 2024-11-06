import React, { useEffect, useState } from "react";
import Nav from "../components/navigator/Nav";
import { searchProducts } from "../APIs";
import Grid from "../components/Grid";

export default function Search() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const searchProductByName = async (query) => {
    const data = await searchProducts(query);
    setProducts(data);
  };

  return (
    <div className=" relative">
      <Nav dark={true} />
      <div className="  md:h-24 h-16 flex items-center absolute left-1/2 -translate-x-1/2 md:top-0 top-12 ">
        <input
          onChange={(e) => {
            searchProductByName(inputValue);
            setInputValue(e.target.value);
          }}
          type="text"
          name="query"
          placeholder="Search"
          value={inputValue}
          className="md:w-[50vw] w-[calc(100vw-40px)] md:py-3 md:px-4 p-2 bg-primary/10 placeholder:text-primary/50 focus:outline-none rounded md:text-sm text-[10px] font-semibold"
        />
      </div>
      <div className="mt-12 md:mt-0">
        <Grid products={products} />
      </div>
    </div>
  );
}
