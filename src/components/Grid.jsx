import React from "react";
import Card from "./cards/Card";

export default function Grid({ products }) {
  return (
    <div className="w-full sm:p-10 p-3 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-5 gap-2">
      {products.map((product, index) => (
        <Card key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
