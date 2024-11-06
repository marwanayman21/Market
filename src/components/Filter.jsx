import React from "react";

export default function Filter({
  categories,
  selectedCategory,
  FilterProducts,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          className={` md:border-2 border-[1px] md:py-1 py-[2px] md:px-2 px-1 md:text-base text-xs flex justify-center capitalize items-center ${
            selectedCategory === category.slug
              ? "text-primary border-primary"
              : "hover:text-primary hover:border-primary border-black/30 text-black/30"
          }`}
          onClick={() => FilterProducts(category.slug)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
