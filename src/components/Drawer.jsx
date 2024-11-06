import React from "react";

const Drawer = ({
  isOpen,
  onClose,
  content,
  FilterProducts,
  fetchProducts,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button
        className="absolute top-4 right-4 text-xl font-bold"
        onClick={onClose}
      >
        ✕
      </button>
      <div className="p-4">
        <h2 className="md:text-2xl text-lg font-semibold font-serif uppercase mt-5">
          Categories
        </h2>
        <div className="flex flex-col  items-start gap-1 md:mt-3 mt-1 md:text-sm text-xs ">
          <button
            className="text-black/50 hover:text-primary capitalize"
            onClick={() => {
              fetchProducts();
              onClose();
            }}
          >
            All
          </button>
          {content.map((item, index) => (
            <button
              className="text-black/50 hover:text-primary capitalize"
              key={index}
              onClick={() => {
                FilterProducts(item);
                onClose();
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
